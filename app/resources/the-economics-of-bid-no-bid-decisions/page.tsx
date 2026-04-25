import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/the-economics-of-bid-no-bid-decisions",
  title: "The Economics of Bid-No-Bid Decisions",
  description:
    "Learn how bid/no-bid discipline protects scarce bid resources by weighing fit, timing, buyer context, competition, preparation window, and likely return.",
  publishedAt: "2026-03-25T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-19T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Bid/no-bid decisions are economic decisions. A tender is only attractive if the expected value of pursuing it outweighs the cost of preparing, pricing, approving, and submitting a credible bid. Procurement intelligence improves that calculation by adding evidence about buyer fit, competition, incumbent position, timing, and preparation quality.",
  intro: (
    <>
      <p className="article-body-text">
        Public-sector bid teams rarely lose because they ignored one obvious
        opportunity. They lose capacity when they chase too many opportunities
        without enough evidence to justify the effort.
      </p>
      <p className="article-body-text">
        A disciplined bid/no-bid process treats every pursuit as an investment:
        time, expertise, leadership attention, partner coordination, pricing
        effort, and opportunity cost.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Cost",
      text: "Every bid consumes scarce capacity that could be used on a better-fit opportunity.",
    },
    {
      label: "Fit",
      text: "Buyer context, incumbent position, timing, and solution match should shape the decision before writing starts.",
    },
    {
      label: "Return",
      text: "Strong bid discipline improves win rate, reduces wasted effort, and protects team focus.",
    },
  ],
  civantView: {
    title: "A bid/no-bid decision should be evidence-led, not deadline-led.",
    content: (
      <p>
        The worst time to decide whether an opportunity is worth pursuing is
        after the team has already started writing. Civant helps move that
        decision earlier by giving teams buyer, lifecycle, competitor, and
        timing evidence before commitment becomes emotional.
      </p>
    ),
  },
  sections: [
    {
      id: "hidden-bid-cost",
      title: "The Hidden Cost of Bidding",
      content: (
        <>
          <p className="article-body-text">
            Bid cost is more than the time spent drafting a response. It
            includes discovery, qualification, technical review, pricing,
            leadership approval, partner coordination, compliance checks, and
            opportunity cost.
          </p>
          <p className="article-body-text">
            When teams pursue weak-fit tenders, they do not only risk losing.
            They reduce the time available for opportunities where they have a
            stronger buyer fit, better differentiation, or a more realistic
            preparation window.
          </p>
        </>
      ),
    },
    {
      id: "expected-value",
      title: "Expected Value Thinking",
      content: (
        <>
          <p className="article-body-text">
            A practical bid/no-bid model asks whether the likely value of the
            opportunity justifies the cost of pursuit. That requires more than
            contract value. Teams need to consider win probability, strategic
            fit, delivery risk, incumbent strength, buyer history, and timing.
          </p>
          <p className="article-body-text">
            Procurement intelligence does not remove judgement. It improves the
            inputs so the decision is less dependent on optimism, urgency, or
            the visibility of a new notice.
          </p>
        </>
      ),
    },
    {
      id: "evidence-inputs",
      title: "Evidence Inputs",
      content: (
        <>
          <p className="article-body-text">
            Useful bid/no-bid evidence includes buyer recurrence, award history,
            incumbent footprint, competitor participation, contract lifecycle
            stage, pricing signals, and the remaining preparation window.
          </p>
          <p className="article-body-text">
            Teams should also ask whether they can build a credible response in
            time. A technically winnable opportunity can still be a poor bid if
            the preparation window is too compressed.
          </p>
        </>
      ),
    },
    {
      id: "decision-discipline",
      title: "Decision Discipline",
      content: (
        <>
          <p className="article-body-text">
            Strong bid teams use repeatable criteria. They make explicit trade
            offs, record why an opportunity was pursued or declined, and review
            outcomes so the process improves over time.
          </p>
          <p className="article-body-text">
            Civant supports this discipline by connecting live tenders with the
            wider market evidence behind them. See how this works on the{" "}
            <Link href="/platform" className="text-link">
              Platform page
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Give bid/no-bid decisions a stronger evidence base.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a bid/no-bid decision?",
      answer:
        "A bid/no-bid decision is the structured choice to pursue or decline a tender based on fit, value, competition, timing, capacity, and expected return.",
    },
    {
      question: "Why do bid/no-bid decisions matter?",
      answer:
        "They protect scarce bid resources. Pursuing too many weak-fit tenders reduces the time and attention available for opportunities with stronger win potential.",
    },
    {
      question: "How does procurement intelligence improve bid/no-bid decisions?",
      answer:
        "It adds evidence about buyer history, contract lifecycles, incumbent position, competitor behavior, timing, and signals so teams can qualify opportunities before committing effort.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams qualify opportunities with buyer, timing, competitor, and lifecycle evidence.",
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
