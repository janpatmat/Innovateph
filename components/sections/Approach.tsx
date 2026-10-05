import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";
import { approach } from "@/lib/content";

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <BlueprintShapes tone="light" variant={1} />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="approach-title"
            eyebrow="Our Approach"
            title="From Need to Solution"
            intro="A clear, structured process that keeps every engagement organized from the first conversation to follow-up."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* desktop connector track */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-12 right-12 top-6 hidden h-px bg-mist md:block"
          />
          <ol className="grid gap-8 md:grid-cols-4">
            {approach.map((step, i) => (
              <Reveal
                as="li"
                key={step.step}
                delay={i * 90}
                className="relative flex gap-5 md:flex-col md:gap-6"
              >
                <div className="relative flex flex-col items-center md:block">
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-mist bg-white font-mono text-sm font-semibold text-blue shadow-sm">
                    {step.step}
                  </span>
                  {i < approach.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-px flex-1 bg-mist md:hidden"
                    />
                  ) : null}
                </div>
                <div className="pb-4 md:pt-2">
                  <h3 className="text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
