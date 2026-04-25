import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/procurement-intelligence-maturity",
  title: "Procurement Intelligence Maturity",
  description:
    "Understand the stages of procurement intelligence maturity, from reactive tender monitoring to strategic, evidence-led public-sector market planning.",
  publishedAt: "2026-04-06T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-21T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Procurement intelligence maturity describes how well an organization turns procurement data, buyer cycles, competitor context, and external signals into repeatable decisions. Mature teams move beyond tender alerts into earlier account planning, disciplined qualification, and outcome-based learning.",
  intro: (
    <>
      <p className="article-body-text">
        Most organizations begin with reactive monitoring: finding published
        tenders and deciding quickly whether to respond. That is useful, but it
        is not the same as procurement intelligence maturity.
      </p>
      <p className="article-body-text">
        Maturity increases as teams connect evidence across sources, integrate
        it into decisions, and learn from results.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Stage",
      text: "Maturity usually moves from alerts, to structured monitoring, to integrated intelligence, to forecast-led planning.",
    },
    {
      label: "Integration",
      text: "The key test is whether intelligence changes account, bid/no-bid, and partner decisions.",
    },
    {
      label: "Progress",
      text: "Teams mature through better data, clearer workflows, shared criteria, and outcome review.",
    },
  ],
  civantView: {
    title: "Maturity is measured by decision quality, not dashboard volume.",
    content: (
      <p>
        A mature procurement intelligence capability gives teams earlier,
        clearer, and more consistent decisions. The question is not how much
        data the team can see. It is whether the evidence changes what the team
        does next.
      </p>
    ),
  },
  sections: [
    {
      id: "maturity-levels",
      title: "Maturity Levels",
      content: (
        <>
          <p className="article-body-text">
            Low maturity usually means reactive tender monitoring and ad hoc
            research. Teams see opportunities when they are published, then rush
            through qualification and response planning.
          </p>
          <p className="article-body-text">
            Higher maturity means the team can read buyer cycles, lifecycle
            evidence, competitor movement, and external public signals before
            notices appear.
          </p>
        </>
      ),
    },
    {
      id: "capability-dimensions",
      title: "Capability Dimensions",
      content: (
        <>
          <p className="article-body-text">
            A practical maturity model should assess data coverage, signal
            quality, analytical process, decision integration, governance, and
            outcomes measurement.
          </p>
          <p className="article-body-text">
            Technology matters, but maturity also depends on habits: whether
            commercial, bid, strategy, and leadership teams use the same
            evidence when deciding where to focus.
          </p>
        </>
      ),
    },
    {
      id: "development-path",
      title: "Development Path",
      content: (
        <>
          <p className="article-body-text">
            Teams do not need to jump directly from alert monitoring to full
            forecasting. The development path can be staged: improve source
            coverage, add lifecycle context, introduce competitor evidence,
            then integrate signal confidence into planning.
          </p>
          <p className="article-body-text">
            Each stage should improve a real decision. If a capability does not
            help teams prioritize, prepare, bid, partner, or pass, it may be
            analytical decoration rather than operational maturity.
          </p>
        </>
      ),
    },
    {
      id: "outcome-review",
      title: "Outcome Review",
      content: (
        <>
          <p className="article-body-text">
            Mature teams review outcomes. They ask which signals were useful,
            which opportunities were overvalued, where competitors behaved
            differently than expected, and whether qualification criteria need
            adjustment.
          </p>
          <p className="article-body-text">
            Civant supports this direction by connecting procurement evidence
            into a repeatable planning layer. Read more on the{" "}
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
    title: "Move from reactive monitoring to evidence-led market planning.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is procurement intelligence maturity?",
      answer:
        "It is the level of sophistication with which an organization collects, connects, interprets, and uses procurement evidence to make commercial and bid decisions.",
    },
    {
      question: "What is a low-maturity procurement intelligence process?",
      answer:
        "A low-maturity process usually depends on reactive tender alerts, manual portal monitoring, and ad hoc qualification after notices are published.",
    },
    {
      question: "How can teams improve procurement intelligence maturity?",
      answer:
        "Teams can improve maturity by adding lifecycle evidence, buyer recurrence, competitor context, external signals, shared qualification criteria, and outcome review.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "procurement-intelligence-software",
    linkLabel: "Explore procurement intelligence software",
    children:
      "See how Civant helps teams mature from reactive tender discovery into structured procurement intelligence.",
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
