import type { ReactNode } from "react";

type Tone = "light" | "dark";

/** Small monospaced technical eyebrow used above section titles. */
export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const color = tone === "dark" ? "text-cyan" : "text-royal";
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 text-xs font-medium ${color} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-6 ${tone === "dark" ? "bg-cyan/60" : "bg-blue/50"}`}
      />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  titleId,
  intro,
  tone = "light",
  align = "left",
  as: TitleTag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const introColor = tone === "dark" ? "text-mist/80" : "text-slate";
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <TitleTag
        id={titleId}
        className={`text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </TitleTag>
      {intro ? (
        <p className={`text-pretty text-base leading-7 sm:text-lg ${introColor}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
