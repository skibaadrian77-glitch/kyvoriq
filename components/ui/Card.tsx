import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glow?: boolean;
};

export default function Card({
  children,
  glow = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[26px] border border-white/10 bg-[#080808] transition duration-500 sm:rounded-[34px]",
        "hover:border-white/20 hover:shadow-[0_45px_120px_rgba(0,0,0,.42)]",
        glow
          ? "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(109,94,255,.12),transparent_35%)]"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="relative">{children}</div>
    </div>
  );
}