import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/procurement-market-size-assessing-the-14-of-eu-gdp-opportunity",
  title: "Procurement Market Size: Assessing the 14% of EU GDP Opportunity",
  description:
    "Understand the scale of European public procurement, why market size alone is not enough, and how suppliers should segment opportunity by sector and buyer.",
  publishedAt: "2026-04-13T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "European public procurement is a large market, commonly described as around 14% of EU GDP. But suppliers should not treat the market as one opportunity. The useful question is where spend, timing, competition, and buyer fit align with the supplier's strengths.",
  intro: (
    <>
      <p className="article-body-text">
        The scale of European public procurement is attractive, but raw market
        size can be misleading. A large market still needs segmentation by
        country, buyer type, category, contract value, and competition.
      </p>
      <p className="article-body-text">
        Suppliers gain more from understanding accessible demand than from
        quoting a headline market number.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Scale",
      text: "Public procurement represents a major share of European economic activity.",
    },
    {
      label: "Segmentation",
      text: "The market must be broken down by country, category, buyer, contract type, and timing.",
    },
    {
      label: "Action",
      text: "Market sizing should guide where to focus bid capacity, not justify chasing everything.",
    },
  ],
  civantView: {
    title: "Market size only matters when it becomes market focus.",
    content: (
      <p>
        Civant helps teams move from broad procurement market claims to buyer,
        category, timing, and competition evidence that supports real territory
        planning.
      </p>
    ),
  },
  sections: [
    {
      id: "eu-gdp",
      title: "14% of EU GDP",
      content: (
        <>
          <p className="article-body-text">
            The European Commission and related public procurement sources
            commonly describe public procurement as a significant share of GDP
            and public expenditure. That scale reflects spending across central
            government, local authorities, utilities, healthcare, education,
            infrastructure, defence, and public services.
          </p>
          <p className="article-body-text">
            The number is useful as context, but it does not tell a supplier
            where to compete.
          </p>
        </>
      ),
    },
    {
      id: "opportunity-scale",
      title: "Opportunity Scale",
      content: (
        <>
          <p className="article-body-text">
            Procurement opportunity is distributed across many sectors and
            buying structures. Some categories are recurring and local. Others
            are strategic, centralised, or framework-led.
          </p>
          <p className="article-body-text">
            A supplier needs to know where demand is active, where renewals are
            approaching, and where the competitive field is realistically open.
          </p>
        </>
      ),
    },
    {
      id: "spending-distribution",
      title: "Spending Distribution",
      content: (
        <>
          <p className="article-body-text">
            Spending distribution is shaped by policy priorities, budget cycles,
            market structure, and public-service needs. A sector with high
            headline spend may still be difficult to enter if frameworks,
            incumbents, or qualification requirements restrict access.
          </p>
          <p className="article-body-text">
            Market sizing should therefore be paired with buyer and competition
            analysis.
          </p>
        </>
      ),
    },
    {
      id: "market-assessment",
      title: "Market Assessment",
      content: (
        <>
          <p className="article-body-text">
            Strong market assessment combines spend evidence, award records,
            contract lifecycles, buyer recurrence, competitor participation, and
            early signals.
          </p>
          <p className="article-body-text">
            That turns the public procurement market from a large abstract
            total into a focused set of accounts and categories worth pursuing.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Turn public procurement market size into focused opportunity maps.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "How large is the European public procurement market?",
      answer:
        "European public procurement is commonly described as a major share of GDP and public expenditure, often around 14% of EU GDP, depending on methodology and source.",
    },
    {
      question: "Why is market size not enough for suppliers?",
      answer:
        "Headline size does not show which buyers are accessible, where renewals are coming, how competition behaves, or which categories match the supplier's strengths.",
    },
    {
      question: "How should suppliers assess procurement market opportunity?",
      answer:
        "They should segment by country, buyer, category, contract value, lifecycle timing, competition, and strategic fit.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "europeanParliamentPublicProcurement",
    "oecdPublicProcurement",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams segment public procurement demand by buyer, market, timing, and competition.",
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
