import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";
import { partners } from "@/lib/content";

export default function Partners({
  hideHeading = false,
}: {
  hideHeading?: boolean;
}) {
  return (
    <section
      id="partners"
      aria-labelledby={hideHeading ? undefined : "partners-title"}
      className="relative overflow-hidden bg-offwhite py-20 sm:py-28"
    >
      <BlueprintShapes tone="light" variant={0} />
      <Container className="relative">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              titleId="partners-title"
              eyebrow="Our Partners"
              title="Working with trusted manufacturers and partners"
              intro="We collaborate with established local and international manufacturers to bring quality products and technologies to our clients."
            />
          </Reveal>
        )}

        <ul
          className={`mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 ${
            hideHeading ? "" : "mt-14"
          }`}
        >
          {partners.map((partner, i) => {
            const tile =
              "group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-mist bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-lift";

            const body = (
              <>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 896px) 45vw, 440px"
                  className="object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:p-10"
                />
                {/* water-flow accent — reveals on hover, ties tiles to the IOREX motif */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-5 left-1/2 h-0.5 w-9 -translate-x-1/2 scale-x-0 rounded-full bg-gradient-to-r from-royal via-blue to-cyan transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </>
            );

            return (
              <Reveal as="li" key={partner.name} delay={(i % 4) * 70}>
                {partner.href ? (
                  <Link
                    href={partner.href}
                    aria-label={partner.name}
                    className={tile}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className={tile}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
