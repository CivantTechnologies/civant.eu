import type { MetadataRoute } from "next";
import {
  MARKET_ROUTES,
  RESOURCE_ARTICLE_ROUTES,
  SOLUTION_ROUTES,
  TOP_LEVEL_ROUTES,
} from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const topLevelEntries: MetadataRoute.Sitemap = TOP_LEVEL_ROUTES.map((route) => {
    const changeFrequency: NonNullable<
      MetadataRoute.Sitemap[number]["changeFrequency"]
    > = route.href === "/" ? "weekly" : "monthly";

    return {
      url: `${SITE_URL}${route.href}`,
      lastModified,
      changeFrequency,
      priority: route.href === "/" ? 1 : 0.8,
    };
  });
  const resourceEntries: MetadataRoute.Sitemap = RESOURCE_ARTICLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.href}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
  const marketEntries: MetadataRoute.Sitemap = MARKET_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.href}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
  const solutionEntries: MetadataRoute.Sitemap = SOLUTION_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.href}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const legalEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/legal/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/legal/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/legal/fair-use`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...topLevelEntries,
    ...solutionEntries,
    ...marketEntries,
    ...resourceEntries,
    ...legalEntries,
  ];
}
