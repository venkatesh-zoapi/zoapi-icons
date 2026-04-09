import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const MessageCircle: IconComponent = ({
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
    <circle cx="12" cy="12" r="9" /><path d="M8 16l-3 3" />
  </svg>
);

const MemoMessageCircle = memo(MessageCircle);

export { MemoMessageCircle as MessageCircle };
