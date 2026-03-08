export type SiteRoute = {
  href: string;
  label: string;
};

export type ContentRoute = {
  href: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const TOP_LEVEL_ROUTES: SiteRoute[] = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/methodology", label: "Methodology" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const RESOURCE_ARTICLE_ROUTES: ContentRoute[] = [
  {
    href: "/resources/what-is-procurement-intelligence",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    href: "/resources/public-procurement-cycles",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    href: "/resources/contract-lifecycle-signals",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];
