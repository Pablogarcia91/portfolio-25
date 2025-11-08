"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // @ts-ignore
      if (typeof window.gtag !== "undefined") {
        // @ts-ignore
        window.gtag("config", "G-V28NP3XGZ8", {
          page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}
