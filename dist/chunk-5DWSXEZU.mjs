// generated/icons/play.tsx
import { memo } from "react";
import { jsx } from "react/jsx-runtime";
var Play = ({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
  ...rest
}) => /* @__PURE__ */ jsx(
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
    children: /* @__PURE__ */ jsx("polygon", { points: "9 7 18 12 9 17 9 7" })
  }
);
var MemoPlay = memo(Play);

export {
  MemoPlay
};
