import CarokotNavigation from "@/components/CarokotNavigation";
import CarokotPageEffects from "@/components/CarokotPageEffects";
import CarokotGallery from "@/components/CarokotGallery";
import ScheduleModalButton from "@/components/ScheduleModalButton";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

import heroImage from "./hero.jpg";
import aboutImage from "./about.jpg";
import groupImage from "./group.jpg";
import meditationImage from "./meditation.jpg";
import pieceImage from "./piece.jpg";
import beautifullImage from "./beautifull.jpg";
import chillImage from "./chill.jpg";
import coffeImage from "./coffe.jpg";
import jeziorkoImage from "./jeziorko.jpg";
import natureImage from "./nature.jpg";
import teamImage from "./team.jpg";
import withpeopleImage from "./withpeople.jpg";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const instagramUrl = "https://www.instagram.com/carokot.joga/";
const youtubeUrl = "https://www.youtube.com/@caro_kot/videos";
const socialTiles = [
  { src: heroImage.src, width: heroImage.width, height: heroImage.height, label: "Praktyka" },
  { src: aboutImage.src, width: aboutImage.width, height: aboutImage.height, label: "Uważność" },
  { src: groupImage.src, width: groupImage.width, height: groupImage.height, label: "Wspólnota" },
  { src: pieceImage.src, width: pieceImage.width, height: pieceImage.height, label: "Oddech" },
  { src: meditationImage.src, width: meditationImage.width, height: meditationImage.height, label: "Zatrzymanie" },
  { src: beautifullImage.src, width: beautifullImage.width, height: beautifullImage.height, label: "Poranna cisza" },
  { src: chillImage.src, width: chillImage.width, height: chillImage.height, label: "Spokojny oddech" },
  { src: coffeImage.src, width: coffeImage.width, height: coffeImage.height, label: "Chwila dla siebie" },
  { src: jeziorkoImage.src, width: jeziorkoImage.width, height: jeziorkoImage.height, label: "Blisko natury" },
  { src: natureImage.src, width: natureImage.width, height: natureImage.height, label: "Równowaga" },
  { src: teamImage.src, width: teamImage.width, height: teamImage.height, label: "Razem" },
  { src: withpeopleImage.src, width: withpeopleImage.width, height: withpeopleImage.height, label: "Krąg" },
];

const offers = [
  {
    number: "01",
    title: "Zajęcia grupowe",
    description:
      "Wspólna praktyka bez porównywania się i bez presji. Ruch, oddech i przestrzeń, w której możesz być sobą.",
  },
  {
    number: "02",
    title: "Joga 1:1",
    description:
      "Indywidualne spotkania dopasowane do Twojego ciała, samopoczucia, możliwości i celu.",
  },
  {
    number: "03",
    title: "Medytacja i oddech",
    description:
      "Spokojne praktyki, które pomagają zwolnić, odzyskać kontakt ze sobą i znaleźć więcej przestrzeni w codzienności.",
  },
  {
    number: "04",
    title: "Warsztaty",
    description:
      "Spotkania łączące ruch, odpoczynek i uważność. Czas na poznawanie siebie bez pośpiechu.",
  },
];

const statements = [
  "Nie musisz być rozciągnięta.",
  "Nie musisz znać pozycji.",
  "Nie musisz być spokojna.",
  "Wystarczy, że przyjdziesz.",
];

const testimonials = [
  {
    quote:
      "Na zajęciach Karoliny pierwszy raz nie czułam, że muszę za kimś nadążać. Mogłam skupić się na sobie, oddechu i tym, czego naprawdę potrzebowało moje ciało.",
    name: "Uczestniczka zajęć",
    detail: "Zajęcia grupowe",
  },
  {
    quote:
      "Przyszłam zestresowana i zmęczona, a wyszłam z poczuciem lekkości i spokojniejszą głową. Atmosfera jest bardzo naturalna i bez żadnej presji.",
    name: "Uczestniczka zajęć",
    detail: "Praktyka stacjonarna",
  },
  {
    quote:
      "Bałam się, że joga nie jest dla mnie, bo nie jestem rozciągnięta. Karolina pokazała mi, że wcale nie o to chodzi.",
    name: "Uczestniczka zajęć",
    detail: "Pierwsze zajęcia",
  },
];

const faqItems = [
  {
    question: "Czy muszę mieć doświadczenie?",
    answer:
      "Nie. Zajęcia są odpowiednie również dla osób, które dopiero zaczynają. Wszystko tłumaczymy spokojnie i ćwiczymy bez pośpiechu.",
  },
  {
    question: "Czy muszę być rozciągnięta?",
    answer:
      "Nie. Elastyczność nie jest warunkiem rozpoczęcia praktyki. Joga pomaga stopniowo lepiej poznać ciało i jego aktualne możliwości.",
  },
  {
    question: "Co zabrać na pierwsze zajęcia?",
    answer:
      "Wygodny strój, wodę i otwartość na spokojną praktykę. Informację o macie oraz pozostałych akcesoriach najlepiej potwierdzić przed spotkaniem przez Instagram.",
  },
  {
    question: "Jak długo trwają zajęcia?",
    answer:
      "Czas spotkania zależy od wybranej formy zajęć. Aktualny harmonogram i szczegóły otrzymasz po wysłaniu wiadomości na Instagramie.",
  },
  {
    question: "Czy mogę przyjść sama?",
    answer:
      "Oczywiście. Wiele osób przychodzi na pierwsze zajęcia samodzielnie. Atmosfera jest spokojna, życzliwa i bez porównywania się z innymi.",
  },
  {
    question: "Gdzie odbywają się zajęcia?",
    answer:
      "Zajęcia odbywają się w różnych przestrzeniach, zależnie od aktualnego grafiku. Najczęściej spotykamy się w Studio Yoga Time w Pruszkowie. Aktualne lokalizacje i terminy znajdziesz w grafiku zajęć.",
  },
  {
    question: "Jak zapisać się na pierwsze spotkanie?",
    answer:
      "Najprościej sprawdzić aktualny grafik i dostępne terminy w systemie zapisów Studio Yoga Time. Jeśli nie wiesz, które zajęcia wybrać, napisz na Instagramie @carokot.joga.",
  },
];

