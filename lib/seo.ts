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
          alt: `${SITE_NAME} preview image`,
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
          alt: `${SITE_NAME} preview image`,
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

  return {
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
      "@type": "Organization",
      name: "Civant Technologies Limited",
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
  };
}
