import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Download: IconComponent = ({
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
    <path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M4 21h16" />
  </svg>
);

const MemoDownload = memo(Download);

export { MemoDownload as Download };
