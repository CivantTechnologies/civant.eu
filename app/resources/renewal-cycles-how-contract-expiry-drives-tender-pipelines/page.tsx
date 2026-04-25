import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines",
  title: "Renewal Cycles: How Contract Expiry Drives Tender Pipelines",
  description:
    "A guide to using contract expiry, extension options, award history, and buyer lifecycle evidence to forecast future public-sector tender pipelines.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Renewal cycles drive tender pipelines because public contracts eventually expire, extend, or return to competition. By tracking award dates, contract durations, extension options, and buyer decisions, suppliers can forecast likely re-procurement windows and prepare before formal notices appear.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement has a lifecycle. Contracts are awarded, delivered,
        reviewed, extended, replaced, or re-competed. Published tender notices
        are only one visible moment in that longer cycle.
      </p>
      <p className="article-body-text">
        Suppliers that track expiry patterns can build a more reliable pipeline
        than teams relying only on live notices. The point is not to predict
        every tender perfectly. It is to create enough visibility to prepare
        earlier and choose pursuits more intelligently.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-renewal-cycles.svg",
    alt: "Civant visual showing contract renewal cycles turning award data and expiry timing into future tender pipeline opportunities",
    caption:
      "Renewal cycles translate contract expiry evidence into a forward-looking pipeline.",
  },
  takeaways: [
    {
      label: "Expiry",
      text: "Contract end dates and extension windows are early indicators of future demand.",
    },
    {
      label: "Cycles",
      text: "Categories and buyers often follow repeatable procurement rhythms.",
    },
    {
      label: "Pipeline",
      text: "Lifecycle evidence supports account planning before a tender notice appears.",
    },
  ],
  civantView: {
    title: "The pipeline starts at award, not publication.",
    content: (
      <p>
        Every award creates a future lifecycle question: will the buyer extend,
        replace, consolidate, or change direction? Reading that question early is
        the foundation of renewal-based procurement intelligence.
      </p>
    ),
  },
  sections: [
    {
      id: "expiry-evidence",
      title: "Expiry Evidence",
      content: (
        <>
          <p className="article-body-text">
            Renewal intelligence begins with basic contract facts: award date,
            duration, value, buyer, supplier, category, framework status,
            extension clauses, and any subsequent modification or extension
            evidence.
          </p>
          <p className="article-body-text">
            Those facts create an expected opportunity window. The window should
            then be refined with buyer documents, budget decisions, performance
            context, policy changes, and signals of changing demand.
          </p>
        </>
      ),
    },
    {
      id: "category-rhythms",
      title: "Category Rhythms",
      content: (
        <>
          <p className="article-body-text">
            Different categories renew at different speeds. Technology,
            facilities, professional services, transport, construction, and
            social services often use different contract lengths, framework
            structures, and extension habits.
          </p>
          <p className="article-body-text">
            A supplier that understands category rhythm can time research,
            partner conversations, reference building, and buyer engagement more
            effectively than a team waiting for publication.
          </p>
        </>
      ),
    },
    {
      id: "pipeline-planning",
      title: "Pipeline Planning",
      content: (
        <>
          <p className="article-body-text">
            Renewal cycles turn public procurement into a planning problem. A
            team can map likely future competitions, rank them by fit, decide
            which accounts need attention, and build delivery evidence before
            the formal response clock starts.
          </p>
          <p className="article-body-text">
            This also supports capacity planning. If several relevant contracts
            may re-compete in the same quarter, the team can prepare earlier or
            decide which ones deserve priority.
          </p>
        </>
      ),
    },
    {
      id: "forecasting-limits",
      title: "Forecasting Limits",
      content: (
        <>
          <p className="article-body-text">
            Renewal forecasting is probabilistic. Buyers can extend, cancel,
            consolidate, insource, change procedure, or re-scope the need. A
            strong intelligence process therefore records confidence and keeps
            assumptions visible.
          </p>
          <p className="article-body-text">
            The goal is earlier and better preparation, not false certainty.
            Good renewal intelligence helps teams prepare where evidence is
            strong and pause where the signal is weak.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Build your pipeline from contract lifecycles, not only live notices.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "How do contract expiries create tender pipelines?",
      answer:
        "When a public contract approaches the end of its term, the buyer must decide whether to extend, replace, or re-compete the requirement, creating a future opportunity window.",
    },
    {
      question: "What data is needed for renewal-cycle tracking?",
      answer:
        "Useful data includes award dates, contract durations, supplier names, buyer details, category, values, extension options, modifications, and buyer planning documents.",
    },
    {
      question: "Can renewal cycles predict every tender?",
      answer:
        "No. They provide evidence-based preparation windows, not certainty. Buyers can extend, cancel, consolidate, or change requirements.",
    },
  ],
  sources: getArticleSources([
    "tedEforms",
    "eurLexDirective201424",
    "europeanCommissionEforms",
    "ukProcurementActGuidance",
  ]),
  relatedSolution: {
    solutionSlug: "contract-renewal-tracking",
    linkLabel: "Explore contract renewal tracking",
    children:
      "Use Civant to track contract lifecycles, renewal windows, and expiry-based pipeline signals before opportunities become live tenders.",
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
