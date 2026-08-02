import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-[1500px] px-5 sm:px-6 lg:px-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}