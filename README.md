# Zoapi Icons

Production-ready icon system inspired by Lucide, built with Next.js + TypeScript + Tailwind.

## Features

- Dynamic icon loading by name (`<Icon name="camera" />`)
- Generated typed React components (`import { Camera } from "@/icons"`)
- SVG source-driven build pipeline (`/icons/*.svg`)
- Tag/category metadata for fast search
- Copy SVG / Copy React component / Download SVG
- Package-ready exports with `build:package`

## Project structure

- `icons/`: raw SVGs + `meta.json`
- `scripts/generate-icons.mjs`: builds icon components, loaders, and metadata
- `generated/icons`: auto-generated React icon components
- `generated/runtime`: auto-generated icon data + dynamic loader map
- `components/icon.tsx`: dynamic `<Icon />` runtime component

## Commands

```bash
npm run generate:icons
npm run dev
npm run build
npm run build:package
```

## Usage

```tsx
import { Icon } from "zoapi-icons";
import { Camera } from "zoapi-icons";

<Icon name="camera" size={24} strokeWidth={2} color="#22c55e" />
<Camera size={24} />
```