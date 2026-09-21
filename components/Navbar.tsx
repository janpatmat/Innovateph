"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { Icon } from "@/components/Icons";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-mist bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" aria-label="Innovate International Philippines — home">
            <Logo tone={solid ? "light" : "dark"} />
          </Link>

          {/* desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium tracking-tight transition-colors ${
                    solid
                      ? active
                        ? "text-royal"
                        : "text-slate hover:text-navy"
                      : active
                        ? "text-cyan"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`hidden rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight transition-colors sm:inline-flex ${
                solid
                  ? "bg-blue text-white hover:bg-royal"
                  : "bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20"
              }`}
            >
              Contact Us
            </Link>

            {/* mobile toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex size-10 items-center justify-center rounded-md transition-colors lg:hidden ${
                solid ? "text-navy hover:bg-mist" : "text-white hover:bg-white/10"
              }`}
            >
              <Icon name={open ? "close" : "menu"} className="size-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-mist bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0 border-t-transparent"
        }`}
      >
        <Container className="py-4">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`border-b border-mist/70 py-3.5 text-base font-medium last:border-b-0 ${
                    active ? "text-royal" : "text-ink hover:text-royal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white hover:bg-royal"
            >
              Contact Us
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
