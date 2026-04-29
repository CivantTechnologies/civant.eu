import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../lib/seo";
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
    "Civant helps enterprise teams master European public procurement cycles with contract lifecycle intelligence, market signals, and tender forecasting.",
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
      "Civant helps enterprise teams master European public procurement cycles with contract lifecycle intelligence, market signals, and tender forecasting.",
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
      "Civant helps enterprise teams master European public procurement cycles with contract lifecycle intelligence, market signals, and tender forecasting.",
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
  name: "Civant Technologies",
  legalName: "Civant Technologies Limited",
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
    name: "David Manrique",
    jobTitle: "Founder & CEO",
    url: "https://www.linkedin.com/in/davidmanriquec/",
  },
  sameAs: ["https://www.linkedin.com/company/civant-technologies/"],
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
    "Procurement forecasting intelligence platform for enterprise teams across Europe.",
  publisher: {
    "@type": "Organization",
    name: "Civant Technologies",
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
