import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/procurement-data-quality-across-european-markets",
  title: "Procurement Data Quality Across European Markets",
  description:
    "Understand why procurement data quality varies across European markets and how standardisation, eForms, validation, and normalisation affect intelligence.",
  publishedAt: "2026-04-10T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Procurement data quality varies across European markets because notices differ in completeness, structure, classification, timeliness, and publication discipline. Better data quality improves market intelligence, but suppliers still need validation, normalisation, and confidence scoring.",
  intro: (
    <>
      <p className="article-body-text">
        Procurement intelligence depends on data quality. If buyer names,
        values, dates, categories, awards, or notice types are inconsistent, the
        analysis built on top of them becomes less reliable.
      </p>
      <p className="article-body-text">
        eForms and digital procurement standards improve the foundation, but
        intelligence still requires careful cleaning, validation, and context.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Variation",
      text: "Publication quality differs across markets, authorities, fields, and historical periods.",
    },
    {
      label: "Trust",
      text: "Reliable intelligence needs normalisation, validation, deduplication, and confidence indicators.",
    },
    {
      label: "Use",
      text: "Data limitations should shape how strongly teams act on a forecast or market signal.",
    },
  ],
  civantView: {
    title: "Good procurement intelligence starts with honest data quality.",
    content: (
      <p>
        Civant treats data quality as part of the evidence model. Signals are
        more useful when their source, completeness, recency, and consistency
        are understood.
      </p>
    ),
  },
  sections: [
    {
      id: "quality-variation",
      title: "Quality Variation",
      content: (
        <>
          <p className="article-body-text">
            Procurement records can vary in how they report value, duration,
            buyer identity, supplier identity, lots, award date, category, and
            modification history.
          </p>
          <p className="article-body-text">
            Historical data may be less structured than newer eForms-based
            records, so cross-market analysis must account for uneven inputs.
          </p>
        </>
      ),
    },
    {
      id: "data-standardisation",
      title: "Data Standardisation",
      content: (
        <>
          <p className="article-body-text">
            Standardised forms help make procurement data easier to process,
            compare, and analyse. But standards do not remove the need for
            validation, especially when fields are incomplete or interpreted
            differently.
          </p>
          <p className="article-body-text">
            Normalisation turns uneven records into consistent entities,
            categories, dates, and relationships.
          </p>
        </>
      ),
    },
    {
      id: "information-trust",
      title: "Information Trust",
      content: (
        <>
          <p className="article-body-text">
            Teams should know how much confidence to place in each signal. A
            complete, recent, well-classified notice deserves different weight
            from a partial record with unclear dates or inconsistent value
            fields.
          </p>
          <p className="article-body-text">
            This is especially important when forecasts depend on lifecycle
            timing or historical buyer behavior.
          </p>
        </>
      ),
    },
    {
      id: "quality-matters",
      title: "Quality Matters",
      content: (
        <>
          <p className="article-body-text">
            Data quality is not a back-office issue. It directly affects which
            opportunities appear, how buyer history is interpreted, and how
            confidently teams should act.
          </p>
          <p className="article-body-text">
            Good intelligence makes data limitations visible rather than hiding
            them behind a clean-looking alert.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Build procurement decisions on validated evidence.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Why does procurement data quality vary?",
      answer:
        "It varies because authorities use different systems, fields, classifications, publication practices, languages, and levels of completeness across markets and time periods.",
    },
    {
      question: "How do eForms affect procurement data quality?",
      answer:
        "eForms improve standardisation by structuring procurement notice data, but data still needs validation, normalisation, and interpretation.",
    },
    {
      question: "Why does data quality matter for suppliers?",
      answer:
        "It affects opportunity discovery, buyer analysis, renewal forecasting, competitor intelligence, and the confidence teams should place in procurement signals.",
    },
  ],
  sources: getArticleSources([
    "tedEforms",
    "europeanCommissionEforms",
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "procurement-intelligence-software",
    linkLabel: "Explore procurement intelligence software",
    children:
      "See how Civant turns fragmented procurement records into structured, confidence-weighted market intelligence.",
  },
};

export const metadata = buildArticleMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  datePublished: article.publishedAt,
  dateModified: article.modifiedAt,
});

export default function ArticlePage() {
  return <ResourceArticleTemplate article={article} />;
}
