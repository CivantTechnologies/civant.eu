import Link from "next/link";
import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/contract-lifecycle-signals",
  title: "Contract Lifecycle Signals",
  description:
    "Learn how contract start dates, durations, extensions, renewals, modifications, and award history create early evidence of future public procurement demand.",
  publishedAt: "2026-03-28T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-16T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Contract lifecycle signals are evidence points that show where an existing public contract sits in its journey from award to delivery, extension, renewal, or replacement. They help suppliers anticipate when a buyer may return to market before a new tender notice appears.",
  intro: (
    <>
      <p className="article-body-text">
        Public contracts do not disappear after award. They move through a
        lifecycle: start, delivery, review, extension, modification, expiry,
        renewal, or retender.
      </p>
      <p className="article-body-text">
        Each stage can create useful evidence for suppliers trying to understand
        where future demand may emerge.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Timing",
      text: "Start dates, contract durations, extensions, and expiry windows create practical preparation markers.",
    },
    {
      label: "Context",
      text: "Modifications, renewals, and award patterns help explain whether a buyer may maintain, change, or reopen a requirement.",
    },
    {
      label: "Use",
      text: "Lifecycle signals should shape watchlists, account planning, and early qualification.",
    },
  ],
  civantView: {
    title: "Lifecycle evidence is one of the clearest early-warning layers.",
    content: (
      <p>
        Contract lifecycle signals are not predictions by themselves. They are
        structured evidence that helps teams decide which buyers and categories
        deserve attention before the formal tender appears.
      </p>
    ),
  },
  sections: [
    {
      id: "what-lifecycle-signals-are",
      title: "What Lifecycle Signals Are",
      content: (
        <>
          <p className="article-body-text">
            Lifecycle signals include contract award dates, start dates,
            expected end dates, extensions, renewals, modifications, framework
            call-offs, and replacement notices.
          </p>
          <p className="article-body-text">
            They are useful because many public-sector needs recur. A contract
            nearing expiry does not guarantee a tender, but it does create a
            reason to investigate buyer intent and category context.
          </p>
        </>
      ),
    },
    {
      id: "renewal-windows",
      title: "Renewal Windows",
      content: (
        <>
          <p className="article-body-text">
            Renewal windows are especially important for suppliers. They create
            a natural moment to assess whether a buyer may extend, retender,
            consolidate, split, or reshape a requirement.
          </p>
          <p className="article-body-text">
            Teams that identify these windows early can begin account research,
            partner discussions, and qualification before the market becomes
            crowded.
          </p>
        </>
      ),
    },
    {
      id: "modification-and-extension",
      title: "Modification and Extension Signals",
      content: (
        <>
          <p className="article-body-text">
            Contract modifications and extensions can show changing needs,
            delayed replacement, scope growth, or buyer reliance on an existing
            supplier. These details matter when assessing whether a future
            competition is likely and how open it may be.
          </p>
          <p className="article-body-text">
            A modification is not automatically an opportunity, but it can be a
            useful prompt for monitoring and account planning.
          </p>
        </>
      ),
    },
    {
      id: "forecasting-context",
      title: "Forecasting Context",
      content: (
        <>
          <p className="article-body-text">
            Civant combines lifecycle signals with award history, buyer
            recurrence, competitor context, and external public indicators. That
            broader evidence layer helps teams separate routine lifecycle noise
            from commercially meaningful movement.
          </p>
          <p className="article-body-text">
            See the underlying approach on the{" "}
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
    title: "Use lifecycle signals to prepare before renewal pressure builds.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What are contract lifecycle signals?",
      answer:
        "Contract lifecycle signals are public evidence points such as award dates, contract durations, extensions, modifications, expiry windows, renewals, and replacement notices.",
    },
    {
      question: "Do lifecycle signals guarantee a new tender?",
      answer:
        "No. They indicate where demand may be moving and should be combined with buyer history, category recurrence, external signals, and market context.",
    },
    {
      question: "How should suppliers use lifecycle signals?",
      answer:
        "Suppliers should use lifecycle signals to build watchlists, time account engagement, plan partnerships, and qualify potential renewal or retender opportunities earlier.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "tedEforms",
    "europeanCommissionEforms",
  ]),
  relatedSolution: {
    solutionSlug: "tender-prediction-software",
    linkLabel: "Explore tender forecasting software",
    children:
      "See how Civant turns lifecycle evidence into earlier opportunity timing intelligence.",
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
