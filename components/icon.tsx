"use client";

import { memo, useMemo } from "react";

import { iconSvgMap, iconViewBoxMap } from "@/generated/runtime";

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  gradient?: boolean;
  gradientAngle?: 0 | 45 | 90 | 135 | 180;
};

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

const normalCache = new Map<string, string>();
const gradientTemplateCache = new Map<string, string>();
const GRAD_PLACEHOLDER = "__ICON_GRAD_ID__";

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

function createGradientDef(angle: number, id: string) {
  return `<defs><linearGradient id="${id}" gradientTransform="rotate(${angle})"><stop offset="0%" stop-color="#F1703C" /><stop offset="29%" stop-color="#F06D3F" /><stop offset="53%" stop-color="#EF6449" /><stop offset="75%" stop-color="#EC545A" /><stop offset="95%" stop-color="#E93F72" /><stop offset="100%" stop-color="#E93A79" /></linearGradient></defs>`;
}

function transformBody(rawBody: string, strokeWidth: number, gradient: boolean, angle: number) {
  const parser = new DOMParser();
  const wrapped = `<svg xmlns="http://www.w3.org/2000/svg">${rawBody}</svg>`;
  const doc = parser.parseFromString(wrapped, "image/svg+xml");

  if (doc.querySelector("parsererror")) {
    return { ok: false, body: rawBody };
  }

  const svg = doc.documentElement;
  const stroke = gradient ? `url(#${GRAD_PLACEHOLDER})` : "currentColor";
  normalizeNode(svg, strokeWidth, stroke);

  if (gradient) {
    const defsFragment = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg">${createGradientDef(angle, GRAD_PLACEHOLDER)}</svg>`,
      "image/svg+xml"
    );
    const defs = defsFragment.querySelector("defs");
    if (defs) {
      svg.insertBefore(defs, svg.firstChild);
    }
  }

  const serializer = new XMLSerializer();
  const body = Array.from(svg.childNodes)
    .map((node) => serializer.serializeToString(node))
    .join("");

  return { ok: true, body };
}

function MissingIcon({ size = 24, className, color = "currentColor" }: { size?: number; className?: string; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </svg>
  );
}

function IconBase({
  name,
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
  gradient = false,
  gradientAngle = 45
}: IconProps) {
  const rawBody = iconSvgMap[name];
  const viewBox = iconViewBoxMap[name] ?? "0 0 24 24";
  const gradId = useMemo(
    () => `grad-${name}-${Math.random().toString(36).slice(2, 9)}`,
    [name]
  );

  const processedBody = useMemo(() => {
    if (!rawBody) return null;

    const cacheKey = gradient
      ? `${name}:${strokeWidth}:${gradientAngle}`
      : `${name}:${strokeWidth}`;

    if (gradient) {
      const cachedTemplate = gradientTemplateCache.get(cacheKey);
      if (cachedTemplate) {
        return cachedTemplate.replaceAll(GRAD_PLACEHOLDER, gradId);
      }

      const transformed = transformBody(rawBody, strokeWidth, true, gradientAngle);
      if (!transformed.ok) return null;
      gradientTemplateCache.set(cacheKey, transformed.body);
      return transformed.body.replaceAll(GRAD_PLACEHOLDER, gradId);
    }

    const cached = normalCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const transformed = transformBody(rawBody, strokeWidth, false, gradientAngle);
    if (!transformed.ok) return null;

    normalCache.set(cacheKey, transformed.body);
    return transformed.body;
  }, [rawBody, gradient, gradientAngle, name, strokeWidth, gradId]);

  if (!processedBody) {
    return <MissingIcon size={size} className={className} color={color} />;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      color={color}
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: processedBody }}
    />
  );
}

export const Icon = memo(IconBase);
