import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { Icon } from "@/components/Icons";
import { pillars } from "@/lib/content";

export default function WhoWeAre({
  ctaHref,
  ctaLabel,
}: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-title"
      className="bg-offwhite py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            titleId="who-we-are-title"
            eyebrow="Who We Are"
            title="A Philippine-based provider working across many sectors"
            intro="Established in 2021, Innovate International Philippines is a trading, distribution, and solutions provider. Rather than focusing on a single industry, we work across multiple sectors — sourcing quality products and practical technologies for the clients who need them."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.label}
              delay={i * 80}
              className="group flex flex-col gap-4 bg-white p-7 transition-colors hover:bg-offwhite"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-navy/[0.04] text-royal transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon name={pillar.icon} className="size-5.5" />
                </span>
                <span className="eyebrow text-[0.65rem] text-slate">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy">
                {pillar.label}
              </h3>
              <p className="text-sm leading-6 text-slate">{pillar.body}</p>
            </Reveal>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <Reveal delay={80} className="mt-10">
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
