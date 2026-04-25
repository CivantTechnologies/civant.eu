import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/maximising-preparation-windows-how-long-before-tender-publication-should-suppliers-act",
  title: "Maximising Preparation Windows: How Long Before Tender Publication Should Suppliers Act?",
  description:
    "Learn how suppliers should use early procurement signals to phase preparation before tender publication without over-investing too soon.",
  publishedAt: "2026-04-04T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Suppliers should start light preparation when credible early signals appear, then increase commitment as evidence strengthens. The best preparation window is phased: monitor and qualify early, engage selectively, then commit full bid resources when timing, fit, and confidence align.",
  intro: (
    <>
      <p className="article-body-text">
        Starting too late creates rushed bids. Starting too early can waste time
        on opportunities that never materialise. Good preparation balances both
        risks.
      </p>
      <p className="article-body-text">
        The answer is not a fixed number of days. It is a staged process that
        responds to signal strength, buyer fit, contract timing, and commercial
        value.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Phase",
      text: "Begin with monitoring and qualification, then increase effort as evidence improves.",
    },
    {
      label: "Evidence",
      text: "PINs, plans, budgets, renewals, and consultations can extend preparation windows.",
    },
    {
      label: "Control",
      text: "Full bid commitment should wait until fit, timing, and confidence justify the cost.",
    },
  ],
  civantView: {
    title: "Preparation should scale with confidence.",
    content: (
      <p>
        Civant helps teams separate weak early movement from strong opportunity
        signals, so preparation can begin early without turning every hint into
        a full pursuit.
      </p>
    ),
  },
  sections: [
    {
      id: "preparation-timeline",
      title: "Preparation Timeline",
      content: (
        <>
          <p className="article-body-text">
            Early signals can appear through prior information notices, planned
            procurement notices, budgets, strategies, consultations, meeting
            minutes, or contract lifecycle evidence.
          </p>
          <p className="article-body-text">
            At this stage, suppliers should research the buyer, check fit, map
            likely stakeholders, and decide what evidence is missing.
          </p>
        </>
      ),
    },
    {
      id: "window-calculations",
      title: "Window Calculations",
      content: (
        <>
          <p className="article-body-text">
            The effective preparation window starts before the formal tender
            window. A supplier that waits for the contract notice may have only
            enough time to respond, not enough time to shape strategy.
          </p>
          <p className="article-body-text">
            Timing should be calculated from the first credible signal, not from
            publication day alone.
          </p>
        </>
      ),
    },
    {
      id: "preparation-strategy",
      title: "Preparation Strategy",
      content: (
        <>
          <p className="article-body-text">
            Preparation should move in stages: watch, qualify, engage, assemble
            evidence, validate partners, then commit full bid resources when the
            opportunity is real enough.
          </p>
          <p className="article-body-text">
            This reduces wasted effort while preserving the advantage of early
            awareness.
          </p>
        </>
      ),
    },
    {
      id: "time-based-advantage",
      title: "Time-Based Advantage",
      content: (
        <>
          <p className="article-body-text">
            The strongest preparation advantage comes from acting before the
            market is crowded. Early time can be used for buyer understanding,
            proposition development, pricing assumptions, and internal
            readiness.
          </p>
          <p className="article-body-text">
            That advantage is especially valuable in complex tenders where the
            formal deadline is too short to build a credible response from
            scratch.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Use evidence strength to time bid preparation.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "When should suppliers start preparing for a public tender?",
      answer:
        "Suppliers should begin light preparation when credible early signals appear, then increase effort as evidence strengthens and the likely tender window becomes clearer.",
    },
    {
      question: "What signals extend the preparation window?",
      answer:
        "Useful signals include PINs, planned procurement notices, budget approvals, meeting minutes, procurement plans, market consultations, contract expiries, and renewal activity.",
    },
    {
      question: "How can teams avoid wasting effort on early signals?",
      answer:
        "They should phase preparation by confidence level, starting with research and qualification before committing full bid resources.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "ukProcurementActGuidance",
    "tedEforms",
    "europeanCommissionPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "tender-prediction-software",
    linkLabel: "Explore tender forecasting software",
    children:
      "See how Civant helps teams estimate likely tender timing and scale preparation with confidence.",
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
