import type { SelectHTMLAttributes } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
};

export default function Select({
  label,
  options,
  className = "",
  defaultValue = "",
  ...props
}: SelectProps) {
  const classes = [
    "mt-3 w-full appearance-none border-b border-white/10 bg-transparent py-4 pr-10 text-base text-white outline-none transition",
    "focus:border-[#7568ff]/60 sm:text-lg",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className="relative block">
      <span className="text-[10px] tracking-[0.18em] text-white/35">
        {label}
      </span>

      <div className="relative">
        <select
          defaultValue={defaultValue}
          className={classes}
          {...props}
        >
          <option value="" disabled className="bg-[#0a0a0a] text-white/40">
            Wybierz opcję
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#0a0a0a] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-sm text-white/35">
          ↓
        </span>
      </div>
    </label>
  );
}