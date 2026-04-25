import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/timetoopportunity-why-speed-of-tender-discovery-matters",
  title: "Time-to-Opportunity: Why Speed of Tender Discovery Matters",
  description:
    "Learn why time-to-opportunity affects bid quality, resource allocation, compliance, partner coordination, and public-sector win probability.",
  publishedAt: "2026-03-30T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-15T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Time-to-opportunity is the delay between when a tender becomes available and when a supplier sees it, qualifies it, and begins action. Faster discovery protects preparation time, but the real advantage comes when monitoring is combined with lifecycle and signal context before publication.",
  intro: (
    <>
      <p className="article-body-text">
        Once a contract notice is published, every hour belongs to the response
        window. Slow tender discovery reduces the time available for analysis,
        qualification, approvals, partner coordination, pricing, and compliance.
      </p>
      <p className="article-body-text">
        Speed matters, but speed alone is not enough. The best teams combine
        fast monitoring with earlier procurement intelligence so they are not
        starting from zero when the notice appears.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Delay",
      text: "Late discovery compresses qualification, approvals, pricing, solution design, and quality review.",
    },
    {
      label: "Speed",
      text: "Fast monitoring protects response time and reduces avoidable missed opportunities.",
    },
    {
      label: "Context",
      text: "The biggest advantage comes when tender monitoring is paired with lifecycle and signal intelligence.",
    },
  ],
  civantView: {
    title: "Speed is useful, but earlier context is stronger.",
    content: (
      <p>
        Tender monitoring helps teams avoid missing published notices.
        Procurement intelligence helps teams understand which notices are likely
        to matter before they appear.
      </p>
    ),
  },
  sections: [
    {
      id: "discovery-delay",
      title: "Discovery Delay",
      content: (
        <>
          <p className="article-body-text">
            Time-to-opportunity is shaped by portal fragmentation, manual
            monitoring habits, language differences, internal routing, and the
            speed of initial qualification.
          </p>
          <p className="article-body-text">
            A delay of even a day can matter when the response requires legal
            review, technical input, executive sign-off, partner coordination,
            and a compliant submission pack.
          </p>
        </>
      ),
    },
    {
      id: "preparation-window",
      title: "Preparation Window",
      content: (
        <>
          <p className="article-body-text">
            Faster discovery preserves preparation time. Teams can review the
            requirement, test fit, allocate owners, assess risk, and decide
            whether a credible bid is possible.
          </p>
          <p className="article-body-text">
            But a fast alert still arrives after publication. If the team has no
            buyer context, competitor view, or lifecycle understanding, the bid
            may still begin too late.
          </p>
        </>
      ),
    },
    {
      id: "monitoring-vs-intelligence",
      title: "Monitoring vs Intelligence",
      content: (
        <>
          <p className="article-body-text">
            Tender monitoring answers: what has been published? Procurement
            intelligence adds: why does this buyer matter, what is the timing
            context, who may compete, and how prepared should we be?
          </p>
          <p className="article-body-text">
            The combination is powerful. Monitoring catches live notices.
            Intelligence gives teams a reason to prioritize the right ones.
          </p>
        </>
      ),
    },
    {
      id: "reducing-time-to-opportunity",
      title: "Reducing Time-to-Opportunity",
      content: (
        <>
          <p className="article-body-text">
            Teams can reduce time-to-opportunity by using centralized monitoring,
            clear routing rules, saved qualification criteria, and earlier
            watchlists based on buyer cycles and lifecycle signals.
          </p>
          <p className="article-body-text">
            Civant combines monitoring with procurement-cycle context. Learn
            more about market coverage on the{" "}
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
    title: "Protect response time and prepare before the notice lands.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is time-to-opportunity?",
      answer:
        "Time-to-opportunity is the delay between when a tender becomes available and when a supplier discovers, qualifies, and begins acting on it.",
    },
    {
      question: "Why does tender discovery speed matter?",
      answer:
        "Faster discovery protects preparation time for qualification, pricing, approvals, partner coordination, compliance review, and bid writing.",
    },
    {
      question: "Is fast tender monitoring enough?",
      answer:
        "No. Fast monitoring helps teams see published notices, but procurement intelligence adds earlier context about buyer cycles, lifecycle timing, competitors, and opportunity fit.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
    "europeanCommissionEforms",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant combines live market coverage with lifecycle and signal context across European public procurement.",
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
