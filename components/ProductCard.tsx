import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Icon } from "@/components/Icons";

export type Product = {
  name: string;
  index: string;
  body: string;
  imagePath: string;
  href?: string;
  placeholder?: boolean;
  imageReady?: boolean;
};

export default function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const href = product.href ?? "/contact";
  const cta = product.href === "/iorex" ? "See IOREX" : "Learn More";

  const image = (
    <div className="overflow-hidden rounded-lg">
      <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        <ImagePlaceholder
          label={product.name}
          path={product.imageReady ? undefined : product.imagePath}
          src={product.imageReady ? product.imagePath : undefined}
          alt={product.name}
          ratio="16 / 10"
        />
      </div>
    </div>
  );

  const content = (
    <div className="flex flex-1 flex-col gap-3 px-2 pb-1">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-[0.65rem] text-slate">
          {product.index}
        </span>
        {product.placeholder ? (
          <span className="eyebrow rounded bg-mist px-2 py-0.5 text-[0.55rem] text-slate">
            Details to follow
          </span>
        ) : null}
      </div>
      <h3
        className={`font-semibold text-navy ${featured ? "text-2xl" : "text-xl"}`}
      >
        {product.name}
      </h3>
      <p className="flex-1 text-sm leading-6 text-slate">{product.body}</p>
      <Link
        href={href}
        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-colors hover:text-blue"
      >
        {cta}
        <Icon
          name="arrowRight"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );

  if (featured) {
    return (
      <article className="group grid h-full items-center gap-6 rounded-xl border border-mist bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-lift sm:grid-cols-2">
        {image}
        {content}
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col gap-5 rounded-xl border border-mist bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-lift">
      {image}
      {content}
    </article>
  );
}
