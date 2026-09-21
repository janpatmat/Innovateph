import type { SVGProps } from "react";

/**
 * Line icon set — single stroke weight, currentColor, no fills.
 * Deliberately restrained to keep the industrial/technical tone.
 */

const paths: Record<string, React.ReactNode> = {
  // — business model —
  exchange: (
    <>
      <path d="M4 8h13l-3-3" />
      <path d="M20 16H7l3 3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </>
  ),
  puzzle: (
    <path d="M9 4a1.5 1.5 0 0 1 3 0c0 .8.7 1.2 1.5 1.2H16v2.3c0 .8.4 1.5 1.2 1.5a1.5 1.5 0 0 1 0 3c-.8 0-1.2.7-1.2 1.5V17h-2.5c-.8 0-1.5.4-1.5 1.2a1.5 1.5 0 0 1-3 0c0-.8-.7-1.2-1.5-1.2H5v-2.5c0-.8-.4-1.5-1.2-1.5a1.5 1.5 0 0 1 0-3c.8 0 1.2-.7 1.2-1.5V5h2.5C8.3 5 9 4.8 9 4Z" />
  ),

  // — solution categories —
  industrial: (
    <>
      <path d="M3 20V10l6 4V10l6 4V6h3v14z" />
      <path d="M3 20h18" />
    </>
  ),
  water: (
    <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" />
  ),
  infrastructure: (
    <>
      <path d="M4 21V8l8-4 8 4v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 12h16" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14a6 6 0 0 1-1-1Z" />
      <path d="M9 15c2-2.5 5-4 8-4.5" />
    </>
  ),
  agriculture: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c-4 0-6-2.5-6-6 3.5 0 6 2 6 6Z" />
      <path d="M12 11c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
  government: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V10M9 21V10M15 21V10M19 21V10" />
      <path d="M4 10h16L12 4z" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  energy: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,

  // — advantages —
  workflow: (
    <>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="15" width="6" height="5" rx="1" />
      <path d="M6 9v4a2 2 0 0 0 2 2h7" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l4-4 5 3 3-2 6 4" />
      <path d="M12 11l2.5 2.5a1.4 1.4 0 0 0 2-2L14 8" />
      <path d="M7 8l-4 4v3h3" />
    </>
  ),

  // — IOREX benefits —
  pipe: (
    <>
      <path d="M3 9h9a3 3 0 0 1 3 3v9" />
      <path d="M12 6h9M12 12h9" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" />,
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  wrench: (
    <path d="M15 3a5 5 0 0 0-4.5 7L4 16.5 7.5 20 14 13.5A5 5 0 0 0 21 9l-3 3-3-3 3-3a5 5 0 0 0-3-3Z" />
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="5" ry="2.5" />
      <path d="M4 7v5c0 1.4 2.2 2.5 5 2.5" />
      <ellipse cx="15" cy="14" rx="5" ry="2.5" />
      <path d="M10 14v3c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-3" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
    </>
  ),

  // — UI —
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M5 12.5 10 17l9-10" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  mapPin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5V21a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m3 17 5-4 4 3 3-2 6 5" />
    </>
  ),
  quote: (
    <path d="M8 7c-2 0-3.5 1.6-3.5 3.6S6 14 8 14v3H4v-3.4C4 9.9 5.6 7 8 7Zm10 0c-2 0-3.5 1.6-3.5 3.6S16 14 18 14v3h-4v-3.4C14 9.9 15.6 7 18 7Z" />
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
