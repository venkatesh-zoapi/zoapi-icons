// generated/icons/map.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Map = ({
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
      /* @__PURE__ */ jsx("path", { d: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" }),
      /* @__PURE__ */ jsx("path", { d: "M9 4v14M15 6v14" })
    ]
  }
);
var MemoMap = memo(Map);

export {
  MemoMap
};
