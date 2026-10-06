import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import BlueprintShapes from "@/components/BlueprintShapes";
import { iorexFieldPhotos } from "@/lib/content";

/** The landscape takes half the row, the two portraits a quarter each. */
const spans = ["sm:col-span-2 lg:col-span-6", "lg:col-span-3", "lg:col-span-3"];
const sizes = [
  "(max-width: 1024px) 100vw, 50vw",
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
];

/** IOREX in the Philippines — conference, presentation and booth photos. */
export default function IorexField() {
  return (
    <section
      id="iorex-philippines"
      aria-labelledby="iorex-philippines-title"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="dotgrid pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_0%_100%,black,transparent_62%)]"
      />
      <BlueprintShapes tone="light" variant={1} />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="iorex-philippines-title"
            eyebrow="In the Philippines"
            title="Bringing IOREX to Philippine Water Districts"
            intro="Innovate International introduces IOREX to the people who run local water systems — on conference stages, at exhibitions, and in one-on-one walkthroughs."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
          {iorexFieldPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 90} className={spans[i]}>
              <PhotoFrame {...photo} sizes={sizes[i]} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
