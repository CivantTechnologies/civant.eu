import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/consortium-bidding-in-european-procurement",
  title: "Consortium Bidding in European Procurement",
  description:
    "Learn when consortium bidding helps suppliers compete for public contracts, how partnerships affect capability, risk, market entry, and bid strategy.",
  publishedAt: "2026-03-31T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Consortium bidding lets suppliers combine capabilities, geography, references, capacity, or specialist expertise for public tenders that may be too complex for one firm alone. It can improve competitiveness, but it adds governance, risk-sharing, and coordination requirements.",
  intro: (
    <>
      <p className="article-body-text">
        Many public contracts require more than one capability. A supplier may
        have the product but lack local delivery, or the technical expertise but
        lack scale. Consortium bidding can close those gaps.
      </p>
      <p className="article-body-text">
        The decision to bid as a consortium should be strategic, not reactive.
        The right partner can make an opportunity credible; the wrong structure
        can make delivery and evaluation harder.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Capability",
      text: "Consortia help combine specialist skills, local presence, capacity, and references.",
    },
    {
      label: "Risk",
      text: "Partnerships introduce governance, accountability, pricing, and delivery coordination risk.",
    },
    {
      label: "Timing",
      text: "Strong consortia are built before the tender deadline, not during the final response window.",
    },
  ],
  civantView: {
    title: "Partner strategy is part of procurement intelligence.",
    content: (
      <p>
        Civant helps teams identify where partnership may be needed by exposing
        buyer requirements, incumbent structure, geography, category complexity,
        and likely competitor combinations.
      </p>
    ),
  },
  sections: [
    {
      id: "joint-bidding",
      title: "Joint Bidding",
      content: (
        <>
          <p className="article-body-text">
            Consortium bidding can help suppliers meet scale, financial,
            technical, geographic, or delivery requirements that they could not
            satisfy alone.
          </p>
          <p className="article-body-text">
            It is especially relevant in complex or multi-disciplinary tenders
            where the buyer needs an integrated solution rather than a narrow
            product or service.
          </p>
        </>
      ),
    },
    {
      id: "partnership-mechanics",
      title: "Partnership Mechanics",
      content: (
        <>
          <p className="article-body-text">
            Consortium models vary. One supplier may act as prime with defined
            subcontractors, or partners may form a more balanced joint
            arrangement. The structure affects risk, pricing, accountability,
            and buyer confidence.
          </p>
          <p className="article-body-text">
            Clear governance matters. Roles, decision rights, delivery
            responsibilities, and commercial terms should be understood before
            the bid response begins.
          </p>
        </>
      ),
    },
    {
      id: "consortium-strategy",
      title: "Consortium Strategy",
      content: (
        <>
          <p className="article-body-text">
            Suppliers should use procurement intelligence to identify where they
            are unlikely to win alone and where partnership could improve buyer
            fit. That includes gaps in local presence, credentials, sector
            knowledge, or implementation capacity.
          </p>
          <p className="article-body-text">
            They should also monitor competitor relationships. Likely partner
            combinations can change the competitive field before the tender is
            published.
          </p>
        </>
      ),
    },
    {
      id: "collective-winning",
      title: "Collective Winning",
      content: (
        <>
          <p className="article-body-text">
            The best consortium strategy starts early. Teams need time to build
            trust, align messaging, test delivery assumptions, and decide who
            leads the commercial relationship.
          </p>
          <p className="article-body-text">
            When done well, consortium bidding can turn an inaccessible tender
            into a credible strategic opportunity.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Identify where partnerships can make a pursuit credible.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is consortium bidding?",
      answer:
        "Consortium bidding is when multiple suppliers collaborate to submit a public procurement bid, usually to combine capability, capacity, geography, or specialist expertise.",
    },
    {
      question: "When should suppliers consider a consortium?",
      answer:
        "They should consider it when the tender requires capabilities, scale, references, local presence, or delivery capacity that one supplier cannot credibly provide alone.",
    },
    {
      question: "What are the risks of consortium bidding?",
      answer:
        "Risks include unclear governance, partner misalignment, delivery accountability, pricing complexity, margin sharing, and buyer concerns about coordination.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "europeanCommissionSmeNeeds",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams assess buyer fit, competitive context, and partnership needs before tender publication.",
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
