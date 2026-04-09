import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Laptop: IconComponent = ({
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
    <rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 19h20" />
  </svg>
);

const MemoLaptop = memo(Laptop);

export { MemoLaptop as Laptop };
