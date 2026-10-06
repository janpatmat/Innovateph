import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";

/** Kept deliberately general — the certificate image carries the specifics. */
const details = [
  { term: "Holder", value: "IOREX Co., Ltd." },
  { term: "Issued By", value: "An Independent Certification Body" },
  { term: "Scope", value: "Applicable Water-System Standards" },
];

/** Register marks set just outside the certificate sheet's corners. */
const corners = [
  "-left-3 -top-3 border-l-[1.5px] border-t-[1.5px]",
  "-right-3 -top-3 border-r-[1.5px] border-t-[1.5px]",
  "-left-3 -bottom-3 border-l-[1.5px] border-b-[1.5px]",
  "-right-3 -bottom-3 border-r-[1.5px] border-b-[1.5px]",
];

/**
 * IOREX certification — the certificate shown whole (never cropped) as a sheet
 * laid on the blueprint ground, with a short, general description beside it.
 */
export default function IorexCertificate() {
  return (
    <section
      id="iorex-certificate"
      aria-labelledby="iorex-certificate-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={2} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-blue/20 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal>
              <SectionHeading
                tone="dark"
                titleId="iorex-certificate-title"
                eyebrow="Certification"
                title="Independently Certified"
                intro="IOREX holds certification from an internationally recognized, independent standards organization — third-party recognition that the system meets applicable requirements for water systems."
              />
            </Reveal>

            <Reveal delay={100}>
              <dl className="divide-y divide-white/10 border-y border-white/10">
                {details.map((d) => (
                  <div
                    key={d.term}
                    className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-3.5"
                  >
                    <dt className="eyebrow text-[0.62rem] text-cyan">{d.term}</dt>
                    <dd className="text-sm text-mist/85">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-7">
            <figure className="flex flex-col gap-4">
              <a
                href="/iorex/iorex_certificate.jpeg"
                target="_blank"
                rel="noopener"
                aria-label="Open the full IOREX certificate in a new tab"
                className="group relative mx-3 block sm:mx-4"
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-0">
                  {corners.map((c) => (
                    <span key={c} className={`absolute size-4 border-cyan/85 ${c}`} />
                  ))}
                </span>
                {/* the sheet — sits a hair off-square, then settles on hover */}
                <span className="block rounded-[3px] bg-white p-2.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform duration-500 ease-out motion-safe:-rotate-[0.8deg] motion-safe:group-hover:rotate-0 sm:p-4">
                  <Image
                    src="/iorex/iorex_certificate.jpeg"
                    alt="IOREX certificate of compliance issued by an independent certification body"
                    width={1072}
                    height={822}
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="h-auto w-full"
                  />
                </span>
              </a>
              <figcaption className="mx-3 flex flex-wrap items-center gap-3 sm:mx-4">
                <span className="eyebrow text-[0.62rem] text-cyan">FIG. 03</span>
                <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />
                <span className="text-sm font-medium text-white/90">
                  Certificate of compliance
                </span>
                <span className="eyebrow ml-auto text-[0.6rem] text-mist/60">
                  Select to enlarge
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
