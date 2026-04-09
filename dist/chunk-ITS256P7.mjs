// generated/icons/laptop.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Laptop = ({
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
      /* @__PURE__ */ jsx("rect", { x: "4", y: "5", width: "16", height: "11", rx: "1" }),
      /* @__PURE__ */ jsx("path", { d: "M2 19h20" })
    ]
  }
);
var MemoLaptop = memo(Laptop);

export {
  MemoLaptop
};
