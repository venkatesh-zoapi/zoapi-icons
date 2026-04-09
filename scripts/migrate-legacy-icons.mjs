import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const sourcePath = join(root, "data", "icons.ts");
const source = readFileSync(sourcePath, "utf8");

const regex = /\{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*keywords:\s*\[([^\]]*)\],\s*body:\s*'([^']+)'\s*\}/g;
const meta = {};

mkdirSync(join(root, "icons"), { recursive: true });

let match;
while ((match = regex.exec(source)) !== null) {
  const [, name, category, keywordsRaw, body] = match;
  const keywords = keywordsRaw
    .split(",")
    .map((s) => s.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);

  const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">${body}</svg>\n`;
  writeFileSync(join(root, "icons", `${name}.svg`), svg, "utf8");

  meta[name] = { category, tags: keywords };
}

writeFileSync(join(root, "icons", "meta.json"), `${JSON.stringify(meta, null, 2)}\n`, "utf8");
console.log(`Generated ${Object.keys(meta).length} SVG files.`);