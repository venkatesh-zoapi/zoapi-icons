import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const FileCode: IconComponent = ({
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
    <path d="M7 3h7l5 5v13H7z" /><path d="M10 13 8 15l2 2M14 17l2-2-2-2" />
  </svg>
);

const MemoFileCode = memo(FileCode);

export { MemoFileCode as FileCode };
