// generated/icons/folder.tsx
import { memo } from "react";
import { jsx } from "react/jsx-runtime";
var Folder = ({
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
    children: /* @__PURE__ */ jsx("path", { d: "M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
  }
);
var MemoFolder = memo(Folder);

export {
  MemoFolder
};
