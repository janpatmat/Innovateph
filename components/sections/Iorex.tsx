import Container from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Icon } from "@/components/Icons";
import { iorexBenefits } from "@/lib/content";

export default function Iorex() {
  return (
    <section
      id="iorex"
      aria-labelledby="iorex-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={3} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-teal/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue/20 blur-[130px]"
      />

      <Container className="relative">
        {/* intro + product image */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow tone="dark">How It Works</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="iorex-title"
                className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl"
              >
                Protecting the Pipeline, Improving the Water
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="flex flex-col gap-4 text-base leading-7 text-mist/85">
                <p>
                  IOREX focuses on the health of the pipeline itself — treating
                  pipes and improving water quality while reducing the cost and
                  disruption of ongoing maintenance and replacement.
                </p>
                <p>
                  It is presented as a next-generation smart pipe management
                  system for water-pipe treatment and management across the life
                  of a pipeline.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <ImagePlaceholder
              label="IOREX Product Image"
              caption="Smart Pipe Management System"
              src="/iorex/iorex_product.jpg"
              alt="IOREX smart pipe management system"
              tone="brand"
              ratio="4 / 3"
              className="shadow-lift"
            />
            <div className="absolute -bottom-4 -right-4 hidden rounded-lg border border-white/10 bg-navy/90 px-4 py-3 shadow-lift backdrop-blur sm:block">
              <p className="eyebrow text-[0.6rem] text-cyan">Water Technology</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Treatment &amp; Management
              </p>
            </div>
          </Reveal>
        </div>

        {/* concept: pipe motif + benefits */}
        <Reveal
          delay={80}
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
        >
          <div className="flex flex-col gap-2">
            <Eyebrow tone="dark">The IOREX Concept</Eyebrow>
            <p className="max-w-2xl text-sm leading-6 text-mist/70">
              A conceptual view of what the system addresses across the life of a
              pipeline.
            </p>
          </div>

          {/* stylized pipe (decorative) */}
          <div
            aria-hidden="true"
            className="relative mt-8 flex items-center gap-3"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan">
              <Icon name="droplet" className="size-4.5" />
            </span>
            <span className="relative h-3 flex-1 overflow-hidden rounded-full bg-gradient-to-r from-royal via-blue to-cyan">
              <span className="absolute inset-y-0 left-1/4 w-px bg-navy/40" />
              <span className="absolute inset-y-0 left-2/4 w-px bg-navy/40" />
              <span className="absolute inset-y-0 left-3/4 w-px bg-navy/40" />
            </span>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan">
              <Icon name="gauge" className="size-4.5" />
            </span>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {iorexBenefits.map((benefit) => (
              <li
                key={benefit.label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-cyan/15 text-cyan">
                  <Icon name={benefit.icon} className="size-4.5" />
                </span>
                <span className="text-sm font-medium text-white">
                  {benefit.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* installation / project photo */}
        <div className="mt-8 grid items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <ImagePlaceholder
              label="IOREX Installation / Project Photo"
              caption="On-Site Installation Imagery"
              src="/iorex/iorex_application.jpg"
              alt="IOREX on-site installation"
              tone="dark"
              ratio="16 / 9"
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-white">
              Built for Real Water Systems
            </h3>
            <p className="text-sm leading-6 text-mist/75">
              On-site installation and project imagery from real deployments,
              showing IOREX integrated into working water systems.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
