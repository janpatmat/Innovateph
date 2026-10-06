import Container from "@/components/Container";
import SectionHeading, { Eyebrow } from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import BlueprintShapes from "@/components/BlueprintShapes";
import { iorexBenefits } from "@/lib/content";

/** A few of the IOREX benefits, echoed as label chips for quick context. */
const highlights = iorexBenefits.slice(0, 4);

/**
 * "At the Source" — documents Innovate working directly with the IOREX
 * manufacturer in Korea (facility visit + HVAC Korea exhibition), with a short
 * general recap of what IOREX does. Photographs live in /public/iorex.
 */
export default function IorexSource() {
  return (
    <section
      id="iorex-source"
      aria-labelledby="iorex-source-title"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* geometric patterns — survey dot-grid + ambient shapes */}
      <div
        aria-hidden="true"
        className="dotgrid pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_100%_0%,black,transparent_62%)]"
      />
      <BlueprintShapes tone="light" variant={0} />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="iorex-source-title"
            eyebrow="At the Source"
            title="Working Directly With the Makers of IOREX"
            intro="Innovate International works with IOREX at the source — meeting the manufacturer in Korea and seeing the system exhibited and internationally certified, the water-pipe technology it brings to businesses and institutions across the Philippines."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal delay={80} className="lg:col-span-7">
            <PhotoFrame
              src="/iorex/iorex_warehouse.jpeg"
              alt="Innovate International representatives visiting the IOREX Co., Ltd. facility in Korea"
              figure="FIG. 01"
              caption="At the IOREX Facility"
              ratio="4 / 3"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>
          <Reveal delay={160} className="lg:col-span-5">
            <PhotoFrame
              src="/iorex/iorex_stall.jpeg"
              alt="The IOREX booth at the HVAC Korea exhibition, showing its global certifications"
              figure="FIG. 02"
              caption="IOREX at HVAC Korea"
              ratio="3 / 4"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>

        {/* general IOREX recap — echoes the technology's key points */}
        <Reveal
          delay={80}
          className="mt-8 flex flex-col gap-5 rounded-2xl border border-mist bg-offwhite p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex max-w-xl flex-col gap-2">
            <Eyebrow>About IOREX</Eyebrow>
            <p className="text-sm leading-6 text-slate">
              A next-generation smart pipe management system for water-pipe
              treatment — improving water quality while reducing maintenance and
              replacement costs, and referenced against NSF/ANSI 61 and 372
              standards.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 sm:justify-end">
            {highlights.map((benefit) => (
              <li
                key={benefit.label}
                className="eyebrow rounded-full border border-mist bg-white px-3 py-1.5 text-[0.6rem] text-royal"
              >
                {benefit.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
