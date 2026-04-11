"use client";

import { useCallback, useDeferredValue, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { iconRecords, iconSvgMap, iconViewBoxMap } from "@/generated/runtime";
import { cn } from "@/lib/cn";
import { useDebouncedValue } from "@/lib/use-debounce";

const BRAND_COLORS = [
  { label: "Slate", value: "#F9F9F9" },
  { label: "Coal", value: "#131419" },
  { label: "Ash", value: "#999999" }
] as const;

const GRADIENT_ANGLES = [0, 45, 90, 135, 180] as const;

const DRAWABLE_TAGS = new Set([
  "path",
  "circle",
  "ellipse",
  "rect",
  "line",
  "polyline",
  "polygon",
  "g"
]);

const KEEP_TAGS = new Set([
  "defs",
  "clippath",
  "lineargradient",
  "radialgradient",
  "stop",
  "mask",
  "pattern",
  "filter"
]);

function stripPaintFromStyle(styleValue: string) {
  return styleValue
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => !part.startsWith("fill:") && !part.startsWith("stroke:"))
    .join("; ");
}

function normalizeNode(node: Element, strokeWidth: number, stroke: string) {
  const tag = node.tagName.toLowerCase();

  if (!KEEP_TAGS.has(tag) && DRAWABLE_TAGS.has(tag)) {
    node.setAttribute("fill", "none");
    node.setAttribute("stroke", stroke);
    node.setAttribute("stroke-width", String(strokeWidth));
  }

  const style = node.getAttribute("style");
  if (style) {
    const next = stripPaintFromStyle(style);
    if (next) {
      node.setAttribute("style", next);
    } else {
      node.removeAttribute("style");
    }
  }

  Array.from(node.children).forEach((child) => normalizeNode(child, strokeWidth, stroke));
}

function gradientDef(id: string, angle: number) {
  return `<defs><linearGradient id="${id}" gradientTransform="rotate(${angle})"><stop offset="0%" stop-color="#F1703C" /><stop offset="29%" stop-color="#F06D3F" /><stop offset="53%" stop-color="#EF6449" /><stop offset="75%" stop-color="#EC545A" /><stop offset="95%" stop-color="#E93F72" /><stop offset="100%" stop-color="#E93A79" /></linearGradient></defs>`;
}

function buildSvgMarkup(
  iconName: string,
  size: number,
  strokeWidth: number,
  color: string,
  gradient: boolean,
  gradientAngle: number
) {
  const rawBody = iconSvgMap[iconName] ?? "";
  const viewBox = iconViewBoxMap[iconName] ?? "0 0 24 24";
  const parser = new DOMParser();
  const doc = parser.parseFromString(
    `<svg xmlns="http://www.w3.org/2000/svg">${rawBody}</svg>`,
    "image/svg+xml"
  );

  if (doc.querySelector("parsererror")) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="m9 9 6 6M15 9l-6 6" /></svg>`;
  }

  const svg = doc.documentElement;
  const gradId = `grad-export-${iconName}-${Math.random().toString(36).slice(2, 9)}`;
  const stroke = gradient ? `url(#${gradId})` : "currentColor";

  normalizeNode(svg, strokeWidth, stroke);

  if (gradient) {
    const defsDoc = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg">${gradientDef(gradId, gradientAngle)}</svg>`,
      "image/svg+xml"
    );
    const defs = defsDoc.querySelector("defs");
    if (defs) {
      svg.insertBefore(defs, svg.firstChild);
    }
  }

  const serializer = new XMLSerializer();
  const body = Array.from(svg.childNodes)
    .map((node) => serializer.serializeToString(node))
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" color="${color}">${body}</svg>`;
}

