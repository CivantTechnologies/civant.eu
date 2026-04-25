export type ArticleSource = {
  label: string;
  href: string;
  note?: string;
};

export const ARTICLE_SOURCES = {
  europeanCommissionPublicProcurement: {
    label: "European Commission: Public procurement",
    href: "https://single-market-economy.ec.europa.eu/single-market/public-procurement_en",
    note: "EU procurement market size, policy priorities, and public-sector purchasing context.",
  },
  europeanParliamentPublicProcurement: {
    label: "European Parliament: Public procurement contracts",
    href: "https://www.europarl.europa.eu/factsheets/en/sheet/34/verejne-zakazky",
    note: "Overview of EU public procurement rules, market scale, and policy context.",
  },
  europeanCourtAuditorsCompetition: {
    label: "European Court of Auditors: Special Report 28/2023",
    href: "https://www.eca.europa.eu/en/publications/SR-2023-28%26od%3D1",
    note: "Competition trends in EU public procurement through 2021.",
  },
  tedEforms: {
    label: "TED: eForms standards",
    href: "https://ted.europa.eu/en/simap/eforms",
    note: "EU notice forms and eForms publication standards for TED.",
  },
  europeanCommissionEforms: {
    label: "European Commission: eForms",
    href: "https://single-market-economy.ec.europa.eu/single-market/public-procurement/digital-procurement/eforms_es",
    note: "EU eForms standard and digital procurement notice publication context.",
  },
  oecdPublicProcurement: {
    label: "OECD: Public procurement",
    href: "https://www.oecd.org/en/topics/public-procurement.html",
    note: "Public procurement as a share of GDP and government expenditure across OECD countries.",
  },
} as const satisfies Record<string, ArticleSource>;

export type ArticleSourceKey = keyof typeof ARTICLE_SOURCES;

export function getArticleSources(keys: ArticleSourceKey[]): ArticleSource[] {
  return keys.map((key) => ARTICLE_SOURCES[key]);
}
