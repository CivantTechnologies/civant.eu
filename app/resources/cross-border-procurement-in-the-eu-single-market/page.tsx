import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/cross-border-procurement-in-the-eu-single-market",
  title: "Cross-Border Procurement in the EU Single Market",
  description:
    "Understand why cross-border public procurement remains difficult despite EU rules, and how suppliers can assess language, local presence, and market fit.",
  publishedAt: "2026-03-30T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Cross-border procurement is possible under EU rules, but practical barriers remain. Language, local delivery expectations, fragmented portals, buyer familiarity, and category-specific requirements mean suppliers need market intelligence before entering another country's public-sector market.",
  intro: (
    <>
      <p className="article-body-text">
        EU procurement rules are designed to support open competition across
        the single market. Above-threshold notices, common principles, and TED
        publication all help suppliers discover opportunities beyond their home
        market.
      </p>
      <p className="article-body-text">
        In practice, cross-border participation still requires more than seeing
        a notice. Suppliers need language capability, local context, delivery
        credibility, and a realistic view of competition.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Rules",
      text: "EU procurement rules support cross-border competition, especially above threshold.",
    },
    {
      label: "Reality",
      text: "Language, local knowledge, delivery expectations, and portal fragmentation remain barriers.",
    },
    {
      label: "Entry",
      text: "Cross-border market entry should be staged around fit, partners, category openness, and buyer evidence.",
    },
  ],
  civantView: {
    title: "Cross-border opportunity needs country-level context.",
    content: (
      <p>
        Civant helps compare market timing, buyer behavior, supplier presence,
        and competition across countries so teams can decide where cross-border
        expansion is realistic.
      </p>
    ),
  },
  sections: [
    {
      id: "cross-border-dynamics",
      title: "Cross-Border Dynamics",
      content: (
        <>
          <p className="article-body-text">
            Cross-border participation is easier in some categories than
            others. Highly specialised products, technology, or services may be
            more open to foreign suppliers than delivery-heavy local services.
          </p>
          <p className="article-body-text">
            Suppliers should assess whether the buyer requires local presence,
            local references, regulatory knowledge, language coverage, or
            partnerships before treating a notice as accessible.
          </p>
        </>
      ),
    },
    {
      id: "single-market-rules",
      title: "Single Market Rules",
      content: (
        <>
          <p className="article-body-text">
            EU procurement principles create a common legal foundation, but
            tender documents, local procurement practice, and buyer expectations
            still vary by country.
          </p>
          <p className="article-body-text">
            This is why cross-border strategy should combine legal visibility
            with practical market intelligence.
          </p>
        </>
      ),
    },
    {
      id: "geographic-competition",
      title: "Geographic Competition",
      content: (
        <>
          <p className="article-body-text">
            Geographic competition depends on market size, category maturity,
            domestic supplier depth, border-region dynamics, and the buyer's
            willingness to work with suppliers outside its usual base.
          </p>
          <p className="article-body-text">
            Competitor analysis should distinguish between genuine foreign
            entry and multinational suppliers bidding through local operations.
          </p>
        </>
      ),
    },
    {
      id: "international-bidding",
      title: "International Bidding",
      content: (
        <>
          <p className="article-body-text">
            A strong cross-border plan starts with market selection. Suppliers
            should compare opportunity volume, renewal timing, competition,
            language burden, partner needs, and buyer fit before committing bid
            resources.
          </p>
          <p className="article-body-text">
            Procurement intelligence reduces the cost of that assessment by
            normalising data across markets and surfacing patterns that are hard
            to see through individual portals.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Assess cross-border opportunity before committing bid effort.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Can suppliers bid for public contracts in other EU countries?",
      answer:
        "Yes. EU procurement rules support cross-border competition, especially for above-threshold procurement, but practical barriers such as language, delivery model, local context, and buyer expectations still matter.",
    },
    {
      question: "What makes cross-border procurement difficult?",
      answer:
        "Common barriers include language, local legal or operational context, fragmented portals, local delivery requirements, incumbent relationships, and the need for local partners.",
    },
    {
      question: "How should suppliers choose cross-border markets?",
      answer:
        "They should compare market size, buyer fit, category openness, renewal timing, competitor landscape, language burden, and whether local partnerships are needed.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanParliamentPublicProcurement",
    "tedEforms",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant helps teams compare procurement activity, timing, and competition across European markets.",
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
