import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import BlueprintShapes from "@/components/BlueprintShapes";
import { rozeai } from "@/lib/content";

/** Column spans + sizes per photo — portraits narrow, landscapes wide. */
const spans = ["lg:col-span-4", "lg:col-span-8", "lg:col-span-8", "lg:col-span-4"];
const sizes = [
  "(max-width: 1024px) 100vw, 32vw",
  "(max-width: 1024px) 100vw, 63vw",
  "(max-width: 1024px) 100vw, 63vw",
  "(max-width: 1024px) 100vw, 32vw",
];

/** The Innovate × Roze AI partnership — milestones and the photo record. */
export default function RozePartnership() {
  return (
    <section
      id="rozeai-partnership"
      aria-labelledby="rozeai-partnership-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={1} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-royal/25 blur-[130px]"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            tone="dark"
            titleId="rozeai-partnership-title"
            eyebrow="The Partnership"
            title="A partnership signed on innovation"
            intro="Innovate International Philippines is Roze AI's Philippine partner — from the memorandum of understanding in Manila to hands-on FIRE4CAST training in Korea."
          />
        </Reveal>

        {/* milestones */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {rozeai.milestones.map((milestone, i) => (
            <Reveal
              key={milestone.title}
              delay={i * 90}
              className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-[0.6rem] text-cyan">
                  {milestone.date}
                </span>
                <span aria-hidden="true" className="h-3 w-px bg-white/20" />
                <span className="eyebrow text-[0.6rem] text-mist/70">
                  {milestone.place}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {milestone.title}
              </h3>
              <p className="text-sm leading-6 text-mist/75">{milestone.body}</p>
            </Reveal>
          ))}
        </div>

        {/* photo record */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {rozeai.photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 2) * 100} className={spans[i]}>
              <PhotoFrame {...photo} sizes={sizes[i]} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
