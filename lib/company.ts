import { FOUNDER_LINKEDIN_URL } from "./brand";

export const CIVANT_OFFICE_ADDRESS = {
  streetLines: [
    "Unit 26, Regional Development Centre (RDC)",
    "Dundalk Institute of Technology (DkIT)",
    "Dublin Road",
  ],
  locality: "Dundalk",
  region: "Co. Louth",
  postalCode: "A91 K584",
  country: "Ireland",
  countryCode: "IE",
} as const;

export const CIVANT_OFFICE_ADDRESS_LINES = [
  ...CIVANT_OFFICE_ADDRESS.streetLines,
  `${CIVANT_OFFICE_ADDRESS.locality}, ${CIVANT_OFFICE_ADDRESS.region}`,
  `${CIVANT_OFFICE_ADDRESS.postalCode}, ${CIVANT_OFFICE_ADDRESS.country}`,
];

export const CIVANT_OFFICE_MAP_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CIVANT_OFFICE_ADDRESS_LINES.join(", "))}`;

export const CIVANT_SHORT_DEFINITION =
  "Civant is a procurement intelligence platform with forecasting at its core.";

export const CIVANT_DEFINITION =
  `${CIVANT_SHORT_DEFINITION} It connects procurement history, contract lifecycles, buyer behaviour, competitor activity, and market signals to help B2G teams identify likely opportunities, decide where to compete, and prepare before formal tenders are published.`;

export const founder = {
  name: "David Manrique",
  role: "Founder & CEO, Civant",
  image: "/people/david-manrique.jpg",
  profilePath: "/team/david-manrique",
  profileHref: FOUNDER_LINKEDIN_URL,
  experience:
    "Commercial, partnerships, and go-to-market experience across SaaS, education technology, and European public-sector markets.",
};

export const whatCivantIs = [
  CIVANT_SHORT_DEFINITION,
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
    visible: true,
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
