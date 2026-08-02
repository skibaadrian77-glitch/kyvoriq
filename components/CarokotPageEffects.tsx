"use client";

import { useEffect } from "react";

export default function CarokotPageEffects() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section, main > footer"),
    );

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main article, main details, main section [class*='rounded-[']",
      ),
    ).filter((element) => !element.closest("[role='dialog']"));

    sections.forEach((section) => {
      section.classList.add("carokot-section-reveal");
    });

    cards.forEach((card, index) => {
      card.classList.add("carokot-card-reveal");
      card.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("carokot-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    [...sections, ...cards].forEach((element) => observer.observe(element));

    const parallaxImages = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section img:not([data-no-parallax])",
      ),
    );

    parallaxImages.forEach((image) => {
      image.classList.add("carokot-parallax");
    });

    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const viewportHeight = window.innerHeight;

      parallaxImages.forEach((image) => {
        const rect = image.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const center = rect.top + rect.height / 2;
        const progress = (center - viewportHeight / 2) / viewportHeight;
        const offset = Math.max(-16, Math.min(16, progress * -22));

        image.style.setProperty("--parallax-y", `${offset}px`);
      });
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}