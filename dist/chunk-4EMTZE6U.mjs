// generated/icons/send.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Send = ({
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
      /* @__PURE__ */ jsx("path", { d: "M3 11.5 21 3l-8.5 18-1.8-7.7z" }),
      /* @__PURE__ */ jsx("path", { d: "M10.7 13.3 21 3" })
    ]
  }
);
var MemoSend = memo(Send);

export {
  MemoSend
};
