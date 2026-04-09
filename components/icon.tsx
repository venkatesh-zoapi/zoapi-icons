"use client";

import { memo, useEffect, useState } from "react";

import { iconLoaders } from "@/generated/runtime";
import type { IconComponent, IconProps } from "@/generated/runtime";

const componentCache = new Map<string, IconComponent>();

type DynamicIconProps = IconProps & {
  name: string;
};

function IconBase({ name, ...props }: DynamicIconProps) {
  const [Component, setComponent] = useState<IconComponent | null>(() => componentCache.get(name) ?? null);

  useEffect(() => {
    let active = true;

    const cached = componentCache.get(name);
    if (cached) {
      setComponent(() => cached);
      return;
    }

    const load = iconLoaders[name];
    if (!load) {
      setComponent(null);
      return;
    }

    load().then((resolved) => {
      if (!active) return;
      componentCache.set(name, resolved);
      setComponent(() => resolved);
    });

    return () => {
      active = false;
    };
  }, [name]);

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
}

export const Icon = memo(IconBase);