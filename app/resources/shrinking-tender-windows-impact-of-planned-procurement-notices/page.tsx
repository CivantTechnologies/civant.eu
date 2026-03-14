import Link from "next/link";
import { Section } from "../../../components/site/Section";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { buildArticleMetadata, buildArticleSchema } from "../../../lib/seo";

export const dynamic = "force-static";

const pagePath = "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices";
const publishedAt = "2026-03-14T00:00:00+00:00";

export const metadata = buildArticleMetadata({
  title: "Shrinking Tender Windows: Impact of Planned Procurement Notices",
  description:
    "The Procurement Act 2023 introduces planned procurement notices (PPNs) as a tool for early transparency and streamlined competition. By issuing a PPN mo...",
  path: pagePath,
  datePublished: publishedAt,
});

const articleSchema = buildArticleSchema({
  title: "Shrinking Tender Windows: Impact of Planned Procurement Notices",
  description:
    "The Procurement Act 2023 introduces planned procurement notices (PPNs) as a tool for early transparency and streamlined competition. By issuing a PPN mo...",
  path: pagePath,
  datePublished: publishedAt,
});

export default function ArticlePage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">Shrinking Tender Windows: Impact of Planned Procurement Notices</h1>
        <p className="text-lead">
          The Procurement Act 2023 introduces planned procurement notices (PPNs) as a tool for early transparency and streamlined competition. By issuing a PPN mo...
        </p>
        <p className="article-byline">
          By <a href="https://www.linkedin.com/in/davidmanriquecivant/" target="_blank" rel="noopener noreferrer">David Manrique</a> | March 2026
        </p>
      </Section>

      <Section muted>
        <div className="article-shell">


            <article className="card article-card">
              <h2 className="headline-lg article-heading">
                Section 1 — Context
              </h2>
              <p className="article-copy">
                The Procurement Act 2023 introduces planned procurement notices (PPNs) as a tool for early transparency and streamlined competition. By issuing a PPN months before the contract notice, authorities can legally shorten the tender period, on the premise that suppliers have had time to prepare. This brief examines how PPNs affect the length of tender windows and the implications for suppliers.
              </p>
            </article>

            <article className="card article-card">
              <h2 className="headline-lg article-heading">
                Section 2 — Market Dynamics
              </h2>
              <p className="article-copy">
                PPNs specify the subject matter of the future procurement, estimated timelines and any market engagement activities. Once a PPN is issued, authorities may reduce the tender period from the default 30 or 35 days to a shorter duration. This places the onus on suppliers to monitor early notices and be ready to bid on short notice. If suppliers ignore PPNs, they may be surprised by a compressed tender window and struggle to assemble a competitive bid.
              </p>
            </article>

            <article className="card article-card">
              <h2 className="headline-lg article-heading">
                Section 3 — Structural Patterns
              </h2>
              <p className="article-copy">
                The timeline under a PPN follows a specific pattern: publication of the notice, optional pre‑market engagement, and then the formal contract notice with a shortened tender period. Authorities use PPNs to speed up procurement cycles, particularly for urgent or straightforward procurements. However, this practice can disadvantage suppliers who do not monitor early notices, especially SMEs with limited bid capacity.
              </p>
            </article>

            <article className="card article-card">
              <h2 className="headline-lg article-heading">
                Section 4 — Implications
              </h2>
              <p className="article-copy">
                Shortened tender windows mean suppliers must be ready with teams, pricing models and compliance documentation as soon as the contract notice appears. To adapt, organisations should monitor PPNs and treat them as a signal to begin preparatory work. They should also streamline internal bid processes and maintain up‑to‑date templates and approvals. Suppliers who fail to adapt may find themselves unable to respond to compressed deadlines, losing out to more agile competitors.
              </p>
            </article>

            <article className="card article-card">
              <h2 className="headline-lg article-heading">
                Section 5 — Procurement Intelligence Perspective
              </h2>
              <p className="article-copy">
                Procurement intelligence tools aggregate PPNs and provide alerts when a notice relevant to a supplier’s sector is published. By calculating expected tender publication dates and likely window lengths, these tools help suppliers prioritise and prepare. Integrating this information into pipeline planning ensures organisations are not caught off‑guard by short tender windows.
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
