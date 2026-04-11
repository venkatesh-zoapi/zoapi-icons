import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Slate: IconComponent = ({
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
    <path d="M16.7 2.3999H11.6954C11.6636 2.3999 11.6345 2.41831 11.621 2.44714L6.80501 12.6998C6.77942 12.7543 6.81919 12.817 6.8794 12.817H11.0204C11.0762 12.817 11.1158 12.8714 11.0985 12.9245L8.4318 21.1302C8.40308 21.2185 8.51993 21.2792 8.57565 21.205L17.1512 9.78245C17.192 9.7283 17.1533 9.65098 17.0855 9.65098H12.8057C12.7424 9.65098 12.7029 9.5825 12.7345 9.52775L16.7712 2.52312C16.8028 2.46833 16.7633 2.3999 16.7 2.3999Z" stroke="#F9F9F9"/>
  </svg>
);

const MemoSlate = memo(Slate);

export { MemoSlate as Slate };
