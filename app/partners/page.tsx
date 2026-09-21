import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Partners from "@/components/sections/Partners";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Innovate International Philippines collaborates with established local and international manufacturers and partners.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Partners"
        title="Working with trusted manufacturers and partners"
        intro="We collaborate with established local and international manufacturers to bring quality products and technologies to our clients."
      />
      <Partners hideHeading />
      <CtaBand
        eyebrow="Partnerships"
        title="Interested in partnering with us?"
        body="We're always open to new manufacturer and distribution partnerships. Let's start a conversation."
      />
    </>
  );
}
