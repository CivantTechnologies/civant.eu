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
  europeanCommissionThresholds: {
    label: "European Commission: Public procurement thresholds",
    href: "https://single-market-economy.ec.europa.eu/single-market/public-procurement/legal-rules-and-implementation/thresholds_en",
    note: "Current EU public procurement threshold rules and delegated regulations.",
  },
  europeanCommissionSmeNeeds: {
    label: "European Commission: SMEs' needs in public procurement",
    href: "https://single-market-economy.ec.europa.eu/publications/analysis-smes-needs-public-procurement_en",
    note: "European Commission study on SME participation barriers and support measures in public procurement.",
  },
  europeanCommissionGreenProcurement: {
    label: "European Commission: Green public procurement",
    href: "https://single-market-economy.ec.europa.eu/single-market/public-procurement/strategic-procurement/green-public-procurement_en",
    note: "European Commission guidance on using public procurement to support environmental and sustainability goals.",
  },
  europeanCommissionDefenceProcurement: {
    label: "European Commission: Defence procurement",
    href: "https://defence-industry-space.ec.europa.eu/eu-defence-industry/defence-procurement_en",
    note: "European Commission overview of defence procurement rules, Directive 2009/81/EC, and security-sensitive purchasing.",
  },
  europeanDefenceAgencyDefenceData: {
    label: "European Defence Agency: Defence data",
    href: "https://eda.europa.eu/news-and-events/news/2025/09/02/eu-defence-spending-hits-343-bln-in-2024-eda-data-shows",
    note: "EDA defence data release covering EU defence spending, procurement, and investment trends.",
  },
  europeanCommissionMedicalDevices: {
    label: "European Commission: Medical devices regulations",
    href: "https://health.ec.europa.eu/medical-devices-new-regulations/overview_en",
    note: "European Commission overview of the medical devices and in vitro diagnostic medical devices regulatory framework.",
  },
  europeanCommissionHealthTechnologyAssessment: {
    label: "European Commission: Health technology assessment",
    href: "https://health.ec.europa.eu/health-technology-assessment/overview_en",
    note: "European Commission overview of the EU health technology assessment regulation and cooperation framework.",
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
  eurLexDirective201424: {
    label: "EUR-Lex: Directive 2014/24/EU",
    href: "https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32014L0024",
    note: "EU public procurement directive covering procedures, prior information notices, market consultations, frameworks, and contract modifications.",
  },
  ukProcurementActGuidance: {
    label: "GOV.UK: Procurement Act 2023 guidance",
    href: "https://www.gov.uk/government/collections/procurement-act-2023-guidance-documents",
    note: "Official UK guidance on planned procurement notices, preliminary market engagement, transparency, and the new procurement regime.",
  },
  ukProcurementAct2023: {
    label: "Legislation.gov.uk: Procurement Act 2023",
    href: "https://www.legislation.gov.uk/ukpga/2023/54/contents",
    note: "UK legislation covering notices, preliminary market engagement, planned procurement notices, and transparency requirements.",
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
