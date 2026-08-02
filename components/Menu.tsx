"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces", href: "#proces" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm text-white backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.05]"
        aria-label="Otwórz menu"
        aria-expanded={open}
      >
        <span>Menu</span>

        <span className="relative block h-3 w-4">
          <span className="absolute left-0 top-0 h-px w-4 bg-white transition duration-300 group-hover:translate-x-0.5" />
          <span className="absolute bottom-0 right-0 h-px w-3 bg-white transition duration-300 group-hover:-translate-x-0.5" />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[100] transition duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Zamknij menu"
          onClick={closeMenu}
          className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-md"
        />

        <aside
          className={`absolute right-0 top-0 flex h-[100dvh] w-full flex-col overflow-hidden border-l border-white/10 bg-[#08090c] transition duration-500 sm:max-w-[520px] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* NAGŁÓWEK */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/8 px-6 py-5 sm:px-9 sm:py-7">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.25em] text-white">
                KYVORIQ
              </p>

              <p className="mt-2 text-[8px] tracking-[0.24em] text-white/28">
                DIGITAL STUDIO
              </p>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xl text-white transition duration-300 hover:rotate-90 hover:bg-white hover:text-black"
              aria-label="Zamknij menu"
            >
              ×
            </button>
          </div>

          {/* MENU */}
          <nav className="min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-9 sm:py-10">
            <p className="mb-5 text-[8px] font-medium tracking-[0.24em] text-white/25">
              NAWIGACJA
            </p>

            <div className="border-t border-white/10">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex min-h-[88px] items-center justify-between gap-5 border-b border-white/10 py-5 sm:min-h-[104px]"
                >
                  <span className="text-[38px] font-medium leading-none tracking-[-0.055em] text-white transition duration-300 group-hover:translate-x-2 group-hover:text-[#b7adff] sm:text-[48px]">
                    {link.label}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium tracking-[0.14em] text-white/22">
                      0{index + 1}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-white/45 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </nav>

          {/* DÓŁ MENU */}
          <div className="shrink-0 border-t border-white/10 bg-white/[0.015] px-6 py-6 sm:px-9 sm:py-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/30">
                  MASZ PROJEKT?
                </p>

                <p className="mt-2 text-sm leading-6 text-white/46">
                  Porozmawiajmy o Twojej stronie.
                </p>
              </div>

              <a
                href="mailto:kontakt@kyvoriq.pl"
                className="group inline-flex items-center gap-3 text-base font-medium text-white transition duration-300 hover:text-[#b7adff]"
              >
                kontakt@kyvoriq.pl

                <span className="transition duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}