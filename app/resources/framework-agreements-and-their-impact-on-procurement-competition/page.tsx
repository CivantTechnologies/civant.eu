import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/framework-agreements-and-their-impact-on-procurement-competition",
  title: "Framework Agreements and Their Impact on Procurement Competition",
  description:
    "Understand how public-sector framework agreements shape competition, market access, renewal timing, supplier strategy, and preparation windows.",
  publishedAt: "2026-03-24T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Framework agreements shape procurement competition because they create a defined supplier panel for a set period. Suppliers on the framework gain access to future call-offs, while excluded suppliers may be locked out until the framework is renewed.",
  intro: (
    <>
      <p className="article-body-text">
        Framework agreements are one of the most important structures in public
        procurement. They help buyers purchase repeatedly from pre-qualified
        suppliers without running a full competition each time.
      </p>
      <p className="article-body-text">
        For suppliers, the framework decision is strategic. Winning a place can
        open recurring revenue. Missing the window can remove access to a market
        segment for years.
      </p>
    </>
  ),
  visual: {
    src: "/images/resources/guide-framework-competition.svg",
    alt: "Civant visual timeline showing framework competition access windows, award, call-offs, review, and renewal",
    caption:
      "Frameworks concentrate access during the panel period and make renewal timing commercially important.",
  },
  takeaways: [
    {
      label: "Access",
      text: "Framework membership can determine who is eligible for future call-offs.",
    },
    {
      label: "Timing",
      text: "Framework renewal dates are high-value preparation signals.",
    },
    {
      label: "Strategy",
      text: "Framework bids usually require earlier evidence-building than single-contract tenders.",
    },
  ],
  civantView: {
    title: "Frameworks turn market access into a lifecycle problem.",
    content: (
      <p>
        Civant treats framework expiry and renewal as strategic signals. The
        best time to prepare for a framework competition is well before the
        formal notice compresses the market's attention.
      </p>
    ),
  },
  sections: [
    {
      id: "competition-reduction",
      title: "Competition Reduction",
      content: (
        <>
          <p className="article-body-text">
            Frameworks reduce repeated procurement effort for buyers and can
            create efficient routes to market. But they also concentrate access:
            once a framework is awarded, non-members may be unable to compete
            for call-offs until the next cycle.
          </p>
          <p className="article-body-text">
            This makes the initial framework competition unusually important.
            The result can shape supplier access for the full framework period.
          </p>
        </>
      ),
    },
    {
      id: "access-limitations",
      title: "Access Limitations",
      content: (
        <>
          <p className="article-body-text">
            Frameworks are often used in categories with recurring demand:
            technology, consultancy, facilities, staffing, professional
            services, supplies, and other repeatable needs.
          </p>
          <p className="article-body-text">
            Suppliers need to know which frameworks matter, who holds the
            current places, how call-offs are allocated, and when the next
            re-competition is likely.
          </p>
        </>
      ),
    },
    {
      id: "framework-constraints",
      title: "Framework Constraints",
      content: (
        <>
          <p className="article-body-text">
            A framework bid often asks for broad capability, financial
            resilience, delivery evidence, pricing discipline, and coverage
            across multiple buyer needs. That evidence cannot always be built
            during a short tender response window.
          </p>
          <p className="article-body-text">
            For challengers and SMEs, the preparation cycle may need to start
            long before the renewal notice appears.
          </p>
        </>
      ),
    },
    {
      id: "impact-assessment",
      title: "Impact Assessment",
      content: (
        <>
          <p className="article-body-text">
            Framework intelligence should combine award records, supplier
            membership, call-off patterns, expiry dates, and market
            consultation signals.
          </p>
          <p className="article-body-text">
            The practical outcome is a clearer view of which framework renewals
            deserve early investment and which are unlikely to fit the supplier
            strategy.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Track framework renewals before they become market bottlenecks.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a framework agreement in public procurement?",
      answer:
        "A framework agreement is an arrangement that sets terms with one or more suppliers for future purchases or call-offs over a defined period.",
    },
    {
      question: "Why do frameworks affect competition?",
      answer:
        "Frameworks can limit future call-off competition to suppliers already appointed to the framework, making the framework award a major market-access event.",
    },
    {
      question: "How should suppliers prepare for framework renewals?",
      answer:
        "Suppliers should track expiry dates, current framework holders, call-off patterns, buyer needs, and early engagement signals so they can build evidence before the formal competition.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "tedEforms",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams track frameworks, renewal cycles, buyer behavior, and supplier access.",
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
