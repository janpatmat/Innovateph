import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BlueprintShapes from "@/components/BlueprintShapes";
import { Icon } from "@/components/Icons";
import { advantages } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
      <BlueprintShapes tone="dark" variant={1} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-royal/25 blur-[130px]"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            titleId="why-choose-title"
            eyebrow="Why Work With Us"
            title="A Partner Our Clients Can Rely On"
            intro="We build long-term relationships on structured processes, clear communication, and solutions that fit real business needs."
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="flex h-full flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-cyan/40 hover:bg-white/[0.07]"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-6 text-mist/75">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
