// generated/icons/route.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Route = ({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...rest,
    children: [
      /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "2" }),
      /* @__PURE__ */ jsx("circle", { cx: "18", cy: "18", r: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M8 6h5a3 3 0 0 1 3 3v5" })
    ]
  }
);
var MemoRoute = memo(Route);

export {
  MemoRoute
};
