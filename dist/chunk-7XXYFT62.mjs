// generated/icons/pin.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Pin = ({
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
      /* @__PURE__ */ jsx("path", { d: "M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "2.5" })
    ]
  }
);
var MemoPin = memo(Pin);

export {
  MemoPin
};
