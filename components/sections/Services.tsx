import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    number: "01",
    title: "Strony firmowe",
    eyebrow: "Corporate websites",
    description:
      "Nowoczesne strony, które budują zaufanie, porządkują ofertę i prowadzą odbiorcę do kontaktu.",
    items: ["Strategia", "UX/UI", "Responsywność"],
    accent: "violet",
  },
  {
    number: "02",
    title: "Landing pages",
    eyebrow: "Campaign experiences",
    description:
      "Skoncentrowane strony pod kampanie, premiery i usługi — zaprojektowane wokół jednego konkretnego celu.",
    items: ["Konwersja", "Copy direction", "Analityka"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Redesign",
    eyebrow: "Digital transformation",
    description:
      "Zmiana przestarzałej witryny w szybkie, czytelne i nowoczesne doświadczenie dopasowane do marki.",
    items: ["Audyt", "Nowy kierunek", "Optymalizacja"],
    accent: "cyan",
  },
  {
    number: "04",
    title: "Rozwój i opieka",
    eyebrow: "Growth & support",
    description:
      "Dalsze usprawnienia, nowe sekcje, aktualizacje i opieka techniczna po uruchomieniu projektu.",
    items: ["Aktualizacje", "Nowe funkcje", "Wsparcie"],
    accent: "emerald",
  },
];

const accentStyles = {
  violet: {
    glow: "bg-[#7c3aed]/20",
    line: "from-[#a78bfa] via-[#7c3aed] to-transparent",
    dot: "bg-[#a78bfa]",
    number: "text-[#b9a7ff]",
  },
  blue: {
    glow: "bg-[#4f7dff]/18",
    line: "from-[#75a1ff] via-[#4f7dff] to-transparent",
    dot: "bg-[#75a1ff]",
    number: "text-[#91b2ff]",
  },
  cyan: {
    glow: "bg-[#63d8ff]/14",
    line: "from-[#8ce6ff] via-[#4fc7ee] to-transparent",
    dot: "bg-[#63d8ff]",
    number: "text-[#8ce6ff]",
  },
  emerald: {
    glow: "bg-[#4ade80]/12",
    line: "from-[#74e99c] via-[#4ade80] to-transparent",
    dot: "bg-[#4ade80]",
    number: "text-[#83eba7]",
  },
};

export default function Services() {
  return (
    <section
      id="uslugi"
      className="relative overflow-hidden border-t border-white/10 bg-[#070709] py-24 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-18%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#7c3aed]/[0.08] blur-[170px]" />
        <div className="absolute right-[-16%] top-[18%] h-[580px] w-[580px] rounded-full bg-[#4f7dff]/[0.07] blur-[190px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <Container className="relative">
        <SectionTitle
          eyebrow="CAPABILITIES"
          title={
            <>
              Od pomysłu
              <span className="block text-white/32">do obecności online.</span>
            </>
          }
          description={
            <p>
              Łączę komunikację, design i technologię w jeden spójny projekt
              dopasowany do celu, odbiorcy i charakteru marki.
            </p>
          }
        />

        <div className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-2">
          {services.map((service) => {
            const accent =
              accentStyles[service.accent as keyof typeof accentStyles];

            return (
              <article
                data-service
                key={service.number}
                className="group relative min-h-[430px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.045] sm:p-9"
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${accent.glow} opacity-40 blur-[90px] transition duration-700 group-hover:scale-125 group-hover:opacity-75`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line} opacity-45 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${accent.number}`}>
                        {service.number}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-lg text-white/45 transition duration-300 group-hover:rotate-45 group-hover:border-white/25 group-hover:bg-white group-hover:text-black">
                        ↗
                      </span>
                    </div>

                    <p className="mt-14 text-[9px] tracking-[0.24em] text-white/28">
                      {service.eyebrow.toUpperCase()}
                    </p>

                    <h3 className="mt-4 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.045em] transition duration-500 group-hover:translate-x-1 sm:text-5xl">
                      {service.title}
                    </h3>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/15 px-3 py-2 text-[9px] tracking-[0.15em] text-white/35 transition group-hover:border-white/20 group-hover:text-white/55"
                        >
                          {item.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-16">
                    <div className="mb-6 flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                      <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                    </div>

                    <p className="max-w-lg text-base leading-7 text-white/43 transition duration-300 group-hover:text-white/62">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}