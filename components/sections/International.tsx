import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Icon } from "@/components/Icons";
import { internationalProjects } from "@/lib/content";

/** Group installations by country, preserving first-seen order. */
function groupByCountry(projects: typeof internationalProjects) {
  const regions: {
    country: string;
    countryCode: string;
    continent: string;
    items: typeof internationalProjects;
  }[] = [];
  for (const project of projects) {
    const region = regions.find((r) => r.country === project.country);
    if (region) {
      region.items.push(project);
    } else {
      regions.push({
        country: project.country,
        countryCode: project.countryCode,
        continent: project.continent,
        items: [project],
      });
    }
  }
  return regions;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function International() {
  const regions = groupByCountry(internationalProjects);
  const facts = [
    { label: "Installations", value: pad(internationalProjects.length) },
    { label: "Countries", value: pad(regions.length) },
    {
      label: "Continents",
      value: pad(new Set(internationalProjects.map((p) => p.continent)).size),
    },
  ];

  return (
    <section
      id="international"
      aria-labelledby="international-title"
      className="relative overflow-hidden border-y border-mist bg-offwhite py-20 sm:py-28"
    >
      <BlueprintShapes tone="light" variant={2} />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="international-title"
            eyebrow="International Collaboration"
            title="A Technology With an International Footprint"
            intro="The IOREX material references installations at civic, medical, and academic institutions across Korea and the United States."
          />
        </Reveal>

        {/* Reach, as a technical readout rather than a photo */}
        <Reveal delay={60}>
          <dl className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-mist bg-white px-6 py-4 shadow-card sm:gap-x-10">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex items-center gap-2.5 ${
                  i !== 0 ? "sm:border-l sm:border-mist sm:pl-8 md:pl-10" : ""
                }`}
              >
                <span className="eyebrow text-[0.6rem] text-slate">
                  {fact.label}
                </span>
                <span className="font-mono text-base font-semibold tabular-nums text-navy">
                  {fact.value}
                </span>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Installation register, grouped by region */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {regions.map((region, ri) => (
            <Reveal
              key={region.country}
              delay={120 + ri * 90}
              className="flex flex-col rounded-xl border border-mist bg-white shadow-card"
            >
              <div className="flex items-center justify-between gap-4 px-5 pt-5 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 min-w-8 items-center justify-center rounded-md bg-navy px-2 font-mono text-xs font-semibold tracking-wider text-white">
                    {region.countryCode}
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    {region.country}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate">
                  {pad(region.items.length)} sites
                </span>
              </div>

              {/* IOREX water-flow motif, reused as the header/list divider */}
              <span
                aria-hidden="true"
                className="h-0.5 w-full bg-gradient-to-r from-royal via-blue to-cyan"
              />

              <ul className="flex flex-1 flex-col">
                {region.items.map((project, i) => (
                  <li
                    key={project.name}
                    className={`flex items-start gap-3 px-5 py-3.5 ${
                      i !== region.items.length - 1 ? "border-b border-mist" : ""
                    }`}
                  >
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-royal/[0.06] text-royal">
                      <Icon name="mapPin" className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium leading-5 text-navy">
                        {project.name}
                      </span>
                      {project.locality ? (
                        <span className="eyebrow text-[0.55rem] text-slate">
                          {project.locality}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-slate">
          Projects and installations are presented as referenced in the IOREX
          material and do not necessarily represent clients of Innovate
          International Philippines.
        </p>
      </Container>
    </section>
  );
}
