import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Stomatologia zachowawcza",
    description:
      "Kompleksowe leczenie zębów prowadzone spokojnie, precyzyjnie i bez zbędnego stresu.",
  },
  {
    number: "02",
    title: "Estetyka uśmiechu",
    description:
      "Naturalne efekty dopasowane do rysów twarzy, oczekiwań i indywidualnych potrzeb pacjenta.",
  },
  {
    number: "03",
    title: "Implantologia",
    description:
      "Nowoczesne rozwiązania pozwalające bezpiecznie odbudować komfort i pewność siebie.",
  },
  {
    number: "04",
    title: "Higienizacja",
    description:
      "Profesjonalna profilaktyka, która pomaga zachować zdrowy i świeży uśmiech na dłużej.",
  },
];

const benefits = [
  "Indywidualny plan leczenia",
  "Nowoczesna diagnostyka",
  "Spokojna atmosfera",
  "Doświadczony zespół",
];

const reviews = [
  {
    text: "Pierwszy raz wizyta u dentysty nie wiązała się dla mnie ze stresem. Wszystko zostało dokładnie wyjaśnione, a efekt jest świetny.",
    author: "Anna K.",
  },
  {
    text: "Bardzo profesjonalne podejście, piękne wnętrze i ogromna dbałość o komfort pacjenta na każdym etapie.",
    author: "Michał R.",
  },
  {
    text: "Klinika, do której naprawdę chce się wracać. Czułam się zaopiekowana od pierwszego telefonu aż do zakończenia leczenia.",
    author: "Karolina M.",
  },
];

