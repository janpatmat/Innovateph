import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/content";

const snapshot = [
  { k: "Established", v: company.established },
  { k: "Business Type", v: company.businessType },
  { k: "Locations", v: "Davao City · Manila" },
];

export default function About({
  hideHeading = false,
}: {
  hideHeading?: boolean;
}) {
  return (
    <section
      id="about"
      aria-labelledby={hideHeading ? undefined : "about-title"}
      className="bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            {hideHeading ? null : (
              <Reveal>
                <SectionHeading
                  titleId="about-title"
                  eyebrow="About the Company"
                  title="A diversified business built to grow with its clients"
                  as="h2"
                />
              </Reveal>
            )}

            <Reveal delay={80}>
              <div className="flex flex-col gap-4 text-base leading-7 text-justify text-slate">
                <p>
                  Innovate International Philippines operates a diversified
                  business model that spans trading, distribution, and
                  solutions across many industries. We source products from
                  established local and international manufacturers and look for
                  innovative technologies that provide practical answers to real
                  problems.
                </p>
                
              </div>
            </Reveal>

            <Reveal delay={160}>
              <dl className="mt-2 overflow-hidden rounded-xl border border-mist">
                {snapshot.map((row, i) => (
                  <div
                    key={row.k}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${
                      i !== snapshot.length - 1 ? "border-b border-mist" : ""
                    }`}
                  >
                    <dt className="eyebrow text-[0.65rem] text-slate">
                      {row.k}
                    </dt>
                    <dd className="text-right text-sm font-semibold text-navy">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="flex items-center justify-center lg:pt-4"
          >
            <Image
              src="/company/innovate_logo.png"
              alt="Innovate International Philippines logo"
              width={1024}
              height={1014}
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority
              className="h-auto w-full max-w-md lg:max-w-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
