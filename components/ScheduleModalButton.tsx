"use client";

import { useEffect, useId, useState } from "react";

const scheduleUrl =
  "https://app.fitssey.com/studioyogatime/frontoffice";

type ScheduleModalButtonProps = {
  label?: string;
  variant?: "dark" | "light" | "floating";
  fullWidth?: boolean;
};

export default function ScheduleModalButton({
  label = "Grafik i zapisy",
  variant = "dark",
  fullWidth = false,
}: ScheduleModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const buttonClass =
    variant === "floating"
      ? "fixed bottom-5 right-5 z-50 hidden items-center gap-4 rounded-full bg-[#302a24] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(48,42,36,.25)] transition hover:-translate-y-1 hover:bg-[#697458] md:inline-flex"
      : variant === "light"
        ? `group flex items-center justify-between rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#302a24] transition hover:bg-[#f3eee4] ${
            fullWidth ? "w-full" : ""
          }`
        : `group inline-flex items-center justify-center gap-4 rounded-full bg-[#302a24] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#697458] ${
            fullWidth ? "w-full justify-between" : ""
          }`;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={buttonClass}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {label}
        <span className="transition group-hover:translate-x-1">↗</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#211c17]/70 p-3 backdrop-blur-md sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex h-[92vh] w-full max-w-[1240px] flex-col overflow-hidden rounded-[28px] border border-white/20 bg-[#f3eee4] shadow-[0_40px_120px_rgba(20,16,12,.35)] sm:rounded-[36px]"
          >
            <header className="flex shrink-0 items-center justify-between gap-5 border-b border-[#302a24]/10 px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#697458]">
                  STUDIO YOGA TIME
                </p>
                <h2
                  id={titleId}
                  className="mt-1 text-xl font-semibold text-[#302a24] sm:text-2xl"
                >
                  Grafik i zapisy
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#302a24]/15 text-xl text-[#302a24] transition hover:bg-[#302a24] hover:text-white"
                aria-label="Zamknij grafik"
              >
                ×
              </button>
            </header>

            <div className="relative min-h-0 flex-1 bg-white">
              <iframe
                src={scheduleUrl}
                title="Grafik zajęć Studio Yoga Time"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="payment"
              />
            </div>

            <footer className="flex shrink-0 flex-col gap-3 border-t border-[#302a24]/10 bg-[#f3eee4] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-sm leading-6 text-[#302a24]/55">
                Gdyby grafik nie wyświetlił się w oknie, otwórz system zapisów
                bezpośrednio.
              </p>

              <a
                href={scheduleUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#302a24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#697458]"
              >
                Otwórz Fitssey
                <span>↗</span>
              </a>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}