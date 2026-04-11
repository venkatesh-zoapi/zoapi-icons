import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const File: IconComponent = ({
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
    <path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5" />
  </svg>
);

const MemoFile = memo(File);

export { MemoFile as File };
