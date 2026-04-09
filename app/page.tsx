import { Suspense } from "react";

import { IconsBrowser } from "@/components/icons-browser";

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <IconsBrowser />
    </Suspense>
  );
}