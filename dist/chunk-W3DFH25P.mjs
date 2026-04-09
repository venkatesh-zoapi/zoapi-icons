// generated/icons/cpu.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Cpu = ({
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
      /* @__PURE__ */ jsx("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" })
    ]
  }
);
var MemoCpu = memo(Cpu);

export {
  MemoCpu
};
