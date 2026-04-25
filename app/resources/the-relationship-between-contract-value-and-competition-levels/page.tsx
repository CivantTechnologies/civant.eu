import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/the-relationship-between-contract-value-and-competition-levels",
  title: "The Relationship Between Contract Value and Competition Levels",
  description:
    "Understand how contract value affects public tender competition, supplier participation, bid cost, lots, risk, and procurement strategy.",
  publishedAt: "2026-04-18T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Contract value affects competition because it changes supplier incentives, bid cost, risk, qualification requirements, and delivery capacity. Higher-value tenders can attract interest, but they may also narrow the field to suppliers with enough scale and evidence to compete.",
  intro: (
    <>
      <p className="article-body-text">
        Contract value is one of the first numbers suppliers see, but it is not
        a simple signal. A larger contract may be attractive, yet harder to win
        and more costly to bid.
      </p>
      <p className="article-body-text">
        Understanding how value shapes competition helps teams make better
        bid/no-bid, pricing, and partner decisions.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Incentive",
      text: "Higher values can justify more effort, but also increase bid cost and delivery risk.",
    },
    {
      label: "Capacity",
      text: "Very large contracts may narrow the supplier field to firms with scale and references.",
    },
    {
      label: "Structure",
      text: "Lots, frameworks, and contract aggregation can change competition more than value alone.",
    },
  ],
  civantView: {
    title: "Contract value should be read with competition and capability.",
    content: (
      <p>
        Civant helps teams compare value with bidder behavior, incumbent
        context, buyer history, and lifecycle timing so opportunity size does
        not override qualification discipline.
      </p>
    ),
  },
  sections: [
    {
      id: "price-effect",
      title: "Price Effect",
      content: (
        <>
          <p className="article-body-text">
            Contract value affects how suppliers assess return on bid effort. A
            low-value tender may not justify a complex response. A high-value
            tender may justify investment but require stronger evidence,
            governance, and pricing discipline.
          </p>
          <p className="article-body-text">
            Bid cost should be part of the value calculation, not an
            afterthought.
          </p>
        </>
      ),
    },
    {
      id: "tender-attractiveness",
      title: "Tender Attractiveness",
      content: (
        <>
          <p className="article-body-text">
            A tender is attractive when value, fit, timing, competition, and
            delivery risk align. Value alone cannot overcome weak buyer fit or
            unrealistic preparation time.
          </p>
          <p className="article-body-text">
            Suppliers should assess whether the contract size matches their
            capability, references, balance sheet, and delivery model.
          </p>
        </>
      ),
    },
    {
      id: "volume-correlation",
      title: "Volume Correlation",
      content: (
        <>
          <p className="article-body-text">
            Contract aggregation can reduce the number of accessible
            opportunities while increasing individual contract value. Lotting
            can sometimes broaden participation by making scopes more
            accessible.
          </p>
          <p className="article-body-text">
            Competition analysis should therefore examine contract structure,
            not only headline value.
          </p>
        </>
      ),
    },
    {
      id: "competition-economics",
      title: "Competition Economics",
      content: (
        <>
          <p className="article-body-text">
            Suppliers should build different strategies for low-value
            high-volume work, mid-value competitive tenders, and large
            strategic procurements.
          </p>
          <p className="article-body-text">
            Procurement intelligence helps identify which value bands and
            categories produce the strongest fit for each supplier.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Judge contract value against fit, risk, and competition.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Does a higher contract value always mean more competition?",
      answer:
        "No. Higher values can attract interest, but they can also require scale, references, financial strength, and delivery capacity that narrow the supplier field.",
    },
    {
      question: "How should suppliers assess contract value?",
      answer:
        "They should compare value with bid cost, buyer fit, competition, incumbent position, delivery risk, contract structure, and preparation time.",
    },
    {
      question: "Why do lots matter for competition?",
      answer:
        "Lots can make large procurements more accessible by separating scope, while aggregated contracts can restrict participation to larger suppliers.",
    },
  ],
  sources: getArticleSources([
    "europeanCourtAuditorsCompetition",
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams compare contract value, competition, timing, and buyer context before bidding.",
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
