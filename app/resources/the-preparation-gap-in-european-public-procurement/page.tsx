import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/the-preparation-gap-in-european-public-procurement",
  title: "The Preparation Gap in European Public Procurement",
  description:
    "Understand why reactive tender discovery creates a structural preparation gap in European public procurement and how procurement intelligence helps teams prepare earlier.",
  publishedAt: "2026-03-18T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-21T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "The preparation gap is the distance between when a buyer's need starts forming and when most suppliers first see the tender. Teams that wait for published notices often have weeks to respond, while incumbents and prepared competitors may have spent months understanding the buyer, shaping partnerships, and planning a stronger response.",
  intro: (
    <>
      <p className="article-body-text">
        European public procurement represents one of the largest addressable
        markets for suppliers, but most teams still engage too late. Formal
        tender notices create transparency, yet they do not create equal
        preparation time.
      </p>
      <p className="article-body-text">
        The result is a persistent preparation gap: the difference between the
        moment demand becomes knowable and the moment a supplier begins serious
        pursuit work.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/action-team-preparation.jpg",
    alt: "Bid and sales team preparing around public procurement timing signals",
    caption:
      "The strongest public-sector bids are usually prepared before the tender window opens.",
    tone: "preparation",
  },
  takeaways: [
    {
      label: "Mismatch",
      text: "Tender response windows are short, but buyer understanding and partner alignment take much longer.",
    },
    {
      label: "Asymmetry",
      text: "Incumbents and prepared competitors benefit from months of context before the market sees a notice.",
    },
    {
      label: "Fix",
      text: "The practical response is earlier account planning built on procurement cycles, awards, and public signals.",
    },
  ],
  civantView: {
    title: "The preparation gap is a timing problem before it is a bid problem.",
    content: (
      <p>
        Better writing rarely fixes a bid that started too late. Procurement
        intelligence helps teams move the important decisions earlier: which
        buyers to study, which partners to involve, and which opportunities
        deserve real pursuit effort.
      </p>
    ),
  },
  sections: [
    {
      id: "time-mismatch",
      title: "Time Mismatch",
      content: (
        <>
          <p className="article-body-text">
            When a tender is published, the response window may be measured in
            weeks. For complex services, IT, infrastructure, or regulated
            categories, that window must cover requirement analysis, solution
            design, pricing, approvals, partner coordination, and quality
            assurance.
          </p>
          <p className="article-body-text">
            A prepared competitor enters that window with context already built.
            A reactive supplier uses the same window to learn the buyer, decide
            whether to bid, and assemble the response at once.
          </p>
        </>
      ),
    },
    {
      id: "readiness-problem",
      title: "The Readiness Problem",
      content: (
        <>
          <p className="article-body-text">
            Many public contracts follow repeatable patterns. Frameworks,
            service renewals, budget cycles, policy programmes, and recurring
            buyer needs all create early evidence that demand may return.
          </p>
          <p className="article-body-text">
            The problem is not that the evidence is always hidden. It is that
            the evidence is fragmented across notices, awards, plans, budgets,
            consultations, and buyer history. Without a structured routine,
            most suppliers do not turn those fragments into action.
          </p>
        </>
      ),
    },
    {
      id: "competition-impact",
      title: "Competition Impact",
      content: (
        <>
          <p className="article-body-text">
            The preparation gap reinforces incumbent advantage. Existing
            suppliers learn the buyer's operations during delivery, while
            reactive challengers often start from the tender pack alone.
          </p>
          <p className="article-body-text">
            That does not mean new entrants cannot win. It means they need a
            longer preparation runway: account research, evidence gathering,
            partner selection, and a clear bid/no-bid decision before the
            deadline begins to dominate the workflow.
          </p>
        </>
      ),
    },
    {
      id: "closing-the-gap",
      title: "Closing the Gap",
      content: (
        <>
          <p className="article-body-text">
            Closing the gap requires a shift from reactive tender monitoring to
            proactive procurement intelligence. Teams need to track contract
            lifecycles, award outcomes, buyer recurrence, and external signals
            that indicate demand may be forming.
          </p>
          <p className="article-body-text">
            For a deeper look at how Civant connects these signals, explore the{" "}
            <Link href="/methodology" className="text-link">
              Methodology page
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Build the preparation window before the notice appears.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is the preparation gap in public procurement?",
      answer:
        "The preparation gap is the difference between when buyer demand becomes knowable and when a supplier begins preparing for a formal tender response.",
    },
    {
      question: "Why does the preparation gap help incumbents?",
      answer:
        "Incumbents often understand the buyer's operations, constraints, and renewal context before the next tender appears, while reactive challengers start learning after publication.",
    },
    {
      question: "How can suppliers close the preparation gap?",
      answer:
        "Suppliers can close the gap by tracking contract lifecycles, buyer recurrence, awards, early public signals, and competitor movement before the tender is formally published.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
    "europeanCommissionEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant gives teams earlier context for buyer timing, opportunity fit, and bid/no-bid preparation.",
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
