import Menu from "@/components/Menu";
import PageAnimations from "@/components/PageAnimations";
import IntroLoader from "@/components/IntroLoader";
import CursorSpotlight from "@/components/CursorSpotlight";

const services = [
  {
    number: "01",
    title: "Strony firmowe",
    eyebrow: "Corporate websites",
    description:
      "Nowoczesne strony, które budują zaufanie, porządkują ofertę i prowadzą odbiorcę do kontaktu.",
  },
  {
    number: "02",
    title: "Landing pages",
    eyebrow: "Campaign experiences",
    description:
      "Skoncentrowane strony pod kampanie, premiery i usługi — zaprojektowane wokół jednego konkretnego celu.",
  },
  {
    number: "03",
    title: "Redesign",
    eyebrow: "Digital transformation",
    description:
      "Zmiana przestarzałej witryny w szybkie, czytelne i nowoczesne doświadczenie dopasowane do marki.",
  },
  {
    number: "04",
    title: "Rozwój i opieka",
    eyebrow: "Growth & support",
    description:
      "Dalsze usprawnienia, nowe sekcje, aktualizacje i opieka techniczna po uruchomieniu projektu.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Poznajemy",
    description:
      "Rozmawiamy o firmie, odbiorcach, konkurencji i celu, jaki ma spełniać strona.",
  },
  {
    number: "02",
    title: "Projektujemy",
    description:
      "Budujemy strukturę, hierarchię treści i kierunek wizualny dopasowany do charakteru marki.",
  },
  {
    number: "03",
    title: "Tworzymy",
    description:
      "Kodujemy szybki, responsywny i dopracowany serwis gotowy do dalszego rozwoju.",
  },
  {
    number: "04",
    title: "Uruchamiamy",
    description:
      "Publikujemy stronę, konfigurujemy domenę i pomagamy w pierwszych krokach po starcie.",
  },
];

const standards = [
  "Indywidualny kierunek wizualny",
  "Pełna responsywność",
  "Szybkie ładowanie",
  "Podstawowe SEO",
  "Przejrzysta ścieżka kontaktu",
  "Wsparcie po publikacji",
];

export default function Home() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f5f5f5] selection:bg-[#6d5eff]/35 selection:text-white">
      <IntroLoader />
      <CursorSpotlight />
      <PageAnimations />

      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:h-24 sm:px-6 lg:px-12">
          <a
            href="#top"
            aria-label="KYVORIQ — strona główna"
            className="text-[14px] font-semibold tracking-[0.26em] text-white sm:text-[15px] sm:tracking-[0.28em]"
          >
            KYVORIQ
          </a>

          <div className="flex items-center gap-4">
            <span className="hidden text-[10px] tracking-[0.22em] text-white/30 sm:block">
              DIGITAL STUDIO
            </span>

            <Menu />
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pt-20 sm:pt-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-45%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#6d5eff]/[0.11] blur-[150px] sm:left-[-14%] sm:top-[24%] sm:h-[680px] sm:w-[680px] sm:blur-[190px]" />

          <div className="absolute right-[-70%] top-[-5%] h-[680px] w-[680px] rounded-full border border-white/[0.045] sm:right-[-24%] sm:h-[1050px] sm:w-[1050px]" />

          <div className="absolute right-[-42%] top-[18%] h-[480px] w-[480px] rounded-full border border-white/[0.05] sm:right-[-8%] sm:top-[12%] sm:h-[760px] sm:w-[760px]" />

          <div className="absolute right-[-8%] top-[34%] h-[270px] w-[270px] rounded-full border border-white/[0.055] sm:right-[4%] sm:top-[28%] sm:h-[440px] sm:w-[440px]" />

          <div
  className="absolute inset-0 opacity-[0.018]"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
    backgroundSize: "88px 88px",
    backgroundPosition: "28px 0",
  }}
