import type { ComponentType, SVGProps } from "react";

export type IconProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "color">;

export type IconComponent = ComponentType<IconProps>;
