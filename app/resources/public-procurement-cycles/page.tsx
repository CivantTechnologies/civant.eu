import Link from "next/link";
import { Section } from "../../../components/site/Section";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { buildArticleMetadata, buildArticleSchema } from "../../../lib/seo";

export const dynamic = "force-static";

const pagePath = "/resources/public-procurement-cycles";
const publishedAt = "2026-03-08T00:00:00+00:00";

export const metadata = buildArticleMetadata({
  title: "Public Procurement Cycles",
  description:
    "Learn how public procurement cycles work, how contract renewal patterns affect timing, and why buyer behavior matters for opportunity planning.",
  path: pagePath,
  datePublished: publishedAt,
});

const articleSchema = buildArticleSchema({
  title: "Public Procurement Cycles",
  description:
    "Learn how public procurement cycles work, how contract renewal patterns affect timing, and why buyer behavior matters for opportunity planning.",
  path: pagePath,
  datePublished: publishedAt,
});

export default function PublicProcurementCyclesPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">Public Procurement Cycles</h1>
        <p className="text-lead">
          Public procurement cycles are repeatable purchasing patterns that
          influence when opportunities appear, how teams should plan, and where
          market pressure is likely to increase.
        </p>
      </Section>

      <Section muted>
        <div className="article-shell">
          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              How cycles work in real markets
            </h2>
            <p className="article-copy">
              In most public-sector categories, procurement does not happen as
              random events. Institutions operate through planning, contract
              execution, review, and renewal phases that create recognizable
              opportunity rhythms over time.
            </p>
            <p className="article-copy">
              Understanding these rhythms helps teams prepare before publication,
              rather than reacting only when notices go live.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Contract duration and renewal patterns
            </h2>
            <p className="article-copy">
              Contract duration provides a structural timing anchor. When
              combined with historical publication and award records, duration
              windows can indicate when retender activity is more likely.
            </p>
            <p className="article-copy">
              Renewal patterns vary by category and institution, so signal
              quality improves when lifecycle context is interpreted alongside
              buyer-specific behavior.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Buyer procurement behavior
            </h2>
            <p className="article-copy">
              Different buyer organizations show different procurement cadence.
              Some exhibit highly regular cycle behavior, while others are more
              volatile due to budget timing, internal governance, or category
              complexity.
            </p>
            <p className="article-copy">
              Buyer behavior analysis helps teams avoid treating all opportunity
              signals as equally actionable.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Why cycle intelligence matters
            </h2>
            <p className="article-copy">
              Cycle intelligence improves timing discipline across commercial and
              bid teams. It supports earlier account planning, better
              prioritization, and more deliberate resource allocation.
            </p>
            <p className="article-copy">
              See how cycle intelligence is operationalized across Civant on the{" "}
              <Link href="/platform" className="text-link">
                Platform page
              </Link>{" "}
              and how it is analyzed on the{" "}
              <Link href="/methodology" className="text-link">
                Methodology page
              </Link>
              .
            </p>
          </article>

          <div className="button-row">
            <Link href="/resources" className="btn btn-secondary">
              Back to Resources
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Request Demo
            </Link>
          </div>
        </div>
      </Section>
      <SchemaScript data={articleSchema} />
    </>
  );
}
