import Link from "next/link";
import { Section } from "../../components/site/Section";
import { buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Resources",
  description:
    "Procurement intelligence resources from Civant, including foundational guides on procurement cycles, lifecycle signals, and market planning.",
  path: "/resources",
});

const articles = [
  {
    href: "/resources/what-is-procurement-intelligence",
    title: "What Is Procurement Intelligence?",
    summary:
      "A practical explanation of procurement intelligence, why alert-only tools are limited, and how cycle-based analysis improves planning.",
  },
  {
    href: "/resources/public-procurement-cycles",
    title: "Public Procurement Cycles",
    summary:
      "How public procurement cycles operate, how contract duration and renewal patterns influence timing, and why buyer behavior matters.",
  },
  {
    href: "/resources/contract-lifecycle-signals",
    title: "Contract Lifecycle Signals",
    summary:
      "How contract lifecycle indicators and historical procurement data can reveal likely upcoming tender opportunities.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">Procurement intelligence insights</h1>
        <p className="text-lead">
          Civant resources explain how procurement-cycle intelligence supports
          earlier planning, stronger prioritization, and better execution in
          public-sector markets.
        </p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Foundational Articles</p>
          <h2 className="headline-lg">
            Start with the core concepts behind Civant
          </h2>
        </div>
        <div className="grid grid-3 resources-grid">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="card card-link resource-card interactive-surface"
            >
              <h2 className="card-title">{article.title}</h2>
              <p className="card-body">{article.summary}</p>
              <span className="card-link-cta">Read Article</span>
            </Link>
          ))}
        </div>
        <div className="button-row resources-cta-row">
          <Link href="/contact" className="btn btn-primary">
            Request Demo
          </Link>
        </div>
      </Section>
    </div>
  );
}
