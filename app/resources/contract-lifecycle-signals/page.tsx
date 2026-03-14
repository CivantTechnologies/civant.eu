import Link from "next/link";
import { Section } from "../../../components/site/Section";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { buildArticleMetadata, buildArticleSchema } from "../../../lib/seo";

export const dynamic = "force-static";

const pagePath = "/resources/contract-lifecycle-signals";
const publishedAt = "2026-03-08T00:00:00+00:00";

export const metadata = buildArticleMetadata({
  title: "Contract Lifecycle Signals",
  description:
    "Understand how contract lifecycle signals and historical procurement data can indicate likely future tender activity.",
  path: pagePath,
  datePublished: publishedAt,
});

const articleSchema = buildArticleSchema({
  title: "Contract Lifecycle Signals",
  description:
    "Understand how contract lifecycle signals and historical procurement data can indicate likely future tender activity.",
  path: pagePath,
  datePublished: publishedAt,
});

export default function ContractLifecycleSignalsPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">Contract Lifecycle Signals</h1>
        <p className="text-lead">
          Contract lifecycle signals help teams identify where future tender
          activity may emerge by combining lifecycle context with historical
          procurement evidence.
        </p>
        <p className="article-byline">
          By <a href="https://www.linkedin.com/in/davidmanriquecivant/" target="_blank" rel="noopener noreferrer">David Manrique</a> | March 2026
        </p>
      </Section>

      <Section muted>
        <div className="article-shell">
          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              How lifecycles can indicate future tenders
            </h2>
            <p className="article-copy">
              Contract lifecycle stages create timing boundaries. As agreements
              approach renewal windows, the probability of procurement activity
              often rises, especially in categories with repeat buying patterns.
            </p>
            <p className="article-copy">
              Lifecycle signals are not guarantees, but they provide useful
              directional intelligence for planning and prioritization.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Role of historical procurement data
            </h2>
            <p className="article-copy">
              Historical notices, awards, and participation records provide
              context for interpreting lifecycle windows. They reveal how similar
              institutions and categories behaved in previous cycles.
            </p>
            <p className="article-copy">
              Without historical context, lifecycle windows can be too broad.
              With context, they become actionable signals for sequencing work.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Why lifecycle monitoring matters
            </h2>
            <p className="article-copy">
              Lifecycle monitoring helps teams avoid late-stage opportunity
              discovery. It supports earlier alignment between account planning,
              partner strategy, and bid resource decisions.
            </p>
            <p className="article-copy">
              In practical terms, it shifts teams from reactive alert consumption
              toward proactive market timing.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              How Civant operationalizes lifecycle signals
            </h2>
            <p className="article-copy">
              Civant integrates lifecycle indicators with procurement history and
              participation dynamics to generate prioritized opportunity signals.
              These insights are surfaced across platform workflows for
              monitoring, analysis, and execution.
            </p>
            <p className="article-copy">
              Explore the workflow on the{" "}
              <Link href="/platform" className="text-link">
                Platform page
              </Link>{" "}
              and the analytical approach on the{" "}
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
