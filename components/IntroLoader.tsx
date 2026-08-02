"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1250);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1950);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#050505] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d5eff]/[0.12] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 scale-[1.4] rounded-full bg-[#6d5eff]/15 blur-[35px]" />

          <Logo
            variant="gradient"
            className="relative h-20 w-auto animate-[loaderMark_.9s_cubic-bezier(0.22,1,0.36,1)_both] sm:h-24"
          />
        </div>

        <div className="mt-7 overflow-hidden">
          <p className="animate-[loaderWordmark_.8s_.18s_cubic-bezier(0.22,1,0.36,1)_both] text-xl font-semibold tracking-[0.38em] text-white sm:text-2xl">
            KYVORIQ
          </p>
        </div>

        <div className="mt-7 h-px w-40 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left animate-[loaderLine_1.05s_.15s_cubic-bezier(0.22,1,0.36,1)_both] bg-gradient-to-r from-white/20 via-[#9f7aea] to-[#6d5eff]" />
        </div>

        <p className="mt-5 animate-[loaderLabel_.7s_.4s_ease_both] text-[9px] tracking-[0.3em] text-white/25">
          WEB DESIGN & DEVELOPMENT
        </p>
      </div>
    </div>
  );
}