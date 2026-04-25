import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/understanding-procurement-thresholds-in-the-eu",
  title: "Understanding Procurement Thresholds in the EU",
  description:
    "Understand how EU public procurement thresholds affect notice publication, procedure choice, market visibility, and supplier opportunity strategy.",
  publishedAt: "2026-03-27T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "EU procurement thresholds determine when certain public contracts must follow EU-level procurement rules and publication requirements. They affect market visibility, procedure choice, supplier competition, and whether opportunities appear in central notice systems or remain harder to discover locally.",
  intro: (
    <>
      <p className="article-body-text">
        Procurement thresholds are not just compliance details. They shape which
        opportunities are visible, which procedures buyers use, and how much
        preparation time suppliers are likely to get.
      </p>
      <p className="article-body-text">
        Because thresholds are updated periodically, suppliers should rely on
        official current sources for exact values and use intelligence workflows
        to understand how threshold boundaries affect real market behavior.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Rules",
      text: "Thresholds determine when EU-level procurement rules and publication obligations apply.",
    },
    {
      label: "Visibility",
      text: "Above-threshold opportunities are generally easier to monitor than fragmented below-threshold activity.",
    },
    {
      label: "Strategy",
      text: "Suppliers need different discovery and relationship strategies above and below threshold.",
    },
  ],
  civantView: {
    title: "Thresholds shape where procurement intelligence must look.",
    content: (
      <p>
        Civant treats threshold context as part of market visibility. A
        supplier looking only at central above-threshold notices may miss local
        or below-threshold movement that still matters commercially.
      </p>
    ),
  },
  sections: [
    {
      id: "value-limits",
      title: "Value Limits Matter",
      content: (
        <>
          <p className="article-body-text">
            EU thresholds create procedural boundaries. Above those boundaries,
            buyers must follow the relevant rules and publication requirements.
            Below them, national and local rules often play a larger role.
          </p>
          <p className="article-body-text">
            The practical effect is visibility. Above-threshold procurement is
            more likely to appear in central systems, while below-threshold
            activity can be scattered across local portals and buyer websites.
          </p>
        </>
      ),
    },
    {
      id: "procedure-triggers",
      title: "Procedure Triggers",
      content: (
        <>
          <p className="article-body-text">
            Thresholds influence procurement planning, notice publication,
            timescales, and procedure choice. They can also affect whether
            suppliers outside the buyer's local market become aware of an
            opportunity in time to compete.
          </p>
          <p className="article-body-text">
            Suppliers should avoid treating threshold status as a simple good
            or bad signal. Below-threshold work may be smaller and less visible,
            but it can still be strategically attractive.
          </p>
        </>
      ),
    },
    {
      id: "regulatory-boundaries",
      title: "Regulatory Boundaries",
      content: (
        <>
          <p className="article-body-text">
            Thresholds are periodically revised, and values vary by contract
            type and authority type. Exact current values should be checked
            against the European Commission's official threshold page.
          </p>
          <p className="article-body-text">
            This is especially important for teams writing guidance, building
            pipeline rules, or qualifying opportunities across more than one
            country.
          </p>
        </>
      ),
    },
    {
      id: "threshold-strategy",
      title: "Threshold Strategy",
      content: (
        <>
          <p className="article-body-text">
            Above-threshold strategy relies on structured notice monitoring,
            competitive analysis, and early preparation. Below-threshold
            strategy often requires more local intelligence, buyer familiarity,
            and relationship-building.
          </p>
          <p className="article-body-text">
            Procurement intelligence should help teams see both layers, because
            commercial opportunity does not stop at a publication threshold.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Map opportunity visibility above and below threshold.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What are EU procurement thresholds?",
      answer:
        "EU procurement thresholds are monetary limits that determine when certain public contracts must follow EU-level procurement rules and publication obligations.",
    },
    {
      question: "Why do thresholds matter to suppliers?",
      answer:
        "They affect visibility, procedure choice, competition, timelines, and whether opportunities are published through central EU-level systems or are harder to find locally.",
    },
    {
      question: "Where should suppliers check current threshold values?",
      answer:
        "Suppliers should check the European Commission's official public procurement thresholds page, because threshold values are periodically revised.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionThresholds",
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant helps teams monitor EU-level notices and fragmented local procurement signals together.",
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
