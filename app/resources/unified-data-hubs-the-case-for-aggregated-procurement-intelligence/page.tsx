import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/unified-data-hubs-the-case-for-aggregated-procurement-intelligence",
  title: "Unified Data Hubs: The Case for Aggregated Procurement Intelligence",
  description:
    "See why unified procurement data hubs matter for suppliers dealing with fragmented tender portals, inconsistent data, and cross-market intelligence needs.",
  publishedAt: "2026-04-11T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Unified procurement data hubs aggregate tenders, awards, notices, buyer records, and public signals from fragmented sources into one normalised workflow. They reduce discovery cost and make strategic market intelligence possible.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement data is scattered across many systems. Suppliers can
        spend more time finding and cleaning information than using it to make
        better market decisions.
      </p>
      <p className="article-body-text">
        A unified data hub changes the starting point: instead of searching
        many portals, teams work from a consolidated, structured market view.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Aggregation",
      text: "Unified hubs collect procurement records from multiple official and local sources.",
    },
    {
      label: "Normalisation",
      text: "The value comes from cleaning, deduplication, entity matching, and comparable fields.",
    },
    {
      label: "Intelligence",
      text: "A hub becomes strategic when it connects notices, awards, lifecycles, and signals.",
    },
  ],
  civantView: {
    title: "A unified hub is the base layer for procurement intelligence.",
    content: (
      <p>
        Civant combines procurement records, awards, lifecycle evidence, and
        external signals so suppliers can move from scattered alerts to a
        structured view of market movement.
      </p>
    ),
  },
  sections: [
    {
      id: "why-aggregation-matters",
      title: "Why Aggregation Matters",
      content: (
        <>
          <p className="article-body-text">
            Fragmented sources increase the cost of tender discovery. Teams
            must check many portals, reconcile duplicate records, interpret
            inconsistent fields, and decide which signals matter.
          </p>
          <p className="article-body-text">
            Aggregation brings those sources together so suppliers can spend
            more time qualifying and preparing, not hunting for records.
          </p>
        </>
      ),
    },
    {
      id: "breaking-down-silos",
      title: "Breaking Down Silos",
      content: (
        <>
          <p className="article-body-text">
            A useful data hub connects TED, national portals, regional sources,
            buyer websites, award records, modification notices, and early
            public signals where available.
          </p>
          <p className="article-body-text">
            The hard work is making those records comparable through shared
            structures, source attribution, and entity resolution.
          </p>
        </>
      ),
    },
    {
      id: "unified-visibility",
      title: "Unified Visibility",
      content: (
        <>
          <p className="article-body-text">
            Unified visibility helps suppliers see buyer activity across time:
            planned work, live tenders, awards, renewals, extensions, and
            changes in market participation.
          </p>
          <p className="article-body-text">
            This is what turns procurement data into a strategic market map
            rather than a list of current notices.
          </p>
        </>
      ),
    },
    {
      id: "integrated-intelligence",
      title: "Integrated Intelligence Platform",
      content: (
        <>
          <p className="article-body-text">
            The strongest hubs add analytics on top of aggregated data:
            confidence scoring, renewal forecasting, buyer behavior, competitor
            context, and timing signals.
          </p>
          <p className="article-body-text">
            That integrated view supports better account planning, bid/no-bid
            decisions, and pipeline prioritisation.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Unify fragmented procurement data into a market view.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a unified procurement data hub?",
      answer:
        "It is a system that aggregates procurement notices, awards, buyer records, and related public signals from multiple sources into one structured workflow.",
    },
    {
      question: "Why do suppliers need procurement data hubs?",
      answer:
        "They reduce the cost of monitoring fragmented sources and make it easier to analyse buyer behavior, competition, lifecycle timing, and future opportunity signals.",
    },
    {
      question: "What makes a data hub strategic rather than just searchable?",
      answer:
        "Strategic value comes from normalisation, source attribution, entity matching, historical context, signal connection, forecasting, and decision support.",
    },
  ],
  sources: getArticleSources([
    "tedEforms",
    "europeanCommissionEforms",
    "europeanCommissionPublicProcurement",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "procurement-intelligence-software",
    linkLabel: "Explore procurement intelligence software",
    children:
      "See how Civant aggregates procurement records, buyer history, lifecycle signals, and market context in one workflow.",
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
