import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Approach from "@/components/sections/Approach";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "From industrial supply to environmental technology, Innovate International Philippines delivers solutions across the sectors that keep the country moving.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Solutions Across the Sectors That Keep the Country Moving"
        intro="We cover a broad range of areas — bringing the right product or system to each requirement, for businesses, government institutions, industries, and organizations."
      />
      <WhatWeDo hideHeading />
      <Approach />
      <CtaBand
        title="Have a Requirement in Mind?"
        body="Tell us about your project or need, and we'll help identify the right products and solutions."
      />
    </>
  );
}
