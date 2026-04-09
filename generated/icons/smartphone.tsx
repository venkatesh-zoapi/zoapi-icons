import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Smartphone: IconComponent = ({
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
    <rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" />
  </svg>
);

const MemoSmartphone = memo(Smartphone);

export { MemoSmartphone as Smartphone };
