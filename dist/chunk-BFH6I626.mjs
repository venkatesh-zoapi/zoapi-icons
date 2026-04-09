// generated/icons/phone.tsx
import { memo } from "react";
import { jsx } from "react/jsx-runtime";
var Phone = ({
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
    children: /* @__PURE__ */ jsx("path", { d: "M5 4h4l2 5-2 2a14 14 0 0 0 6 6l2-2 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" })
  }
);
var MemoPhone = memo(Phone);

export {
  MemoPhone
};
