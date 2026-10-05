import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import BlueprintShapes from "@/components/BlueprintShapes";
import { products } from "@/lib/content";

export default function Products({
  ctaHref,
  ctaLabel,
  hideHeading = false,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  hideHeading?: boolean;
}) {
  return (
    <section
      id="products"
      aria-labelledby={hideHeading ? undefined : "products-title"}
      className="relative overflow-hidden border-b border-mist bg-offwhite py-20 sm:py-28"
    >
      <BlueprintShapes tone="light" variant={0} />
      <Container className="relative">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              titleId="products-title"
              eyebrow="Our Product Portfolio"
              title="Featured products and technologies"
              intro="A selection of the products and technologies we bring to Philippine businesses, institutions, and industries."
            />
          </Reveal>
        )}

        <div
          className={`grid gap-6 sm:grid-cols-2 ${hideHeading ? "" : "mt-14"}`}
        >
          {products.map((product, i) => {
            const featured = product.name === "IOREX";
            return (
              <Reveal
                key={product.name}
                delay={(i % 2) * 100}
                className={featured ? "sm:col-span-2" : ""}
              >
                <ProductCard product={product} featured={featured} />
              </Reveal>
            );
          })}
        </div>

        {ctaHref && ctaLabel ? (
          <Reveal delay={80} className="mt-10 flex justify-center">
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
