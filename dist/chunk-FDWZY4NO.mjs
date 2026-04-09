// generated/icons/file-code.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var FileCode = ({
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
      /* @__PURE__ */ jsx("path", { d: "M7 3h7l5 5v13H7z" }),
      /* @__PURE__ */ jsx("path", { d: "M10 13 8 15l2 2M14 17l2-2-2-2" })
    ]
  }
);
var MemoFileCode = memo(FileCode);

export {
  MemoFileCode
};
