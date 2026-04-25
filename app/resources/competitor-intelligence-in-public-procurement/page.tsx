import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/competitor-intelligence-in-public-procurement",
  title: "Competitor Intelligence in Public Procurement",
  description:
    "Learn how award history, incumbent footprint, participation patterns, pricing context, and buyer behavior help teams understand competition before bidding.",
  publishedAt: "2026-04-02T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-22T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Competitor intelligence in public procurement is the structured reading of who wins, where they win, how often they participate, which buyers they serve, and where incumbent advantage may be strongest. It helps teams decide where to challenge, where to partner, and where not to waste bid capacity.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement competition is visible in the record if teams know
        where to look. Award notices, supplier participation, contract values,
        buyer recurrence, and framework outcomes all reveal market structure.
      </p>
      <p className="article-body-text">
        Competitor intelligence turns that record into practical decisions:
        which accounts to pursue, which incumbents to study, where barriers are
        high, and where challenger positioning may be realistic.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-competitor-intelligence.jpg",
    alt: "Civant competitor intelligence visual showing supplier positions across public procurement markets",
    caption:
      "Competitor intelligence helps teams understand market position before they commit bid effort.",
  },
  takeaways: [
    {
      label: "Position",
      text: "Award history shows where suppliers have buyer relationships, category strength, and incumbent advantage.",
    },
    {
      label: "Pattern",
      text: "Participation behavior can reveal crowded markets, low-competition niches, and repeat buyer-supplier relationships.",
    },
    {
      label: "Decision",
      text: "Competitor intelligence should shape account focus, partner strategy, and bid/no-bid discipline.",
    },
  ],
  civantView: {
    title: "Competitor intelligence is useful when it changes a decision.",
    content: (
      <p>
        A list of winners is not enough. Teams need to understand what
        competitor behavior means for their own position: whether to challenge,
        differentiate, partner, wait, or walk away.
      </p>
    ),
  },
  sections: [
    {
      id: "what-to-track",
      title: "What to Track",
      content: (
        <>
          <p className="article-body-text">
            Useful competitor intelligence starts with award history: which
            suppliers won, which buyers awarded, what categories were involved,
            and how contract values changed over time.
          </p>
          <p className="article-body-text">
            The next layer is participation behavior. Repeated bidding, single
            bidder awards, supplier concentration, framework membership, and
            buyer-supplier recurrence all help explain the competitive shape of
            a market.
          </p>
        </>
      ),
    },
    {
      id: "incumbent-advantage",
      title: "Incumbent Advantage",
      content: (
        <>
          <p className="article-body-text">
            Incumbents often hold operational knowledge that is not visible in a
            tender pack. They may understand delivery constraints, buyer
            preferences, service history, and practical implementation risks.
          </p>
          <p className="article-body-text">
            Competitor intelligence helps challengers identify where incumbent
            advantage is likely to be strongest and where change may be more
            plausible because of renewal timing, performance issues, new policy
            priorities, or market shifts.
          </p>
        </>
      ),
    },
    {
      id: "market-positioning",
      title: "Market Positioning",
      content: (
        <>
          <p className="article-body-text">
            Competitor evidence should inform positioning. A crowded tender may
            require sharper differentiation, a partner-led approach, or a
            decision not to bid. A low-participation category may reveal a
            better opening if the team has the right capabilities.
          </p>
          <p className="article-body-text">
            The goal is not to fear competition. It is to understand it early
            enough to choose a better strategy.
          </p>
        </>
      ),
    },
    {
      id: "civant-workflow",
      title: "Civant Workflow",
      content: (
        <>
          <p className="article-body-text">
            Civant connects competitor evidence with buyer history, lifecycle
            signals, and live market activity so teams can see competition as
            part of the opportunity context.
          </p>
          <p className="article-body-text">
            Learn how Civant supports wider public-sector market planning on the{" "}
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
    title: "Use competitor context before bid effort is committed.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is competitor intelligence in public procurement?",
      answer:
        "It is the structured analysis of award history, supplier participation, incumbent position, buyer relationships, and market concentration so teams understand competition before bidding.",
    },
    {
      question: "Why does incumbent position matter?",
      answer:
        "Incumbents often have operational knowledge, buyer familiarity, and delivery history that can improve their position in a renewal or retender process.",
    },
    {
      question: "How should teams use competitor intelligence?",
      answer:
        "Teams should use it to prioritize accounts, assess bid/no-bid fit, shape differentiation, choose partners, and avoid markets where the evidence suggests poor odds.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant connects competitor movement with buyer cycles, awards, and live opportunity context.",
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
