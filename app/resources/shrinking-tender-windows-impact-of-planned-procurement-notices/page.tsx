import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices",
  title: "Shrinking Tender Windows: Impact of Planned Procurement Notices",
  description:
    "Understand how planned procurement notices can shift preparation earlier and create shorter formal tender windows for suppliers who miss early signals.",
  publishedAt: "2026-04-05T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Planned procurement notices can move preparation earlier. When suppliers see and act on them, they gain time before the formal tender. When they miss them, the later contract notice can feel compressed because better-prepared competitors have already started.",
  intro: (
    <>
      <p className="article-body-text">
        Planned procurement notices are designed to give the market earlier
        visibility. They can help authorities communicate future procurement
        activity before the formal tender process begins.
      </p>
      <p className="article-body-text">
        For suppliers, the warning is simple: early notices only help if they
        are monitored and translated into preparation.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Shift",
      text: "Planned notices shift useful preparation earlier in the procurement timeline.",
    },
    {
      label: "Pressure",
      text: "Suppliers who ignore early notices may face a compressed formal response period.",
    },
    {
      label: "Readiness",
      text: "Bid teams need alerting, qualification, and internal readiness before the contract notice lands.",
    },
  ],
  civantView: {
    title: "A shortened tender window is only a surprise if the early signal was missed.",
    content: (
      <p>
        Civant treats planned notices as timing evidence. They help teams decide
        when to start qualification, build readiness, and prepare before the
        formal deadline becomes urgent.
      </p>
    ),
  },
  sections: [
    {
      id: "speed-becomes-critical",
      title: "Speed Becomes Critical",
      content: (
        <>
          <p className="article-body-text">
            A planned procurement notice can include subject matter, estimated
            timing, and related engagement information. That makes it a useful
            trigger for early qualification.
          </p>
          <p className="article-body-text">
            Suppliers that wait for the later contract notice may have less
            practical time to prepare than competitors who acted on the earlier
            signal.
          </p>
        </>
      ),
    },
    {
      id: "window-shortens",
      title: "The Window Shortens",
      content: (
        <>
          <p className="article-body-text">
            The formal tender window is only one part of the preparation
            timeline. If the authority has already signalled intent, the market
            may reasonably expect suppliers to be more prepared when the tender
            opens.
          </p>
          <p className="article-body-text">
            This makes early monitoring a competitive necessity, especially for
            complex bids.
          </p>
        </>
      ),
    },
    {
      id: "racing-clock",
      title: "Racing the Clock",
      content: (
        <>
          <p className="article-body-text">
            Suppliers need a readiness workflow: identify the signal, qualify
            the buyer, assess fit, flag internal stakeholders, and prepare the
            assets likely to be needed if the tender appears.
          </p>
          <p className="article-body-text">
            This reduces stress and improves bid quality when the formal
            deadline arrives.
          </p>
        </>
      ),
    },
    {
      id: "acceleration-pressure",
      title: "Acceleration Pressure",
      content: (
        <>
          <p className="article-body-text">
            Planned notices reward teams that treat early visibility as part of
            bid operations. They penalise teams that only react to live tender
            notices.
          </p>
          <p className="article-body-text">
            Procurement intelligence should connect planned notices with buyer
            history, lifecycle timing, and internal bid planning.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Prepare from the planned notice, not the deadline.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a planned procurement notice?",
      answer:
        "A planned procurement notice is an early notice that signals a contracting authority's intention to run a future procurement.",
    },
    {
      question: "Why can planned notices shorten practical tender windows?",
      answer:
        "They move useful preparation earlier. Suppliers that ignore them may only start when the formal notice appears, while competitors may already be prepared.",
    },
    {
      question: "How should suppliers respond to planned procurement notices?",
      answer:
        "They should qualify the buyer, assess strategic fit, monitor expected timing, prepare core evidence, and decide whether early engagement or partner planning is needed.",
    },
  ],
  sources: getArticleSources([
    "ukProcurementActGuidance",
    "ukProcurementAct2023",
    "eurLexDirective201424",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "tender-prediction-software",
    linkLabel: "Explore tender forecasting software",
    children:
      "See how Civant connects early notices with timing forecasts and bid preparation workflows.",
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
