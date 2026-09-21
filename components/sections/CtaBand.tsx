import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { Eyebrow } from "@/components/SectionHeading";

/** Reusable closing call-to-action band. */
export default function CtaBand({
  eyebrow = "Get in Touch",
  title = "Let's Build the Right Solution Together",
  body = "For inquiries, business discussions, partnership opportunities, and project requirements, get in touch with Innovate International Philippines.",
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center text-white sm:px-12">
          <div
            className="blueprint absolute inset-0 opacity-50"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-royal/30 blur-[120px]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-pretty text-base leading-7 text-mist/85">
              {body}
            </p>
            <div className="mt-2">
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
