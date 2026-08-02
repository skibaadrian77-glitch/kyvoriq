import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type SharedProps = {
  label: string;
  className?: string;
};

type InputProps = SharedProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type TextareaProps = SharedProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type FieldProps = InputProps | TextareaProps;

export default function Input(props: FieldProps) {
  const {
    label,
    className = "",
  } = props;

  const fieldClasses = [
    "mt-3 w-full border-b border-white/10 bg-transparent py-4 text-base text-white outline-none transition",
    "placeholder:text-white/18 focus:border-[#7568ff]/60",
    "sm:text-lg",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.as === "textarea") {
    const {
      label: _label,
      className: _className,
      as: _as,
      rows = 5,
      ...textareaProps
    } = props;

    return (
      <label className="block">
        <span className="text-[10px] tracking-[0.18em] text-white/35">
          {label}
        </span>

        <textarea
          rows={rows}
          className={`${fieldClasses} resize-none`}
          {...textareaProps}
        />
      </label>
    );
  }

  const {
    label: _label,
    className: _className,
    as: _as,
    ...inputProps
  } = props;

  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.18em] text-white/35">
        {label}
      </span>

      <input
        className={fieldClasses}
        {...inputProps}
      />
    </label>
  );
}