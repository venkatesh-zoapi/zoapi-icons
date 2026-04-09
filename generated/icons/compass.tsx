import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Compass: IconComponent = ({
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
    <circle cx="12" cy="12" r="9" /><path d="m9 9 6-2-2 6-6 2z" />
  </svg>
);

const MemoCompass = memo(Compass);

export { MemoCompass as Compass };
