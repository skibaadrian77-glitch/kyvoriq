"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "O MNIE", href: "#o-mnie", id: "o-mnie" },
  { label: "OFERTA", href: "#zajecia", id: "zajecia" },
  { label: "OPINIE", href: "#opinie", id: "opinie" },
  { label: "YOUTUBE", href: "#youtube", id: "youtube" },
  { label: "GALERIA", href: "#galeria", id: "galeria" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "KONTAKT", href: "#kontakt", id: "kontakt" },
];

export default function CarokotNavigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "";

      for (const item of navigation) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
      {navigation.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.href}
            href={item.href}
            className={`group relative py-3 text-[9px] font-semibold tracking-[0.16em] transition xl:text-[10px] ${
              isActive
                ? "text-[#302a24]"
                : "text-[#302a24]/55 hover:text-[#302a24]"
            }`}
          >
            {item.label}

            <span
              className={`absolute bottom-0 left-0 h-px bg-[#697458] transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}