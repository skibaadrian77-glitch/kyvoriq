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
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm text-white backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.04]"
        aria-label="Otwórz menu"
        aria-expanded={open}
      >
        Menu

        <span className="relative block h-3 w-4">
          <span className="absolute left-0 top-0 h-px w-4 bg-white transition group-hover:translate-x-0.5" />
          <span className="absolute bottom-0 right-0 h-px w-3 bg-white transition group-hover:-translate-x-0.5" />
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
          className="absolute inset-0 cursor-default bg-black/78 backdrop-blur-xl"
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-xl flex-col border-l border-white/10 bg-[#070707] p-8 transition duration-500 sm:p-12 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-[0.24em]">
              KYVORIQ
            </span>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl transition hover:bg-white hover:text-black"
              aria-label="Zamknij menu"
            >
              ×
            </button>
          </div>

          <nav className="my-auto">
            <p className="mb-8 text-[9px] tracking-[0.24em] text-white/28">
              NAWIGACJA
            </p>

            <div className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-end justify-between border-b border-white/10 py-5"
                >
                  <span className="text-4xl font-medium tracking-[-0.05em] transition group-hover:translate-x-2 sm:text-5xl">
                    {link.label}
                  </span>

                  <span className="pb-1 text-xs text-white/22">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-white/32">
              Masz projekt? Porozmawiajmy.
            </p>

            <a
              href="mailto:kontakt@kyvoriq.pl"
              className="mt-3 inline-block text-lg transition hover:text-[#aaa3ff]"
            >
              kontakt@kyvoriq.pl
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}