import type { Metadata } from "next";

export const SITE_NAME = "Civant";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://civant.eu";
export const DEFAULT_OG_IMAGE = "/og-civant.png";

type MetadataArgs = {
  title: string;
  description: string;
  path: string;
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
};

type FaqItem = {
  question: string;
  answer: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: MetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildArticleMetadata({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: ArticleMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: path,
      siteName: SITE_NAME,
      publishedTime: datePublished,
      modifiedTime: dateModified || datePublished,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
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
        name: "David Manrique",
        url: "https://www.linkedin.com/in/davidmanriquecivant/",
        worksFor: {
          "@type": "Organization",
          name: "Civant Technologies Limited",
        },
      },
      publisher: {
        "@type": "Organization",
        name: "Civant Technologies Limited",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-civant.png`,
        },
      },
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1200,
        height: 630,
      },
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
    description:
      "Civant is a public procurement intelligence platform for forecasting tender opportunities, tracking contract lifecycle signals, and prioritizing public-sector market activity.",
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "EUR",
      price: "299",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "Civant Technologies Limited",
      url: SITE_URL,
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
      "Procurement intelligence software for European public-sector market monitoring, tender forecasting, and competitor intelligence.",
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

export function buildContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Civant Technologies Limited",
    url: SITE_URL,
    email: "hello@civant.eu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
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
    name: "David Manrique",
    jobTitle: "Founder",
    url: `${SITE_URL}/company`,
    sameAs: ["https://www.linkedin.com/in/davidmanriquec/"],
    worksFor: {
      "@type": "Organization",
      name: "Civant Technologies Limited",
      url: SITE_URL,
    },
  };
}
