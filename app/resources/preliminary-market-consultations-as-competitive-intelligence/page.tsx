import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/preliminary-market-consultations-as-competitive-intelligence",
  title: "Preliminary Market Consultations as Competitive Intelligence",
  description:
    "Understand how preliminary market consultations reveal buyer intent, requirement direction, supplier landscape, and early competitive positioning.",
  publishedAt: "2026-03-22T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Preliminary market consultations can be competitive intelligence because they reveal buyer intent before formal procurement. Consultation notices, workshops, surveys, and published findings can indicate requirements, timelines, capability gaps, market concerns, and which suppliers are active around a future opportunity.",
  intro: (
    <>
      <p className="article-body-text">
        Preliminary market consultations allow contracting authorities to learn
        from the market before launching a procurement. For suppliers, they can
        reveal early evidence of buyer intent, emerging requirements, and
        competitive positioning.
      </p>
      <p className="article-body-text">
        The value is not simply attending a consultation. It is understanding
        what the consultation says about future demand and how the market is
        likely to respond.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Intent",
      text: "Consultations can show that a buyer is actively testing a future requirement.",
    },
    {
      label: "Context",
      text: "Published findings can reveal feasibility concerns, capability gaps, and market feedback.",
    },
    {
      label: "Positioning",
      text: "Early participation helps suppliers prepare, but it must be handled fairly and transparently.",
    },
  ],
  civantView: {
    title: "Consultations are high-value signals when they are connected to lifecycle evidence.",
    content: (
      <p>
        Civant uses consultation activity as one input in a wider signal model.
        It becomes more useful when it aligns with expiring contracts, buyer
        history, budget evidence, or prior information notices.
      </p>
    ),
  },
  sections: [
    {
      id: "consultation-insights",
      title: "Consultation Insights",
      content: (
        <>
          <p className="article-body-text">
            Market consultations can provide early visibility into problem
            statements, technical constraints, commercial models, implementation
            challenges, and possible timelines.
          </p>
          <p className="article-body-text">
            They also reveal what the buyer does not yet know. Open questions
            and areas of uncertainty can be just as informative as confirmed
            requirements.
          </p>
        </>
      ),
    },
    {
      id: "stakeholder-signals",
      title: "Stakeholder Signals",
      content: (
        <>
          <p className="article-body-text">
            Consultation participation can show which suppliers are active, what
            themes are shaping the market, and whether the buyer is seeking
            innovation, validation, price realism, or implementation advice.
          </p>
          <p className="article-body-text">
            Where consultation outputs are published, they can help suppliers
            understand the likely direction of the future procurement even if
            they did not participate directly.
          </p>
        </>
      ),
    },
    {
      id: "intelligence-gathering",
      title: "Intelligence Gathering",
      content: (
        <>
          <p className="article-body-text">
            A good intelligence workflow tracks consultation announcements,
            event materials, supplier questions, published findings, and the
            later tender documents. The comparison reveals how early market
            input shaped the final procurement.
          </p>
          <p className="article-body-text">
            This is useful for future bids too. Buyers that regularly consult
            the market may provide more visible preparation signals than buyers
            that move straight to formal notice publication.
          </p>
        </>
      ),
    },
    {
      id: "buyer-intent",
      title: "Buyer Intent",
      content: (
        <>
          <p className="article-body-text">
            A consultation does not guarantee a tender, but it is meaningful
            evidence that the buyer is exploring a problem. The stronger signal
            appears when consultation activity aligns with funding, an expiring
            contract, or a published procurement plan.
          </p>
          <p className="article-body-text">
            Suppliers should use consultations to qualify the opportunity early,
            not to assume that the opportunity is automatically worth pursuit.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Turn consultation activity into qualified buyer intelligence.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a preliminary market consultation?",
      answer:
        "A preliminary market consultation is early engagement by a contracting authority with the market before procurement, often used to test feasibility, understand capability, refine requirements, or gather supplier input.",
    },
    {
      question: "Why are consultations useful to suppliers?",
      answer:
        "They can reveal buyer intent, likely requirements, capability gaps, implementation concerns, and timing before a formal tender is published.",
    },
    {
      question: "Do consultations create an advantage for suppliers?",
      answer:
        "They can create preparation advantages, but procurement rules require authorities to manage engagement fairly and avoid distorting competition.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "ukProcurementActGuidance",
    "ukProcurementAct2023",
    "europeanCommissionPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant connects consultations, early notices, buyer history, and lifecycle evidence.",
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
