import Image from "next/image";

type Tone = "light" | "dark";

/**
 * Brand mark + wordmark lockup. The mark is the real Innovate logo;
 * the wordmark tone adapts to light/dark backgrounds.
 */
export default function Logo({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const primary = tone === "dark" ? "text-white" : "text-navy";
  const secondary = tone === "dark" ? "text-cyan" : "text-royal";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/company/innovate_logo.png"
        alt=""
        aria-hidden="true"
        width={32}
        height={32}
        priority
        className="size-8 shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.95rem] font-bold tracking-tight ${primary}`}
        >
          INNOVATE
        </span>
        <span
          className={`eyebrow text-[0.55rem] font-medium ${secondary}`}
        >
          International Philippines
        </span>
      </span>
    </span>
  );
}
