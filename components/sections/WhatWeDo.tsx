import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Icon } from "@/components/Icons";
import { solutions } from "@/lib/content";

export default function WhatWeDo({
  ctaHref,
  ctaLabel,
  hideHeading = false,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  hideHeading?: boolean;
}) {
  return (
    <section
      id="solutions"
      aria-labelledby={hideHeading ? undefined : "solutions-title"}
      className="relative overflow-hidden border-y border-mist bg-offwhite py-20 sm:py-28"
    >
      <BlueprintShapes tone="light" variant={3} />
      <Container className="relative">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              titleId="solutions-title"
              eyebrow="What We Do"
              title="Solutions Across the Sectors That Keep the Country Moving"
              intro="From industrial supply to environmental technology, we cover a broad range of areas — bringing the right product or system to each requirement."
            />
          </Reveal>
        )}

        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
            hideHeading ? "" : "mt-14"
          }`}
        >
          {solutions.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 70}
              className="group flex flex-col gap-4 rounded-xl border border-mist bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-card"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-royal/[0.06] text-royal transition-colors group-hover:bg-blue group-hover:text-white">
                <Icon name={item.icon} className="size-5.5" />
              </span>
              <h3 className="text-base font-semibold text-navy">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate">{item.body}</p>
            </Reveal>
          ))}

          {/* breadth marker — supported by the source's broader area list */}
          <Reveal
            delay={140}
            className="flex flex-col justify-between gap-4 rounded-xl bg-navy p-6 text-white"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-cyan">
              <Icon name="chip" className="size-5.5" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-white">
                Other Specialized &amp; Emerging Technologies
              </h3>
              <p className="text-sm leading-6 text-mist/75">
                New and specialized technologies as opportunities and client
                needs arise.
              </p>
            </div>
          </Reveal>
        </div>

        {ctaHref && ctaLabel ? (
          <Reveal delay={80} className="mt-10 flex justify-center">
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
