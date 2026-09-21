import Container from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { vision, mission, values } from "@/lib/content";

export default function VisionMission() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-royal/25 blur-[140px]"
      />
      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow tone="dark">Vision &amp; Mission</Eyebrow>
          <h2
            id="vision-title"
            className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Guided by a clear purpose
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            { label: "Vision", body: vision, accent: "text-cyan" },
            { label: "Mission", body: mission, accent: "text-teal" },
          ].map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 100}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8"
            >
              <Icon name="quote" className={`size-8 ${item.accent}`} />
              <Eyebrow tone="dark">{item.label}</Eyebrow>
              <p className="text-lg leading-8 text-mist/90">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3"
        >
          {values.map((value) => (
            <span
              key={value}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white"
            >
              <Icon name="check" className="size-4 text-cyan" />
              {value}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
