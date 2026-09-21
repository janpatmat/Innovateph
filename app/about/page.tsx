import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import VisionMission from "@/components/sections/VisionMission";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Established in 2021, Innovate International Philippines is a diversified trading, distribution, and solutions provider and a sister company of JROG Marketing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Company"
        title="A diversified business built to grow with its clients"
        intro="Established in 2021, Innovate International Philippines works across many sectors — sourcing quality products and practical technologies for businesses, government, and industry."
      />
      <About hideHeading />
      <WhyChoose />
      <VisionMission />
      <CtaBand />
    </>
  );
}
