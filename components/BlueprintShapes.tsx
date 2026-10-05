type Tone = "dark" | "light";

/**
 * Four orientations of the same shape set — flipped/rotated so the same source
 * reads differently in each section instead of looking copy-pasted.
 */
const layouts = [
  "",
  "translate(1200 0) scale(-1 1)",
  "translate(1200 760) scale(-1 -1)",
  "translate(0 760) scale(1 -1)",
];

/**
 * Ambient drafting shapes — rings, a register target, a dashed circle, a
 * triangle and tick marks, drawn as hairlines at very low opacity. Sits behind
 * section content as barely-visible background texture, extending the site's
 * blueprint identity. Always decorative: aria-hidden and non-interactive.
 */
export default function BlueprintShapes({
  tone = "dark",
  variant = 0,
  className = "",
}: {
  tone?: Tone;
  variant?: number;
  className?: string;
}) {
  const color = tone === "dark" ? "text-cyan" : "text-navy";
  const opacity = tone === "dark" ? "opacity-[0.14]" : "opacity-[0.11]";
  const transform = layouts[((variant % layouts.length) + layouts.length) % layouts.length];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      className={`pointer-events-none absolute inset-0 h-full w-full ${color} ${opacity} ${className}`}
    >
      <g transform={transform} strokeLinecap="round" vectorEffect="non-scaling-stroke">
        {/* rings */}
        <circle cx="150" cy="175" r="112" vectorEffect="non-scaling-stroke" />
        <circle cx="1082" cy="470" r="86" vectorEffect="non-scaling-stroke" />
        <circle cx="470" cy="515" r="30" vectorEffect="non-scaling-stroke" />

        {/* register target */}
        <circle cx="1005" cy="150" r="66" vectorEffect="non-scaling-stroke" />
        <circle cx="1005" cy="150" r="34" vectorEffect="non-scaling-stroke" />
        <line x1="900" y1="150" x2="1110" y2="150" vectorEffect="non-scaling-stroke" />
        <line x1="1005" y1="58" x2="1005" y2="242" vectorEffect="non-scaling-stroke" />

        {/* dashed circle */}
        <circle cx="560" cy="140" r="52" strokeDasharray="5 8" vectorEffect="non-scaling-stroke" />

        {/* triangle */}
        <polygon points="300,620 470,620 385,478" vectorEffect="non-scaling-stroke" />

        {/* diamond */}
        <rect x="822" y="560" width="76" height="76" transform="rotate(45 860 598)" vectorEffect="non-scaling-stroke" />

        {/* tick marks */}
        <path d="M700 643v24M688 655h24" vectorEffect="non-scaling-stroke" />
        <path d="M360 288v24M348 300h24" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
