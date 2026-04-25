import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/reactive-bidding-vs-proactive-planning-the-timing-challenge",
  title: "Reactive Bidding vs Proactive Planning: The Timing Challenge",
  description:
    "Compare reactive bidding with proactive public procurement planning and learn why earlier visibility improves qualification, preparation, and bid quality.",
  publishedAt: "2026-04-07T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Reactive bidding starts when a tender notice appears. Proactive planning starts when credible signals show that demand may be forming. The timing difference affects qualification, partner selection, solution design, pricing, and bid quality.",
  intro: (
    <>
      <p className="article-body-text">
        Public tender deadlines often create urgency. But the buyer's need
        usually existed before the notice, and better-prepared competitors may
        have been watching the account for months.
      </p>
      <p className="article-body-text">
        The timing challenge is deciding how to move from late response to
        earlier, evidence-led planning without wasting effort.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Reactive",
      text: "Reactive bidding begins at notice publication, when time is already constrained.",
    },
    {
      label: "Proactive",
      text: "Proactive planning begins when signals justify monitoring, engagement, or preparation.",
    },
    {
      label: "Discipline",
      text: "The goal is not to prepare for everything; it is to prepare earlier for the right things.",
    },
  ],
  civantView: {
    title: "Proactive planning depends on credible early evidence.",
    content: (
      <p>
        Civant helps teams identify buyer movement before tender publication,
        then qualify which signals deserve action and which should remain on
        watch.
      </p>
    ),
  },
  sections: [
    {
      id: "reactive-costs",
      title: "Reactive Costs",
      content: (
        <>
          <p className="article-body-text">
            Reactive bids often require teams to interpret requirements, secure
            approvals, align delivery, find partners, price the solution, and
            write the response under deadline pressure.
          </p>
          <p className="article-body-text">
            That pressure increases the risk of generic answers, weak
            differentiation, and poor bid/no-bid decisions.
          </p>
        </>
      ),
    },
    {
      id: "late-stage-discovery",
      title: "Late-Stage Discovery",
      content: (
        <>
          <p className="article-body-text">
            Late discovery is especially damaging when the opportunity is
            complex. The supplier may be technically capable, but not prepared
            enough to prove it by the deadline.
          </p>
          <p className="article-body-text">
            Early signals can reduce this gap by giving teams time to research
            the buyer and build the evidence base.
          </p>
        </>
      ),
    },
    {
      id: "preparation-pressure",
      title: "Preparation Pressure",
      content: (
        <>
          <p className="article-body-text">
            Proactive planning does not mean writing full bids before tenders
            exist. It means building readiness in stages: account knowledge,
            qualification, positioning, partner options, and reusable evidence.
          </p>
          <p className="article-body-text">
            This helps teams move faster when the notice appears without
            sacrificing quality.
          </p>
        </>
      ),
    },
    {
      id: "response-speed",
      title: "Response Speed",
      content: (
        <>
          <p className="article-body-text">
            The best response speed comes from preparation, not rushing. Teams
            with better buyer context and clearer qualification can make faster,
            calmer decisions.
          </p>
          <p className="article-body-text">
            Procurement intelligence supports that shift by connecting early
            signals, lifecycle data, and competitor context.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Move bid planning earlier without losing discipline.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is reactive bidding?",
      answer:
        "Reactive bidding is when a supplier begins serious qualification and preparation only after a formal tender notice is published.",
    },
    {
      question: "What is proactive procurement planning?",
      answer:
        "Proactive planning uses early signals, buyer history, lifecycle timing, and market context to prepare before the formal tender window opens.",
    },
    {
      question: "How can suppliers become more proactive?",
      answer:
        "They can monitor early signals, track contract lifecycles, qualify opportunities in stages, maintain reusable bid assets, and commit full resources only when evidence justifies it.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "eurLexDirective201424",
    "tedEforms",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams move from late tender response to earlier buyer and market planning.",
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
