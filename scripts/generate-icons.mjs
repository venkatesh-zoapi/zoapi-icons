import { promises as fs } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const iconsDir = join(root, "icons");
const outIconsDir = join(root, "generated", "icons");
const runtimeDir = join(root, "generated", "runtime");

const toPascalCase = (name) => {
  const base = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return /^\d/.test(base) ? `Icon${base}` : base;
};

const meta = JSON.parse(await fs.readFile(join(iconsDir, "meta.json"), "utf8"));
const entries = await fs.readdir(iconsDir);
const svgFiles = entries.filter((file) => file.endsWith(".svg")).sort();

await fs.mkdir(outIconsDir, { recursive: true });
await fs.mkdir(runtimeDir, { recursive: true });

const componentExports = [];
const loaderEntries = [];
const dataEntries = [];

for (const file of svgFiles) {
  const filePath = join(iconsDir, file);
  const svg = await fs.readFile(filePath, "utf8");
  const name = basename(file, ".svg");
  const componentName = toPascalCase(name);

  const body = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
  const iconMeta = meta[name] ?? { category: "Uncategorized", tags: [] };
  const tags = Array.from(new Set([...(iconMeta.tags ?? []), ...name.split("-")]));

  const componentCode = `import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const ${componentName}: IconComponent = ({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...rest}
  >
    ${body}
  </svg>
);

const Memo${componentName} = memo(${componentName});

export { Memo${componentName} as ${componentName} };
`;

  await fs.writeFile(join(outIconsDir, `${name}.tsx`), componentCode, "utf8");
  componentExports.push(`export { ${componentName} } from "./${name}";`);
  loaderEntries.push(`  "${name}": () => import("../icons/${name}").then((m) => m.${componentName}),`);
  dataEntries.push(`  { name: "${name}", componentName: "${componentName}", category: "${iconMeta.category}", tags: ${JSON.stringify(tags)}, body: ${JSON.stringify(body)} }`);
}

await fs.writeFile(join(outIconsDir, "index.ts"), `${componentExports.join("\n")}\n`, "utf8");
await fs.writeFile(
  join(runtimeDir, "types.ts"),
  `import type { ComponentType, SVGProps } from "react";\n\nexport type IconProps = {\n  size?: number;\n  strokeWidth?: number;\n  color?: string;\n  className?: string;\n} & Omit<SVGProps<SVGSVGElement>, "color">;\n\nexport type IconComponent = ComponentType<IconProps>;\n`,
  "utf8"
);
await fs.writeFile(
  join(runtimeDir, "loaders.ts"),
  `import type { IconComponent } from "./types";\n\nexport const iconLoaders: Record<string, () => Promise<IconComponent>> = {\n${loaderEntries.join("\n")}\n};\n`,
  "utf8"
);
await fs.writeFile(
  join(runtimeDir, "data.ts"),
  `export type IconRecord = { name: string; componentName: string; category: string; tags: string[]; body: string };\n\nexport const iconRecords: IconRecord[] = [\n${dataEntries.join(",\n")}\n];\n`,
  "utf8"
);
await fs.writeFile(join(runtimeDir, "index.ts"), `export * from "./types";\nexport * from "./data";\nexport * from "./loaders";\n`, "utf8");
await fs.writeFile(join(root, "generated", "index.ts"), `export * from "./icons";\nexport * from "./runtime";\n`, "utf8");

console.log(`Generated ${svgFiles.length} icon components.`);
