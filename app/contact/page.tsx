import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Innovate International Philippines for inquiries, business discussions, partnership opportunities, and project requirements. Offices in Davao City and Manila.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's Build the Right Solution Together"
        intro="For inquiries, business discussions, partnership opportunities, and project requirements, get in touch with Innovate International Philippines."
      />
      <Contact />
    </>
  );
}
