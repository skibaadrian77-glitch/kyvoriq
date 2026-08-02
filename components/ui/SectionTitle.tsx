import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "split";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "split",
  className = "",
}: SectionTitleProps) {
  const layoutClass =
    align === "split"
      ? "grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-10"
      : "max-w-4xl";

  return (
    <div className={[layoutClass, className].filter(Boolean).join(" ")}>
      <div>
        <p className="text-[10px] tracking-[0.24em] text-white/35">
          {eyebrow}
        </p>

        <div
          data-reveal
          className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] min-[390px]:text-5xl sm:mt-8 sm:text-7xl"
        >
          {title}
        </div>
      </div>

      {description && align === "split" && (
        <div
          data-reveal-copy
          className="max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8 lg:justify-self-end"
        >
          {description}
        </div>
      )}

      {description && align === "left" && (
        <div
          data-reveal-copy
          className="mt-7 max-w-xl text-base leading-7 text-white/45 sm:mt-8 sm:text-lg sm:leading-8"
        >
          {description}
        </div>
      )}
    </div>
  );
}