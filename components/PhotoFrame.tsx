import Image from "next/image";

/** L-shaped engineering register marks, one per corner. */
const corners = [
  "left-3 top-3 border-l-[1.5px] border-t-[1.5px]",
  "right-3 top-3 border-r-[1.5px] border-t-[1.5px]",
  "left-3 bottom-3 border-l-[1.5px] border-b-[1.5px]",
  "right-3 bottom-3 border-r-[1.5px] border-b-[1.5px]",
];

/**
 * A real photograph framed as an engineering plate — corner register marks, a
 * mono figure label, and a scan-line wipe on hover. Ties documentary imagery
 * into the site's blueprint identity. Files live under /public/{company,...}.
 */
export default function PhotoFrame({
  src,
  alt,
  figure,
  caption,
  ratio = "4 / 3",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  /** short mono index shown bottom-left, e.g. "FIG. 01" */
  figure?: string;
  caption?: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-xl bg-navy shadow-lift ring-1 ring-white/10 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[900ms] ease-out will-change-transform group-hover:scale-[1.035]"
      />

      {/* legibility scrim — darkens top + bottom bands, leaves the middle clear */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,45,77,0.38)_0%,transparent_24%,transparent_54%,rgba(11,45,77,0.86)_100%)]"
      />

      {/* engineering register marks — four corners */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        {corners.map((c) => (
          <span
            key={c}
            className={`absolute size-3.5 border-cyan/85 ${c}`}
          />
        ))}
      </span>

      {/* scan-line wipe — reveals on hover, echoes the IOREX water-flow accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-royal via-blue to-cyan transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {figure || caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-5 pb-4 pt-12">
          {figure ? (
            <span className="eyebrow shrink-0 whitespace-nowrap text-[0.62rem] text-cyan">{figure}</span>
          ) : null}
          {figure && caption ? (
            <span aria-hidden="true" className="h-3.5 w-px shrink-0 bg-white/25" />
          ) : null}
          {caption ? (
            <span className="text-sm font-medium text-white/90">{caption}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
