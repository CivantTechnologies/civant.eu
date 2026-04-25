import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/centralised-purchasing-organisations-and-market-concentration",
  title: "Centralised Purchasing Organisations and Market Concentration",
  description:
    "See how centralised purchasing organisations aggregate public demand, reshape supplier access, and affect competition in public procurement markets.",
  publishedAt: "2026-03-28T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Centralised purchasing organisations aggregate demand across multiple public buyers. They can improve efficiency and standardisation, but they also concentrate market access around larger frameworks, central buyer relationships, and supplier panels.",
  intro: (
    <>
      <p className="article-body-text">
        Centralised purchasing organisations can change the structure of a
        public procurement market. Instead of many individual authorities
        buying separately, demand is aggregated through a central body.
      </p>
      <p className="article-body-text">
        For suppliers, that changes where intelligence should focus. One
        central framework may matter more than dozens of local tenders.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Scale",
      text: "Centralised purchasing aggregates demand and can produce larger, more strategic competitions.",
    },
    {
      label: "Access",
      text: "Supplier access may depend on central frameworks, panels, or central buyer qualification.",
    },
    {
      label: "Risk",
      text: "Aggregation can improve efficiency but may increase concentration and barriers for smaller suppliers.",
    },
  ],
  civantView: {
    title: "Centralised buying changes the map of opportunity.",
    content: (
      <p>
        Civant tracks who controls procurement routes, not only who consumes the
        service. Centralised purchasing means supplier strategy must account for
        the central body, participating authorities, framework structure, and
        call-off behavior.
      </p>
    ),
  },
  sections: [
    {
      id: "market-consolidation",
      title: "Market Consolidation",
      content: (
        <>
          <p className="article-body-text">
            Centralised purchasing can consolidate many small buying decisions
            into fewer, larger competitions. That can attract broader supplier
            interest and simplify procurement for public bodies.
          </p>
          <p className="article-body-text">
            It can also raise the stakes. Suppliers that win central frameworks
            may gain access to multiple buyers, while excluded suppliers may
            need to wait for the next cycle or find subcontracting routes.
          </p>
        </>
      ),
    },
    {
      id: "winner-concentration",
      title: "Winner Concentration",
      content: (
        <>
          <p className="article-body-text">
            Aggregated demand can favor suppliers with scale, compliance
            capacity, broad references, and the ability to serve multiple
            authorities. Smaller suppliers may need lots, partnerships, or niche
            positioning to compete effectively.
          </p>
          <p className="article-body-text">
            The intelligence task is to understand how value flows after the
            central competition: which suppliers win, which authorities use the
            route, and how call-offs are distributed.
          </p>
        </>
      ),
    },
    {
      id: "access-control",
      title: "Access Control",
      content: (
        <>
          <p className="article-body-text">
            A central purchasing route may become the primary route to market in
            a category. Suppliers need visibility into renewal timing,
            participation rules, lots, supplier panels, and buyer uptake.
          </p>
          <p className="article-body-text">
            Without that view, teams may waste effort chasing local tenders that
            are increasingly routed through central structures.
          </p>
        </>
      ),
    },
    {
      id: "centralisation-effects",
      title: "Centralisation Effects",
      content: (
        <>
          <p className="article-body-text">
            Centralisation can reduce transaction costs and improve purchasing
            discipline, but it can also reduce local discretion and make market
            access more dependent on a small number of strategic events.
          </p>
          <p className="article-body-text">
            Suppliers should treat CPOs as account structures in their own
            right, with dedicated monitoring, relationship strategy, and renewal
            planning.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "See where central routes control market access.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a centralised purchasing organisation?",
      answer:
        "A centralised purchasing organisation is a public body or procurement function that buys or establishes procurement routes on behalf of multiple public authorities.",
    },
    {
      question: "How do CPOs affect competition?",
      answer:
        "They can aggregate demand into larger competitions, improving efficiency but also concentrating access around central frameworks and supplier panels.",
    },
    {
      question: "What should suppliers monitor with CPOs?",
      answer:
        "Suppliers should monitor framework renewal dates, supplier panels, lots, call-off patterns, participating authorities, and whether central routes are replacing local tenders.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant tracks central frameworks, participating buyers, and supplier concentration across procurement markets.",
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
