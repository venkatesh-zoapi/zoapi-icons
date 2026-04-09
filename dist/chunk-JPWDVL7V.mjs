// generated/icons/message-circle.tsx
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var MessageCircle = ({
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
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ jsx("path", { d: "M8 16l-3 3" })
    ]
  }
);
var MemoMessageCircle = memo(MessageCircle);

export {
  MemoMessageCircle
};
