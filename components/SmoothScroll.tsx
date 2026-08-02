"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Na stronie Carokot używamy zwykłego scrolla przeglądarki.
    if (pathname === "/projekty/carokot-joga") {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}