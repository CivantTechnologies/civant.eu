import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/public-procurement-cycles",
  title: "Public Procurement Cycles",
  description:
    "Understand how public procurement cycles create repeatable opportunity rhythms through planning, publication, award, delivery, review, renewal, and retender windows.",
  publishedAt: "2026-03-22T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-18T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "A public procurement cycle is the recurring sequence through which a buyer plans, publishes, awards, manages, reviews, renews, or retenders a public contract. Suppliers that understand these cycles can prepare around likely demand windows instead of waiting for each notice to appear.",
  intro: (
    <>
      <p className="article-body-text">
        Public-sector buying is not random. Many contracts move through
        recognizable cycles shaped by budgets, policy priorities, contract
        duration, framework rules, supplier performance, and recurring service
        needs.
      </p>
      <p className="article-body-text">
        Understanding those cycles helps suppliers identify which buyers and
        categories deserve attention before a formal tender is published.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-public-procurement-cycles.svg",
    alt: "Civant visual timeline of public procurement cycles from need and planning through tender, award, review, and renewal",
    caption:
      "Public procurement cycles create early preparation windows before the market sees a formal notice.",
  },
  takeaways: [
    {
      label: "Rhythm",
      text: "Planning, award, delivery, review, and renewal create repeatable timing patterns.",
    },
    {
      label: "Evidence",
      text: "Cycles are read from notices, awards, durations, extensions, frameworks, and buyer behavior.",
    },
    {
      label: "Action",
      text: "Cycle intelligence helps teams sequence account work, partner strategy, and bid/no-bid decisions.",
    },
  ],
  civantView: {
    title: "Cycle awareness turns public procurement from alerts into planning.",
    content: (
      <p>
        A cycle is not a guarantee, but it is a strong organizing principle. It
        gives commercial teams a way to decide where to look, when to prepare,
        and what evidence should raise or lower confidence.
      </p>
    ),
  },
  sections: [
    {
      id: "cycle-structure",
      title: "Cycle Structure",
      content: (
        <>
          <p className="article-body-text">
            A typical public procurement cycle includes planning, market
            engagement, tender publication, evaluation, award, contract
            delivery, review, and either renewal or replacement. Not every buyer
            follows the same path, but the broad rhythm is repeatable.
          </p>
          <p className="article-body-text">
            Contract duration is one of the clearest starting points. A
            four-year framework, an annual service contract, or a multi-year
            technology agreement all imply different preparation horizons.
          </p>
        </>
      ),
    },
    {
      id: "signals-inside-the-cycle",
      title: "Signals Inside the Cycle",
      content: (
        <>
          <p className="article-body-text">
            Useful cycle signals include award dates, contract terms, extension
            notices, renewal behavior, category recurrence, buyer plans, PINs,
            and budget movement. Each signal adds context to the timing picture.
          </p>
          <p className="article-body-text">
            The strongest view comes from combining lifecycle evidence with
            buyer behavior. If a buyer repeatedly retenders a category on a
            predictable cadence, that pattern can guide earlier account focus.
          </p>
        </>
      ),
    },
    {
      id: "supplier-advantage",
      title: "Supplier Advantage",
      content: (
        <>
          <p className="article-body-text">
            Cycle awareness gives suppliers more preparation time. Teams can
            decide whether to pursue a buyer, identify likely competitors, map
            partner needs, and begin internal planning before the live tender
            window compresses everything.
          </p>
          <p className="article-body-text">
            This does not replace tender monitoring. It makes monitoring more
            useful by giving teams a reason to care about some notices more than
            others.
          </p>
        </>
      ),
    },
    {
      id: "cycle-intelligence",
      title: "Cycle Intelligence",
      content: (
        <>
          <p className="article-body-text">
            Civant reads procurement cycles as part of a broader evidence model:
            awards, lifecycles, buyer recurrence, competitor participation, and
            external signals all contribute to opportunity timing.
          </p>
          <p className="article-body-text">
            Learn more about the workflow on the{" "}
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
    title: "Use procurement cycles to prepare before the tender window.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a public procurement cycle?",
      answer:
        "A public procurement cycle is the recurring sequence through which a buyer plans, publishes, awards, manages, reviews, renews, or retenders a public contract.",
    },
    {
      question: "Why do procurement cycles matter to suppliers?",
      answer:
        "They matter because contract duration, buyer cadence, renewal behavior, and category timing can reveal when a future opportunity may deserve preparation before the formal tender appears.",
    },
    {
      question: "Can procurement cycles predict every tender?",
      answer:
        "No. Procurement cycles are evidence inputs, not guarantees. They become more useful when combined with buyer history, award outcomes, external signals, and participation behavior.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanParliamentPublicProcurement",
    "tedEforms",
    "europeanCommissionEforms",
  ]),
  relatedSolution: {
    solutionSlug: "tender-prediction-software",
    linkLabel: "Explore tender forecasting software",
    children:
      "See how Civant uses lifecycle and buyer-cycle evidence to support earlier opportunity planning.",
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
