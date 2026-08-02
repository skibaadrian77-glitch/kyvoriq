"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PageAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        delay: 1.15,
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .from("[data-hero-eyebrow]", {
          y: 18,
          opacity: 0,
          duration: 0.7,
        })
.from(
  "[data-hero-line]",
  {
    y: 95,
    opacity: 0,
    duration: 1.05,
    stagger: 0.1,
    force3D: false,
    onComplete: () => {
      gsap.set("[data-hero-line]", {
        clearProps: "transform",
      });
    },
  },
  "-=0.35",
)
        .from(
          "[data-hero-copy]",
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
          },
          "-=0.5",
        )
        .from(
          "[data-hero-tags]",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          "[data-hero-visual]",
          {
            y: 65,
            rotate: 8,
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
          },
          "-=0.95",
        )
        .from(
          "[data-hero-bottom]",
          {
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 65,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-copy]")
        .forEach((element) => {
          gsap.from(element, {
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });

      gsap.utils.toArray<HTMLElement>("[data-service]").forEach((service) => {
        gsap.from(service, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-project]").forEach((project) => {
        gsap.from(project, {
          y: 90,
          opacity: 0,
          scale: 0.975,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-process-card]")
        .forEach((card, index) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.85,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          });
        });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}