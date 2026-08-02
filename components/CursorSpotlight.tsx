"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    setEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--spotlight-x",
        `${event.clientX}px`,
      );

      document.documentElement.style.setProperty(
        "--spotlight-y",
        `${event.clientY}px`,
      );
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-70 mix-blend-screen"
      style={{
        background:
          "radial-gradient(420px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(109,94,255,0.09), transparent 70%)",
      }}
    />
  );
}