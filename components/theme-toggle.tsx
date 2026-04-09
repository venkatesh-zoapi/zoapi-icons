"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (systemDark ? "dark" : "light");

    root.classList.toggle("dark", initial === "dark");
    setTheme(initial);
    setReady(true);
  }, []);

  const onToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-lg border border-border bg-panel px-3 py-2 text-xs font-medium text-text transition hover:border-accent/60"
      aria-label="Toggle color theme"
      disabled={!ready}
    >
      {ready ? (theme === "dark" ? "Dark" : "Light") : "Theme"}
    </button>
  );
}
