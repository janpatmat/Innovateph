import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RozeAi from "@/components/sections/RozeAi";
import RozePartnership from "@/components/sections/RozePartnership";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Roze AI",
  description:
    "Roze AI is a Korean technology company focused on AI-driven fire safety — the FIRE4CAST platform for fire assessment, wireless detection, and early warning. Innovate International Philippines is its Philippine partner.",
};

export default function RozeAiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology Partner"
        title="Roze AI — AI-powered fire safety"
        intro="A Korean technology company applying AI to fire assessment and early warning. Innovate International Philippines is its Philippine partner, bringing the FIRE4CAST platform to homes, buildings, and institutions."
      />
      <RozeAi />
      <RozePartnership />
      <CtaBand
        eyebrow="Roze AI"
        title="Interested in FIRE4CAST?"
        body="Get in touch to learn how Roze AI's fire-safety technology could fit your building or facility."
      />
    </>
  );
}
