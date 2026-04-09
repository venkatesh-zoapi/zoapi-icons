// generated/icons/pause.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Pause = ({
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
      /* @__PURE__ */ jsx("rect", { x: "7", y: "6", width: "3", height: "12", rx: "1" }),
      /* @__PURE__ */ jsx("rect", { x: "14", y: "6", width: "3", height: "12", rx: "1" })
    ]
  }
);
var MemoPause = memo(Pause);

export {
  MemoPause
};
