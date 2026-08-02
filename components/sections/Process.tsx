import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const processSteps = [
  {
    number: "01",
    title: "Poznajemy",
    label: "Discovery",
    description:
      "Rozmawiamy o Twoim pomyśle, odbiorcach, konkurencji i celu, jaki ma spełniać strona.",
    color: "violet",
  },
  {
    number: "02",
    title: "Projektujemy",
    label: "Design",
    description:
      "Budujemy strukturę, hierarchię treści i kierunek wizualny dopasowany do projektu.",
    color: "blue",
  },
  {
    number: "03",
    title: "Tworzymy",
    label: "Development",
    description:
      "Kodujemy szybką, responsywną i dopracowaną stronę gotową do dalszego rozwoju.",
    color: "cyan",
  },
  {
    number: "04",
    title: "Uruchamiamy",
    label: "Launch",
    description:
      "Publikujemy stronę, konfigurujemy domenę i pomagamy w pierwszych krokach po starcie.",
    color: "emerald",
  },
];

const colors = {
  violet: {
    glow: "bg-[#7c3aed]/20",
    dot: "bg-[#a78bfa]",
    text: "text-[#b9a7ff]",
    border: "group-hover:border-[#7c3aed]/30",
  },
  blue: {
    glow: "bg-[#4f7dff]/18",
    dot: "bg-[#75a1ff]",
    text: "text-[#91b2ff]",
    border: "group-hover:border-[#4f7dff]/30",
  },
  cyan: {
    glow: "bg-[#63d8ff]/14",
    dot: "bg-[#63d8ff]",
    text: "text-[#8ce6ff]",
    border: "group-hover:border-[#63d8ff]/25",
  },
  emerald: {
    glow: "bg-[#4ade80]/12",
    dot: "bg-[#4ade80]",
    text: "text-[#83eba7]",
    border: "group-hover:border-[#4ade80]/25",
  },
};

export default function Process() {
  return (
    <section
      id="proces"
      className="relative overflow-hidden border-t border-white/10 bg-[#08080b] py-24 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-30%] left-[-12%] h-[620px] w-[620px] rounded-full bg-[#7c3aed]/[0.08] blur-[190px]" />
        <div className="absolute right-[-16%] top-[-15%] h-[640px] w-[640px] rounded-full bg-[#4f7dff]/[0.07] blur-[200px]" />
        <div className="absolute left-[42%] top-[32%] h-[420px] w-[420px] rounded-full bg-[#63d8ff]/[0.035] blur-[160px]" />
      </div>

      <Container className="relative">
        <SectionTitle
          eyebrow="OUR PROCESS"
          title={
            <>
              Jasny proces.
              <span className="block text-white/32">Zero zgadywania.</span>
            </>
          }
          description={
            <p>
              Od pierwszej rozmowy do uruchomienia strony wiesz, co robimy,
              dlaczego to robimy i jaki jest kolejny etap.
            </p>
          }
        />

        <div className="relative mt-16 sm:mt-20">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-9 hidden h-px bg-gradient-to-r from-[#7c3aed]/30 via-[#63d8ff]/20 to-[#4ade80]/25 xl:block" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const accent = colors[step.color as keyof typeof colors];

              return (
                <article
                  data-process-card
                  key={step.number}
                  className={`group relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.04] ${accent.border} sm:p-8`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full ${accent.glow} opacity-30 blur-[85px] transition duration-700 group-hover:scale-125 group-hover:opacity-65`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#09090b] text-xs font-medium ${accent.text}`}
                        >
                          {step.number}
                        </span>
                        <span className="text-[9px] tracking-[0.22em] text-white/25">
                          {step.label.toUpperCase()}
                        </span>
                      </div>

                      <span className="text-[64px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] transition group-hover:text-white/[0.055]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-auto pt-24">
                      <div className="mb-7 flex items-center gap-3">
                        <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                        <span className="h-px flex-1 bg-gradient-to-r from-white/16 to-transparent" />
                      </div>

                      <h3 className="text-3xl font-medium tracking-[-0.04em] transition duration-500 group-hover:translate-x-1 sm:text-4xl">
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-sm leading-7 text-white/42 transition duration-300 group-hover:text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-gradient-to-r from-[#7c3aed]/[0.06] via-[#4f7dff]/[0.045] to-[#4ade80]/[0.035] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-white/42">
            Każdy etap jest przejrzysty, a decyzje podejmujemy wspólnie.
          </p>

          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
          >
            Omówmy Twój projekt
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}