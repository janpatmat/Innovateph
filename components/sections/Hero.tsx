import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { company } from "@/lib/content";

const facts = [
  { k: "Established", v: company.established },
  { k: "Reach", v: "Multi-sector" },
  { k: "Offices", v: "Davao · Manila" },
];

const scope = ["Trading", "Distribution", "Solutions"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* signature: blueprint grid + one restrained cyan glow */}
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 h-[40rem] w-[40rem] rounded-full bg-blue/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
      />

      <Container className="relative">
        <div className="flex flex-col gap-12 pb-14 pt-28 lg:gap-14 lg:pb-16 lg:pt-36">
          {/* editorial statement — typography carries the hero */}
          <div className="flex max-w-4xl flex-col items-start gap-7">
            <Reveal>
              <Eyebrow tone="dark">{company.name}</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Innovative Solutions for a{" "}
                <span className="text-cyan">Changing World</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="max-w-2xl text-pretty text-base leading-7 text-mist/85 sm:text-lg">
                {company.name} provides innovative, reliable, and cost-effective
                products and solutions to businesses, government institutions,
                industries, and organizations across the Philippines.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/solutions" variant="primary">
                  Explore Our Solutions
                </Button>
                <Button href="/contact" variant="outline-light" icon={null}>
                  Contact Us
                </Button>
              </div>
            </Reveal>
          </div>

          {/* signature: engineering title block — stands in for the hero image */}
          <Reveal delay={320} className="w-full">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              {/* classification band + firm stamp */}
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-white/10 px-5 py-3">
                <p className="eyebrow flex items-center gap-3 text-[0.62rem] text-mist/70">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-cyan"
                  />
                  {scope.join("   ·   ")}
                </p>
                <p className="text-sm font-bold tracking-[0.16em] text-white/90">
                  <span aria-hidden="true">IIP</span>
                  <span className="sr-only">{company.name}</span>
                </p>
              </div>

              {/* title-block fields */}
              <dl className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.k} className="bg-navy/70 px-5 py-5">
                    <dt className="eyebrow text-[0.6rem] text-cyan">{f.k}</dt>
                    <dd className="mt-1.5 text-base font-semibold text-white">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
