// generated/icons/download.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Download = ({
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
      /* @__PURE__ */ jsx("path", { d: "M12 3v12" }),
      /* @__PURE__ */ jsx("path", { d: "m7 11 5 5 5-5" }),
      /* @__PURE__ */ jsx("path", { d: "M4 21h16" })
    ]
  }
);
var MemoDownload = memo(Download);

export {
  MemoDownload
};