export default function AuroraDentalPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee6] text-[#171512] selection:bg-[#b8a48c] selection:text-white">
      {/* NAVIGATION */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:h-24 sm:px-8 lg:px-12">
          <Link
            href="/projekty/aurora-dental"
            className="text-[15px] font-semibold tracking-[0.3em]"
          >
            AURORA
          </Link>

          <nav className="hidden items-center gap-8 text-xs tracking-[0.12em] text-black/55 md:flex">
            <a href="#o-nas" className="transition hover:text-black">
              O KLINICE
            </a>

            <a href="#uslugi" className="transition hover:text-black">
              ZABIEGI
            </a>

            <a href="#opinie" className="transition hover:text-black">
              OPINIE
            </a>

            <a href="#kontakt" className="transition hover:text-black">
              KONTAKT
            </a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-full bg-[#171512] px-5 py-3 text-xs font-medium text-white transition hover:scale-[1.03]"
          >
            Umów wizytę
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-18%] top-[-20%] h-[720px] w-[720px] rounded-full border border-black/[0.07]" />
          <div className="absolute right-[2%] top-[10%] h-[470px] w-[470px] rounded-full border border-black/[0.08]" />
          <div className="absolute bottom-[-25%] left-[-12%] h-[650px] w-[650px] rounded-full bg-[#d6c7b3]/45 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-[1440px] items-center gap-14 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="relative z-10">
            <p className="text-[10px] tracking-[0.27em] text-black/42">
              NOWOCZESNA STOMATOLOGIA · WARSZAWA
            </p>

            <h1 className="mt-8 max-w-3xl text-[54px] font-medium leading-[0.9] tracking-[-0.06em] min-[390px]:text-[64px] sm:text-[88px] lg:text-[104px]">
              Confidence
              <span className="block text-black/30">begins with</span>
              <span className="block">a smile.</span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-7 text-black/52 sm:text-lg sm:leading-8">
              Nowoczesna klinika, w której zaawansowana technologia spotyka się
              ze spokojnym podejściem, naturalną estetyką i prawdziwą troską o
              pacjenta.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-[#171512] px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                Umów konsultację
                <span className="ml-4">→</span>
              </a>

              <a
                href="#uslugi"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-sm transition hover:border-black/35"
              >
                Poznaj zabiegi
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-[22px] border border-black/10 bg-black/10">
              <div className="bg-[#f3eee6] p-5">
                <p className="text-3xl font-medium tracking-[-0.05em]">12+</p>
                <p className="mt-2 text-[9px] tracking-[0.12em] text-black/38">
                  LAT DOŚWIADCZENIA
                </p>
              </div>

              <div className="bg-[#f3eee6] p-5">
                <p className="text-3xl font-medium tracking-[-0.05em]">4.9</p>
                <p className="mt-2 text-[9px] tracking-[0.12em] text-black/38">
                  OCENA PACJENTÓW
                </p>
              </div>

              <div className="bg-[#f3eee6] p-5">
                <p className="text-3xl font-medium tracking-[-0.05em]">3k+</p>
                <p className="mt-2 text-[9px] tracking-[0.12em] text-black/38">
                  PIĘKNYCH UŚMIECHÓW
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative min-h-[560px] lg:min-h-[720px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[540px] w-[540px] rounded-full bg-[#cdbca5]/35 blur-[110px]" />

              <div className="relative h-[520px] w-[86%] max-w-[590px] overflow-hidden rounded-[240px_240px_48px_48px] bg-[#d7c6b0] shadow-[0_45px_110px_rgba(62,49,35,.2)] sm:h-[650px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,rgba(255,255,255,.85),transparent_35%)]" />

                <div className="absolute inset-x-[12%] bottom-[10%] top-[16%] rounded-[180px_180px_38px_38px] border border-white/40 bg-gradient-to-b from-white/55 to-white/10 backdrop-blur-sm" />

                <div className="absolute left-1/2 top-[18%] h-32 w-32 -translate-x-1/2 rounded-full border border-black/10 bg-[#eee6da] shadow-[0_20px_50px_rgba(76,60,43,.12)] sm:h-40 sm:w-40" />

                <div className="absolute left-1/2 top-[34%] h-[250px] w-[56%] -translate-x-1/2 rounded-[120px_120px_30px_30px] bg-[#c3aa8e]/75 sm:h-[330px]" />

                <div className="absolute bottom-[8%] left-[8%] right-[8%] rounded-[28px] border border-white/45 bg-white/55 p-5 backdrop-blur-xl sm:p-6">
                  <p className="text-[9px] tracking-[0.22em] text-black/35">
                    AURORA STANDARD
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xl font-medium tracking-[-0.03em]">
                        Naturalne efekty.
                      </p>

                      <p className="mt-1 text-sm text-black/45">
                        Bez kompromisów.
                      </p>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171512] text-white">
                      ↗
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-[18%] hidden rounded-2xl border border-black/10 bg-white/55 px-5 py-4 shadow-[0_20px_55px_rgba(60,45,30,.12)] backdrop-blur-xl sm:block">
                <p className="text-[8px] tracking-[0.2em] text-black/35">
                  DOSTĘPNOŚĆ
                </p>

                <p className="mt-2 text-sm">Konsultacje w tym tygodniu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="o-nas" className="border-t border-black/10 py-24 sm:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-black/38">
              O KLINICE
            </p>

            <h2 className="mt-7 text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-7xl">
              Leczymy spokojnie.
              <span className="block text-black/28">Projektujemy uśmiechy.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-12">
            <p className="text-lg leading-8 text-black/55 sm:text-xl sm:leading-9">
              Aurora powstała z przekonania, że nowoczesna stomatologia może
              być jednocześnie precyzyjna, komfortowa i naturalna. Każdą
              terapię rozpoczynamy od rozmowy i dokładnego poznania potrzeb
              pacjenta.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 border-t border-black/10 pt-4"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9d8468]" />
                  <span className="text-sm text-black/55">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="uslugi"
        className="border-t border-black/10 bg-[#171512] py-24 text-white sm:py-36"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-[10px] tracking-[0.25em] text-white/35">
            ZABIEGI
          </p>

          <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-7xl">
              Wszystko, czego
              <span className="block text-white/28">potrzebuje Twój uśmiech.</span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-white/45 lg:justify-self-end lg:pt-4">
              Łączymy diagnostykę, leczenie i estetykę w jeden przejrzysty plan
              dopasowany do zdrowia, komfortu i oczekiwanego efektu.
            </p>
          </div>

          <div className="mt-16 border-t border-white/10 sm:mt-20">
            {services.map((service) => (
              <article
                key={service.number}
                className="group grid gap-5 border-b border-white/10 py-8 transition sm:py-10 md:grid-cols-[80px_1fr_1fr] md:items-center"
              >
                <span className="text-xs text-white/25">
                  {service.number}
                </span>

                <h3 className="text-3xl font-medium tracking-[-0.035em] transition group-hover:translate-x-2 sm:text-4xl">
                  {service.title}
                </h3>

                <p className="max-w-xl leading-7 text-white/42">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="opinie" className="py-24 sm:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-[10px] tracking-[0.25em] text-black/38">
            OPINIE PACJENTÓW
          </p>

          <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-7xl">
            Zaufanie budowane
            <span className="block text-black/28">wizytę po wizycie.</span>
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="flex min-h-[320px] flex-col justify-between bg-[#f3eee6] p-7 sm:p-9"
              >
                <p className="text-lg leading-8 text-black/58">
                  „{review.text}”
                </p>

                <div className="mt-10">
                  <p className="font-medium">{review.author}</p>
                  <p className="mt-1 text-xs tracking-[0.15em] text-black/35">
                    ZWERYFIKOWANA OPINIA
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontakt"
        className="relative overflow-hidden border-t border-black/10 py-24 sm:py-36"
      >
        <div className="pointer-events-none absolute bottom-[-60%] right-[-15%] h-[700px] w-[700px] rounded-full bg-[#cfbda6]/45 blur-[140px]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-black/38">
              UMÓW KONSULTACJĘ
            </p>

            <h2 className="mt-7 text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-7xl">
              Twój nowy uśmiech
              <span className="block text-black/28">zaczyna się tutaj.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/50">
              Napisz do nas lub zadzwoń. Zespół Aurory pomoże dobrać odpowiedni
              termin i odpowie na pierwsze pytania dotyczące leczenia.
            </p>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-white/45 p-7 backdrop-blur-xl sm:p-10">
            <div className="border-b border-black/10 pb-7">
              <p className="text-[9px] tracking-[0.2em] text-black/35">
                TELEFON
              </p>

              <a
                href="tel:+48123456789"
                className="mt-2 block text-2xl font-medium"
              >
                +48 123 456 789
              </a>
            </div>

            <div className="border-b border-black/10 py-7">
              <p className="text-[9px] tracking-[0.2em] text-black/35">
                EMAIL
              </p>

              <a
                href="mailto:kontakt@auroradental.pl"
                className="mt-2 block text-xl font-medium"
              >
                kontakt@auroradental.pl
              </a>
            </div>

            <div className="pt-7">
              <p className="text-[9px] tracking-[0.2em] text-black/35">
                GODZINY
              </p>

              <p className="mt-2 text-lg">Pon.–Pt. 08:00–20:00</p>
            </div>

            <a
              href="mailto:kontakt@auroradental.pl"
              className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-[#171512] px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Umów wizytę
              <span className="ml-4">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-semibold tracking-[0.28em]">AURORA</p>

          <p className="text-xs text-black/35">
            Projekt koncepcyjny stworzony przez KYVORIQ
          </p>

          <Link
            href="/#realizacje"
            className="text-sm text-black/50 transition hover:text-black"
          >
            Wróć do KYVORIQ →
          </Link>
        </div>
      </footer>
    </main>
  );
}