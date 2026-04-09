import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Pause: IconComponent = ({
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
    <rect x="7" y="6" width="3" height="12" rx="1" /><rect x="14" y="6" width="3" height="12" rx="1" />
  </svg>
);

const MemoPause = memo(Pause);

export { MemoPause as Pause };
