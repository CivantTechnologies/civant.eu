export type AdvisorProof = {
  name: string;
  href: string;
  context: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoTone?: "dark" | "light" | "frosted";
  logoSize?: "compact" | "standard" | "wide" | "membership";
};

export const advisedBy: AdvisorProof[] = [
  {
    name: "Local Enterprise Office Louth",
    href: "https://www.localenterprise.ie/louth/",
    logo: "/logos/local-enterprise-office-logo.png",
    logoWidth: 267,
    logoHeight: 189,
    logoTone: "dark",
    logoSize: "compact",
    context: "Enterprise support and advisory network for Louth-based businesses.",
  },
  {
    name: "Enterprise Ireland / New Frontiers",
    href: "https://www.enterprise-ireland.com/en/about-enterprise-ireland",
    logo: "/logos/enterprise-ireland-logo.png",
    logoWidth: 615,
    logoHeight: 173,
    logoTone: "dark",
    logoSize: "standard",
    context:
      "Enterprise Ireland's national entrepreneur development programme, delivered locally through the Regional Development Centre in Dundalk.",
  },
  {
    name: "Regional Development Centre Dundalk",
    href: "https://www.louthmeathhubs.ie/hubs/regional-development-center/",
    logo: "/logos/dkit-rdc-logo-white.png",
    logoWidth: 300,
    logoHeight: 100,
    logoTone: "dark",
    logoSize: "wide",
    context:
      "Dundalk enterprise hub supporting early-stage companies with incubation, development, and growth infrastructure.",
  },
];

export const founder = {
  name: "David Manrique",
  role: "Founder & CEO, Civant",
  image: "/people/david-manrique.jpg",
  profileHref: "https://www.linkedin.com/in/davidmanriquec/",
};

export const whatCivantIs = [
  "Civant is a procurement forecasting intelligence platform for Europe.",
  "Civant reconciles and normalizes data from EU, national, and public-domain procurement sources.",
  "Civant analyzes hard procurement evidence, contract lifecycles, competitor activity, and external signals.",
  "Civant uses AI to interpret match, scope, buyer intent, and strategy on top of structured evidence.",
];

export const whatCivantIsNot = [
  "Civant is not an AI chatbot company.",
  "Civant is not an insider tool or source of non-public information.",
  "Civant is not a tender issuer, influencer, or intermediary.",
  "Civant does not guarantee tender outcomes.",
  "Civant does not replace sales strategy, account management expertise, or commercial judgement.",
];

export const companyWhyPoints = [
  {
    title: "Fairer access",
    body: "SMEs see demand early enough to compete on merit.",
  },
  {
    title: "Shared evidence",
    body: "Sales, bid, and leadership teams work from one market view.",
  },
  {
    title: "Real transparency",
    body: "eForms, awards, and public records become actionable intelligence.",
  },
  {
    title: "Better competition",
    body: "Buyer problems are matched to fit, not just familiarity or price.",
  },
];

export const advisors = [
  {
    name: "Jean-Marie Cognet",
    role: "Co-founder & CEO, UbiCast",
    advice: "Company management and sales strategy",
    context:
      "VP Higher Education at EdTech France, with deep European EdTech and public-sector market experience.",
    image: "/people/jean-marie-cognet.jpg",
    imageAlt: "Jean-Marie Cognet",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/jmcognet/",
    profileLabel: "View Jean-Marie on LinkedIn",
    visible: true,
  },
  {
    name: "Florent Thiery",
    role: "Product, OVHcloud; former CTO, UbiCast",
    advice: "Technical scale and product infrastructure",
    context: "Technical and infrastructure guidance for European SaaS scale-up decisions.",
    image: "/people/florent-thiery.jpg",
    imageAlt: "Florent Thiery",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/fthiery/",
    profileLabel: "View Florent on LinkedIn",
    visible: true,
  },
  {
    name: "Anita van der Laan",
    role: "CFO / Director, Hanzevast; former Tax Manager, Deloitte",
    advice: "Financial operations & regulation",
    context: "Scale-up, finance, and category-expansion perspective from regulated operating environments.",
    image: "/people/anita-van-der-laan.jpg",
    imageAlt: "Anita van der Laan",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/anita-van-der-laan-40450218/",
    profileLabel: "View Anita on LinkedIn",
    // Hidden until Anita receives approval from her company to appear publicly.
    visible: false,
  },
  {
    name: "Jukka Sormunen",
    role: "RDI Director, Mobie",
    advice: "GTM strategy & partnerships",
    context:
      "Education-market, Nordic expansion, and public-sector learning technology perspective.",
    image: "/people/jukka-sormunen.jpg",
    imageAlt: "Jukka Sormunen",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/jukkasormunen/",
    profileLabel: "View Jukka on LinkedIn",
    visible: true,
  },
];

export type CompanySupportItem = AdvisorProof & {
  relationship: "Supported by" | "Member of";
  supportLine: string;
};

export const companySupport: CompanySupportItem[] = [
  ...advisedBy.map((item) => ({
    ...item,
    relationship: "Supported by" as const,
    supportLine:
      item.name === "Local Enterprise Office Louth"
        ? "Louth enterprise advisory"
        : item.name === "Enterprise Ireland / New Frontiers"
          ? "National founder programme"
          : "Dundalk incubation base",
  })),
  {
    name: "Dundalk Chamber",
    href: "https://www.dundalk.ie/",
    logo: "/images/company/dundalk-chamber-member-2026.webp",
    logoWidth: 1757,
    logoHeight: 753,
    logoTone: "frosted" as const,
    logoSize: "membership" as const,
    relationship: "Member of" as const,
    supportLine: "Local business membership",
    context:
      "Membership in Dundalk's business network, connecting Civant to the County Louth enterprise community.",
  },
];
