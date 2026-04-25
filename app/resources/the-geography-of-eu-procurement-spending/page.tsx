import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/the-geography-of-eu-procurement-spending",
  title: "The Geography of EU Procurement Spending",
  description:
    "Understand how European procurement spending varies by country, region, buyer type, sector, transparency, and local market structure.",
  publishedAt: "2026-04-15T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "EU procurement spending is geographically uneven. Opportunity varies by country, region, buyer type, sector, transparency, local supplier base, and publication discipline, so suppliers need geographic market intelligence before prioritising expansion.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement is not evenly distributed across Europe. Market size,
        buyer density, public-sector structure, digital maturity, and local
        spending priorities all shape where procurement activity appears.
      </p>
      <p className="article-body-text">
        For suppliers, geography affects discovery, competition, delivery model,
        local partnerships, and market-entry strategy.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Distribution",
      text: "Procurement activity varies significantly across countries, regions, and authority types.",
    },
    {
      label: "Access",
      text: "Geography influences language, local presence, relationships, and portal coverage.",
    },
    {
      label: "Strategy",
      text: "Market expansion should be prioritised by accessible demand, not just headline spend.",
    },
  ],
  civantView: {
    title: "Geography is a market signal, not just a map.",
    content: (
      <p>
        Civant helps teams compare countries and regions by buyer activity,
        procurement timing, sector concentration, and competitive context so
        expansion choices are evidence-led.
      </p>
    ),
  },
  sections: [
    {
      id: "geographic-distribution",
      title: "Geographic Distribution",
      content: (
        <>
          <p className="article-body-text">
            Procurement volume tends to follow population, public-sector size,
            GDP, infrastructure investment, and service-delivery models. But
            publication quality and transparency also affect what suppliers can
            actually see.
          </p>
          <p className="article-body-text">
            A visible market is not always the largest market, and a large
            market is not always accessible.
          </p>
        </>
      ),
    },
    {
      id: "regional-variation",
      title: "Regional Variation",
      content: (
        <>
          <p className="article-body-text">
            Within countries, procurement can concentrate around capital
            regions, major cities, devolved governments, health systems,
            universities, utilities, or infrastructure authorities.
          </p>
          <p className="article-body-text">
            Suppliers should analyse buyer clusters and authority types, not
            just national totals.
          </p>
        </>
      ),
    },
    {
      id: "spending-patterns",
      title: "Spending Patterns",
      content: (
        <>
          <p className="article-body-text">
            Geography also shapes sector mix. Defence, healthcare,
            construction, digital services, education, and utilities can show
            different geographic concentrations and procurement rhythms.
          </p>
          <p className="article-body-text">
            Those differences affect which suppliers can compete and what local
            evidence or partnerships may be needed.
          </p>
        </>
      ),
    },
    {
      id: "location-strategy",
      title: "Location Strategy",
      content: (
        <>
          <p className="article-body-text">
            Geographic strategy should combine market size, buyer fit, language,
            local delivery needs, competition, and signal quality.
          </p>
          <p className="article-body-text">
            Procurement intelligence helps suppliers identify which countries or
            regions deserve immediate focus and which require more groundwork.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Prioritise markets by accessible procurement demand.",
    primaryHref: "/markets",
    primaryLabel: "Explore Markets",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Why does procurement spending vary geographically?",
      answer:
        "It varies because countries and regions differ in GDP, public-sector structure, population, buyer density, transparency, sector mix, and digital procurement maturity.",
    },
    {
      question: "Why does geography matter to suppliers?",
      answer:
        "It affects language, delivery requirements, portal coverage, buyer relationships, competition, local partnerships, and market-entry sequencing.",
    },
    {
      question: "How should suppliers choose target procurement markets?",
      answer:
        "They should compare accessible demand, buyer fit, sector activity, competition, local requirements, timing, and data quality rather than relying on headline market size alone.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanParliamentPublicProcurement",
    "tedEforms",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant helps teams compare procurement timing, buyer activity, and opportunity across European markets.",
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
