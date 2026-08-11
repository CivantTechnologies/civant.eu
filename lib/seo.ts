import type { Metadata } from "next";
import {
  CIVANT_LEGAL_NAME,
  FOUNDER_LINKEDIN_URL,
  FOUNDER_NAME,
} from "./brand";
import { CIVANT_DEFINITION, founder } from "./company";
import { getResourceSeoOverride } from "./resourceSeo";

export const SITE_NAME = "Civant";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://civant.eu";
export const DEFAULT_OG_IMAGE = "/og-civant.png";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const BRAND_TITLE_SUFFIX = "| Civant";

type MetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  index?: boolean;
};

type ArticleMetadataArgs = MetadataArgs & {
  datePublished: string;
  dateModified?: string;
};

type ArticleSchemaArgs = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  citations?: Array<{
    label: string;
    href: string;
  }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type CollectionSchemaItem = {
  name: string;
  path: string;
  description?: string;
};

type CollectionPageSchemaArgs = {
  name: string;
  description: string;
  path: string;
  items: CollectionSchemaItem[];
};

type ServiceSchemaArgs = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string | string[];
  audience?: string;
};

function normalizeTitle(title: string) {
  return title
    .replace(/\s*\|\s*Civant(?:\s*\|\s*Civant)+$/i, BRAND_TITLE_SUFFIX)
    .trim();
}

function titleIncludesBrand(title: string) {
  return /\bCivant\b/i.test(title);
}

function buildMetadataTitle(title: string) {
  const normalizedTitle = normalizeTitle(title);

  if (titleIncludesBrand(normalizedTitle)) {
    return normalizedTitle;
  }

  return `${normalizedTitle} ${BRAND_TITLE_SUFFIX}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  index = true,
}: MetadataArgs): Metadata {
  const metadataTitle = buildMetadataTitle(title);

  return {
    title: {
      absolute: metadataTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      title: metadataTitle,
      description,
      type: "website",
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          alt: `${metadataTitle} preview`,
          ...(image === DEFAULT_OG_IMAGE ? { width: 1200, height: 630 } : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [image],
    },
  };
}

export function buildArticleMetadata({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image = DEFAULT_OG_IMAGE,
  index = true,
}: ArticleMetadataArgs): Metadata {
  const override = getResourceSeoOverride(path);
  const metadataDescription = override?.description ?? description;
  const metadataTitle = buildMetadataTitle(override?.title ?? title);

  return {
    title: {
      absolute: metadataTitle,
    },
    description: metadataDescription,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      type: "article",
      url: path,
      siteName: SITE_NAME,
      publishedTime: datePublished,
      modifiedTime: dateModified || datePublished,
      images: [
        {
          url: image,
          alt: `${metadataTitle} preview`,
          ...(image === DEFAULT_OG_IMAGE ? { width: 1200, height: 630 } : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [image],
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image = DEFAULT_OG_IMAGE,
  citations = [],
}: ArticleSchemaArgs) {
  const articleUrl = `${SITE_URL}${path}`;
  const updatedAt = dateModified || datePublished;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: articleUrl,
      mainEntityOfPage: articleUrl,
      datePublished,
      dateModified: updatedAt,
      inLanguage: "en",
      author: {
        "@type": "Person",
        name: FOUNDER_NAME,
        url: `${SITE_URL}${founder.profilePath}`,
        sameAs: [FOUNDER_LINKEDIN_URL],
        worksFor: {
          "@id": ORGANIZATION_ID,
        },
      },
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${image}`,
        ...(image === DEFAULT_OG_IMAGE ? { width: 1200, height: 630 } : {}),
      },
      ...(citations.length > 0
        ? {
            citation: citations.map((citation) => ({
              "@type": "CreativeWork",
              name: citation.label,
              url: citation.href,
            })),
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: `${SITE_URL}/resources`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: articleUrl,
        },
      ],
    },
  ];
}

export function buildSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Civant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/platform`,
    description: CIVANT_DEFINITION,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "EUR",
      price: "299",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function buildPricingProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Civant Procurement Intelligence Platform",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    description:
      "Procurement forecasting intelligence software for European public-sector market monitoring, tender forecasting, competitor intelligence, and external signal analysis.",
    image: [`${SITE_URL}/screenshots/forecast-validation.png`],
    url: `${SITE_URL}/pricing`,
    offers: [
      {
        "@type": "Offer",
        name: "Vanguard",
        url: `${SITE_URL}/pricing`,
        price: "299",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Summit",
        url: `${SITE_URL}/pricing`,
        price: "699",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    ],
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
  items,
}: CollectionPageSchemaArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: `${SITE_URL}${path}`,
    description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${SITE_URL}${item.path}`,
        ...(item.description ? { description: item.description } : {}),
      })),
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = "Europe",
  audience,
}: ServiceSchemaArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    areaServed,
    ...(audience ? { audience } : {}),
    provider: {
      "@id": ORGANIZATION_ID,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: CIVANT_LEGAL_NAME,
    url: SITE_URL,
    email: "hello@civant.eu",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@civant.eu",
      availableLanguage: ["en"],
      areaServed: "Europe",
    },
  };
}

export function buildFounderPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER_NAME,
    jobTitle: "Founder",
    url: `${SITE_URL}${founder.profilePath}`,
    image: `${SITE_URL}${founder.image}`,
    sameAs: [FOUNDER_LINKEDIN_URL],
    worksFor: {
      "@id": ORGANIZATION_ID,
    },
  };
}
