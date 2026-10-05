import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Icon } from "@/components/Icons";
import { rozeai } from "@/lib/content";

/** What Roze AI builds — the FIRE4CAST fire-safety lineup. */
export default function RozeAi() {
  return (
    <section
      id="about-rozeai"
      aria-labelledby="about-rozeai-title"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="dotgrid pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_0%_0%,black,transparent_62%)]"
      />
      <BlueprintShapes tone="light" variant={3} />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="about-rozeai-title"
            eyebrow="About Roze AI"
            title="AI applied to fire safety"
            intro={rozeai.intro}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rozeai.capabilities.map((capability, i) => (
            <Reveal
              key={capability.name}
              delay={(i % 4) * 80}
              className="group flex flex-col gap-4 rounded-xl border border-mist bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-card"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-royal/[0.06] text-royal transition-colors group-hover:bg-blue group-hover:text-white">
                <Icon name={capability.icon} className="size-5.5" />
              </span>
              <h3 className="text-base font-semibold text-navy">
                {capability.name}
              </h3>
              <p className="text-sm leading-6 text-slate">{capability.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
