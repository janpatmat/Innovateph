import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/sections/Products";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Featured products and technologies from Innovate International Philippines, including Heavy Equipment, ROZEAI, IOREX, and Solar Cold Storage Units.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Product Portfolio"
        title="Featured products and technologies"
        intro="A selection of the products and technologies we bring to Philippine businesses, institutions, and industries."
      />
      <Products hideHeading />
      <CtaBand
        title="Looking for a specific product?"
        body="Reach out for availability, specifications, and pricing on any product in our portfolio."
      />
    </>
  );
}
