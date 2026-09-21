import Image from "next/image";
import { Icon } from "@/components/Icons";

type Tone = "light" | "dark" | "brand";

/**
 * Intentional, on-brand image placeholder. Drop a real image later by passing
 * `src` (files live under /public/{company,products,iorex,projects,partners}).
 * Until then it renders a framed spec-panel that shows exactly where the photo
 * will go and which path to use.
 */
export default function ImagePlaceholder({
  label,
  caption,
  path,
  tone = "light",
  ratio = "16 / 10",
  src,
  alt,
  fit = "cover",
  className = "",
}: {
  label: string;
  caption?: string;
  /** intended file path, shown as a hint (e.g. /products/iorex.jpg) */
  path?: string;
  tone?: Tone;
  ratio?: string;
  src?: string;
  alt?: string;
  /** "cover" for photos; "contain" for logos / transparent artwork */
  fit?: "cover" | "contain";
  className?: string;
}) {
  if (src) {
    const contain = fit === "contain";
    const containBg = tone === "light" ? "bg-offwhite" : "bg-navy blueprint";
    return (
      <div
        className={`relative overflow-hidden rounded-lg ring-1 ring-navy/10 ${
          contain ? containBg : ""
        } ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          className={contain ? "object-contain p-8 sm:p-12" : "object-cover"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  const tones: Record<Tone, string> = {
    light:
      "bg-offwhite text-slate ring-1 ring-inset ring-navy/10 [--tick:theme(colors.royal)]",
    brand:
      "bg-navy text-mist/70 ring-1 ring-inset ring-white/10 blueprint [--tick:theme(colors.cyan)]",
    dark: "bg-ink text-mist/60 ring-1 ring-inset ring-white/10 [--tick:theme(colors.cyan)]",
  };
  const isDark = tone !== "light";

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}${caption ? ` — ${caption}` : ""}`}
      className={`tick-frame relative flex flex-col items-center justify-center overflow-hidden rounded-lg text-[color:var(--tick)] ${tones[tone]} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <span
          className={`flex size-12 items-center justify-center rounded-full ${
            isDark ? "bg-white/10" : "bg-white ring-1 ring-navy/10"
          }`}
        >
          <Icon name="image" className="size-6" />
        </span>
        <span
          className={`text-sm font-semibold ${
            isDark ? "text-white/90" : "text-navy"
          }`}
        >
          {label}
        </span>
        {caption ? (
          <span
            className={`max-w-[22ch] text-xs leading-5 ${
              isDark ? "text-mist/60" : "text-slate"
            }`}
          >
            {caption}
          </span>
        ) : null}
        {path ? (
          <span
            className={`eyebrow mt-1 rounded px-2 py-1 text-[0.6rem] ${
              isDark
                ? "bg-white/10 text-cyan"
                : "bg-navy/[0.04] text-royal"
            }`}
          >
            {path}
          </span>
        ) : null}
      </div>
    </div>
  );
}
