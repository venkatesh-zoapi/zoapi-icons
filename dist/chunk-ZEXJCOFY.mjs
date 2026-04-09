// generated/icons/mail.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Mail = ({
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
      /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "m4 7 8 6 8-6" })
    ]
  }
);
var MemoMail = memo(Mail);

export {
  MemoMail
};