/>

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent" />
        </div>

        <div className="pointer-events-none absolute bottom-[-4vw] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-semibold tracking-[-0.09em] text-white/[0.018] lg:block">
          KYVORIQ
        </div>

        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-10 pt-16 sm:px-6 sm:pb-12 lg:px-12 lg:pb-16">
          <div className="grid min-h-[calc(100vh-120px)] items-center gap-14 lg:min-h-[calc(100vh-150px)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative z-10">
              <div
                data-hero-eyebrow
                className="mb-8 flex items-center gap-4 sm:mb-9"
              >
                <span className="h-px w-10 bg-white/25 sm:w-12" />

                <p className="text-[9px] tracking-[0.21em] text-white/40 sm:text-[10px] sm:tracking-[0.25em]">
                  WEB DESIGN · DEVELOPMENT · STRATEGY
                </p>
              </div>

              <h1 className="max-w-5xl overflow-visible pb-[0.14em] text-[52px] font-semibold leading-[0.92] tracking-[-0.045em] min-[390px]:text-[60px] sm:text-8xl lg:text-[112px] xl:text-[132px]">
                <span data-hero-line className="block">
                  Your next
                </span>

                <span
                  data-hero-line
                  className="block whitespace-nowrap text-white/32"
                >
                  client starts
                </span>

                <span
                  data-hero-line
                  className="block pb-[0.1em] text-white"
                >
                  right here.
                </span>
              </h1>

              <div
                data-hero-copy
                className="mt-10 flex max-w-2xl flex-col gap-7 border-l border-white/15 pl-5 sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:pl-6"
              >
                <p className="max-w-lg text-base leading-7 text-white/52 sm:text-xl sm:leading-8">
                  Projektujemy strony internetowe, które robią profesjonalne
                  pierwsze wrażenie i pomagają firmom zdobywać klientów.
                </p>

                <a
                  href="#kontakt"
                  className="group inline-flex shrink-0 items-center gap-4 text-sm font-medium text-white"
                >
                  Rozpocznij projekt

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-12 sm:w-12">
                    ↗
                  </span>
                </a>
              </div>

              <div
                data-hero-tags
                className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[9px] tracking-[0.18em] text-white/28 sm:mt-14 sm:gap-x-9 sm:text-[10px] sm:tracking-[0.2em]"
              >
                <span>STRATEGY-LED</span>
                <span>RESPONSIVE</span>
                <span>BUILT FOR GROWTH</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div
              data-hero-visual
              data-parallax
              className="relative hidden min-h-[650px] lg:block"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[540px] w-[540px] rounded-full bg-[#6d5eff]/[0.09] blur-[145px]" />

                <div className="group relative w-[485px] rotate-[4deg] rounded-[36px] border border-white/10 bg-[#0a0a0a]/88 p-3 shadow-[0_55px_130px_rgba(0,0,0,.78)] backdrop-blur-2xl transition duration-700 hover:rotate-[1deg] hover:scale-[1.015]">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[36px]">
                    <div className="absolute left-[-25%] top-[-35%] h-[90%] w-[55%] rotate-[28deg] bg-gradient-to-r from-transparent via-white/[0.055] to-transparent opacity-0 blur-lg transition duration-700 group-hover:left-[70%] group-hover:opacity-100" />
                  </div>

                  <div className="relative overflow-hidden rounded-[27px] border border-white/10 bg-[#070707]">
                    <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                      </div>

                      <p className="text-[9px] tracking-[0.25em] text-white/25">
                        KYVORIQ EXPERIENCE
                      </p>
                    </div>

                    <div className="relative min-h-[550px] overflow-hidden p-8">
                      <div className="absolute right-[-95px] top-[-35px] h-72 w-72 rounded-full border border-white/[0.06]" />

                      <div className="absolute right-[-20px] top-[42px] h-44 w-44 rounded-full border border-white/[0.06]" />

                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] tracking-[0.22em] text-white/30">
                            DIGITAL PRESENCE
                          </p>

                          <span className="rounded-full border border-[#6d5eff]/30 bg-[#6d5eff]/10 px-3 py-1 text-[8px] tracking-[0.18em] text-[#aaa3ff]">
                            ONLINE
                          </span>
                        </div>

                        <h2 className="mt-24 text-6xl font-medium leading-[0.88] tracking-[-0.062em]">
                          Built
                          <br />
                          to earn
                          <br />
                          attention.
                        </h2>

                        <p className="mt-8 max-w-xs text-sm leading-6 text-white/36">
                          Clear strategy, sharp design and technology focused
                          on one thing — moving the business forward.
                        </p>

                        <div className="mt-14 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                            <p className="text-[9px] tracking-[0.2em] text-white/25">
                              FOCUS
                            </p>

                            <p className="mt-8 text-sm text-white/70">
                              Business growth
                            </p>
                          </div>

                          <div className="rounded-2xl border border-[#6d5eff]/20 bg-gradient-to-br from-[#6d5eff]/[0.18] to-white/[0.025] p-5">
                            <p className="text-[9px] tracking-[0.2em] text-white/25">
                              STANDARD
                            </p>

                            <p className="mt-8 text-sm text-white/70">
                              No shortcuts
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[66px] left-[12px] rounded-2xl border border-white/10 bg-[#080808]/92 px-6 py-5 backdrop-blur-xl">
                  <p className="text-[9px] tracking-[0.22em] text-white/25">
                    KYVORIQ STANDARD
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    Strategy · Design · Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-hero-bottom
            className="flex flex-col gap-5 border-t border-white/10 pt-6 text-[9px] tracking-[0.15em] text-white/28 sm:flex-row sm:items-center sm:justify-between sm:pt-7 sm:text-[10px] sm:tracking-[0.18em]"
          >
            <p>DIGITAL PRESENCE FOR AMBITIOUS BUSINESSES</p>

            <div className="flex items-center gap-4">
              <span>SCROLL TO EXPLORE</span>
              <span className="h-px w-12 bg-white/20 sm:w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="border-t border-white/10 py-24 sm:py-36">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-[10px] tracking-[0.24em] text-white/35">
                WHY KYVORIQ
              </p>

              <h2
                data-reveal
                className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl"
              >
                Wygląd przyciąga.

                <span className="block text-white/32">
                  Strategia przekonuje.
                </span>
              </h2>
            </div>

            <div data-reveal-copy className="max-w-2xl lg:pt-11">
              <p className="text-lg leading-8 text-white/52 sm:text-xl sm:leading-9">
                Strona internetowa nie powinna być wyłącznie wizytówką. Powinna
                jasno prezentować wartość firmy, budować wiarygodność i ułatwiać
                klientowi wykonanie kolejnego kroku.
              </p>

              <div className="mt-10 grid gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:mt-12 sm:grid-cols-2">
                {standards.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7669ff]" />
                    <span className="text-sm text-white/55">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="uslugi"
        className="border-t border-white/10 py-24 sm:py-36"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-10">
            <div>
              <p className="text-[10px] tracking-[0.24em] text-white/35">
                CAPABILITIES
              </p>

              <h2
                data-reveal
                className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl"
              >
                Od pomysłu

                <span className="block text-white/32">
                  do obecności online.
                </span>
              </h2>
            </div>

            <p
              data-reveal-copy
              className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              Łączymy komunikację, design i technologię w jeden spójny projekt
              dopasowany do celu firmy.
            </p>
          </div>

          <div className="mt-16 border-t border-white/10 sm:mt-20">
            {services.map((service) => (
              <article
                data-service
                key={service.number}
                className="group grid gap-5 border-b border-white/10 py-8 transition sm:py-10 md:grid-cols-[90px_1fr_1fr] md:items-center md:gap-6"
              >
                <span className="text-xs text-white/25">{service.number}</span>

                <div>
                  <p className="text-[9px] tracking-[0.22em] text-white/25">
                    {service.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em] transition duration-300 group-hover:translate-x-2 sm:text-4xl">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-xl leading-7 text-white/45">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="realizacje"
        className="relative overflow-hidden border-t border-white/10 py-24 sm:py-36"
      >
        <div className="pointer-events-none absolute right-[-35%] top-[12%] h-[600px] w-[600px] rounded-full bg-[#6d5eff]/[0.06] blur-[155px] sm:right-[-18%] sm:h-[700px] sm:w-[700px] sm:blur-[175px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-10">
            <div>
              <p className="text-[10px] tracking-[0.24em] text-white/35">
                SELECTED WORK
              </p>

              <h2
                data-reveal
                className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl"
              >
                Projekty stworzone

                <span className="block text-white/32">
                  żeby robić różnicę.
                </span>
              </h2>
            </div>

            <p
              data-reveal-copy
              className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:justify-self-end"
            >
              Pierwsze realizacje są projektami koncepcyjnymi. Każdy z nich
              pokazuje inny charakter, branżę i sposób prowadzenia użytkownika.
            </p>
          </div>

          <div className="mt-16 space-y-6 sm:mt-20 sm:space-y-8">
            {/* PROJECT 01 */}
            <article
              data-project
              className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#080808] transition duration-500 hover:border-white/20 hover:shadow-[0_45px_120px_rgba(0,0,0,.42)] sm:rounded-[34px]"
            >
              <div className="grid min-h-[620px] lg:min-h-[690px] lg:grid-cols-[0.74fr_1.26fr]">
                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.22em] text-white/28">
                        01 / HEALTHCARE
                      </span>

                      <span className="text-xs text-white/22">2026</span>
                    </div>

                    <h3 className="mt-14 text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:mt-20 sm:text-7xl">
                      Aurora
                      <br />
                      Dental.
                    </h3>

                    <p className="mt-7 max-w-sm leading-7 text-white/43">
                      Spokojna, elegancka strona kliniki, która buduje zaufanie
                      i upraszcza drogę od pierwszego wejścia do rezerwacji.
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="flex flex-wrap gap-2">
                      {["STRATEGY", "UX/UI", "DEVELOPMENT"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-4 py-2 text-[9px] tracking-[0.18em] text-white/32"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-8 flex items-center gap-4 text-sm text-white/80"
                    >
                      Projekt w przygotowaniu

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:bg-white group-hover:text-black">
                        ↗
                      </span>
                    </button>
                  </div>
                </div>

                <div className="relative min-h-[490px] overflow-hidden bg-[#ded7cb] sm:min-h-[540px] lg:min-h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,.92),transparent_38%)]" />

                  <div className="absolute left-[7%] top-[8%] w-[86%] rotate-[2deg] rounded-[20px] border border-black/10 bg-[#f6f2eb] p-2 shadow-[0_45px_90px_rgba(47,36,22,.24)] transition duration-700 group-hover:rotate-0 group-hover:scale-[1.025] sm:left-[8%] sm:top-[9%] sm:w-[84%] sm:rounded-[26px] sm:p-3">
                    <div className="overflow-hidden rounded-[15px] border border-black/10 bg-[#f7f3ed] text-[#161616] sm:rounded-[19px]">
                      <div className="flex h-12 items-center justify-between border-b border-black/10 px-4 sm:h-14 sm:px-5">
                        <p className="text-xs font-semibold tracking-[0.18em] sm:text-sm">
                          AURORA
                        </p>

                        <div className="hidden gap-5 text-[9px] text-black/45 sm:flex">
                          <span>KLINIKA</span>
                          <span>ZABIEGI</span>
                          <span>KONTAKT</span>
                        </div>
                      </div>

                      <div className="relative min-h-[420px] overflow-hidden p-6 sm:min-h-[510px] sm:p-12">
                        <p className="text-[9px] tracking-[0.22em] text-black/38">
                          MODERN DENTAL CARE
                        </p>

                        <h4 className="mt-10 max-w-xl text-4xl font-medium leading-[0.93] tracking-[-0.058em] sm:mt-14 sm:text-6xl">
                          Confidence
                          <br />
                          begins with
                          <br />
                          a smile.
                        </h4>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-black/48 sm:mt-7">
                          Nowoczesna opieka, spokojna atmosfera i precyzja
                          dopasowana do pacjenta.
                        </p>

                        <div className="mt-8 inline-flex rounded-full bg-black px-5 py-3 text-xs text-white sm:mt-9 sm:px-6 sm:text-sm">
                          Umów konsultację →
                        </div>

                        <div className="absolute bottom-[-65px] right-[-60px] h-64 w-64 rounded-full border border-black/10 sm:right-[-35px] sm:h-72 sm:w-72" />

                        <div className="absolute bottom-[5px] right-[20px] h-32 w-32 rounded-full bg-[#cbbda9] sm:right-[34px] sm:h-40 sm:w-40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 02 */}
            <article
              data-project
              className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#080808] transition duration-500 hover:border-white/20 hover:shadow-[0_45px_120px_rgba(0,0,0,.42)] sm:rounded-[34px]"
            >
              <div className="grid min-h-[620px] lg:min-h-[690px] lg:grid-cols-[1.26fr_0.74fr]">
                <div className="relative order-2 min-h-[490px] overflow-hidden bg-[#101319] sm:min-h-[540px] lg:order-1 lg:min-h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_74%,rgba(109,94,255,.20),transparent_42%)]" />

                  <div className="absolute left-[7%] top-[8%] w-[86%] -rotate-[2deg] rounded-[20px] border border-white/10 bg-[#101319] p-2 shadow-[0_45px_100px_rgba(0,0,0,.5)] transition duration-700 group-hover:rotate-0 group-hover:scale-[1.025] sm:left-[8%] sm:top-[9%] sm:w-[84%] sm:rounded-[26px] sm:p-3">
                    <div className="overflow-hidden rounded-[15px] border border-white/10 bg-[#0b0e13] sm:rounded-[19px]">
                      <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:h-14 sm:px-5">
                        <p className="text-xs font-semibold tracking-[0.18em] sm:text-sm">
                          NORDBUILD
                        </p>

                        <div className="hidden gap-5 text-[9px] text-white/32 sm:flex">
                          <span>PROJEKTY</span>
                          <span>PROCES</span>
                          <span>KONTAKT</span>
                        </div>
                      </div>

                      <div className="relative min-h-[420px] overflow-hidden p-6 sm:min-h-[510px] sm:p-12">
                        <p className="text-[9px] tracking-[0.22em] text-white/30">
                          ARCHITECTURE & CONSTRUCTION
                        </p>

                        <h4 className="mt-10 max-w-xl text-4xl font-medium leading-[0.93] tracking-[-0.058em] sm:mt-14 sm:text-6xl">
                          Built with
                          <br />
                          precision.
                          <br />
                          Made to last.
                        </h4>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-white/38 sm:mt-7">
                          Kompleksowe realizacje dla inwestorów oczekujących
                          jakości, przejrzystości i kontroli.
                        </p>

                        <div className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-xs sm:mt-9 sm:px-6 sm:text-sm">
                          Zobacz realizacje →
                        </div>

                        <div className="absolute bottom-0 right-0 h-[44%] w-[48%] border-l border-t border-white/10 bg-white/[0.025]" />

                        <div className="absolute bottom-[8%] right-[7%] h-[30%] w-[32%] border border-[#6d5eff]/20 bg-[#6d5eff]/[0.06]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 order-1 flex flex-col justify-between p-7 sm:p-12 lg:order-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.22em] text-white/28">
                        02 / CONSTRUCTION
                      </span>

                      <span className="text-xs text-white/22">2026</span>
                    </div>

                    <h3 className="mt-14 text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:mt-20 sm:text-7xl">
                      Nord
                      <br />
                      Build.
                    </h3>

                    <p className="mt-7 max-w-sm leading-7 text-white/43">
                      Mocna witryna dla firmy budowlanej, która porządkuje
                      ofertę, eksponuje realizacje i zwiększa liczbę zapytań.
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="flex flex-wrap gap-2">
                      {["WEB DESIGN", "STRATEGY", "DEVELOPMENT"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-4 py-2 text-[9px] tracking-[0.18em] text-white/32"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-8 flex items-center gap-4 text-sm text-white/80"
                    >
                      Projekt w przygotowaniu

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:bg-white group-hover:text-black">
                        ↗
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/28">
              Kolejne realizacje pojawią się wkrótce.
            </p>

            <a
              href="#kontakt"
              className="group flex items-center gap-3 text-sm text-white/70"
            >
              Stwórzmy następny projekt

              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="proces"
        className="border-t border-white/10 py-24 sm:py-36"
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <p className="text-[10px] tracking-[0.24em] text-white/35">
            OUR PROCESS
          </p>

          <div className="mt-7 grid gap-9 sm:mt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <h2
              data-reveal
              className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:text-7xl"
            >
              Jasny proces.

              <span className="block text-white/32">Zero zgadywania.</span>
            </h2>

            <p
              data-reveal-copy
              className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:justify-self-end lg:pt-4"
            >
              Od pierwszej rozmowy do uruchomienia strony wiesz, co robimy,
              dlaczego to robimy i jaki jest kolejny etap.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:mt-16 sm:rounded-[30px] md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                data-process-card
                key={step.number}
                className="group min-h-64 bg-[#080808] p-7 transition hover:bg-[#0b0b0b] sm:min-h-80 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/25">{step.number}</span>

                  <span className="h-2 w-2 rounded-full border border-white/20 transition group-hover:border-[#8f84ff] group-hover:bg-[#6d5eff]" />
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em] sm:mt-24">
                  {step.title}
                </h3>

                <p className="mt-5 leading-7 text-white/42">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontakt"
        className="relative overflow-hidden border-t border-white/10 py-24 sm:py-36"
      >
        <div className="pointer-events-none absolute bottom-[-28%] left-[-25%] h-[600px] w-[600px] rounded-full bg-[#6d5eff]/[0.07] blur-[155px] sm:left-[-12%] sm:h-[760px] sm:w-[760px] sm:blur-[185px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-[10px] tracking-[0.24em] text-white/35">
                START A PROJECT
              </p>

              <h2
                data-reveal
                className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl sm:leading-[0.95] sm:tracking-[-0.06em]"
              >
                Twoja marka

                <span className="block text-white/32">
                  zasługuje na więcej.
                </span>
              </h2>

              <p
                data-reveal-copy
                className="mt-7 max-w-lg text-base leading-7 text-white/45 sm:mt-8 sm:text-lg sm:leading-8"
              >
                Opowiedz krótko o firmie i celu projektu. Odpowiemy z propozycją
                kierunku, zakresem prac i kolejnymi krokami.
              </p>

              <div className="mt-12 space-y-8 border-t border-white/10 pt-8 sm:mt-14">
                <div>
                  <p className="text-[9px] tracking-[0.22em] text-white/25">
                    EMAIL
                  </p>

                  <a
                    href="mailto:kontakt@kyvoriq.pl"
                    className="mt-2 inline-block break-all text-lg transition hover:text-[#aaa3ff] sm:text-xl"
                  >
                    kontakt@kyvoriq.pl
                  </a>
                </div>

                <div>
                  <p className="text-[9px] tracking-[0.22em] text-white/25">
                    DOSTĘPNOŚĆ
                  </p>

                  <p className="mt-2 text-white/62">
                    Otwarte na nowe projekty
                  </p>
                </div>
              </div>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-[26px] border border-white/10 bg-white/[0.024] p-5 sm:rounded-[34px] sm:p-10"
            >
              <input type="hidden" name="access_key" value={accessKey} />

              <input
                type="hidden"
                name="subject"
                value="Nowe zapytanie ze strony KYVORIQ"
              />

              <input
                type="hidden"
                name="from_name"
                value="KYVORIQ Website"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] tracking-[0.18em] text-white/35">
                    IMIĘ
                  </span>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Jak masz na imię?"
                    className="mt-3 w-full border-b border-white/10 bg-transparent py-4 text-base outline-none transition placeholder:text-white/18 focus:border-[#7568ff]/60 sm:text-lg"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] tracking-[0.18em] text-white/35">
                    FIRMA
                  </span>

                  <input
                    name="company"
                    type="text"
                    placeholder="Nazwa firmy"
                    className="mt-3 w-full border-b border-white/10 bg-transparent py-4 text-base outline-none transition placeholder:text-white/18 focus:border-[#7568ff]/60 sm:text-lg"
                  />
                </label>
              </div>

              <label className="mt-8 block">
                <span className="text-[10px] tracking-[0.18em] text-white/35">
                  EMAIL
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="kontakt@twojafirma.pl"
                  className="mt-3 w-full border-b border-white/10 bg-transparent py-4 text-base outline-none transition placeholder:text-white/18 focus:border-[#7568ff]/60 sm:text-lg"
                />
              </label>

              <label className="mt-8 block">
                <span className="text-[10px] tracking-[0.18em] text-white/35">
                  O PROJEKCIE
                </span>

                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Czego potrzebujesz i jaki cel ma spełniać strona?"
                  className="mt-3 w-full resize-none border-b border-white/10 bg-transparent py-4 text-base outline-none transition placeholder:text-white/18 focus:border-[#7568ff]/60 sm:text-lg"
                />
              </label>

              {!accessKey && (
                <p className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-xs leading-5 text-amber-100/70">
                  Brakuje klucza Web3Forms w pliku .env.local. Formularz nie
                  wyśle wiadomości, dopóki go nie dodasz i nie uruchomisz
                  ponownie serwera.
                </p>
              )}

              <div className="mt-9 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-white/24">
                  Wysyłając formularz, przekazujesz dane wyłącznie w celu
                  odpowiedzi na zapytanie.
                </p>

                <button
                  type="submit"
                  disabled={!accessKey}
                  className="group inline-flex w-full items-center justify-center gap-4 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                >
                  Wyślij zapytanie

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-6 sm:py-12 lg:px-12">
          <div className="flex flex-col gap-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-[0.26em] text-white sm:text-xl">
                KYVORIQ
              </p>

              <p className="mt-3 text-sm text-white/30">
                Design · Development · Strategy
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/35 sm:items-end">
              <a
                href="mailto:kontakt@kyvoriq.pl"
                className="transition hover:text-white"
              >
                kontakt@kyvoriq.pl
              </a>

              <p>© 2026 KYVORIQ</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}