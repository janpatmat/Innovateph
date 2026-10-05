import Container from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Icon } from "@/components/Icons";
import { iorexBenefits } from "@/lib/content";

/** Compact IOREX highlight for the landing page — links to the full page. */
export default function IorexTeaser() {
  const highlights = iorexBenefits.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={1} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-teal/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-blue/20 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow tone="dark">Featured Technology</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                IOREX — Smart Water Pipe Management
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-xl text-base leading-7 text-mist/85">
                A next-generation smart pipe management system designed for
                water-pipe treatment and management — improving water quality
                while reducing maintenance and replacement costs.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {highlights.map((benefit) => (
                  <li
                    key={benefit.label}
                    className="flex items-center gap-3 text-sm text-mist/85"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-cyan/15 text-cyan">
                      <Icon name={benefit.icon} className="size-4" />
                    </span>
                    {benefit.label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <Button href="/iorex" variant="primary">
                Explore IOREX
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <ImagePlaceholder
              label="IOREX Product Image"
              caption="Smart pipe management system"
              src="/iorex/iorex_product.jpg"
              alt="IOREX smart pipe management system"
              tone="brand"
              ratio="4 / 3"
              className="shadow-lift"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
