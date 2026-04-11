import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Send: IconComponent = ({
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
    <path d="M3 11.5 21 3l-8.5 18-1.8-7.7z" /><path d="M10.7 13.3 21 3" />
  </svg>
);

const MemoSend = memo(Send);

export { MemoSend as Send };
