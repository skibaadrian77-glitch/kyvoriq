import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  icon?: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const variants = {
  primary:
    "rounded-full bg-white px-7 py-4 font-medium text-black hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(255,255,255,0.12)]",
  outline:
    "rounded-full border border-white/15 px-6 py-3 text-white hover:border-white/35 hover:bg-white/[0.05]",
  text: "text-white/80 hover:text-white",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    icon,
    className = "",
  } = props;

  const classes = [
    "group inline-flex items-center justify-center gap-4 transition duration-300 disabled:cursor-not-allowed disabled:opacity-40",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <span className="transition duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (typeof props.href === "string") {
    const {
      children: _children,
      variant: _variant,
      icon: _icon,
      className: _className,
      ...anchorProps
    } = props;

    return (
      <a className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const {
    children: _children,
    variant: _variant,
    icon: _icon,
    className: _className,
    href: _href,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}