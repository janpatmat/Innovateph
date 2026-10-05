import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import BlueprintShapes from "@/components/BlueprintShapes";
import { people, values } from "@/lib/content";

/** People-and-presence spotlight — real company photographs as engineering plates. */
export default function Company() {
  return (
    <section
      id="our-people"
      aria-labelledby="our-people-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-24"
    >
      {/* signature navy system — matches Hero / IOREX teaser */}
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={2} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-blue/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="our-people-title"
            tone="dark"
            eyebrow={people.eyebrow}
            title={people.title}
            intro={people.intro}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal delay={80} className="lg:col-span-7">
            <PhotoFrame
              {...people.photos[0]}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />

            {/* company values — thin engineering label chips */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="eyebrow rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[0.6rem] text-mist/75"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-5">
            <PhotoFrame
              {...people.photos[1]}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
