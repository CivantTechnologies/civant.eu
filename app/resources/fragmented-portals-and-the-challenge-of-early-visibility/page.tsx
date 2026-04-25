import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/fragmented-portals-and-the-challenge-of-early-visibility",
  title: "Fragmented Portals and the Challenge of Early Visibility",
  description:
    "Learn why fragmented procurement portals delay tender discovery and how aggregated intelligence improves early visibility across European public markets.",
  publishedAt: "2026-04-03T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Fragmented procurement portals make early visibility difficult because opportunities, awards, plans, and local notices are scattered across national, regional, and sector-specific systems. Aggregated procurement intelligence reduces discovery gaps by normalising sources into one workflow.",
  intro: (
    <>
      <p className="article-body-text">
        European procurement is governed by common principles, but publication
        still happens through many systems. TED, national platforms, regional
        portals, sector sites, and buyer websites all hold different pieces of
        the market.
      </p>
      <p className="article-body-text">
        For suppliers, the problem is not only finding live tenders. It is
        seeing relevant demand early enough to prepare before a deadline
        compresses the buying window.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Coverage",
      text: "No single portal gives a complete view of every useful public procurement signal.",
    },
    {
      label: "Timing",
      text: "Fragmented discovery often means suppliers see opportunities too late.",
    },
    {
      label: "Solution",
      text: "Aggregation and normalisation turn scattered notices into a usable market workflow.",
    },
  ],
  civantView: {
    title: "Fragmentation is a timing problem, not only a search problem.",
    content: (
      <p>
        Civant brings notices, awards, buyer history, and lifecycle signals into
        one workflow so teams can identify relevant opportunities earlier and
        avoid relying on isolated portal alerts.
      </p>
    ),
  },
  sections: [
    {
      id: "portal-fragmentation",
      title: "Portal Fragmentation",
      content: (
        <>
          <p className="article-body-text">
            Suppliers selling across regions often need to monitor multiple
            systems with different search logic, registration rules, language
            coverage, alert settings, and data formats.
          </p>
          <p className="article-body-text">
            That fragmentation raises discovery cost and makes it easier to
            miss opportunities that fit the supplier's market.
          </p>
        </>
      ),
    },
    {
      id: "visibility-challenge",
      title: "Visibility Challenge",
      content: (
        <>
          <p className="article-body-text">
            TED improves visibility for above-threshold procurement, but many
            useful signals still appear outside central EU notice flows. Local
            plans, lower-value tenders, early notices, and buyer documents can
            remain scattered.
          </p>
          <p className="article-body-text">
            Smaller teams feel this most sharply because they rarely have the
            capacity to check every relevant portal every day.
          </p>
        </>
      ),
    },
    {
      id: "data-aggregation",
      title: "Data Aggregation",
      content: (
        <>
          <p className="article-body-text">
            Aggregation reduces the manual burden of monitoring. But useful
            aggregation must do more than collect links. It needs to clean,
            deduplicate, normalise, classify, and connect records over time.
          </p>
          <p className="article-body-text">
            The goal is a searchable market view that supports qualification,
            not a larger pile of unstructured alerts.
          </p>
        </>
      ),
    },
    {
      id: "market-transparency",
      title: "Market Transparency",
      content: (
        <>
          <p className="article-body-text">
            Better visibility can improve competition by helping more qualified
            suppliers discover opportunities in time to assess and prepare.
          </p>
          <p className="article-body-text">
            For suppliers, the practical advantage is earlier signal detection,
            stronger pipeline planning, and less dependence on late-stage tender
            alerts.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Reduce discovery gaps across fragmented procurement sources.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Why are procurement portals fragmented?",
      answer:
        "Procurement is published through a mix of EU, national, regional, sector-specific, and buyer-level systems, each with different coverage and data structure.",
    },
    {
      question: "How does portal fragmentation affect suppliers?",
      answer:
        "It increases monitoring effort, creates blind spots, delays discovery, and can leave suppliers with too little time to prepare competitive bids.",
    },
    {
      question: "How do unified procurement tools help?",
      answer:
        "They aggregate, normalise, deduplicate, and connect records from multiple sources so suppliers can search and qualify opportunities from one workflow.",
    },
  ],
  sources: getArticleSources([
    "tedEforms",
    "europeanCommissionEforms",
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant brings national sources, TED-linked context, awards, and lifecycle signals into one European monitoring workflow.",
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
