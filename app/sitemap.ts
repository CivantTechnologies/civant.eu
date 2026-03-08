import type { MetadataRoute } from "next";
import { RESOURCE_ARTICLE_ROUTES, TOP_LEVEL_ROUTES } from "../lib/routes";
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

  return [...topLevelEntries, ...resourceEntries];
}
