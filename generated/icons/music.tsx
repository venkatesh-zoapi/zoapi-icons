import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Music: IconComponent = ({
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
    <path d="M9 18a3 3 0 1 0 0 .01zM15 16a3 3 0 1 0 0 .01z" /><path d="M12 6v10M18 4v10M12 6l6-2" />
  </svg>
);

const MemoMusic = memo(Music);

export { MemoMusic as Music };
