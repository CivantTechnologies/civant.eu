import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/building-a-procurement-intelligence-function",
  title: "Building a Procurement Intelligence Function",
  description:
    "Learn how teams can build a procurement intelligence function around data sources, roles, workflows, governance, decision integration, and measurable outcomes.",
  publishedAt: "2026-04-04T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-20T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "A procurement intelligence function turns public procurement evidence into repeatable decisions. It needs clear sources, analytical ownership, decision workflows, governance, and feedback loops so intelligence changes account focus, partner strategy, and bid/no-bid discipline rather than becoming unused research.",
  intro: (
    <>
      <p className="article-body-text">
        Procurement intelligence becomes valuable when it changes decisions.
        That requires more than data access or a dashboard. Teams need an
        operating function that collects evidence, interprets it, routes it, and
        learns from outcomes.
      </p>
      <p className="article-body-text">
        The right structure depends on company size and market complexity, but
        the core disciplines are consistent.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-intelligence-function.svg",
    alt: "Civant operating system visual showing data, signals, scoring, workflow, and learning feeding account focus and bid decisions",
    caption:
      "A procurement intelligence function connects evidence layers to repeatable commercial decisions.",
  },
  takeaways: [
    {
      label: "Scope",
      text: "The function should define which markets, buyers, categories, and signals it is responsible for monitoring.",
    },
    {
      label: "Workflow",
      text: "Intelligence must feed account planning, bid/no-bid decisions, leadership briefings, and partner strategy.",
    },
    {
      label: "Learning",
      text: "Outcomes should be reviewed so signal quality, qualification criteria, and pursuit discipline improve over time.",
    },
  ],
  civantView: {
    title: "A procurement intelligence function is a decision system.",
    content: (
      <p>
        The goal is not to produce more market commentary. The goal is to help
        teams decide where to focus, when to prepare, who to involve, and which
        opportunities should be declined.
      </p>
    ),
  },
  sections: [
    {
      id: "define-the-mission",
      title: "Define the Mission",
      content: (
        <>
          <p className="article-body-text">
            The first step is deciding what the function is for. Some teams need
            earlier opportunity visibility. Others need better bid/no-bid
            discipline, competitor context, market-entry planning, or leadership
            reporting.
          </p>
          <p className="article-body-text">
            A clear mission prevents the function from becoming a general
            research desk. It also clarifies which signals matter and which
            outputs should be produced.
          </p>
        </>
      ),
    },
    {
      id: "build-the-evidence-base",
      title: "Build the Evidence Base",
      content: (
        <>
          <p className="article-body-text">
            Useful evidence includes tender and award history, buyer recurrence,
            contract lifecycles, competitor participation, frameworks, pricing
            context, PINs, budgets, grants, plans, hiring, and policy movement.
          </p>
          <p className="article-body-text">
            The function should separate source collection from interpretation.
            Raw data is not intelligence until it is normalized, connected, and
            translated into a decision.
          </p>
        </>
      ),
    },
    {
      id: "design-the-workflow",
      title: "Design the Workflow",
      content: (
        <>
          <p className="article-body-text">
            Procurement intelligence should enter regular workflows: account
            planning, pipeline reviews, leadership briefings, partner selection,
            pursuit qualification, and post-outcome reviews.
          </p>
          <p className="article-body-text">
            Without workflow integration, intelligence becomes interesting but
            optional. The function needs clear moments where evidence is used to
            make or change decisions.
          </p>
        </>
      ),
    },
    {
      id: "measure-improvement",
      title: "Measure Improvement",
      content: (
        <>
          <p className="article-body-text">
            Useful measures include win-rate movement, bid/no-bid quality,
            avoided low-fit bids, earlier account engagement, partner readiness,
            and forecast-to-outcome learning.
          </p>
          <p className="article-body-text">
            Civant is designed to support this evidence loop. Explore the
            platform workflow on the{" "}
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
    title: "Give procurement intelligence a workflow, not just a dashboard.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a procurement intelligence function?",
      answer:
        "It is the team, process, and toolset responsible for turning procurement records, buyer behavior, lifecycle evidence, competitor context, and public signals into commercial decisions.",
    },
    {
      question: "Who should own procurement intelligence?",
      answer:
        "Ownership varies, but the function usually needs input from sales, bid, strategy, partnerships, and market intelligence teams so insights are tied to decisions.",
    },
    {
      question: "What should a procurement intelligence function measure?",
      answer:
        "It should measure outcomes such as better bid/no-bid discipline, earlier account preparation, improved win rates, avoided low-fit bids, and clearer market prioritization.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "oecdPublicProcurement",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant gives teams a shared evidence layer for market, account, competitor, and bid/no-bid decisions.",
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
