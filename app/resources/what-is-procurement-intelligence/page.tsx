import Link from "next/link";
import { Section } from "../../../components/site/Section";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { buildArticleMetadata, buildArticleSchema } from "../../../lib/seo";

export const dynamic = "force-static";

const pagePath = "/resources/what-is-procurement-intelligence";
const publishedAt = "2026-03-08T00:00:00+00:00";

export const metadata = buildArticleMetadata({
  title: "What Is Procurement Intelligence?",
  description:
    "Understand procurement intelligence, why tender monitoring alone is limited, and how procurement-cycle analysis improves market planning.",
  path: pagePath,
  datePublished: publishedAt,
});

const articleSchema = buildArticleSchema({
  title: "What Is Procurement Intelligence?",
  description:
    "Understand procurement intelligence, why tender monitoring alone is limited, and how procurement-cycle analysis improves market planning.",
  path: pagePath,
  datePublished: publishedAt,
});

export default function WhatIsProcurementIntelligencePage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">What Is Procurement Intelligence?</h1>
        <p className="text-lead">
          Procurement intelligence is the discipline of turning procurement
          history, contract lifecycle context, and market participation data into
          structured planning signals for commercial teams.
        </p>
        <p className="article-byline">
          By <a href="https://www.linkedin.com/in/davidmanriquecivant/" target="_blank" rel="noopener noreferrer">David Manrique</a> | March 2026
        </p>
      </Section>

      <Section muted>
        <div className="article-shell">
          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Procurement intelligence in practice
            </h2>
            <p className="article-copy">
              In public-sector markets, opportunity timing determines preparation
              quality. Procurement intelligence focuses on identifying where
              demand is likely to emerge before tender publication, so teams can
              prioritize accounts, align partnerships, and allocate resources
              earlier.
            </p>
            <p className="article-copy">
              This is not guesswork. It is evidence-based analysis of buying
              patterns, contract windows, and participation dynamics over time.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              Why tender monitoring tools are limited
            </h2>
            <p className="article-copy">
              Traditional tender monitoring platforms are useful for tracking
              published opportunities. Their limitation is timing: they are
              strongest after publication, when planning windows are already
              compressed and engagement options are narrower.
            </p>
            <p className="article-copy">
              Procurement intelligence adds a pre-publication layer. Instead of
              only surfacing new notices, it helps teams understand cycle
              behavior and emerging opportunity signals before formal release.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">
              How procurement cycles shape public-sector markets
            </h2>
            <p className="article-copy">
              Public-sector buying is cyclical. Institutions buy, renew, and
              retender through repeatable patterns influenced by contract
              structures, category norms, and internal planning rhythms.
            </p>
            <p className="article-copy">
              Teams that understand cycle patterns can prepare earlier and make
              better prioritization decisions. Teams relying only on publication
              alerts often react too late.
            </p>
          </article>

          <article className="card article-card">
            <h2 className="headline-lg article-heading">Where Civant fits</h2>
            <p className="article-copy">
              Civant is built as a procurement intelligence platform centered on
              procurement-cycle analysis. It combines historical procurement
              records, contract lifecycle signals, and market participation data
              into actionable workflows for enterprise teams.
            </p>
            <p className="article-copy">
              Explore how Civant modules work on the{" "}
              <Link href="/platform" className="text-link">
                Platform page
              </Link>{" "}
              and review the analytical foundation on the{" "}
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
