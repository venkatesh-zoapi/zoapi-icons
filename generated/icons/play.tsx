import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Play: IconComponent = ({
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
    <polygon points="9 7 18 12 9 17 9 7" />
  </svg>
);

const MemoPlay = memo(Play);

export { MemoPlay as Play };
