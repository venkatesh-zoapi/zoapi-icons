// generated/icons/music.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Music = ({
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
      /* @__PURE__ */ jsx("path", { d: "M9 18a3 3 0 1 0 0 .01zM15 16a3 3 0 1 0 0 .01z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 6v10M18 4v10M12 6l6-2" })
    ]
  }
);
var MemoMusic = memo(Music);

export {
  MemoMusic
};