export function IconsBrowser() {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [selectedColor, setSelectedColor] = useState<string>(BRAND_COLORS[0].value);
  const [isGradient, setIsGradient] = useState(false);
  const [gradientAngle, setGradientAngle] = useState<(typeof GRADIENT_ANGLES)[number]>(45);
  const [toast, setToast] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get("icon") ?? "";

  const debounced = useDebouncedValue(query, 120);
  const deferred = useDeferredValue(debounced);

  const filteredIcons = useMemo(() => {
    const normalized = deferred.toLowerCase().trim();

    return iconRecords.filter((icon) => {
      if (!normalized) return true;
      return (
        icon.name.includes(normalized) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(normalized)) ||
        icon.componentName.toLowerCase().includes(normalized)
      );
    });
  }, [deferred]);

  const selectedIcon = iconRecords.find((icon) => icon.name === selected) ?? null;
  const selectedIndex = selectedIcon
    ? filteredIcons.findIndex((icon) => icon.name === selectedIcon.name)
    : -1;

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(""), 1400);
    return () => window.clearTimeout(id);
  }, [toast]);

  const closeModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("icon");
    router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false
    });
  }, [pathname, router, searchParams]);

  const openModal = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("icon", name);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selected) {
        closeModal();
      }

      if (!selectedIcon || !filteredIcons.length) return;

      if (event.key === "ArrowRight") {
        const next = filteredIcons[(selectedIndex + 1) % filteredIcons.length];
        if (next) openModal(next.name);
      }

      if (event.key === "ArrowLeft") {
        const previous =
          filteredIcons[(selectedIndex - 1 + filteredIcons.length) % filteredIcons.length];
        if (previous) openModal(previous.name);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, selectedIcon, filteredIcons, selectedIndex, closeModal, openModal]);

  const copy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setToast(`${label} copied`);
  };

  const downloadSvg = () => {
    if (!selectedIcon) return;
    const svg = buildSvgMarkup(
      selectedIcon.name,
      size,
      strokeWidth,
      selectedColor,
      isGradient,
      gradientAngle
    );

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedIcon.name}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    setToast("SVG downloaded");
  };

  return (
    <main className="mx-auto max-w-[1280px] px-4 pb-12 pt-6 md:px-8">
      <header className="sticky top-0 z-30 -mx-4 border-b border-border/80 bg-surface/85 px-4 py-4 backdrop-blur md:-mx-8 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted">Zoapi Icons</p>
            <h1 className="text-2xl font-semibold tracking-tight">Scalable icon system</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons by name or tags..."
            className="h-11 w-full rounded-xl border border-border bg-panel px-4 text-sm outline-none transition focus:border-accent/80"
            aria-label="Search icons"
          />

          <div className="flex flex-wrap items-center gap-2">
            {BRAND_COLORS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setSelectedColor(item.value)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-medium transition",
                  selectedColor === item.value
                    ? "border-accent/80 bg-accent/10 text-accent"
                    : "border-border bg-panel text-muted hover:text-text"
                )}
              >
                {item.label}
              </button>
            ))}

            <label className="ml-2 inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-3 py-2 text-xs text-muted">
              <input
                type="checkbox"
                checked={isGradient}
                onChange={(e) => setIsGradient(e.target.checked)}
                className="h-3.5 w-3.5"
              />
              Gradient Mode
            </label>

            {isGradient && (
              <select
                value={gradientAngle}
                onChange={(e) => setGradientAngle(Number(e.target.value) as (typeof GRADIENT_ANGLES)[number])}
                className="rounded-lg border border-border bg-panel px-3 py-2 text-xs text-muted outline-none focus:border-accent/70"
              >
                {GRADIENT_ANGLES.map((angle) => (
                  <option key={angle} value={angle}>
                    {angle}°
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {filteredIcons.map((icon) => (
          <button
            key={icon.name}
            type="button"
            onClick={() => openModal(icon.name)}
            className="group animate-fade-in rounded-xl border border-border bg-panel p-4 text-left transition hover:scale-[1.02] hover:border-accent/60"
          >
            <div className="mb-3 flex h-8 items-center justify-center text-text">
              <Icon
                name={icon.name}
                size={24}
                color={selectedColor}
                gradient={isGradient}
                gradientAngle={gradientAngle}
              />
            </div>
            <p className="truncate text-xs text-muted group-hover:text-text">{icon.name}</p>
          </button>
        ))}
      </section>

      {filteredIcons.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
          No icons found.
        </div>
      )}

      {selectedIcon && (
        <div className="fixed inset-0 z-40 bg-black/55 p-0 md:p-6" onClick={closeModal}>
          <div
            className="animate-fade-in fixed bottom-0 left-0 right-0 max-h-[95vh] overflow-auto rounded-t-2xl border border-border bg-panel p-5 shadow-soft md:relative md:mx-auto md:max-w-2xl md:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{selectedIcon.name}</h2>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg border border-border px-3 py-2 text-xs text-muted hover:text-text"
              >
                Esc
              </button>
            </div>

            <div className="mb-6 flex min-h-40 items-center justify-center rounded-xl border border-border bg-surface">
              <Icon
                name={selectedIcon.name}
                size={size * 2}
                strokeWidth={strokeWidth}
                color={selectedColor}
                gradient={isGradient}
                gradientAngle={gradientAngle}
              />
            </div>

            <p className="mb-3 text-xs text-muted">Tags: {selectedIcon.tags.join(", ")}</p>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs text-muted">
                Size: {size}px
                <input
                  type="range"
                  min={16}
                  max={64}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="mt-2 w-full"
                />
              </label>

              <label className="text-xs text-muted">
                Stroke: {strokeWidth.toFixed(1)}
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.25}
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                  className="mt-2 w-full"
                />
              </label>
            </div>

            <div className="mt-6 grid gap-2 md:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  copy(
                    buildSvgMarkup(
                      selectedIcon.name,
                      size,
                      strokeWidth,
                      selectedColor,
                      isGradient,
                      gradientAngle
                    ),
                    "SVG"
                  )
                }
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm hover:border-accent/60"
              >
                Copy SVG
              </button>
              <button
                type="button"
                onClick={() =>
                  copy(
                    `import { ${selectedIcon.componentName} } from "zoapi-icons";\n\n<${selectedIcon.componentName} size={${size}} strokeWidth={${strokeWidth}} color=\"${selectedColor}\"${isGradient ? ` gradient gradientAngle={${gradientAngle}}` : ""} />`,
                    "React component"
                  )
                }
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm hover:border-accent/60"
              >
                Copy React Component
              </button>
              <button
                type="button"
                onClick={() => copy(selectedIcon.name, "Name")}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm hover:border-accent/60"
              >
                Copy Name
              </button>
              <button
                type="button"
                onClick={downloadSvg}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm hover:border-accent/60"
              >
                Download SVG
              </button>
            </div>

            <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-surface p-3 text-xs text-muted">
{`import { ${selectedIcon.componentName} } from "zoapi-icons";\n\n<${selectedIcon.componentName} size={${size}} strokeWidth={${strokeWidth}} color="${selectedColor}"${isGradient ? ` gradient gradientAngle={${gradientAngle}}` : ""} />`}
            </pre>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg border border-accent/50 bg-panel px-3 py-2 text-xs text-text shadow-soft">
          {toast}
        </div>
      )}
    </main>
  );
}