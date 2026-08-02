import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & {
  variant?: "gradient" | "white" | "black";
  showWordmark?: boolean;
};

export default function Logo({
  variant = "gradient",
  showWordmark = false,
  className = "",
  ...props
}: LogoProps) {
  const symbolFill =
    variant === "white"
      ? "#f5f5f5"
      : variant === "black"
        ? "#090909"
        : "url(#kyvoriq-gradient)";

  const wordmarkFill = variant === "black" ? "#090909" : "#f5f5f5";

  return (
    <svg
      viewBox={showWordmark ? "0 0 420 150" : "0 0 180 120"}
      role="img"
      aria-label="KYVORIQ"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="kyvoriq-gradient"
          x1="20"
          y1="5"
          x2="160"
          y2="115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c4b5fd" />
          <stop offset="0.38" stopColor="#9f7aea" />
          <stop offset="0.72" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#5b21b6" />
        </linearGradient>

        <filter
          id="kyvoriq-glow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="5" result="blur" />

          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              0.48 0 0 0 0
              0 0.30 0 0 0
              0 0 0.92 0 0
              0 0 0 0.32 0
            "
          />

          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        transform={showWordmark ? "translate(120 4)" : "translate(0 0)"}
        filter={variant === "gradient" ? "url(#kyvoriq-glow)" : undefined}
      >
        {/* pionowa część K */}
        <path
          d="M24 14H48V106H24V14Z"
          fill={symbolFill}
        />

        {/* górne ramię K */}
        <path
          d="M46 61L92 14H123L69 68L46 61Z"
          fill={symbolFill}
        />

        {/* dolne ramię K */}
        <path
          d="M47 62L69 54L111 106H80L47 62Z"
          fill={symbolFill}
        />

        {/* lewe ramię V */}
        <path
          d="M84 42H113L138 76L124 94L84 42Z"
          fill={symbolFill}
        />

        {/* prawe ramię V */}
        <path
          d="M124 94L156 50H181L137 108L124 94Z"
          fill={symbolFill}
        />
      </g>

      {showWordmark && (
        <g transform="translate(0 122)">
          <text
            x="210"
            y="0"
            textAnchor="middle"
            fill={wordmarkFill}
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="28"
            fontWeight="500"
            letterSpacing="11"
          >
            KYVORIQ
          </text>
        </g>
      )}
    </svg>
  );
}