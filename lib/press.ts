export type PressReleaseSummary = {
  path: string;
  title: string;
  description: string;
  publishedAt: string;
  publishedLabel: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const SEEDCORN_PRESS_RELEASE: PressReleaseSummary = {
  path: "/press/seedcorn-regional-finalist-2026",
  title: "Civant named Seedcorn regional finalist for European procurement intelligence platform",
  description:
    "Irish founder-led company combines forecasting, buyer intelligence and company-fit analysis to give IT and technology suppliers more preparation time and help them compete more effectively.",
  publishedAt: "2026-10-13T08:00:00+01:00",
  publishedLabel: "13 October 2026",
  category: "Company News",
  image: "/images/press/seedcorn-regional-finalist-announcement.png",
  imageAlt: "Civant named Seedcorn regional finalist announcement",
};

export const PRESS_RELEASES: PressReleaseSummary[] = [SEEDCORN_PRESS_RELEASE];
