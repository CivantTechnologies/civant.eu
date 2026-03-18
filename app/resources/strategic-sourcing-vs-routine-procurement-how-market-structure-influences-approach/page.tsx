import Link from "next/link";
import { Section } from "../../../components/site/Section";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { RelatedArticles } from "../../../components/site/RelatedArticles";
import { buildArticleMetadata, buildArticleSchema } from "../../../lib/seo";

export const dynamic = "force-static";

const pagePath = "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach";
const publishedAt = "2026-03-14T00:00:00+00:00";

export const metadata = buildArticleMetadata({
  title: "Strategic Sourcing vs Routine Procurement: How Market Structure Influences Approach",
  description:
    "Not all public procurement is created equal. Strategic categories involve complex solutions, long‑term relationships and higher contract values, whereas...",
  path: pagePath,
  datePublished: publishedAt,
});

const articleSchema = buildArticleSchema({
  title: "Strategic Sourcing vs Routine Procurement: How Market Structure Influences Approach",
  description:
    "Not all public procurement is created equal. Strategic categories involve complex solutions, long‑term relationships and higher contract values, whereas...",
  path: pagePath,
  datePublished: publishedAt,
});

export default function ArticlePage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">Strategic Sourcing vs Routine Procurement: How Market Structure Influences Approach</h1>
        <p className="article-byline">
          By <a href="https://www.linkedin.com/in/davidmanriquecivant/" target="_blank" rel="noopener noreferrer">David Manrique</a> | March 2026
        </p>
      </Section>

      <Section muted>
        <div className="article-prose">
          <p className="article-body-text">
            Not all public procurement is created equal. Strategic categories involve complex solutions, long‑term relationships and higher contract values, whereas routine categories involve commoditised goods with lower complexity. Suppliers often misallocate resources by pursuing routine tenders with bespoke solutions or neglecting strategic categories that require early engagement. This brief explores how market structure informs the distinction between strategic sourcing and routine procurement.
          </p>

          <h2 className="article-subheading">Strategic vs Transactional</h2>

          <p className="article-body-text">
            Strategic sourcing typically involves frameworks or large one‑off contracts with comprehensive specifications, such as ICT systems, professional services or infrastructure projects. Buyers invest time in pre‑market engagement and supplier relationship management for these categories. Routine procurement, by contrast, may employ DPS or simple one‑off tenders for commoditised items such as office supplies or janitorial services. These categories prioritise price and compliance over innovation and are often re‑tendered frequently.
          </p>

          <h2 className="article-subheading">Market Structure Impact</h2>

          <p className="article-body-text">
            The structural patterns of strategic and routine procurement differ. Strategic categories exhibit longer contract durations, pre‑procurement consultations and complex evaluation criteria. Routine categories feature shorter contracts, lower thresholds and standardised specifications. Suppliers should recognise these patterns to determine whether early engagement, consortium building or simple transactional bidding is appropriate.
          </p>

          <h2 className="article-subheading">Approach Selection</h2>

          <p className="article-body-text">
            Choosing the right approach hinges on understanding the category. Strategic categories warrant investment in market intelligence, pre‑tender relationships, proof of capability and more tailored proposals. Routine categories require efficient bid processes, competitive pricing and the ability to manage high tender volumes. By aligning resources with category structure, organisations can optimise win rates and avoid over‑engineering bids for small opportunities.
          </p>

          <h2 className="article-subheading">Strategic Decision-Making</h2>

          <p className="article-body-text">
            Procurement intelligence helps classify categories by value, complexity and contract structure. Historical analysis of contract durations and supplier turnover can identify which segments are strategic versus routine. This insight enables sales teams to segment the market and tailor their pursuit strategies accordingly.
          </p>

          <RelatedArticles currentPath={pagePath} />
          <div className="button-row" style={{ marginTop: "3rem" }}>
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
