"use client";

import { useCallback, useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  width: number;
  height: number;
  label: string;
};

type CarokotGalleryProps = {
  items: GalleryItem[];
  instagramUrl: string;
};

export default function CarokotGallery({
  items,
  instagramUrl,
}: CarokotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[28px] bg-[#e5dacd] text-left shadow-[0_18px_50px_rgba(48,42,36,.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(48,42,36,.14)]"
            aria-label={`Otwórz zdjęcie: ${item.label}`}
          >
            <img
              src={item.src}
              alt={item.label}
              width={item.width}
              height={item.height}
              loading="lazy"
              data-no-parallax
              className="block h-auto w-full transition duration-1000 group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211c17]/72 via-[#211c17]/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 text-white sm:inset-x-6 sm:bottom-6">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-white/60">
                  GALERIA
                </p>
                <p className="mt-2 text-3xl font-medium leading-none sm:text-4xl">
                  {item.label}
                </p>
              </div>

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 opacity-0 backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:opacity-100">
                +
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center bg-[#17130f]/92 p-3 backdrop-blur-xl sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Zdjęcie: ${activeItem.label}`}
            className="relative flex h-[94vh] w-full max-w-[1500px] flex-col overflow-hidden rounded-[28px] border border-white/15 bg-[#211c17] shadow-[0_45px_140px_rgba(0,0,0,.55)]"
          >
            <header className="flex shrink-0 items-center justify-between gap-5 border-b border-white/10 px-5 py-4 text-white sm:px-7">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-white/45">
                  CAROKOT JOGA
                </p>
                <p className="mt-1 text-xl font-medium">{activeItem.label}</p>
              </div>

              <button
                type="button"
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-2xl transition hover:bg-white hover:text-[#302a24]"
                aria-label="Zamknij zdjęcie"
              >
                ×
              </button>
            </header>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.label}
                data-no-parallax
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-[#302a24] sm:left-6 sm:h-14 sm:w-14"
                aria-label="Poprzednie zdjęcie"
              >
                ←
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-[#302a24] sm:right-6 sm:h-14 sm:w-14"
                aria-label="Następne zdjęcie"
              >
                →
              </button>
            </div>

            <footer className="flex shrink-0 flex-col gap-3 border-t border-white/10 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-sm text-white/45">
                {activeIndex + 1} / {items.length}
              </p>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-[#302a24]"
              >
                Zobacz Instagram
                <span>↗</span>
              </a>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}