import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Watch: IconComponent = ({
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
    color={color}
    strokeWidth={strokeWidth}
    className={className}
    {...rest}
  >
    <rect x="7" y="6" width="10" height="12" rx="2" /><path d="M9 2h6M9 22h6" />
  </svg>
);

const MemoWatch = memo(Watch);

export { MemoWatch as Watch };
