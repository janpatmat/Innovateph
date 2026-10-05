import Container from "@/components/Container";
import SectionHeading, { Eyebrow } from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import BlueprintShapes from "@/components/BlueprintShapes";
import { people, values } from "@/lib/content";

/**
 * About-page cut of the People spotlight — same content as the landing "Our
 * People" section, redrawn on light ground: a content rail with a values ledger
 * on the left, and a staggered two-photo plate cluster on the right.
 */
export default function People() {
  const [wide, tall] = people.photos;

  return (
    <section
      id="our-people"
      aria-labelledby="about-people-title"
      className="relative overflow-hidden border-y border-mist bg-offwhite py-20 sm:py-28"
    >
      {/* geometric patterns — survey dot-grid + ambient shapes */}
      <div
        aria-hidden="true"
        className="dotgrid pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_0%_0%,black,transparent_62%)]"
      />
      <BlueprintShapes tone="light" variant={2} />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* content rail — heading, intro, and a values ledger */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal>
              <SectionHeading
                titleId="about-people-title"
                eyebrow={people.eyebrow}
                title={people.title}
                intro={people.intro}
              />
            </Reveal>

            <Reveal delay={80} className="flex flex-col">
              <Eyebrow>Values</Eyebrow>
              <ul className="mt-4 flex flex-col">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 border-t border-mist py-3 last:border-b"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rotate-45 bg-blue"
                    />
                    <span className="text-sm font-medium text-navy">{value}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* plate cluster — staggered so the two figures step against each other */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-end">
              <Reveal delay={60}>
                <PhotoFrame
                  {...wide}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                />
              </Reveal>
              <Reveal delay={140}>
                <PhotoFrame
                  {...tall}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
