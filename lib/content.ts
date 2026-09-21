/**
 * Single source of truth for site content.
 * Every fact here is drawn from the supplied company material — do not add
 * services, products, clients, statistics, awards, or claims beyond it.
 * Fields marked `placeholder: true` are intentionally awaiting real data.
 */
import type { IconName } from "@/components/Icons";

export const company = {
  name: "Innovate International Philippines",
  shortName: "Innovate International",
  established: "2021",
  businessType: "Service / Product / Hybrid",
  tagline: "Innovative Solutions for a Changing World",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "IOREX", href: "/iorex" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
] as const;

/** Who We Are — four pillars of the business model */
export const pillars: { label: string; body: string; icon: IconName }[] = [
  {
    label: "Trading",
    body: "Sourcing quality products from established local and international manufacturers.",
    icon: "exchange",
  },
  {
    label: "Distribution",
    body: "Delivering products and solutions to clients across the Philippines.",
    icon: "truck",
  },
  {
    label: "Technology",
    body: "Seeking innovative products and technologies that solve real problems.",
    icon: "chip",
  },
  {
    label: "Solutions",
    body: "Practical solutions built around the needs of business, government, and industry.",
    icon: "puzzle",
  },
];

/** What We Do — areas of activity */
export const solutions: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Industrial & Commercial",
    body: "Industrial products and commercial solutions.",
    icon: "industrial",
  },
  {
    title: "Water Piping treatment",
    body: "Water management, plumbing, and related technologies.",
    icon: "water",
  },
  {
    title: "Infrastructure & Construction",
    body: "Products and solutions supporting infrastructure and construction.",
    icon: "infrastructure",
  },
  {
    title: "Environmental & Sustainability",
    body: "Technologies focused on environmental and resource-related challenges.",
    icon: "leaf",
  },
  
  {
    title: "Safety & Rescue",
    body: "Safety, emergency, and rescue equipment.",
    icon: "safety",
  },
  {
    title: "Specialized Equipment",
    body: "Specialized machinery and equipment.",
    icon: "gear",
  },

  {
    title: "Facility & Building Solutions",
    body: "Products supporting facilities and building operations.",
    icon: "building",
  },
  {
    title: "Energy Efficiency",
    body: "Energy-efficient and resource-saving technologies.",
    icon: "energy",
  },
];

/** Our Approach — from need to solution */
export const approach = [
  {
    step: "01",
    title: "Initial Discussion",
    body: "Understand client objectives, expectations, and project requirements.",
  },
  {
    step: "02",
    title: "Needs Assessment",
    body: "Review project requirements and define scope, timeline, and deliverables.",
  },
  {
    step: "03",
    title: "Execution & Delivery",
    body: "Execute the agreed plan with a focus on quality, accuracy, and timely delivery.",
  },
  {
    step: "04",
    title: "Review & Follow-Up",
    body: "Review the results together and provide adjustments or follow-up actions when necessary.",
  },
];

/** Why Work With Us */
export const advantages: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Professional & Structured",
    body: "Clear workflows and organized processes.",
    icon: "workflow",
  },
  {
    title: "Clear Communication",
    body: "Transparent communication throughout every stage.",
    icon: "chat",
  },
  {
    title: "Practical & Efficient Solutions",
    body: "Solutions designed around actual business needs.",
    icon: "target",
  },
  {
    title: "Client-Oriented",
    body: "An approach focused on long-term collaboration.",
    icon: "handshake",
  },
];

/** Featured products (names from company material) */
export const products: {
  name: string;
  index: string;
  body: string;
  imagePath: string;
  href?: string;
  placeholder?: boolean;
  /** true once the real image at imagePath exists; otherwise a placeholder frame is shown */
  imageReady?: boolean;
}[] = [
  {
    name: "Heavy Equipment",
    index: "P-01",
    body: "Heavy equipment and specialized machinery, drawing on the group's background in trucks, industrial solutions, and fabrication.",
    imagePath: "/products/heavy_equipment.jpg",
    imageReady: true,
  },
  {
    name: "ROZEAI",
    index: "P-02",
    body: "A featured product from the company portfolio. Full details and specifications to be added.",
    imagePath: "/products/Roze-AI.png",
    placeholder: true,
    imageReady: true,
  },
  {
    name: "IOREX",
    index: "P-03",
    body: "A smart water-pipe management and treatment system. Explore the dedicated IOREX page for details.",
    imagePath: "/iorex/iorex_installation.png",
    imageReady: true,
    href: "/iorex",
  },
];

/** IOREX — benefits presented in the company material */
export const iorexBenefits: { label: string; icon: IconName }[] = [
  { label: "Pipe treatment", icon: "pipe" },
  { label: "Water quality", icon: "droplet" },
  { label: "De-scaling", icon: "layers" },
  { label: "Extended pipeline life", icon: "clock" },
  { label: "Reduced maintenance", icon: "wrench" },
  { label: "Reduced replacement costs", icon: "coins" },
  { label: "Improved equipment efficiency", icon: "gauge" },
];

/**
 * International installations referenced in the IOREX material.
 * These are presented as IOREX projects/installations — not customers of
 * Innovate International Philippines.
 */
export const internationalProjects: {
  name: string;
  locality?: string;
  country: string;
  /** ISO 3166-1 alpha-2 code, used as the register marker */
  countryCode: string;
  continent: string;
}[] = [
  {
    name: "Busan Veteran's Hospital",
    locality: "Busan",
    country: "South Korea",
    countryCode: "KR",
    continent: "Asia",
  },
  {
    name: "National Assembly Chairman's Official Residence",
    country: "South Korea",
    countryCode: "KR",
    continent: "Asia",
  },
  {
    name: "Jeonju City Hall",
    locality: "Jeonju",
    country: "South Korea",
    countryCode: "KR",
    continent: "Asia",
  },
  {
    name: "Pocomoke City",
    locality: "Maryland",
    country: "United States",
    countryCode: "US",
    continent: "North America",
  },
  {
    name: "City University of New York",
    locality: "New York",
    country: "United States",
    countryCode: "US",
    continent: "North America",
  },
];

/** Vision, mission, and reinforcing values */
export const vision =
  "To become a globally recognized leader in the industry by continuously evolving, adapting to new trends, and delivering impactful business solutions.";

export const mission =
  "Provide professional services aligned with client needs through clear and efficient workflows.";

export const values = [
  "Reliability",
  "Transparency",
  "Efficiency",
  "Continuous Improvement",
  "Long-Term Partnerships",
];

/** Contact — offices are from the material; email/phone await real data */
export const offices = [
  {
    city: "Davao Office",
    address:
      "KM 8 Pareñas Compound, Diversion Road, Buhangin, Davao City, Philippines",
  },
  {
    city: "Manila Office",
    address:
      "Cortabitarte St., Moca Building, Beside Aloha Hotel, Malate, Manila, Philippines",
  },
];

/** Primary contact details */
export const contactPlaceholders = {
  email: "innovateinternationalph@gmail.com",
  phone: "+63 929 856 8138",
  contactName: "Ivan",
};

/** Manufacturer & technology partners — logos live in /public/partners */
export const partners: {
  name: string;
  logo: string;
  href?: string;
}[] = [
  { name: "IOREX", logo: "/partners/iorex_logo.png", href: "/iorex" },
  { name: "ROZEAI", logo: "/partners/Roze-AI.png" },
  { name: "JAS & JR", logo: "/partners/jasnjr.png" },
  { name: "JROG", logo: "/partners/jrog.jpeg" },
];
