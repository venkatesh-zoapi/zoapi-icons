import { promises as fs } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const iconsDir = join(root, "src", "icons");
const outIconsDir = join(root, "generated", "icons");
const runtimeDir = join(root, "generated", "runtime");

const toPascalCase = (name) => {
  const base = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return /^\d/.test(base) ? `Icon${base}` : base;
};

const toIconName = (value) =>
  value
    .replace(/\.svg$/i, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\\/]+/g, "-")
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

const readJsonIfExists = async (path, fallback) => {
  try {
    const content = await fs.readFile(path, "utf8");
    return JSON.parse(content);
  } catch {
    return fallback;
  }
};

const walkSvgFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkSvgFiles(full)));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".svg")) {
      files.push(full);
    }
  }

  return files;
};

const extractSvgBody = (svg) => {
  const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return match ? match[1].trim() : "";
};

const extractSvgViewBox = (svg) => {
  const svgTag = svg.match(/<svg\b([^>]*)>/i);
  if (!svgTag) return "0 0 24 24";

  const attrs = svgTag[1];
  const viewBox = attrs.match(/\bviewBox\s*=\s*["']([^"']+)["']/i)?.[1];
  if (viewBox) return viewBox;

  const widthRaw = attrs.match(/\bwidth\s*=\s*["']([^"']+)["']/i)?.[1];
  const heightRaw = attrs.match(/\bheight\s*=\s*["']([^"']+)["']/i)?.[1];
  const width = widthRaw ? Number.parseFloat(widthRaw) : NaN;
  const height = heightRaw ? Number.parseFloat(heightRaw) : NaN;

  if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
    return `0 0 ${width} ${height}`;
  }

  return "0 0 24 24";
};

const [meta, categories] = await Promise.all([
  readJsonIfExists(join(iconsDir, "meta.json"), {}),
  readJsonIfExists(join(iconsDir, "categories.json"), {})
]);

const categoryByIcon = Object.entries(categories).reduce((acc, [category, names]) => {
  if (!Array.isArray(names)) return acc;
  for (const name of names) {
    acc[toIconName(name)] = category;
  }
  return acc;
}, {});

const svgFiles = (await walkSvgFiles(iconsDir)).sort();

await fs.rm(outIconsDir, { recursive: true, force: true });
await fs.rm(runtimeDir, { recursive: true, force: true });
await fs.mkdir(outIconsDir, { recursive: true });
await fs.mkdir(runtimeDir, { recursive: true });

const componentExports = [];
const loaderEntries = [];
const dataEntries = [];
const mapEntries = [];
const viewBoxEntries = [];
const invalidEntries = [];
const usedNames = new Set();

for (const filePath of svgFiles) {
  const relPath = relative(iconsDir, filePath);
  const relNoExt = relPath.replace(/\.svg$/i, "");
  const name = toIconName(relNoExt);

  if (!name || usedNames.has(name)) {
    invalidEntries.push({ file: relPath, reason: "Duplicate or invalid icon name." });
    continue;
  }

  const svg = await fs.readFile(filePath, "utf8");
  const body = extractSvgBody(svg);
  const viewBox = extractSvgViewBox(svg);

  if (!/<svg[\s>]/i.test(svg) || !body) {
    invalidEntries.push({ file: relPath, reason: "Invalid SVG structure." });
    continue;
  }

  usedNames.add(name);

  const componentName = toPascalCase(name);
  const folderCategory = relPath.includes("\\") || relPath.includes("/")
    ? toPascalCase(toIconName(relPath.split(/[/\\]/)[0]))
    : undefined;
  const iconMeta = meta[name] ?? {};
  const category = iconMeta.category ?? categoryByIcon[name] ?? folderCategory ?? "Uncategorized";
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
    viewBox="${viewBox}"
    width={size}
    height={size}
    color={color}
    strokeWidth={strokeWidth}
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
  dataEntries.push(`  { name: "${name}", componentName: "${componentName}", category: ${JSON.stringify(category)}, tags: ${JSON.stringify(tags)} }`);
  mapEntries.push(`  "${name}": ${JSON.stringify(body)}`);
  viewBoxEntries.push(`  "${name}": ${JSON.stringify(viewBox)}`);
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
  join(runtimeDir, "map.ts"),
  `export const iconSvgMap: Record<string, string> = {\n${mapEntries.join(",\n")}\n};\n`,
  "utf8"
);

await fs.writeFile(
  join(runtimeDir, "viewboxes.ts"),
  `export const iconViewBoxMap: Record<string, string> = {\n${viewBoxEntries.join(",\n")}\n};\n`,
  "utf8"
);

await fs.writeFile(
  join(runtimeDir, "data.ts"),
  `export type IconRecord = { name: string; componentName: string; category: string; tags: string[] };\n\nexport const iconRecords: IconRecord[] = [\n${dataEntries.join(",\n")}\n];\n`,
  "utf8"
);

await fs.writeFile(
  join(runtimeDir, "index.ts"),
  `export * from "./types";\nexport * from "./data";\nexport * from "./loaders";\nexport * from "./map";\nexport * from "./viewboxes";\n`,
  "utf8"
);

await fs.writeFile(join(root, "generated", "index.ts"), `export * from "./icons";\nexport * from "./runtime";\n`, "utf8");

if (invalidEntries.length) {
  const lines = invalidEntries.map((item) => `- ${item.file}: ${item.reason}`).join("\n");
  console.warn(`Skipped ${invalidEntries.length} invalid SVG file(s):\n${lines}`);
}

console.log(`Generated ${componentExports.length} icon components from src/icons.`);