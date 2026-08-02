import Menu from "@/components/Menu";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const stats = [
  { value: "24h", label: "Czas odpowiedzi" },
  { value: "100%", label: "Indywidualny projekt" },
  { value: "SEO", label: "Gotowe od początku" },
];

export default function Hero() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/78 backdrop-blur-2xl">
        <Container>
          <nav className="flex h-16 items-center justify-between sm:h-20">
            <a
              href="#top"
              aria-label="KYVORIQ — strona główna"
              className="group inline-flex items-center gap-3"
            >
              <Logo
                variant="gradient"
                className="h-8 w-auto transition duration-300 group-hover:scale-[1.06] sm:h-9"
              />
              <span className="hidden text-[13px] font-semibold tracking-[0.28em] text-white sm:block">
                KYVORIQ
              </span>
            </a>

            <div className="flex items-center gap-4">
              <span className="hidden text-[10px] tracking-[0.22em] text-white/30 md:block">
                DIGITAL STUDIO
              </span>
              <Menu />
            </div>
          </nav>
        </Container>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-20 sm:pt-24"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-22%] top-[5%] h-[620px] w-[620px] rounded-full bg-[#7c3aed]/[0.16] blur-[170px] sm:h-[820px] sm:w-[820px] sm:blur-[220px]" />
          <div className="absolute right-[-22%] top-[-12%] h-[680px] w-[680px] rounded-full bg-[#4f7dff]/[0.12] blur-[180px] sm:h-[900px] sm:w-[900px] sm:blur-[230px]" />
          <div className="absolute right-[12%] top-[34%] h-[420px] w-[420px] rounded-full bg-[#63d8ff]/[0.07] blur-[150px]" />
          <div className="absolute bottom-[-22%] left-[38%] h-[520px] w-[520px] rounded-full bg-[#4ade80]/[0.05] blur-[175px]" />

          <div className="absolute left-1/2 top-[26%] h-[320px] w-[900px] -translate-x-1/2 -rotate-[10deg] rounded-[100%] bg-gradient-to-r from-[#7c3aed]/[0.05] via-[#4f7dff]/[0.07] to-[#63d8ff]/[0.04] blur-[90px]" />

          <div className="absolute right-[-68%] top-[-10%] h-[650px] w-[650px] rounded-full border border-white/[0.035] sm:right-[-24%] sm:h-[1050px] sm:w-[1050px]" />
          <div className="absolute right-[-42%] top-[14%] h-[480px] w-[480px] rounded-full border border-[#4f7dff]/[0.06] sm:right-[-7%] sm:h-[760px] sm:w-[760px]" />
          <div className="absolute right-[-12%] top-[33%] h-[260px] w-[260px] rounded-full border border-[#63d8ff]/[0.05] sm:right-[5%] sm:h-[430px] sm:w-[430px]" />

          <div
            className="absolute inset-0 opacity-[0.016]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.42) 1px, transparent 1px)",
              backgroundPosition: "30px 0",
              backgroundSize: "88px 88px",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#050505]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505] via-[#050505]/82 to-transparent" />
        </div>

        <div className="pointer-events-none absolute bottom-[-3vw] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[17vw] font-semibold tracking-[-0.09em] text-white/[0.016] lg:block">
          KYVORIQ
        </div>

        <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24">
          <div className="grid min-h-[calc(100vh-120px)] items-center gap-16 lg:min-h-[calc(100vh-150px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <div className="relative z-10">
              <div data-hero-eyebrow className="mb-7 flex items-center gap-4 sm:mb-8">
                <span className="h-px w-10 bg-white/25 sm:w-12" />
                <p className="text-[9px] tracking-[0.2em] text-white/40 sm:text-[10px] sm:tracking-[0.24em]">
                  WEB DESIGN · DEVELOPMENT · STRATEGY
                </p>
              </div>

              <div
                data-hero-copy
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[9px] tracking-[0.18em] text-white/48 sm:text-[10px]">
                  OTWARCI NA NOWE PROJEKTY
                </span>
              </div>

              <h1 className="max-w-[920px] overflow-visible pb-[0.13em] text-[46px] font-semibold leading-[0.9] tracking-[-0.052em] min-[390px]:text-[54px] sm:text-[76px] lg:text-[88px] xl:text-[102px]">
                <span data-hero-line className="block">
                  Websites that
                </span>
                <span data-hero-line className="block text-white/32">
                  work like your best
                </span>
                <span
                  data-hero-line
                  className="block bg-gradient-to-r from-white via-white to-[#8f84ff] bg-clip-text pb-[0.08em] text-transparent"
                >
                  salesperson.
                </span>
              </h1>

              <div
                data-hero-copy
                className="mt-9 max-w-2xl border-l border-white/15 pl-5 sm:mt-11 sm:pl-6"
              >
                <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8 xl:text-xl">
                  Projektuję nowoczesne strony internetowe, które budują
                  zaufanie, przyciągają uwagę i zamieniają odwiedzających
                  w klientów.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#kontakt" icon="→">
                    Rozpocznij projekt
                  </Button>
                  <Button href="#realizacje" variant="outline">
                    Zobacz realizacje
                  </Button>
                </div>
              </div>

              <div
                data-hero-tags
                className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-[9px] tracking-[0.18em] text-white/27 sm:mt-12 sm:gap-x-9 sm:text-[10px]"
              >
                <span>STRATEGY-LED</span>
                <span>RESPONSIVE</span>
                <span>BUILT FOR GROWTH</span>
              </div>

              <div className="mt-9 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group bg-[#070707]/95 p-4 transition hover:bg-white/[0.045] sm:p-5"
                  >
                    <p className="text-xl font-medium tracking-[-0.045em] transition group-hover:text-[#b8afff] min-[390px]:text-2xl sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[8px] leading-4 tracking-[0.1em] text-white/28 min-[390px]:text-[9px] sm:text-[10px]">
                      {stat.label.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-hero-visual
              data-parallax
              className="relative hidden min-h-[700px] lg:block"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#7c3aed]/[0.14] via-[#4f7dff]/[0.1] to-[#63d8ff]/[0.06] blur-[175px]" />
                <div className="absolute right-[2%] top-[13%] h-[430px] w-[430px] rounded-full border border-white/[0.05]" />
                <div className="absolute right-[12%] top-[24%] h-[270px] w-[270px] rounded-full border border-[#7468ff]/[0.11]" />

                <div className="group relative w-[510px] rotate-[4deg] transition duration-700 hover:rotate-[1deg] hover:scale-[1.015]">
                  <div className="absolute -inset-12 rounded-[80px] bg-gradient-to-br from-[#7c3aed]/[0.13] via-[#4f7dff]/[0.09] to-[#63d8ff]/[0.05] blur-[85px] transition duration-700 group-hover:from-[#7c3aed]/[0.18] group-hover:via-[#4f7dff]/[0.13] group-hover:to-[#63d8ff]/[0.08]" />

                  <div className="relative rounded-[38px] border border-white/10 bg-[#0a0a0a]/90 p-3 shadow-[0_60px_150px_rgba(0,0,0,.82)] backdrop-blur-2xl">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[38px]">
                      <div className="absolute left-[-45%] top-[-40%] h-[120%] w-[45%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 blur-xl transition-all duration-1000 group-hover:left-[105%] group-hover:opacity-100" />
                    </div>

                    <div className="relative overflow-hidden rounded-[29px] border border-white/10 bg-[#070707]">
                      <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <p className="text-[8px] tracking-[0.22em] text-white/25">
                            KYVORIQ EXPERIENCE
                          </p>
                        </div>
                      </div>

                      <div className="relative min-h-[585px] overflow-hidden p-8">
                        <div className="absolute right-[-100px] top-[-50px] h-80 w-80 rounded-full border border-white/[0.055]" />
                        <div className="absolute right-[-10px] top-[55px] h-48 w-48 rounded-full border border-white/[0.055]" />
                        <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-[#6d5eff]/[0.08] blur-[80px]" />

                        <div className="relative z-10">
                          <div className="flex items-center justify-between">
                            <p className="text-[9px] tracking-[0.22em] text-white/30">
                              DIGITAL PRESENCE
                            </p>
                            <span className="rounded-full border border-[#63d8ff]/25 bg-gradient-to-r from-[#7c3aed]/10 to-[#63d8ff]/10 px-3 py-1 text-[8px] tracking-[0.18em] text-[#b9eaff]">
                              ONLINE
                            </span>
                          </div>

                          <h2 className="mt-20 text-[62px] font-medium leading-[0.88] tracking-[-0.065em]">
                            Designed
                            <br />
                            to be
                            <br />
                            remembered.
                          </h2>

                          <p className="mt-8 max-w-xs text-sm leading-6 text-white/36">
                            Strategy, design and development working together
                            to create a digital presence that moves people.
                          </p>

                          <div className="mt-11 flex items-center gap-4">
                            <div className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-medium text-black">
                              Start a project →
                            </div>
                            <p className="text-[9px] tracking-[0.18em] text-white/25">
                              KYVORIQ.PL
                            </p>
                          </div>

                          <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                              <p className="text-[8px] tracking-[0.2em] text-white/25">
                                APPROACH
                              </p>
                              <p className="mt-8 text-sm text-white/70">
                                Strategy first
                              </p>
                            </div>

                            <div className="rounded-2xl border border-[#4f7dff]/20 bg-gradient-to-br from-[#7c3aed]/[0.18] via-[#4f7dff]/[0.1] to-[#63d8ff]/[0.04] p-5">
                              <p className="text-[8px] tracking-[0.2em] text-white/25">
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

                  <div className="relative mx-auto h-3 w-[88%] rounded-b-[30px] border-x border-b border-white/10 bg-gradient-to-b from-[#181818] to-[#080808] shadow-[0_20px_40px_rgba(0,0,0,.55)]">
                    <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-full bg-white/10" />
                  </div>
                </div>

                <div className="absolute bottom-[65px] left-[-5px] rounded-2xl border border-white/10 bg-[#080808]/90 px-6 py-5 shadow-[0_25px_70px_rgba(0,0,0,.5)] backdrop-blur-2xl">
                  <p className="text-[8px] tracking-[0.22em] text-white/25">
                    KYVORIQ STANDARD
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Strategy · Design · Development
                  </p>
                </div>

                <div className="absolute right-[-4px] top-[108px] rounded-2xl border border-[#6d5eff]/20 bg-[#0a0912]/90 px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,.45)] backdrop-blur-2xl">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <p className="text-[8px] tracking-[0.19em] text-white/40">
                      AVAILABLE
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-white/72">New projects</p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-hero-bottom
            className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-[9px] tracking-[0.15em] text-white/28 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:text-[10px] sm:tracking-[0.18em] lg:mt-0"
          >
            <p>DIGITAL EXPERIENCES FOR AMBITIOUS IDEAS</p>
            <div className="flex items-center gap-4">
              <span>SCROLL TO EXPLORE</span>
              <span className="h-px w-12 bg-white/20 sm:w-16" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}