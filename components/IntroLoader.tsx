"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1150);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1850);

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
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d5eff]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative text-center">
        <p className="animate-[loaderLogo_1s_cubic-bezier(0.22,1,0.36,1)_both] text-2xl font-semibold tracking-[0.42em] text-white sm:text-3xl">
          KYVORIQ
        </p>

        <div className="mx-auto mt-7 h-px w-36 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left animate-[loaderLine_1.15s_cubic-bezier(0.22,1,0.36,1)_both] bg-gradient-to-r from-white/30 to-[#8f84ff]" />
        </div>

        <p className="mt-5 animate-[loaderLabel_.8s_.25s_ease_both] text-[9px] tracking-[0.3em] text-white/25">
          DIGITAL STUDIO
        </p>
      </div>
    </div>
  );
}