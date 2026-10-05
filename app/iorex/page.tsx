import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Iorex from "@/components/sections/Iorex";
import IorexSource from "@/components/sections/IorexSource";
import IorexCertificate from "@/components/sections/IorexCertificate";
import IorexField from "@/components/sections/IorexField";
import International from "@/components/sections/International";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "IOREX — Smart Water Pipe Management",
  description:
    "IOREX is presented as a next-generation smart pipe management system for water-pipe treatment and management, referenced against NSF/ANSI 61 and 372 standards.",
};

export default function IorexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Featured Technology"
        title="IOREX — Smart Water Pipe Management"
        intro="A next-generation smart pipe management system designed for water-pipe treatment and management — improving water quality while reducing maintenance and replacement costs."
      />
      <Iorex />
      <IorexSource />
      <IorexCertificate />
      <IorexField />
      <International />
      <CtaBand
        title="Interested in IOREX?"
        body="Get in touch to learn how IOREX could fit your water system requirements."
      />
    </>
  );
}
