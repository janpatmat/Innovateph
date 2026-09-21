import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://innovate-international.ph";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Innovate International Philippines | Innovative Products & Solutions",
    template: "%s | Innovate International Philippines",
  },
  description:
    "Innovate International Philippines provides innovative products, technologies, and practical solutions for businesses, government institutions, industries, and organizations across the Philippines.",
  keywords: [
    "Innovate International Philippines",
    "trading",
    "distribution",
    "industrial solutions",
    "water treatment",
    "IOREX",
    "government supplies",
    "Philippines",
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName: "Innovate International Philippines",
    title:
      "Innovate International Philippines | Innovative Products & Solutions",
    description:
      "A Philippine-based trading, distribution, and solutions provider serving businesses, government institutions, industries, and organizations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
