import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/dynamic-purchasing-systems-and-their-growing-role-in-eu-procurement",
  title: "Dynamic Purchasing Systems and Their Growing Role in EU Procurement",
  description:
    "Learn how dynamic purchasing systems work, why they create always-open supplier access, and how DPS call-offs change public procurement competition.",
  publishedAt: "2026-03-26T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "A dynamic purchasing system is an electronic procurement mechanism that remains open to suppliers meeting the qualification criteria. It can lower entry barriers compared with closed frameworks, but suppliers still need to compete for individual call-offs.",
  intro: (
    <>
      <p className="article-body-text">
        Dynamic purchasing systems are increasingly important because they
        create more flexible purchasing structures for recurring public-sector
        demand. Unlike closed panels, a DPS can admit qualifying suppliers
        during its lifetime.
      </p>
      <p className="article-body-text">
        For suppliers, that openness is useful. But it does not remove the need
        for discipline, because call-offs can create frequent, competitive bid
        workload.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Access",
      text: "A DPS can remain open to new qualifying suppliers during its operation.",
    },
    {
      label: "Competition",
      text: "Entry is only the first step; suppliers still compete for call-offs.",
    },
    {
      label: "Monitoring",
      text: "DPS intelligence should track setup notices, membership, call-offs, and buyer usage.",
    },
  ],
  civantView: {
    title: "DPS opportunities need continuous intelligence, not one-time alerting.",
    content: (
      <p>
        Civant separates DPS establishment from call-off activity so suppliers
        can understand both market access and actual recurring demand.
      </p>
    ),
  },
  sections: [
    {
      id: "speed-and-openness",
      title: "Speed and Openness",
      content: (
        <>
          <p className="article-body-text">
            DPS models are designed for electronic purchasing where buyers need
            access to a pool of qualified suppliers. Because qualifying
            suppliers can join during the system's life, the mechanism can be
            more open than a closed framework.
          </p>
          <p className="article-body-text">
            That openness can help challengers and SMEs, but only if they can
            find the DPS, qualify efficiently, and respond to relevant call-offs.
          </p>
        </>
      ),
    },
    {
      id: "continuous-competition",
      title: "Continuous Competition",
      content: (
        <>
          <p className="article-body-text">
            DPS participation can create recurring opportunity, but it can also
            create repeated bidding pressure. Suppliers need to understand the
            call-off rhythm, likely buyers, value profile, and competitive field.
          </p>
          <p className="article-body-text">
            A DPS with many low-fit call-offs may consume more effort than it
            returns. A DPS aligned to target buyers and categories can become a
            valuable route to market.
          </p>
        </>
      ),
    },
    {
      id: "dps-mechanics",
      title: "DPS Mechanics",
      content: (
        <>
          <p className="article-body-text">
            Suppliers should distinguish between the establishment of a DPS and
            the later call-offs under it. The first determines access. The
            second determines commercial value.
          </p>
          <p className="article-body-text">
            Useful intelligence includes admission criteria, lots, buyer scope,
            supplier membership, call-off frequency, and award patterns.
          </p>
        </>
      ),
    },
    {
      id: "always-open-markets",
      title: "Always-Open Markets",
      content: (
        <>
          <p className="article-body-text">
            DPS structures can make markets feel more accessible, but suppliers
            still need a clear qualification model. Joining every relevant DPS
            without analysing call-off behavior can overload commercial teams.
          </p>
          <p className="article-body-text">
            The better approach is to target systems where the buyer base,
            category fit, and call-off evidence justify sustained participation.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Track DPS access and call-off demand in one workflow.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a dynamic purchasing system?",
      answer:
        "A dynamic purchasing system is an electronic public procurement mechanism that stays open to suppliers meeting the qualification criteria during its lifetime.",
    },
    {
      question: "How is a DPS different from a framework?",
      answer:
        "A framework usually has fixed supplier membership after award, while a DPS remains open to new qualifying suppliers and uses competitions for individual purchases.",
    },
    {
      question: "What should suppliers track in a DPS?",
      answer:
        "Suppliers should track admission criteria, lots, participating buyers, supplier membership, call-off frequency, award patterns, and whether the call-offs match their strategy.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "tedEforms",
    "europeanCommissionEforms",
    "europeanCommissionPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "eu-tender-monitoring",
    linkLabel: "Explore EU tender monitoring",
    children:
      "See how Civant helps teams distinguish DPS setup notices, call-offs, frameworks, and live tender opportunities.",
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
