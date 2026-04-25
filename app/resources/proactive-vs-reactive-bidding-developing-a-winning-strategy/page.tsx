import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/proactive-vs-reactive-bidding-developing-a-winning-strategy",
  title: "Proactive vs Reactive Bidding: Developing a Winning Strategy",
  description:
    "Build a public-sector bid strategy that balances proactive opportunity preparation with reactive response discipline and evidence-led bid/no-bid rules.",
  publishedAt: "2026-04-08T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "A winning public-sector bid strategy balances proactive preparation for strategic opportunities with disciplined reactive response for lower-risk work. Teams should tier opportunities by value, fit, timing, buyer context, and evidence strength.",
  intro: (
    <>
      <p className="article-body-text">
        Not every opportunity deserves months of preparation, and not every
        tender can be handled reactively. Strong bid strategy is about knowing
        which mode fits the opportunity.
      </p>
      <p className="article-body-text">
        The right approach uses evidence to decide where to invest early and
        where to preserve capacity.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Tiering",
      text: "Strategic opportunities deserve earlier preparation than routine or low-fit tenders.",
    },
    {
      label: "Evidence",
      text: "Buyer context, lifecycle timing, and competition should shape the response mode.",
    },
    {
      label: "Capacity",
      text: "Bid teams win more consistently when effort matches expected return.",
    },
  ],
  civantView: {
    title: "The best bid strategy is selective before it is fast.",
    content: (
      <p>
        Civant helps teams rank opportunities by fit, timing, competition, and
        signal strength so they can decide where to prepare early and where to
        hold back.
      </p>
    ),
  },
  sections: [
    {
      id: "preparation-advantage",
      title: "Preparation Advantage",
      content: (
        <>
          <p className="article-body-text">
            Proactive preparation creates time to understand the buyer, shape
            the solution, gather evidence, align delivery, and identify
            partners.
          </p>
          <p className="article-body-text">
            That advantage matters most when the opportunity is strategic,
            complex, high value, or difficult to respond to from a standing
            start.
          </p>
        </>
      ),
    },
    {
      id: "strategy-framework",
      title: "Strategy Framework",
      content: (
        <>
          <p className="article-body-text">
            A practical strategy tiers opportunities. Tier one receives early
            preparation and account planning. Tier two receives structured
            monitoring. Tier three may be handled reactively or declined.
          </p>
          <p className="article-body-text">
            The criteria should include value, buyer fit, incumbent context,
            timing, competition, delivery risk, and evidence strength.
          </p>
        </>
      ),
    },
    {
      id: "timing-your-bids",
      title: "Timing Your Bids",
      content: (
        <>
          <p className="article-body-text">
            Timing is a resource decision. Preparing too early for weak signals
            wastes effort. Preparing too late for strategic tenders weakens the
            bid.
          </p>
          <p className="article-body-text">
            Teams should increase effort as confidence increases, not jump from
            no action to full bid mode overnight.
          </p>
        </>
      ),
    },
    {
      id: "winning-approach",
      title: "Winning Approach",
      content: (
        <>
          <p className="article-body-text">
            A strong bidding system combines early intelligence, reusable bid
            assets, clear internal ownership, and documented bid/no-bid rules.
          </p>
          <p className="article-body-text">
            This lets teams respond quickly when needed while still protecting
            capacity for the opportunities that deserve deeper work.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Build bid strategy around fit, timing, and evidence.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Should suppliers always be proactive?",
      answer:
        "No. Suppliers should be proactive for strategic, complex, or high-fit opportunities and use lighter response modes for lower-value or lower-confidence tenders.",
    },
    {
      question: "How should bid teams tier opportunities?",
      answer:
        "They should assess value, buyer fit, lifecycle timing, incumbent position, competition, delivery risk, preparation window, and evidence strength.",
    },
    {
      question: "What makes a bidding strategy sustainable?",
      answer:
        "A sustainable strategy uses clear bid/no-bid rules, early signal monitoring, reusable content, internal ownership, and disciplined resource allocation.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "oecdPublicProcurement",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams prioritise opportunities with buyer, timing, lifecycle, and competitor evidence.",
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
