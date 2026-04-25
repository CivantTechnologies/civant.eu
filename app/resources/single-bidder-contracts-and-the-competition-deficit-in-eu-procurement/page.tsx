import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/single-bidder-contracts-and-the-competition-deficit-in-eu-procurement",
  title: "Single-Bidder Contracts and the Competition Deficit in EU Procurement",
  description:
    "Understand why single-bidder public contracts matter, what they reveal about competition deficits, and how early visibility can improve market access.",
  publishedAt: "2026-04-02T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Single-bidder contracts matter because they reveal weak competition. They can be caused by narrow supplier markets, incumbent advantage, complex requirements, poor visibility, or short preparation windows. Better procurement intelligence helps suppliers identify where low competition reflects market-access problems rather than genuine lack of alternatives.",
  intro: (
    <>
      <p className="article-body-text">
        Single-bidder contracts are a warning sign for public procurement. A
        process may be formally open, but if only one supplier bids, the market
        may not be functioning competitively.
      </p>
      <p className="article-body-text">
        For suppliers, low-competition markets can be both risky and
        attractive. The key is understanding why competition is low.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-single-bidder-competition.svg",
    alt: "Civant positioning map showing low competition, single-bidder procurement, and new entry signals",
    caption:
      "Single-bidder patterns can reveal where competition is weak and where market entry needs better timing.",
  },
  takeaways: [
    {
      label: "Signal",
      text: "Single-bidder awards can reveal weak competition, incumbent strength, or poor market access.",
    },
    {
      label: "Diagnosis",
      text: "Low competition is not always an opportunity; sometimes the market is genuinely narrow.",
    },
    {
      label: "Action",
      text: "Early visibility can help qualified suppliers enter competitions that would otherwise attract too few bids.",
    },
  ],
  civantView: {
    title: "The competition deficit is partly an information problem.",
    content: (
      <p>
        Civant helps suppliers see buyer cycles and opportunities earlier, so
        they can prepare for markets where late discovery and fragmented
        visibility reduce effective competition.
      </p>
    ),
  },
  sections: [
    {
      id: "absence-of-competition",
      title: "Absence of Competition",
      content: (
        <>
          <p className="article-body-text">
            A single bid can mean several things. The requirement may be highly
            specialised, the incumbent may be unusually strong, the tender may
            have been hard to find, or the response window may have been too
            short for new entrants to prepare.
          </p>
          <p className="article-body-text">
            The diagnosis matters. A supplier should not treat every
            single-bidder market as easy to enter.
          </p>
        </>
      ),
    },
    {
      id: "monopoly-situations",
      title: "Monopoly Situations",
      content: (
        <>
          <p className="article-body-text">
            Some low-competition procurements reflect genuine market structure:
            few qualified suppliers, technical lock-in, local delivery
            constraints, or high switching risk.
          </p>
          <p className="article-body-text">
            Others reflect access problems. If qualified suppliers did not see
            the opportunity early enough, the market may be more open than the
            bidder count suggests.
          </p>
        </>
      ),
    },
    {
      id: "competition-deficit",
      title: "Competition Deficit",
      content: (
        <>
          <p className="article-body-text">
            The European Court of Auditors has highlighted declining competition
            in EU public procurement. That context makes bidder-count analysis
            important for both policymakers and suppliers.
          </p>
          <p className="article-body-text">
            Suppliers can use competition data to identify markets where a new
            entrant may change the dynamic, especially if preparation begins
            before the formal notice.
          </p>
        </>
      ),
    },
    {
      id: "market-failure",
      title: "Market Failure",
      content: (
        <>
          <p className="article-body-text">
            Low competition can be a symptom of poor visibility, excessive
            complexity, incumbent-friendly specifications, or insufficient
            market engagement.
          </p>
          <p className="article-body-text">
            Procurement intelligence cannot solve every structural problem, but
            it can help qualified suppliers find and prepare for opportunities
            where information timing is the main barrier.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Find markets where better timing can improve competition.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a single-bidder contract?",
      answer:
        "A single-bidder contract is a public procurement award where only one supplier submitted a bid, indicating limited competition in that procedure.",
    },
    {
      question: "Why are single-bidder contracts a concern?",
      answer:
        "They may indicate weak competition, incumbent advantage, limited market access, overly narrow requirements, or insufficient time for alternative suppliers to prepare.",
    },
    {
      question: "How can procurement intelligence help reduce single-bidder risk?",
      answer:
        "It gives suppliers earlier visibility into likely opportunities, buyer cycles, incumbent context, and preparation windows, making it easier for qualified bidders to participate.",
    },
  ],
  sources: getArticleSources([
    "europeanCourtAuditorsCompetition",
    "europeanCommissionPublicProcurement",
    "europeanCommissionSmeNeeds",
    "eurLexDirective201424",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams assess competition, incumbent context, and market-access signals before tender publication.",
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
