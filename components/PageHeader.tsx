import type { ReactNode } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Eyebrow } from "@/components/SectionHeading";

/**
 * Navy banner at the top of every interior page. Carries the page's single H1
 * and keeps the sticky nav's transparent-over-dark treatment consistent.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={2} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
      />
      <Container className="relative">
        <div className="flex max-w-3xl flex-col gap-5 pb-16 pt-32 sm:pb-20 sm:pt-40">
          <Reveal>
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {intro ? (
            <Reveal delay={160}>
              <p className="max-w-2xl text-pretty text-base leading-7 text-mist/85 sm:text-lg">
                {intro}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
