import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/SectionHeading";
import { Icon } from "@/components/Icons";
import { offices, contactPlaceholders } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-offwhite py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-3">
              <Eyebrow>Reach Us Directly</Eyebrow>
              <h2
                id="contact-title"
                className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
              >
                Offices &amp; contact details
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {offices.map((office, i) => (
                <Reveal
                  key={office.city}
                  delay={i * 80}
                  className="flex gap-4 rounded-xl border border-mist bg-white p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-royal/[0.06] text-royal">
                    <Icon name="mapPin" className="size-5" />
                  </span>
                  <div>
                    <p className="eyebrow text-[0.6rem] text-royal">
                      {office.city}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink">
                      {office.address}
                    </p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={160} className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-mist bg-white p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-royal/[0.06] text-royal">
                    <Icon name="mail" className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-[0.6rem] text-slate">Email</p>
                    <a
                      href={`mailto:${contactPlaceholders.email}`}
                      className="mt-1 block truncate text-sm font-medium text-slate transition-colors hover:text-royal"
                    >
                      {contactPlaceholders.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-mist bg-white p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-royal/[0.06] text-royal">
                    <Icon name="phone" className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-[0.6rem] text-slate">
                      Phone &middot; {contactPlaceholders.contactName}
                    </p>
                    <a
                      href={`tel:${contactPlaceholders.phone.replace(/\s/g, "")}`}
                      className="mt-1 block truncate text-sm font-medium text-slate transition-colors hover:text-royal"
                    >
                      {contactPlaceholders.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
