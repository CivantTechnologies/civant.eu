import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import {
  CIVANT_DISPLAY_NAME,
  CIVANT_LEGAL_NAME,
  CIVANT_LINKEDIN_URL,
  FOUNDER_LINKEDIN_URL,
  FOUNDER_NAME,
} from "../lib/brand";
import {
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
    default: "Civant | Public Procurement Intelligence Platform",
    template: "%s | Civant",
  },
  description:
    "Civant helps B2G teams forecast European public procurement opportunities using buyer cycles, contract lifecycles, competitor context, and public signals.",
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
    title: "Civant | Public Procurement Intelligence Platform",
    description:
      "Civant helps B2G teams forecast European public procurement opportunities using buyer cycles, contract lifecycles, competitor context, and public signals.",
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
    title: "Civant | Public Procurement Intelligence Platform",
    description:
      "Civant helps B2G teams forecast European public procurement opportunities using buyer cycles, contract lifecycles, competitor context, and public signals.",
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
  description:
    "Civant is an Irish procurement forecasting intelligence company helping teams understand procurement timing, renewal windows, buyer cycles, competitor movement, and public market signals.",
  foundingLocation: {
    "@type": "Place",
    name: "Ireland",
  },
  areaServed: "Europe",
  email: "hello@civant.eu",
  founder: {
    "@type": "Person",
    name: FOUNDER_NAME,
    jobTitle: "Founder & CEO",
    url: FOUNDER_LINKEDIN_URL,
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
  description:
    "Procurement forecasting intelligence platform for B2G teams across Europe.",
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
