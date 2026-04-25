import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/centralised-vs-local-procurement-structural-differences-across-the-eu",
  title: "Centralised vs Local Procurement: Structural Differences Across the EU",
  description:
    "Compare centralised and local procurement structures across Europe and how they affect tender discovery, competition, frameworks, and supplier strategy.",
  publishedAt: "2026-03-29T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Centralised procurement produces fewer, larger, more standardised buying routes, while local procurement produces more fragmented and varied opportunities. Suppliers need different discovery, relationship, and bid strategies depending on how each market is structured.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement structure varies across Europe. Some markets rely
        heavily on central purchasing bodies and national frameworks. Others
        remain fragmented across local, regional, or sector-specific buyers.
      </p>
      <p className="article-body-text">
        These structures affect how opportunities are found, how suppliers
        compete, and how early teams need to prepare.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Centralised",
      text: "Fewer, larger routes can simplify monitoring but raise the stakes of framework access.",
    },
    {
      label: "Local",
      text: "Fragmented buying creates more opportunities but higher discovery and monitoring cost.",
    },
    {
      label: "Strategy",
      text: "Market entry should match the buying structure, not just the country or category.",
    },
  ],
  civantView: {
    title: "Procurement structure determines where intelligence creates leverage.",
    content: (
      <p>
        Civant maps procurement by buyer structure, not just by geography. A
        market dominated by central frameworks requires a different playbook
        from one driven by local authority cycles.
      </p>
    ),
  },
  sections: [
    {
      id: "organisational-models",
      title: "Organisational Models",
      content: (
        <>
          <p className="article-body-text">
            Centralised models aggregate demand through national, regional, or
            sector-specific purchasing bodies. Local models leave more buying
            responsibility with individual authorities.
          </p>
          <p className="article-body-text">
            Most markets are mixed. A supplier may need to monitor central
            frameworks for one category and local tenders for another.
          </p>
        </>
      ),
    },
    {
      id: "structural-impact",
      title: "Structural Impact",
      content: (
        <>
          <p className="article-body-text">
            Centralised procurement can create standardised procedures and large
            frameworks. Local procurement can create many smaller competitions
            with different portals, timelines, and buyer practices.
          </p>
          <p className="article-body-text">
            The difference directly affects discovery cost. Fragmented markets
            require broader monitoring; centralised markets require deeper
            preparation for fewer strategic events.
          </p>
        </>
      ),
    },
    {
      id: "market-fragmentation",
      title: "Market Fragmentation",
      content: (
        <>
          <p className="article-body-text">
            Fragmented procurement can create more openings for SMEs and local
            suppliers, but it also increases the chance that teams miss relevant
            tenders or see them too late.
          </p>
          <p className="article-body-text">
            Centralised procurement may improve visibility but reduce the
            number of accessible entry points between framework cycles.
          </p>
        </>
      ),
    },
    {
      id: "strategy-by-structure",
      title: "Strategy by Structure",
      content: (
        <>
          <p className="article-body-text">
            In centralised markets, suppliers should track framework renewals,
            central buyer priorities, lots, and panel composition. In local
            markets, they should track buyer lifecycles, local plans, and
            recurring category demand.
          </p>
          <p className="article-body-text">
            The best market-entry plan begins by understanding the structure of
            the buying system.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Match market entry to the structure of public buying.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is the difference between centralised and local procurement?",
      answer:
        "Centralised procurement routes demand through a central purchasing body or framework, while local procurement leaves more buying activity with individual authorities.",
    },
    {
      question: "Which model is better for suppliers?",
      answer:
        "Neither is universally better. Centralised markets can offer larger opportunities but fewer entry points, while local markets offer more fragmented opportunities with higher discovery effort.",
    },
    {
      question: "How should suppliers adapt their strategy?",
      answer:
        "Suppliers should monitor central frameworks and renewal cycles in centralised markets, while using broader local signal monitoring and buyer-level lifecycle tracking in decentralised markets.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionPublicProcurement",
    "eurLexDirective201424",
    "europeanCourtAuditorsCompetition",
    "oecdPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant helps teams monitor central, regional, local, and cross-border procurement routes.",
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
