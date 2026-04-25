import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach",
  title: "Strategic Sourcing vs Routine Procurement: How Market Structure Influences Approach",
  description:
    "Learn how strategic sourcing differs from routine public procurement and how suppliers should adapt bid strategy to market structure.",
  publishedAt: "2026-04-22T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Strategic sourcing involves complex, higher-value, or relationship-heavy procurement where early preparation and differentiation matter. Routine procurement is more standardised and transactional, where efficiency, compliance, and pricing discipline often matter more.",
  intro: (
    <>
      <p className="article-body-text">
        Not every public tender deserves the same pursuit model. Strategic
        categories and routine categories have different buying dynamics,
        timelines, evidence needs, and competitive patterns.
      </p>
      <p className="article-body-text">
        Suppliers improve win rates when their effort matches the structure of
        the opportunity.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Strategic",
      text: "Complex or high-value work often needs early engagement, tailored evidence, and stronger positioning.",
    },
    {
      label: "Routine",
      text: "Standardised work often rewards process efficiency, compliance, pricing, and response discipline.",
    },
    {
      label: "Fit",
      text: "The bid approach should match category structure, not only contract value.",
    },
  ],
  civantView: {
    title: "Market structure should determine the pursuit model.",
    content: (
      <p>
        Civant helps teams classify opportunities by complexity, value,
        recurrence, competition, and timing so they can decide whether to use a
        strategic or routine pursuit playbook.
      </p>
    ),
  },
  sections: [
    {
      id: "strategic-transactional",
      title: "Strategic vs Transactional",
      content: (
        <>
          <p className="article-body-text">
            Strategic procurement often involves complex requirements, higher
            risk, longer relationships, deeper evaluation, and more buyer
            engagement before publication.
          </p>
          <p className="article-body-text">
            Routine procurement is more repeatable, with clearer specifications
            and less need for bespoke positioning.
          </p>
        </>
      ),
    },
    {
      id: "market-structure",
      title: "Market Structure Impact",
      content: (
        <>
          <p className="article-body-text">
            Strategic categories may use frameworks, consultations, competitive
            dialogue, value-based evaluation, or complex lots. Routine
            categories may rely on standard tenders, DPS call-offs, catalogues,
            or frequent re-procurement.
          </p>
          <p className="article-body-text">
            Understanding the route to market helps suppliers allocate bid
            effort properly.
          </p>
        </>
      ),
    },
    {
      id: "approach-selection",
      title: "Approach Selection",
      content: (
        <>
          <p className="article-body-text">
            Strategic sourcing calls for early account planning, evidence
            building, partner strategy, and tailored positioning. Routine
            procurement calls for efficient qualification, reusable bid assets,
            and disciplined pricing.
          </p>
          <p className="article-body-text">
            Applying the wrong model wastes effort and weakens competitiveness.
          </p>
        </>
      ),
    },
    {
      id: "strategic-decision-making",
      title: "Strategic Decision-Making",
      content: (
        <>
          <p className="article-body-text">
            Procurement intelligence can classify opportunities by value,
            complexity, recurrence, procedure, buyer behavior, and competitive
            intensity.
          </p>
          <p className="article-body-text">
            That classification supports better account planning and more
            sustainable bid operations.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Match pursuit strategy to procurement structure.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is strategic sourcing in public procurement?",
      answer:
        "Strategic sourcing involves more complex, high-value, or relationship-heavy procurement where early preparation, differentiation, and long-term fit matter.",
    },
    {
      question: "What is routine procurement?",
      answer:
        "Routine procurement covers more standardised goods or services where compliance, pricing, and efficient response processes often matter most.",
    },
    {
      question: "How should suppliers choose the right approach?",
      answer:
        "They should assess category complexity, buyer behavior, contract value, procedure, competition, recurrence, and whether early engagement can improve the outcome.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "eurLexDirective201424",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams classify opportunities and match pursuit strategy to market structure.",
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
