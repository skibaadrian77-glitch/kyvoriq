import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "./projects";

type Props = {
  project: PortfolioProject;
  reverse?: boolean;
};

export default function PortfolioCard({
  project,
  reverse = false,
}: Props) {
  const isOffline = project.isOffline === true;

  return (
    <article className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909] transition duration-700 hover:-translate-y-2 hover:border-[#7c6cff]/30 hover:shadow-[0_35px_120px_rgba(64,47,180,.16)]">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] opacity-0 blur-[120px] transition duration-700 group-hover:opacity-100" />

      <div
        className={`relative grid items-stretch gap-0 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex min-h-[500px] flex-col justify-center p-8 sm:p-12 lg:min-h-[540px] lg:p-14">
          <div className="flex items-center justify-between gap-6">
            <p className="text-[10px] tracking-[0.22em] text-white/30">
              {project.number} / {project.category.toUpperCase()}
            </p>

            {isOffline ? (
              <span className="rounded-full border border-amber-400/15 bg-amber-400/[0.06] px-3 py-1 text-[8px] tracking-[0.18em] text-amber-200/70">
                OFFLINE
              </span>
            ) : (
              <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 text-[8px] tracking-[0.18em] text-emerald-300/70">
                ONLINE
              </span>
            )}
          </div>

          <h3 className="mt-10 text-5xl font-medium tracking-[-0.055em] transition duration-500 group-hover:translate-x-1 sm:text-7xl">
            {project.title}
          </h3>

          <p className="mt-8 max-w-md leading-8 text-white/45 transition duration-300 group-hover:text-white/60">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 px-4 py-2 text-[10px] tracking-[0.15em] text-white/40 transition duration-300 group-hover:border-white/20 group-hover:text-white/55"
              >
                {service.toUpperCase()}
              </span>
            ))}
          </div>

          {isOffline ? (
            <div className="mt-10 inline-flex w-fit cursor-not-allowed items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-white/35">
              Projekt chwilowo niedostępny
            </div>
          ) : (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-white transition duration-300 hover:border-white/25 hover:bg-white hover:text-black"
            >
              Otwórz projekt
              <span className="transition duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          )}
        </div>

        {isOffline ? (
          <div className="relative block min-h-[420px] cursor-not-allowed overflow-hidden bg-[#111] p-5 sm:min-h-[520px] sm:p-8 lg:min-h-[540px]">
            <ProjectImage project={project} isOffline />
          </div>
        ) : (
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Otwórz projekt ${project.title} w nowej karcie`}
            className="relative block min-h-[420px] overflow-hidden bg-[#111] p-5 sm:min-h-[520px] sm:p-8 lg:min-h-[540px]"
          >
            <ProjectImage project={project} />
          </Link>
        )}
      </div>
    </article>
  );
}

function ProjectImage({
  project,
  isOffline = false,
}: {
  project: PortfolioProject;
  isOffline?: boolean;
}) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7c3aed]/[0.06] via-transparent to-[#4f7dff]/[0.06]" />

      <div className="relative h-full min-h-[380px] overflow-hidden rounded-[26px] border border-white/10 bg-[#111] shadow-[0_40px_90px_rgba(0,0,0,.45)] sm:min-h-[456px] lg:min-h-[476px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={project.number === "01"}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition duration-1000 group-hover:scale-[1.035]"
        />

        <div
          className={`pointer-events-none absolute inset-0 transition duration-500 ${
            isOffline
              ? "bg-black/55"
              : "bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-35 group-hover:opacity-65"
          }`}
        />

        {isOffline ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/15 bg-black/45 px-5 py-3 text-sm text-white/70 backdrop-blur-xl">
              Projekt chwilowo offline
            </div>
          </div>
        ) : (
          <div className="pointer-events-none absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm text-white opacity-0 backdrop-blur-xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span>Otwórz projekt</span>
            <span>↗</span>
          </div>
        )}
      </div>
    </>
  );
}