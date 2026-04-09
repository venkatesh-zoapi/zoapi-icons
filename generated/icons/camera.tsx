import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Camera: IconComponent = ({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...rest}
  >
    <path d="M4 7h4l2-2h4l2 2h4v12H4z" /><circle cx="12" cy="13" r="3.5" />
  </svg>
);

const MemoCamera = memo(Camera);

export { MemoCamera as Camera };
