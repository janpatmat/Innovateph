import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { navLinks, solutions, offices, company } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const footerSolutions = solutions.slice(0, 5);

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Innovate International Philippines — home">
              <Logo tone="dark" />
            </Link>
            <p className="max-w-xs text-sm leading-6 text-mist/70">
              A Philippine-based trading, distribution, and solutions provider
              delivering innovative, reliable products across many sectors.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="eyebrow text-[0.6rem] text-cyan">Navigate</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-[0.6rem] text-cyan">Solutions</p>
            {footerSolutions.map((item) => (
              <Link
                key={item.title}
                href="/solutions"
                className="text-sm text-mist/70 transition-colors hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <p className="eyebrow text-[0.6rem] text-cyan">Offices</p>
            {offices.map((office) => (
              <div key={office.city} className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white">
                  {office.city}
                </p>
                <p className="text-sm leading-6 text-mist/70">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist/60">
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="eyebrow text-[0.6rem] text-mist/50">
            Established {company.established} · Davao · Manila
          </p>
        </div>
      </Container>
    </footer>
  );
}
