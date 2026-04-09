import { memo } from "react";
import type { IconComponent } from "../runtime/types";

const Flash: IconComponent = ({
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
    <path d="M222.667 32H155.939C155.514 32 155.127 32.2454 154.947 32.6299L90.7335 169.332C90.3922 170.059 90.9225 170.894 91.7253 170.894H146.938C147.683 170.894 148.211 171.62 147.98 172.328L112.424 281.737C112.041 282.915 113.599 283.724 114.342 282.734L228.683 130.434C229.226 129.712 228.71 128.681 227.807 128.681H170.742C169.899 128.681 169.372 127.768 169.793 127.038L223.616 33.6429C224.037 32.9124 223.51 32 222.667 32Z" stroke="url(#paint0_linear_219_23)" stroke-width="12"></path><defs><linearGradient id="paint0_linear_219_23" x1="90" y1="160" x2="230" y2="160" gradientUnits="userSpaceOnUse"><stop stop-color="#F1703C"></stop><stop offset="0.29" stop-color="#F06D3F"></stop><stop offset="0.53" stop-color="#EF6449"></stop><stop offset="0.75" stop-color="#EC545A"></stop><stop offset="0.95" stop-color="#E93F72"></stop><stop offset="1" stop-color="#E93A79"></stop></linearGradient></defs>
  </svg>
);

const MemoFlash = memo(Flash);

export { MemoFlash as Flash };
