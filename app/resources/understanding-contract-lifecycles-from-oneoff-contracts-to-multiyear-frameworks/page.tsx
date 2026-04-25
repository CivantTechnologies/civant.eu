import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/understanding-contract-lifecycles-from-oneoff-contracts-to-multiyear-frameworks",
  title: "Understanding Contract Lifecycles: From One-Off Contracts to Multi-Year Frameworks",
  description:
    "A guide to public contract lifecycles, including one-off contracts, frameworks, DPS structures, extension options, renewal windows, and pipeline planning.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Contract lifecycles describe how public contracts move from award to delivery, extension, expiry, renewal, or replacement. One-off contracts create relatively clear future competition points, while multi-year frameworks can lock in supplier access for longer periods and make renewal timing critical.",
  intro: (
    <>
      <p className="article-body-text">
        Suppliers often treat tenders as isolated events, but public contracts
        have lifecycles. The form of the contract determines when the market may
        reopen, how difficult it is to enter, and how early a supplier needs to
        prepare.
      </p>
      <p className="article-body-text">
        Understanding lifecycles helps teams avoid two common mistakes: chasing
        opportunities before the market is ready and discovering an opportunity
        only after the buyer and incumbents have had months of preparation.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Structure",
      text: "One-off contracts, frameworks, and DPS models create different access and renewal patterns.",
    },
    {
      label: "Timing",
      text: "Award date, duration, extensions, and expiry windows shape future opportunity timing.",
    },
    {
      label: "Planning",
      text: "Lifecycle intelligence turns public procurement into a forward pipeline, not a notice feed.",
    },
  ],
  civantView: {
    title: "The contract lifecycle is the hidden calendar behind the tender market.",
    content: (
      <p>
        Every award creates a future question: what happens when this contract
        ends? Procurement intelligence turns that question into a planning
        rhythm for sales, bid, partner, and delivery teams.
      </p>
    ),
  },
  sections: [
    {
      id: "contract-forms",
      title: "Contract Forms",
      content: (
        <>
          <p className="article-body-text">
            One-off contracts usually have a defined scope and term. When they
            expire, the buyer may re-compete, extend, replace, or stop the
            requirement. The resulting opportunity window is often easier to map
            than a more complex purchasing vehicle.
          </p>
          <p className="article-body-text">
            Framework agreements pre-approve suppliers for future call-offs,
            often over multiple years. Dynamic purchasing systems can remain
            open to new suppliers while using competitions for specific
            call-offs. Each structure changes market access.
          </p>
        </>
      ),
    },
    {
      id: "lifecycle-signals",
      title: "Lifecycle Signals",
      content: (
        <>
          <p className="article-body-text">
            Useful lifecycle signals include award dates, published durations,
            extension options, modification notices, buyer minutes, procurement
            pipelines, budget papers, framework end dates, and prior information
            notices.
          </p>
          <p className="article-body-text">
            These signals rarely provide certainty on their own. Their value
            comes from being combined into a timeline that shows when the buyer
            may next make a sourcing decision.
          </p>
        </>
      ),
    },
    {
      id: "strategic-implications",
      title: "Strategic Implications",
      content: (
        <>
          <p className="article-body-text">
            A supplier targeting short-cycle one-off contracts needs fast
            qualification and delivery proof. A supplier targeting frameworks
            needs earlier preparation, because missing the access window can
            delay entry for years.
          </p>
          <p className="article-body-text">
            Lifecycle awareness also improves bid/no-bid discipline. A live
            notice may look attractive, but if the contract is a call-off under
            a framework the supplier is not on, the realistic strategy may be
            preparing for the next framework renewal instead.
          </p>
        </>
      ),
    },
    {
      id: "pipeline-routine",
      title: "Pipeline Routine",
      content: (
        <>
          <p className="article-body-text">
            Procurement intelligence converts lifecycle data into a pipeline
            routine: track awards, estimate renewal windows, monitor extensions,
            rank fit, identify incumbent context, and prepare the right evidence
            before the market reopens.
          </p>
          <p className="article-body-text">
            That routine helps teams move from reactive tender hunting to
            proactive account and category planning.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Use contract lifecycles to forecast the next procurement window.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a public contract lifecycle?",
      answer:
        "It is the progression of a public contract from award through delivery, extension, expiry, renewal, replacement, or re-procurement.",
    },
    {
      question: "How are one-off contracts different from frameworks?",
      answer:
        "One-off contracts usually create a clearer end point for future competition. Frameworks create a panel of suppliers for future call-offs and may limit access until the framework is renewed.",
    },
    {
      question: "Why do contract lifecycles matter for suppliers?",
      answer:
        "They help suppliers forecast when demand may return to market, prepare earlier, qualify opportunities, and avoid wasting effort where market access is currently closed.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "tedEforms",
    "europeanCommissionEforms",
    "ukProcurementActGuidance",
  ]),
  relatedSolution: {
    solutionSlug: "contract-renewal-tracking",
    linkLabel: "Explore contract renewal tracking",
    children:
      "See how Civant maps contract lifecycles, extension evidence, and renewal windows into earlier opportunity intelligence.",
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
