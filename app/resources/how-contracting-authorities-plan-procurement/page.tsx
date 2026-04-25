import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/how-contracting-authorities-plan-procurement",
  title: "How Contracting Authorities Plan Procurement",
  description:
    "Learn how contracting authorities plan public procurement through budgets, strategies, approvals, market engagement, and procurement calendars.",
  publishedAt: "2026-04-09T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Contracting authorities plan procurement through strategy, budgets, approvals, stakeholder requirements, market engagement, and procurement calendars. These planning steps can leave public signals before a formal tender notice is published.",
  intro: (
    <>
      <p className="article-body-text">
        Public buyers do not usually wake up and publish a tender without prior
        planning. Procurement reflects budgets, service needs, policy
        priorities, operational constraints, and internal approvals.
      </p>
      <p className="article-body-text">
        Suppliers that understand this planning process can identify demand
        earlier and prepare before the market sees the formal notice.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Planning",
      text: "Procurement often begins with strategy, budget, approval, and requirement definition.",
    },
    {
      label: "Signals",
      text: "Plans, minutes, budgets, PINs, and consultations can show procurement intent early.",
    },
    {
      label: "Forecast",
      text: "Planning signals are strongest when they align with contract lifecycle evidence.",
    },
  ],
  civantView: {
    title: "Buyer planning is one of the earliest procurement signal layers.",
    content: (
      <p>
        Civant connects procurement plans, public documents, budget movement,
        and contract lifecycle timing to help teams see when buyer intent is
        forming.
      </p>
    ),
  },
  sections: [
    {
      id: "procurement-calendars",
      title: "Procurement Calendars",
      content: (
        <>
          <p className="article-body-text">
            Many authorities plan procurement around annual budgets, governance
            meetings, departmental requirements, and service deadlines. Larger
            projects may appear in multi-year strategies before a tender exists.
          </p>
          <p className="article-body-text">
            A procurement calendar helps suppliers understand when decisions
            are likely to move from planning to market engagement and formal
            publication.
          </p>
        </>
      ),
    },
    {
      id: "forecasting-patterns",
      title: "Forecasting Patterns",
      content: (
        <>
          <p className="article-body-text">
            Planning signals become more useful when combined with historical
            buyer behavior. If a buyer regularly publishes plans, uses PINs, or
            consults the market, those habits can improve forecast confidence.
          </p>
          <p className="article-body-text">
            If the same buyer has an expiring contract in the category, the
            planning signal becomes stronger.
          </p>
        </>
      ),
    },
    {
      id: "planning-visibility",
      title: "Planning Visibility",
      content: (
        <>
          <p className="article-body-text">
            Planning visibility varies. Some buyers publish detailed forward
            plans, while others reveal intent only through scattered meeting
            papers, budget decisions, or informal market engagement.
          </p>
          <p className="article-body-text">
            That variation is why suppliers need structured monitoring across
            more than formal tender notices.
          </p>
        </>
      ),
    },
    {
      id: "buyer-schedules",
      title: "Buyer Schedules",
      content: (
        <>
          <p className="article-body-text">
            The most useful buyer schedules connect planned requirements with
            timing, budget, authority ownership, and the current contract
            position.
          </p>
          <p className="article-body-text">
            Suppliers can use that context to decide when to engage, when to
            monitor, and when to prepare a pursuit.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Read buyer planning before the formal notice appears.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "How do contracting authorities plan procurement?",
      answer:
        "They plan through strategy, budgets, departmental requirements, approvals, market engagement, procurement calendars, and formal notice preparation.",
    },
    {
      question: "Which planning documents matter to suppliers?",
      answer:
        "Useful documents include procurement plans, budget papers, meeting minutes, strategy documents, PINs, planned procurement notices, and market consultation materials.",
    },
    {
      question: "How can buyer planning improve tender forecasting?",
      answer:
        "Planning signals improve forecasts when they align with buyer history, contract lifecycle timing, funding evidence, and category recurrence.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "eurLexDirective201424",
    "ukProcurementActGuidance",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "tender-prediction-software",
    linkLabel: "Explore tender forecasting software",
    children:
      "See how Civant connects buyer planning signals with lifecycle and historical procurement evidence.",
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
