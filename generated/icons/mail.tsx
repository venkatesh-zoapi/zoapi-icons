import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Mail: IconComponent = ({
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
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />
  </svg>
);

const MemoMail = memo(Mail);

export { MemoMail as Mail };
