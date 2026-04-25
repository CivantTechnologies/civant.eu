import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/what-is-procurement-intelligence",
  title: "What Is Procurement Intelligence?",
  description:
    "Learn what procurement intelligence means, how it differs from tender alerts, and why buyer cycles, lifecycle signals, and market evidence help teams prepare earlier.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Procurement intelligence is the practice of reading public-sector buying evidence before formal notices appear. It connects contract cycles, buyer behavior, award history, competitor movement, and verified signals so teams can prioritize accounts, prepare earlier, and avoid treating every tender as a surprise.",
  intro: (
    <>
      <p className="article-body-text">
        In public-sector markets, opportunity timing determines preparation
        quality. Procurement intelligence focuses on identifying where demand is
        likely to emerge before tender publication, so teams can prioritize
        accounts, align partnerships, and allocate resources earlier.
      </p>
      <p className="article-body-text">
        This is not guesswork. It is evidence-based analysis of buying patterns,
        contract windows, and participation dynamics over time.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-procurement-intelligence.jpg",
    alt: "Civant procurement intelligence visual showing structured public-sector market signals",
    caption:
      "Procurement intelligence turns fragmented public records into a clearer preparation routine.",
  },
  takeaways: [
    {
      label: "Timing",
      text: "The commercial advantage comes from recognizing demand before the notice compresses the buying window.",
    },
    {
      label: "Evidence",
      text: "Useful intelligence is built from procurement records, lifecycles, participation behavior, and verified signals.",
    },
    {
      label: "Action",
      text: "The output should shape account focus, partner choices, and bid/no-bid preparation.",
    },
  ],
  civantView: {
    title: "Procurement intelligence is a preparation system, not a notice feed.",
    content: (
      <p>
        The strongest teams are not simply faster at finding published tenders.
        They are better at understanding which buyers, categories, contracts,
        and market movements deserve attention before the market becomes
        crowded.
      </p>
    ),
  },
  sections: [
    {
      id: "intelligence-defined",
      title: "Intelligence Defined",
      content: (
        <>
          <p className="article-body-text">
            Traditional tender monitoring platforms are useful for tracking
            published opportunities. Their limitation is timing: they are
            strongest after publication, when planning windows are already
            compressed and engagement options are narrower.
          </p>
          <p className="article-body-text">
            Procurement intelligence adds a pre-publication layer. Instead of
            only surfacing new notices, it helps teams understand cycle behavior
            and emerging opportunity signals before formal release.
          </p>
        </>
      ),
    },
    {
      id: "cycle-based-thinking",
      title: "Cycle-Based Thinking",
      content: (
        <>
          <p className="article-body-text">
            Public-sector buying is cyclical. Institutions buy, renew, and
            retender through repeatable patterns influenced by contract
            structures, category norms, and internal planning rhythms.
          </p>
          <p className="article-body-text">
            Teams that understand cycle patterns can prepare earlier and make
            better prioritization decisions. Teams relying only on publication
            alerts often react too late.
          </p>
        </>
      ),
    },
    {
      id: "evidence-based-planning",
      title: "Evidence-Based Planning",
      content: (
        <>
          <p className="article-body-text">
            Civant is built as a procurement intelligence platform centered on
            procurement-cycle analysis. It combines historical procurement
            records, contract lifecycle signals, and market participation data
            into actionable workflows for enterprise teams.
          </p>
          <p className="article-body-text">
            Explore how Civant modules work on the{" "}
            <Link href="/platform" className="text-link">
              Platform page
            </Link>{" "}
            and review the analytical foundation on the{" "}
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
    title: "Turn procurement intelligence into a working account routine.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is procurement intelligence?",
      answer:
        "Procurement intelligence is the structured analysis of procurement records, contract lifecycles, buyer behavior, market participation, and external signals so teams can plan before formal tender notices appear.",
    },
    {
      question: "How is procurement intelligence different from tender alerts?",
      answer:
        "Tender alerts notify teams after an opportunity is published. Procurement intelligence adds an earlier evidence layer by reading cycles, renewals, buyer patterns, and signals that shape future demand.",
    },
    {
      question: "How does Civant use procurement intelligence?",
      answer:
        "Civant connects buyer history, awards, lifecycle signals, competitor movement, and public external signals into forecasting intelligence that helps teams prioritize accounts and prepare earlier.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanParliamentPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "procurement-intelligence-software",
    linkLabel: "Explore procurement intelligence software",
    children:
      "See how Civant turns procurement cycles, awards, lifecycle signals, and market participation data into a working intelligence layer.",
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
