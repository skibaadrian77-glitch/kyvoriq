import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { projects } from "@/components/portfolio/projects";

export default function Portfolio() {
  return (
    <section
      id="realizacje"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 sm:scroll-mt-24 sm:py-36"
    >
      <div className="pointer-events-none absolute right-[-24%] top-[8%] h-[700px] w-[700px] rounded-full bg-[#6d5eff]/[0.07] blur-[180px]" />

      <Container className="relative">
        <SectionTitle
          eyebrow="PORTFOLIO"
          title={
  <>
    Wybrane
    <span className="block text-white/32">
      realizacje.
    </span>
  </>
}
          description={
  <p>
    Każda strona powstaje od podstaw — bez gotowych szablonów.
    Projektuję nowoczesne strony internetowe, które łączą estetykę,
    szybkość działania i doświadczenie użytkownika. Portfolio będzie
    systematycznie powiększane o kolejne realizacje.
  </p>
}
        />

        <div className="mt-16 space-y-8 sm:mt-20 sm:space-y-10">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/28">
  Może następna realizacja będzie właśnie Twoją?
</p>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
          >
            Stwórzmy następny projekt
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}