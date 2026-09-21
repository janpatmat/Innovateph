import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Products from "@/components/sections/Products";
import IorexTeaser from "@/components/sections/IorexTeaser";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre ctaHref="/about" ctaLabel="More About Us" />
      <WhatWeDo ctaHref="/solutions" ctaLabel="View All Solutions" />
      <Products ctaHref="/products" ctaLabel="View Product Portfolio" />
      <IorexTeaser />
      <CtaBand />
    </>
  );
}
