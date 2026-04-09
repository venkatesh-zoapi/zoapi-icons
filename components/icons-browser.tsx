"use client";

import { useCallback, useDeferredValue, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { iconRecords } from "@/generated/runtime";
import { cn } from "@/lib/cn";
import { useDebouncedValue } from "@/lib/use-debounce";

type CategoryFilter = "All" | string;

const makeSvg = (body: string, size: number, strokeWidth: number, color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export function IconsBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#22c55e");
  const [toast, setToast] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get("icon") ?? "";

  const categories = useMemo(() => {
    const set = new Set<string>();
    iconRecords.forEach((icon) => set.add(icon.category));
    return ["All", ...Array.from(set)] as CategoryFilter[];
  }, []);

  const debounced = useDebouncedValue(query, 120);
  const deferred = useDeferredValue(debounced);

  const filteredIcons = useMemo(() => {
    const normalized = deferred.toLowerCase().trim();
    return iconRecords.filter((icon) => {
      const byCategory = category === "All" || icon.category === category;
      if (!byCategory) return false;
      if (!normalized) return true;

      return (
        icon.name.includes(normalized) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(normalized)) ||
        icon.componentName.toLowerCase().includes(normalized)
      );
    });
  }, [deferred, category]);

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
    router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
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
    const svg = makeSvg(selectedIcon.body, size, strokeWidth, color);

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
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, tags, or component name..."
            className="h-11 w-full rounded-xl border border-border bg-panel px-4 text-sm outline-none transition focus:border-accent/80"
            aria-label="Search icons"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-medium transition",
                  item === category
                    ? "border-accent/80 bg-accent/10 text-accent"
                    : "border-border bg-panel text-muted hover:text-text"
                )}
              >
                {item}
              </button>
            ))}
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
              <Icon name={icon.name} size={24} />
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
              <Icon name={selectedIcon.name} size={size * 2} strokeWidth={strokeWidth} color={color} />
            </div>

            <p className="mb-3 text-xs text-muted">Tags: {selectedIcon.tags.join(", ")}</p>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="text-xs text-muted">
                Size: {size}px
                <input type="range" min={16} max={64} value={size} onChange={(e) => setSize(Number(e.target.value))} className="mt-2 w-full" />
              </label>

              <label className="text-xs text-muted">
                Stroke: {strokeWidth.toFixed(1)}
                <input type="range" min={1} max={3} step={0.25} value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} className="mt-2 w-full" />
              </label>

              <label className="text-xs text-muted">
                Color
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="mt-2 h-9 w-full rounded border border-border bg-transparent" />
              </label>
            </div>

            <div className="mt-6 grid gap-2 md:grid-cols-2">
              <button
                type="button"
                onClick={() => copy(makeSvg(selectedIcon.body, size, strokeWidth, color), "SVG")}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm hover:border-accent/60"
              >
                Copy SVG
              </button>
              <button
                type="button"
                onClick={() => copy(`import { ${selectedIcon.componentName} } from "zoapi-icons";\n\n<${selectedIcon.componentName} size={${size}} strokeWidth={${strokeWidth}} color=\"${color}\" />`, "React component")}
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
              <button type="button" onClick={downloadSvg} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm hover:border-accent/60">
                Download SVG
              </button>
            </div>

            <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-surface p-3 text-xs text-muted">
{`import { ${selectedIcon.componentName} } from "zoapi-icons";\n\n<${selectedIcon.componentName} size={${size}} strokeWidth={${strokeWidth}} color="${color}" />`}
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