export default function CarokotJogaPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f3eee4] text-[#302a24] selection:bg-[#6b7659] selection:text-white">
      <CarokotPageEffects />

      {/* ATMOSFERA STRONY */}
      <div className="carokot-grain pointer-events-none fixed inset-0 z-[90] opacity-[0.075]" />
      <div className="carokot-light pointer-events-none fixed left-[-18vw] top-[-20vh] z-[1] h-[68vw] w-[68vw] rounded-full bg-[#d9c29e]/20 blur-[150px]" />
      <div className="carokot-light-delayed pointer-events-none fixed bottom-[-28vh] right-[-24vw] z-[1] h-[64vw] w-[64vw] rounded-full bg-[#7d8a68]/15 blur-[170px]" />
      {/* LOADING SCREEN */}
      <div className="carokot-loader pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#f3eee4]">
        <div className="text-center">
          <p
            className={`${cormorant.className} text-6xl font-semibold tracking-[0.12em] text-[#302a24] sm:text-8xl`}
          >
            CAROKOT
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.55em] text-[#697458]">
            JOGA
          </p>
        </div>
      </div>

      <style>{`
        @keyframes carokot-loader-out {
          0%, 58% { opacity: 1; visibility: visible; }
          100% { opacity: 0; visibility: hidden; }
        }

        @keyframes carokot-rise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes carokot-soft-zoom {
          from { transform: scale(1.04); }
          to { transform: scale(1); }
        }

        .carokot-loader {
          animation: carokot-loader-out 1.8s ease forwards;
        }

        .carokot-rise {
          animation: carokot-rise 0.9s ease both;
        }

        .carokot-soft-zoom {
          animation: carokot-soft-zoom 1.4s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .carokot-loader,
          .carokot-rise,
          .carokot-soft-zoom {
            animation: none !important;
          }

          .carokot-loader {
            display: none;
          }
        }

        @keyframes carokot-light-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: .62; }
          50% { transform: translate3d(7vw, 5vh, 0) scale(1.08); opacity: .9; }
        }

        @keyframes carokot-light-drift-delayed {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1.02); opacity: .5; }
          50% { transform: translate3d(-6vw, -4vh, 0) scale(1.1); opacity: .78; }
        }

        .carokot-grain {
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.32'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        .carokot-light {
          animation: carokot-light-drift 13s ease-in-out infinite;
        }

        .carokot-light-delayed {
          animation: carokot-light-drift-delayed 16s ease-in-out infinite;
        }

        main a,
        main button {
          transition:
            transform .3s ease,
            background-color .3s ease,
            border-color .3s ease,
            color .3s ease,
            box-shadow .3s ease;
        }

        main a:hover,
        main button:hover {
          box-shadow: 0 14px 40px rgba(48, 42, 36, .10);
        }

        main section {
          isolation: isolate;
        }

        .carokot-section-reveal {
          opacity: 0;
          transform: translateY(42px);
          filter: blur(8px);
          transition:
            opacity .9s cubic-bezier(.2,.7,.2,1),
            transform .9s cubic-bezier(.2,.7,.2,1),
            filter .9s cubic-bezier(.2,.7,.2,1);
        }

        .carokot-section-reveal.carokot-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .carokot-card-reveal {
          opacity: 0;
          transform: translateY(24px) scale(.985);
          transition:
            opacity .7s cubic-bezier(.2,.7,.2,1),
            transform .7s cubic-bezier(.2,.7,.2,1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .carokot-card-reveal.carokot-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .carokot-parallax {
          --parallax-y: 0px;
          transform: translate3d(0, var(--parallax-y), 0) scale(1.01);
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .carokot-light,
          .carokot-light-delayed {
            animation: none !important;
          }

          .carokot-section-reveal,
          .carokot-card-reveal {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .carokot-parallax {
            transform: none !important;
          }
        }

      `}</style>
      {/* NAVIGATION */}
      <header className="absolute inset-x-0 top-0 z-50">
  <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
    {/* LOGO */}
    <a href="#top" className="group flex items-center gap-7">
      <div className="text-center">
        <p
          className={`${cormorant.className} text-[38px] font-semibold leading-none tracking-[0.1em] text-[#241f1a] sm:text-[42px]`}
        >
          CAROKOT
        </p>

        <p className="mt-2 text-[11px] font-medium tracking-[0.46em] text-[#302a24]/70">
          JOGA
        </p>
      </div>

      <span className="hidden h-12 w-px bg-[#302a24]/12 sm:block" />
    </a>

    {/* NAWIGACJA Z AKTYWNĄ SEKCJĄ */}
    <CarokotNavigation />

    {/* CTA */}
    <a
      href={instagramUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-4 rounded-full border border-[#697458]/55 px-6 py-3 text-xs font-medium tracking-[0.12em] text-[#59634b] transition hover:bg-[#697458] hover:text-white"
    >
      NAPISZ DO MNIE

      <span className="transition group-hover:translate-x-1">↗</span>
    </a>
  </div>
</header>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#f3eee4] pt-20 sm:pt-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-24%] top-[-42%] h-[800px] w-[800px] rounded-full bg-[#d8bea0]/20 blur-[190px]" />
        </div>

        <div className="relative mx-auto min-h-[calc(100vh-80px)] max-w-[1600px] px-5 sm:px-8 lg:min-h-[820px] lg:px-12">
          {/* LEWA STRONA */}
          <div className="relative z-20 max-w-[650px] pb-16 pt-14 sm:pt-20 lg:w-[43%] lg:pb-20 lg:pt-24">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#302a24]/20" />

              <p className="text-[10px] font-medium tracking-[0.22em] text-[#302a24]/62 sm:text-[11px]">
                JOGA · ODDECH · RUCH
              </p>
            </div>

            <h1
              className={`${cormorant.className} mt-9 text-[62px] font-medium leading-[0.8] tracking-[-0.055em] min-[390px]:text-[72px] sm:text-[96px] lg:text-[94px] xl:text-[104px]`}
            >
              <span className="block">Joga,</span>

              <span className="block whitespace-nowrap italic text-[#718064]">
                która zaczyna się
              </span>

              <span className="block">od Ciebie.</span>
            </h1>

            <p className="mt-9 max-w-[480px] text-base leading-7 text-[#302a24]/60 sm:text-[17px] sm:leading-8">
              Nieidealna praktyka dla prawdziwych ludzi. Bez oceniania, bez
              udowadniania czegokolwiek i bez presji, że musisz już coś potrafić.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-5 rounded-full bg-[#302a24] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-[#657054]"
              >
                Napisz na Instagramie

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#o-mnie"
                className="inline-flex items-center justify-center rounded-full border border-[#302a24]/15 px-7 py-4 text-sm transition duration-300 hover:border-[#302a24]/40 hover:bg-white/25"
              >
                Poznaj mnie
              </a>
            </div>

            <div className="mt-10 grid max-w-[550px] grid-cols-3 overflow-hidden rounded-[22px] border border-[#302a24]/12 bg-[#f3eee4]">
              <div className="border-r border-[#302a24]/10 px-5 py-5">
                <p className={`${cormorant.className} text-2xl font-semibold sm:text-3xl`}>
                  1:1
                </p>
                <p className="mt-2 text-[8px] leading-4 tracking-[0.16em] text-[#302a24]/38 sm:text-[9px]">
                  PRAKTYKA
                  <br />
                  INDYWIDUALNA
                </p>
              </div>

              <div className="border-r border-[#302a24]/10 px-5 py-5">
                <p className={`${cormorant.className} text-2xl font-semibold sm:text-3xl`}>
                  Grupy
                </p>
                <p className="mt-2 text-[8px] leading-4 tracking-[0.16em] text-[#302a24]/38 sm:text-[9px]">
                  WSPÓLNY
                  <br />
                  RUCH
                </p>
              </div>

              <div className="px-5 py-5">
                <p className={`${cormorant.className} text-2xl font-semibold sm:text-3xl`}>
                  Stacjonarnie
                </p>
                <p className="mt-2 text-[8px] leading-4 tracking-[0.16em] text-[#302a24]/38 sm:text-[9px]">
                  ZAJĘCIA
                  <br />
                  STACJONARNE
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="relative mb-12 h-[560px] overflow-hidden rounded-[42px_42px_120px_42px] sm:h-[700px] lg:hidden">
            <Image
              src={heroImage}
              alt="Karolina — instruktorka jogi w naturalnej przestrzeni"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[52%_48%]"
            />
          </div>

          {/* DESKTOP — FALOWANY KSZTAŁT SVG */}
          <div className="absolute bottom-3 left-[43%] right-[-8vw] top-[56px] hidden lg:block">
            <svg
              viewBox="0 0 1200 900"
              preserveAspectRatio="none"
              className="h-full w-full"
              role="img"
              aria-label="Karolina — instruktorka jogi w naturalnej przestrzeni"
            >
              <defs>
                <clipPath id="carokotHeroClip">
                  <path d="
                    M 205 45
                    C 360 5, 535 8, 675 48
                    C 815 88, 875 150, 1005 158
                    C 1070 162, 1132 150, 1200 126
                    L 1200 678
                    C 1115 718, 1065 770, 965 806
                    C 830 854, 650 875, 478 858
                    C 326 843, 213 810, 145 748
                    C 83 691, 78 614, 111 543
                    C 148 465, 144 403, 111 337
                    C 76 267, 88 190, 142 123
                    C 168 91, 193 61, 205 45
                    Z
                  " />
                </clipPath>

                <linearGradient id="heroShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="82%" stopColor="#302a24" stopOpacity="0" />
                  <stop offset="100%" stopColor="#302a24" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <image
                href={heroImage.src}
                x="0"
                y="0"
                width="1200"
                height="900"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#carokotHeroClip)"
              />

              <rect
                x="0"
                y="0"
                width="1200"
                height="900"
                fill="url(#heroShade)"
                clipPath="url(#carokotHeroClip)"
              />
            </svg>
          </div>

        
        </div>
      </section>

     {/* MANIFEST */}
<section className="relative overflow-hidden border-t border-[#302a24]/10 bg-[#e8dfd2] py-24 sm:py-36">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-52 top-0 h-[520px] w-[520px] rounded-full bg-[#d0b491]/20 blur-[170px]" />
    <div className="absolute -right-48 bottom-[-10%] h-[560px] w-[560px] rounded-full bg-[#84906f]/14 blur-[180px]" />
  </div>

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
    <div className="flex items-center gap-4">
      <span className="h-px w-12 bg-[#302a24]/25" />
      <p className="text-[10px] font-semibold tracking-[0.22em] text-[#302a24]/55 sm:text-[11px]">
        NIEIDEALNA PRAKTYKA
      </p>
    </div>

    <div className="mt-12 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <h2
          className={`${cormorant.className} text-[62px] font-medium leading-[0.82] tracking-[-0.055em] min-[390px]:text-[72px] sm:text-[94px] lg:text-[86px] xl:text-[104px]`}
        >
          <span className="block">Joga nie zmienia</span>
          <span className="block italic text-[#697458]">Twojego ciała.</span>
        </h2>

        <div className="my-10 h-px max-w-[540px] bg-[#302a24]/12" />

        <h3
          className={`${cormorant.className} max-w-[670px] text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-7xl`}
        >
          Zmienia sposób,
          <span className="block">w jaki na nie patrzysz.</span>
        </h3>

        <p className="mt-8 max-w-xl text-base leading-7 text-[#302a24]/65 sm:text-lg sm:leading-8">
          Nie chodzi o to, żeby zrobić najtrudniejszą pozycję. Chodzi o to,
          żeby nauczyć się słuchać swojego ciała, zauważać jego potrzeby i
          traktować je z większą życzliwością.
        </p>

        <a
          href="#o-mnie"
          className="group mt-9 inline-flex items-center gap-5 rounded-full border border-[#302a24]/20 px-7 py-4 text-sm font-semibold text-[#302a24] transition hover:border-[#697458] hover:bg-[#697458] hover:text-white"
        >
          Poznaj moje podejście
          <span className="transition group-hover:translate-y-1">↓</span>
        </a>
      </div>

      <div className="group relative min-h-[580px] lg:min-h-[760px]">
        <div className="absolute inset-0 overflow-hidden rounded-[180px_40px_180px_40px]">
          <Image
            src={pieceImage}
            alt="Karolina podczas spokojnej praktyki jogi"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover object-center transition duration-1000 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211c17]/35 via-transparent to-transparent" />
        </div>

        <div className="absolute right-8 top-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-[#f3eee4]/80 text-center text-[10px] font-semibold tracking-[0.18em] text-[#302a24] opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
          ZOBACZ
        </div>

        <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/20 bg-[#f3eee4]/85 p-6 shadow-[0_30px_80px_rgba(48,42,36,.15)] backdrop-blur-xl sm:bottom-9 sm:left-9 sm:right-auto sm:max-w-[360px] sm:p-8">
          <p className="text-[9px] font-semibold tracking-[0.22em] text-[#302a24]/45">
            CAROKOT JOGA
          </p>

          <p className={`${cormorant.className} mt-4 text-3xl font-medium leading-[1.02] sm:text-4xl`}>
            Mniej presji.
            <span className="block italic text-[#697458]">Więcej czucia.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* O KAROLINIE */}
<section
  id="o-mnie"
  className="relative overflow-hidden border-t border-[#302a24]/10 bg-[#f3eee4] py-24 sm:py-36"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-52 top-28 h-[520px] w-[520px] rounded-full bg-[#d8bea0]/20 blur-[170px]" />
    <div className="absolute -right-56 bottom-10 h-[560px] w-[560px] rounded-full bg-[#859171]/10 blur-[180px]" />
  </div>

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
    <div className="grid gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
      <div>
        <p className="text-[10px] tracking-[0.25em] text-[#302a24]/40">
          POZNAJMY SIĘ
        </p>

        <h2
          className={`${cormorant.className} mt-7 max-w-3xl text-6xl font-medium leading-[0.86] tracking-[-0.05em] sm:text-8xl`}
        >
          Nie wierzę,
          <span className="block">że joga jest tylko</span>
          <span className="block italic text-[#697458]">
            dla elastycznych.
          </span>
        </h2>

        <p
          className={`${cormorant.className} mt-9 max-w-2xl text-3xl font-medium leading-[1.08] tracking-[-0.025em] text-[#302a24]/72 sm:text-4xl`}
        >
          Wierzę, że jest dla każdego, kto chce choć na chwilę zwolnić.
        </p>

        <div className="mt-12 max-w-xl rounded-[34px] border border-[#302a24]/10 bg-[#faf6ef]/96 p-7 shadow-[0_25px_60px_rgba(48,42,36,.08)] backdrop-blur-xl sm:p-9">
          <p className="text-base leading-7 text-[#302a24]/65 sm:text-lg sm:leading-8">
            Cześć, jestem Karolina. Prowadzę zajęcia jogi w różnych
            przestrzeniach, najczęściej w Studio Yoga Time w Pruszkowie, i
            tworzę miejsce, w którym możesz na chwilę odłożyć codzienny
            pośpiech, wsłuchać się w swój oddech oraz zadbać o siebie bez
            presji i oceniania.
          </p>

          <p className="mt-6 text-base leading-7 text-[#302a24]/65 sm:text-lg sm:leading-8">
            Na moich zajęciach nie chodzi o perfekcyjne wykonanie pozycji ani
            o porównywanie się z innymi. Każdy z nas ma inne ciało, inne
            możliwości i własne tempo. Dlatego wierzę, że praktyka powinna
            być dopasowana do człowieka, a nie człowiek do praktyki.
          </p>

          <p className="mt-6 text-base leading-7 text-[#302a24]/65 sm:text-lg sm:leading-8">
            Joga jest dla mnie czymś więcej niż ruchem. To sposób na
            odzyskanie równowagi, lepszy kontakt z własnym ciałem i chwilę
            zatrzymania w świecie, który często pędzi za szybko.
          </p>

          <p className="mt-6 text-base leading-7 text-[#302a24]/65 sm:text-lg sm:leading-8">
            Niezależnie od tego, czy dopiero zaczynasz, czy masz już
            doświadczenie, chcę stworzyć dla Ciebie miejsce pełne swobody,
            życzliwości i dobrej energii.
          </p>
        </div>
      </div>

      <div className="lg:sticky lg:top-28">
        <div className="group relative min-h-[560px] overflow-hidden rounded-[180px_36px_36px_36px] sm:min-h-[720px]">
          <Image
            src={aboutImage}
            alt="Karolina podczas praktyki ruchowej w parku"
            fill
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="object-cover object-center transition duration-1000 group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#201b16]/30 via-transparent to-transparent" />

          <div className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-[#f3eee4]/75 text-center text-[9px] font-semibold tracking-[0.16em] text-[#302a24] opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            ZOBACZ
          </div>

          <div className="absolute bottom-6 left-6 right-6 rounded-[26px] border border-white/20 bg-[#f3eee4]/75 p-6 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-md sm:p-7">
            <p className="text-[9px] tracking-[0.22em] text-[#302a24]/42">
              KAROLINA · CAROKOT JOGA
            </p>

            <p
              className={`${cormorant.className} mt-3 text-3xl font-medium leading-none`}
            >
              Praktyka bez presji.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#302a24]/55">
              Ruch, oddech i przestrzeń, w której możesz być sobą.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="relative my-24 border-y border-[#302a24]/10 py-20 text-center sm:my-36 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#859171]/10 blur-[100px]" />

      <p className="relative text-[10px] tracking-[0.25em] text-[#302a24]/38">
        MOJA FILOZOFIA
      </p>

      <blockquote
        className={`${cormorant.className} relative mx-auto mt-8 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-8xl`}
      >
        „Nie musisz być idealna,
        <span className="block italic text-[#697458]">żeby zacząć.</span>
        <span className="block">Wystarczy, że jesteś.”</span>
      </blockquote>
    </div>

    <div>
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-[10px] tracking-[0.25em] text-[#302a24]/40">
            TO, CO JEST WAŻNE
          </p>

          <h3
            className={`${cormorant.className} mt-6 text-5xl font-medium leading-[0.9] tracking-[-0.045em] sm:text-7xl`}
          >
            Cztery rzeczy,
            <span className="block italic text-[#697458]">
              które zabieramy na matę.
            </span>
          </h3>
        </div>

        <p className="max-w-xl text-base leading-7 text-[#302a24]/55 lg:justify-self-end">
          Nie chodzi o to, by zrobić więcej. Chodzi o to, by zauważyć więcej:
          w oddechu, w ciele i w codzienności.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-[#302a24]/10 bg-[#302a24]/10 md:grid-cols-2">
        {[
          ["01", "Uważność", "Każda praktyka zaczyna się od świadomego oddechu i obecności. To właśnie od nich budujemy spokój oraz równowagę."],
          ["02", "Akceptacja", "Nie musisz być elastyczna ani znać żadnych pozycji. Przychodzisz dokładnie taka, jaka jesteś."],
          ["03", "Praktyka dla Ciebie", "Każde ciało jest inne. Dlatego ćwiczymy we własnym tempie, z uważnością i szacunkiem do swoich możliwości."],
          ["04", "Dobra energia", "Chcę, aby joga została z Tobą także po zejściu z maty — jako większy spokój, lekkość i uśmiech na co dzień."],
        ].map(([number, title, description]) => (
          <article
            key={number}
            className="group relative min-h-[320px] overflow-hidden bg-[#f3eee4] p-7 transition duration-500 hover:bg-[#ebe3d7] sm:p-9"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#84906f]/10 blur-[85px] transition duration-700 group-hover:scale-125 group-hover:bg-[#84906f]/20" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.18em] text-[#697458]">
                  {number}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#697458]" />
              </div>

              <div className="mt-20">
                <h4
                  className={`${cormorant.className} text-4xl font-medium tracking-[-0.035em] sm:text-5xl`}
                >
                  {title}
                </h4>
                <p className="mt-5 max-w-md leading-7 text-[#302a24]/55">
                  {description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

{/* GALERIA */}
<section
  id="galeria"
  className="scroll-mt-24 relative overflow-hidden bg-[#efe7dc] py-24 sm:py-36"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-52 top-32 h-[520px] w-[520px] rounded-full bg-[#d8bea0]/18 blur-[180px]" />
    <div className="absolute -right-56 bottom-16 h-[560px] w-[560px] rounded-full bg-[#859171]/10 blur-[190px]" />
  </div>

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#302a24]/55">
          Z MATY I CODZIENNOŚCI
        </p>

        <h2
          className={`${cormorant.className} mt-7 text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-8xl`}
        >
          Ruch.
          <span className="block italic text-[#697458]">Oddech.</span>
          <span className="block">Obecność.</span>
        </h2>
      </div>

      <p className="max-w-xl text-lg leading-8 text-[#302a24]/62 lg:justify-self-end">
        Kadry z praktyki, spotkań i spokojnych chwil pomiędzy. Kliknij zdjęcie,
        żeby zobaczyć je w pełnym rozmiarze — bez przycinania.
      </p>
    </div>

    <CarokotGallery items={socialTiles} instagramUrl={instagramUrl} />

    <div className="mt-10 flex flex-col gap-4 rounded-[26px] border border-[#302a24]/10 bg-[#f8f3ec] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p className={`${cormorant.className} text-2xl font-medium sm:text-3xl`}>
        Zobacz więcej codziennej praktyki.
      </p>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-4 text-sm font-semibold text-[#59634b]"
      >
        @carokot.joga
        <span className="transition group-hover:translate-x-1">↗</span>
      </a>
    </div>
  </div>
</section>

{/* OFFER */}
      <section
        id="zajecia"
        className="scroll-mt-24 relative overflow-hidden bg-[#29251f] py-24 text-white sm:py-36"
      >
        <div className="pointer-events-none absolute right-[-18%] top-[-20%] h-[680px] w-[680px] rounded-full bg-[#7b8a65]/15 blur-[180px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <p className="text-[10px] tracking-[0.24em] text-white/38">
            FORMY PRAKTYKI
          </p>

          <div className="mt-7 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2
              className={`${cormorant.className} text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-8xl`}
            >
              Znajdź przestrzeń
              <span className="block italic text-[#aab594]">dla siebie.</span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-white/47 lg:justify-self-end">
              Możesz zacząć w grupie albo wybrać spotkanie indywidualne. Nie
              musisz wcześniej ćwiczyć jogi ani znać żadnej pozycji.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2">
            {offers.map((offer) => (
              <article
                key={offer.number}
                className="group relative min-h-[360px] overflow-hidden bg-[#29251f] p-7 transition duration-500 hover:bg-[#343028] sm:p-9"
              >
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#9baa82]/10 blur-[80px] transition duration-700 group-hover:scale-125 group-hover:bg-[#9baa82]/20" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#c6b798]">
                      {offer.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:rotate-45 group-hover:bg-[#f3eee4] group-hover:text-[#302a24]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-20">
                    <h3
                      className={`${cormorant.className} text-4xl font-medium tracking-[-0.035em] sm:text-5xl`}
                    >
                      {offer.title}
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-white/46">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* OPINIE */}
      <section
        id="opinie"
        className="scroll-mt-24 relative overflow-hidden bg-[#e8dfd2] py-24 sm:py-36"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-52 top-10 h-[520px] w-[520px] rounded-full bg-[#d0b491]/20 blur-[170px]" />
          <div className="absolute -right-52 bottom-0 h-[540px] w-[540px] rounded-full bg-[#84906f]/12 blur-[180px]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#302a24]/60">
                GŁOSY Z MATY
              </p>

              <h2
                className={`${cormorant.className} mt-7 text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-8xl`}
              >
                Jak czują się osoby,
                <span className="block italic text-[#697458]">
                  które praktykują ze mną.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#302a24]/65 lg:justify-self-end">
              Najważniejsze nie jest to, jak wygląda pozycja. Najważniejsze
              jest to, z czym wychodzisz z zajęć — spokojniejszym oddechem,
              większą lekkością i lepszym kontaktem ze sobą.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.detail}-${index}`}
                className="group relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[30px] border border-[#302a24]/10 bg-[#f7f1e8] p-7 transition duration-500 hover:-translate-y-1 hover:bg-[#fbf7f0] hover:shadow-[0_30px_80px_rgba(70,53,38,.12)] sm:p-9"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#84906f]/10 blur-[85px] transition duration-700 group-hover:scale-125 group-hover:bg-[#84906f]/20" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#697458]">
                      0{index + 1}
                    </span>

                    <span
                      className={`${cormorant.className} text-6xl leading-none text-[#697458]/30`}
                    >
                      “
                    </span>
                  </div>

                  <blockquote
                    className={`${cormorant.className} mt-12 text-[32px] font-medium leading-[1.08] tracking-[-0.025em] text-[#302a24] sm:text-[36px]`}
                  >
                    {testimonial.quote}
                  </blockquote>
                </div>

                <div className="relative mt-14 border-t border-[#302a24]/10 pt-6">
                  <p className="text-sm font-semibold text-[#302a24]">
                    {testimonial.name}
                  </p>

                  <p className="mt-2 text-[10px] font-medium tracking-[0.18em] text-[#302a24]/50">
                    {testimonial.detail.toUpperCase()}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 rounded-[26px] border border-[#302a24]/10 bg-[#302a24] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p
              className={`${cormorant.className} max-w-3xl text-2xl font-medium leading-tight sm:text-3xl`}
            >
              Najpiękniejszy efekt praktyki często widać dopiero wtedy, gdy
              schodzisz z maty.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-4 text-sm font-semibold text-white/75 transition hover:text-white"
            >
              Zapytaj o zajęcia
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* MEDITATION */}
      <section className="bg-[#f3eee4] py-24 sm:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-12">
          <div className="relative min-h-[560px] overflow-hidden rounded-[38px_180px_38px_38px] sm:min-h-[720px]">
            <Image
              src={meditationImage}
              alt="Spokojna przestrzeń medytacyjna ze świecami"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          <div>
            <p className="text-[10px] tracking-[0.24em] text-[#302a24]/40">
              ZATRZYMANIE
            </p>

            <h2
              className={`${cormorant.className} mt-7 text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-8xl`}
            >
              Czasami największą
              <span className="block italic text-[#697458]">
                zmianą jest pauza.
              </span>
            </h2>

            <p className="mt-9 max-w-xl text-lg leading-8 text-[#302a24]/57">
              Medytacja i świadomy oddech nie wymagają pustej głowy. Zaczynamy
              od tego, co jest — napięcia, zmęczenia, chaosu albo zwykłej
              ciekawości.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#697458] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#302a24]"
            >
              Zapytaj o najbliższe zajęcia

              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>


      {/* YOUTUBE */}
<section
  id="youtube"
  className="relative overflow-hidden border-t border-[#302a24]/10 bg-[#f3eee4] py-24 sm:py-36"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-52 top-0 h-[520px] w-[520px] rounded-full bg-[#859171]/10 blur-[170px]" />
    <div className="absolute -left-60 bottom-0 h-[460px] w-[460px] rounded-full bg-[#d8bea0]/15 blur-[170px]" />
  </div>

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
    {/* NAGŁÓWEK */}
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#302a24]/60">
          PRAKTYKUJ RÓWNIEŻ W DOMU
        </p>

        <h2
          className={`${cormorant.className} mt-7 text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-8xl`}
        >
          Joga wtedy,
          <span className="block italic text-[#697458]">
            kiedy jej potrzebujesz.
          </span>
        </h2>
      </div>

      <div className="lg:justify-self-end">
        <p className="max-w-xl text-lg leading-8 text-[#302a24]/65">
          Na kanale YouTube znajdziesz praktyki, do których możesz wracać we
          własnym tempie — rano, wieczorem albo wtedy, gdy potrzebujesz chwili
          ruchu i spokojniejszego oddechu.
        </p>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-7 inline-flex items-center gap-5 rounded-full border border-[#697458]/45 px-7 py-4 text-sm font-medium text-[#59634b] transition hover:bg-[#697458] hover:text-white"
        >
          Zobacz cały kanał

          <span className="transition group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>

    {/* FILMY */}
    <div className="mt-16 grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">
      {/* GŁÓWNY FILM */}
      <article className="group overflow-hidden rounded-[32px] border border-[#302a24]/10 bg-[#ebe3d7]">
        <div className="relative aspect-video overflow-hidden bg-[#302a24]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/FvIukRmT1ek"
            title="Praktyka jogi Carokot"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#697458]">
              PRAKTYKA 01
            </p>

            <h3
              className={`${cormorant.className} mt-2 text-3xl font-medium sm:text-4xl`}
            >
              Praktykuj razem ze mną
            </h3>
          </div>

          <a
            href="https://www.youtube.com/watch?v=FvIukRmT1ek"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#302a24]/65 transition hover:text-[#697458]"
          >
            Otwórz na YouTube
            <span>↗</span>
          </a>
        </div>
      </article>

      {/* DWA MNIEJSZE FILMY */}
      <div className="grid gap-6">
        <article className="overflow-hidden rounded-[28px] border border-[#302a24]/10 bg-[#ebe3d7]">
          <div className="relative aspect-video overflow-hidden bg-[#302a24]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/8xqnE9winCY"
              title="Praktyka jogi Carokot — film 2"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-[#697458]">
              PRAKTYKA 02
            </p>

            <div className="mt-2 flex items-center justify-between gap-4">
              <h3
                className={`${cormorant.className} text-2xl font-medium sm:text-3xl`}
              >
                Chwila dla siebie
              </h3>

              <a
                href="https://www.youtube.com/watch?v=8xqnE9winCY"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#302a24]/15 transition hover:bg-[#302a24] hover:text-white"
                aria-label="Otwórz film na YouTube"
              >
                ↗
              </a>
            </div>
          </div>
        </article>

        <article className="overflow-hidden rounded-[28px] border border-[#302a24]/10 bg-[#ebe3d7]">
          <div className="relative aspect-video overflow-hidden bg-[#302a24]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/PYwZFwESQjI"
              title="Praktyka jogi Carokot — film 3"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-[#697458]">
              PRAKTYKA 03
            </p>

            <div className="mt-2 flex items-center justify-between gap-4">
              <h3
                className={`${cormorant.className} text-2xl font-medium sm:text-3xl`}
              >
                Ruch i spokojny oddech
              </h3>

              <a
                href="https://www.youtube.com/watch?v=PYwZFwESQjI"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#302a24]/15 transition hover:bg-[#302a24] hover:text-white"
                aria-label="Otwórz film na YouTube"
              >
                ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    {/* DOLNY PASEK */}
    <div className="mt-8 flex flex-col gap-5 rounded-[26px] border border-[#302a24]/10 bg-[#fbf7f0] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p className="text-sm leading-6 text-[#302a24]/60">
        Nowe praktyki, ruch, oddech i chwile zatrzymania również na YouTube.
      </p>

      <a
        href={youtubeUrl}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-4 text-sm font-semibold text-[#59634b]"
      >
        @caro_kot

        <span className="transition group-hover:translate-x-1">↗</span>
      </a>
    </div>
  </div>
</section>


      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 relative overflow-hidden border-t border-[#302a24]/10 bg-[#f3eee4] py-24 sm:py-36"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-48 bottom-0 h-[480px] w-[480px] rounded-full bg-[#d8bea0]/15 blur-[170px]" />
          <div className="absolute -right-52 top-10 h-[520px] w-[520px] rounded-full bg-[#859171]/10 blur-[180px]" />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#302a24]/60">
              ZANIM PRZYJDZIESZ
            </p>

            <h2
              className={`${cormorant.className} mt-7 text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-8xl`}
            >
              Najczęstsze
              <span className="block italic text-[#697458]">pytania.</span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#302a24]/65">
              Nie musisz wiedzieć wszystkiego przed pierwszym spotkaniem.
              Poniżej znajdziesz odpowiedzi na pytania, które najczęściej
              pojawiają się przed rozpoczęciem praktyki.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ScheduleModalButton
                label="Sprawdź grafik"
                variant="dark"
              />

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-4 rounded-full border border-[#697458]/45 px-7 py-4 text-sm font-semibold text-[#59634b] transition hover:bg-[#697458] hover:text-white"
              >
                Zadaj pytanie
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#302a24]/10 bg-[#fbf7f0]">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-[#302a24]/10 last:border-b-0 open:bg-[#f5eee4]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-9 sm:px-8 sm:py-10 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-5 sm:gap-7">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#697458]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`${cormorant.className} text-3xl font-medium leading-tight sm:text-4xl`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#302a24]/15 text-lg transition duration-300 group-open:rotate-45 group-open:bg-[#302a24] group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-8 pl-[72px] sm:px-8 sm:pb-9 sm:pl-[100px]">
                  <p className="max-w-2xl text-base leading-7 text-[#302a24]/65">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section id="kontakt" className="scroll-mt-24 border-t border-[#302a24]/10 bg-[#d8cab7] py-24 sm:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
          <div>
            <p className="text-[10px] tracking-[0.24em] text-[#302a24]/42">
              PIERWSZY KROK
            </p>

            <h2
              className={`${cormorant.className} mt-7 text-6xl font-medium leading-[0.86] tracking-[-0.05em] sm:text-8xl`}
            >
              Nie musisz wiedzieć,
              <span className="block italic text-[#697458]">
                od czego zacząć.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#302a24]/58">
              Sprawdź aktualny grafik i dostępne terminy albo napisz na
              Instagramie, jeśli nie wiesz, która forma zajęć będzie najlepsza
              na początek.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#302a24]/10 bg-[#f3eee4]/65 p-7 backdrop-blur-xl sm:p-10">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#302a24]/48">
              GRAFIK I KONTAKT
            </p>

            <p
              className={`${cormorant.className} mt-5 text-4xl font-medium leading-none sm:text-5xl`}
            >
              Wybierz swój
              <span className="block italic text-[#697458]">pierwszy krok.</span>
            </p>

            <p className="mt-5 max-w-md leading-7 text-[#302a24]/58">
              Aktualne zajęcia i wolne miejsca znajdziesz w grafiku Studio Yoga
              Time. W razie pytań możesz też napisać bezpośrednio na Instagramie.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <ScheduleModalButton
                label="Grafik i zapisy"
                variant="dark"
                fullWidth
              />

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-full border border-[#302a24]/20 px-7 py-4 text-sm font-semibold text-[#302a24] transition hover:border-[#697458] hover:text-[#697458]"
              >
                Instagram
                <span className="transition group-hover:translate-x-1">↗</span>
              </a>
            </div>

            <div className="mt-7 border-t border-[#302a24]/10 pt-6">
              <p className="text-sm font-semibold text-[#302a24]">
                Najczęściej: Studio Yoga Time, Pruszków
              </p>
              <p className="mt-2 text-sm leading-6 text-[#302a24]/50">
                Pozostałe lokalizacje zależą od aktualnego grafiku zajęć.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CTA */}
<ScheduleModalButton
  label="Grafik i zapisy"
  variant="floating"
/>

{/* FOOTER */}
<footer className="relative overflow-hidden bg-[#29251f] pb-10 pt-20 text-white">
  <div className="pointer-events-none absolute inset-x-0 bottom-[-7vw] text-center">
    <p
      className={`${cormorant.className} whitespace-nowrap text-[22vw] font-semibold leading-none tracking-[-0.06em] text-white/[0.035]`}
    >
      CAROKOT
    </p>
  </div>

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
    <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <p className={`${cormorant.className} text-6xl font-medium sm:text-8xl`}>
          Do zobaczenia
          <span className="block italic text-[#aab594]">na macie.</span>
        </p>

        <p className="mt-7 max-w-xl text-base leading-7 text-white/50">
          Joga, oddech i ruch bez presji. Sprawdź grafik, wybierz zajęcia albo
          napisz, jeśli potrzebujesz pomocy w wyborze.
        </p>
      </div>

      <div className="grid gap-3 self-end">
        <ScheduleModalButton
          label="Grafik i zapisy"
          variant="light"
          fullWidth
        />

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white/75 transition hover:border-white/40 hover:text-white"
        >
          Instagram
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white/75 transition hover:border-white/40 hover:text-white"
        >
          YouTube
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>

    <div className="flex flex-col gap-5 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 CAROKOT JOGA</p>
      <p>Joga · oddech · ruch · powrót do siebie</p>
      <Link href="/#realizacje" className="transition hover:text-white">
        Designed by KYVORIQ ↗
      </Link>
    </div>
  </div>
</footer>
    </main>
  );
}