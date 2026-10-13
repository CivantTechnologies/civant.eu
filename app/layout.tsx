import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import {
  CIVANT_DISPLAY_NAME,
  CIVANT_LEGAL_NAME,
  CIVANT_LINKEDIN_URL,
} from "../lib/brand";
import { CIVANT_DEFINITION, CIVANT_SHORT_DEFINITION, founder } from "../lib/company";
import {
  buildOfficeAddressSchema,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
} from "../lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Civant | Procurement Intelligence with Forecasting at Its Core",
    template: "%s | Civant",
  },
  description: CIVANT_DEFINITION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Civant | Procurement Intelligence with Forecasting at Its Core",
    description: CIVANT_DEFINITION,
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Civant preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civant | Procurement Intelligence with Forecasting at Its Core",
    description: CIVANT_DEFINITION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon-32.png"],
  },
  manifest: "/manifest.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: CIVANT_DISPLAY_NAME,
  legalName: CIVANT_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-civant.png`,
  description: CIVANT_DEFINITION,
  foundingLocation: {
    "@type": "Place",
    name: "Ireland",
  },
  areaServed: "Europe",
  email: "hello@civant.eu",
  address: buildOfficeAddressSchema(),
  founder: {
    "@type": "Person",
    name: founder.name,
    jobTitle: "Founder & CEO",
    url: `${SITE_URL}${founder.profilePath}`,
    sameAs: [founder.profileHref],
  },
  sameAs: [CIVANT_LINKEDIN_URL],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "hello@civant.eu",
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: CIVANT_SHORT_DEFINITION,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <div className="site-shell">
          <Navbar />
          <main className="page-main">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
