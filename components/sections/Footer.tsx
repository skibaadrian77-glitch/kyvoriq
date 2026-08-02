import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-semibold tracking-[0.28em]">
              KYVORIQ
            </p>

            <p className="mt-2 text-sm text-white/35">
              Nowoczesne strony internetowe tworzone z dbałością o każdy detal.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/45 sm:justify-end">
            <a
              href="#uslugi"
              className="transition hover:text-white"
            >
              Usługi
            </a>

            <a
              href="#realizacje"
              className="transition hover:text-white"
            >
              Portfolio
            </a>

            <a
              href="#proces"
              className="transition hover:text-white"
            >
              Proces
            </a>

            <a
              href="#kontakt"
              className="transition hover:text-white"
            >
              Kontakt
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/25 sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} KYVORIQ. Wszelkie prawa zastrzeżone.</p>

          <p>Designed & Developed by KYVORIQ.</p>
        </div>
      </Container>
    </footer>
  );
}   