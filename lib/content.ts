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
  { label: "Roze AI", href: "/rozeai" },
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
    title: "Water Piping Treatment",
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
    body: "AI-powered fire safety from Korea — the FIRE4CAST™ platform for fire assessment, wireless detection, and early warning. Innovate International is its Philippine partner.",
    imagePath: "/products/Roze-AI.png",
    imageReady: true,
    href: "/rozeai",
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
  { label: "Pipe Treatment", icon: "pipe" },
  { label: "Water Quality", icon: "droplet" },
  { label: "De-Scaling", icon: "layers" },
  { label: "Extended Pipeline Life", icon: "clock" },
  { label: "Reduced Maintenance", icon: "wrench" },
  { label: "Reduced Replacement Costs", icon: "coins" },
  { label: "Improved Equipment Efficiency", icon: "gauge" },
];

/**
 * IOREX in the Philippines — Innovate presenting the system to the local water
 * sector. Figure numbers continue the page's plate index (FIG. 01–02 are the
 * Korea photos in IorexSource, FIG. 03 the certificate).
 */
export const iorexFieldPhotos = [
  {
    src: "/iorex/iorex_pawd_entrance.jpeg",
    alt: "Innovate International representatives at the entrance to the PAWD Convergence 2026 in Cebu City",
    figure: "FIG. 04",
    caption: "PAWD Convergence 2026, Cebu",
    // matches the height of the two 3:4 portraits beside it on desktop
    ratio: "14 / 9",
  },
  {
    src: "/iorex/iorex_presentation.jpeg",
    alt: "An Innovate International representative presenting IOREX on stage to a ballroom of delegates",
    figure: "FIG. 05",
    caption: "Presenting to Delegates",
    ratio: "3 / 4",
  },
  {
    src: "/iorex/iorex_booth_demo.jpeg",
    alt: "An Innovate International representative walking visitors through IOREX at the company booth",
    figure: "FIG. 06",
    caption: "Booth Walkthroughs",
    ratio: "3 / 4",
  },
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

/**
 * "Our People" section content — shared between the landing spotlight and the
 * About-page cut so both stay in sync. Captions describe what each photograph
 * literally shows; no claims beyond the company material.
 */
export const people = {
  eyebrow: "Our People",
  title: "The People Behind Our Work",
  intro:
    "From the office to the stage — the team sourcing quality products and building practical solutions for businesses, government institutions, and industries across the Philippines.",
  photos: [
    {
      src: "/company/innovate_employees.jpeg",
      alt: "The Innovate International team with attendees at a meeting",
      figure: "FIG. 01",
      caption: "During a Meeting",
      ratio: "4 / 3",
    },
    {
      src: "/company/innovate_publicspeak.jpeg",
      alt: "An Innovate International representative presenting on stage beside the Philippine flag",
      figure: "FIG. 02",
      caption: "Presenting Our Work",
      ratio: "3 / 4",
    },
  ],
} as const;

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
  { name: "ROZEAI", logo: "/partners/Roze-AI.png", href: "/rozeai" },
  { name: "JAS & JR", logo: "/partners/jasnjr.png" },
  { name: "JROG", logo: "/partners/jrog.jpeg" },
];

/**
 * Roze AI — technology partner. Every fact below is drawn from the MOU-signing
 * and training material (banners, certificates); captions describe what each
 * photograph shows. No claims beyond that material.
 */
export const rozeai = {
  eyebrow: "Technology Partner",
  name: "Roze AI",
  origin: "Republic of Korea",
  tagline: "Creating a new value through innovation",
  intro:
    "Roze AI is a Korean technology company focused on AI-driven fire safety. Its FIRE4CAST™ platform applies artificial intelligence to fire assessment and early warning, paired with wireless fire detection and digital-twin risk modeling. Innovate International Philippines is its Philippine partner.",
  capabilities: [
    {
      name: "FIRE4CAST™",
      body: "An AI system for fire assessment and early warning — the platform at the center of the Roze AI lineup.",
      icon: "chip",
    },
    {
      name: "Wireless Fire Alarm",
      body: "Wireless fire detection and monitoring over an RF 400–900MHz network.",
      icon: "gauge",
    },
    {
      name: "Digital Twin & Fire Risk",
      body: "Digital-twin modeling with fire-risk assessment, built into the FIRE4CAST platform.",
      icon: "layers",
    },
    {
      name: "So.S Home",
      body: "Roze AI's home safety offering, presented alongside the FIRE4CAST system.",
      icon: "shield",
    },
  ] as { name: string; body: string; icon: IconName }[],
  milestones: [
    {
      date: "April 14, 2026",
      place: "Diamond Hotel Manila",
      title: "MOU Signing Ceremony",
      body: "Roze AI and Innovate International signed a memorandum of understanding, alongside a Roze AI technology seminar for distinguished guests from the Philippines.",
    },
    {
      date: "June 11–12, 2026",
      place: "Roze AI, Korea",
      title: "FIRE4CAST™ Training Completed",
      body: "Innovate International's team completed Roze AI's technical training on FIRE4CAST and the wireless fire-alarm monitoring system.",
    },
  ],
  photos: [
    {
      src: "/rozeai/rozeai_signing.jpeg",
      alt: "Representatives of Roze AI and Innovate International signing the memorandum of understanding",
      figure: "FIG. 01",
      caption: "Signing the MOU",
      ratio: "3 / 4",
    },
    {
      src: "/rozeai/rozeai_signed.jpeg",
      alt: "Roze AI and Innovate International representatives presenting the signed memorandum of understanding",
      figure: "FIG. 02",
      caption: "The Signed Agreement",
      ratio: "3 / 2",
    },
    {
      src: "/rozeai/rozeai_allpartners.jpeg",
      alt: "Roze AI and Innovate International delegates at the signing ceremony in Manila",
      figure: "FIG. 03",
      caption: "The Delegations in Manila",
      ratio: "4 / 3",
    },
    {
      src: "/rozeai/rozeai_certificate.jpeg",
      alt: "Innovate International team with FIRE4CAST training completion certificates at Roze AI in Korea",
      figure: "FIG. 04",
      caption: "FIRE4CAST Training, Korea",
      ratio: "3 / 4",
    },
  ],
};
