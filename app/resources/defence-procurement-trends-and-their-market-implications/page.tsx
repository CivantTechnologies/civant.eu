import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/defence-procurement-trends-and-their-market-implications",
  title: "Defence Procurement Trends and Their Market Implications",
  description:
    "A procurement intelligence guide to defence market trends, security-sensitive procurement, long programme cycles, supplier barriers, and early strategic signals.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Defence procurement is shaped by security-sensitive rules, long programme cycles, national capability priorities, restricted supplier access, and high technical assurance. Suppliers need to monitor strategy documents, budget signals, industrial policy, and capability plans well before formal notices appear.",
  intro: (
    <>
      <p className="article-body-text">
        Defence procurement does not behave like routine public purchasing.
        Security interests, classified requirements, export controls, national
        industrial policy, and long capability programmes make the market slower
        to enter and harder to read from notices alone.
      </p>
      <p className="article-body-text">
        For suppliers, the opportunity is strategic rather than transactional.
        The strongest signals often appear in defence reviews, budget
        announcements, joint procurement programmes, capability plans, and
        industrial partnerships before the procurement process becomes visible.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Security",
      text: "Defence procurement has special rules and eligibility requirements that differ from ordinary procurement.",
    },
    {
      label: "Cycles",
      text: "Major programmes can develop over years, making early policy and budget signals commercially important.",
    },
    {
      label: "Access",
      text: "Supplier entry depends on clearance, technical assurance, references, partnerships, and national context.",
    },
  ],
  civantView: {
    title: "Defence opportunities are often signaled before they are tendered.",
    content: (
      <p>
        Tender notices are late-stage evidence in defence markets. Earlier
        insight comes from capability planning, budget commitments, industrial
        strategy, technology priorities, and the supplier ecosystems forming
        around them.
      </p>
    ),
  },
  sections: [
    {
      id: "special-procurement-rules",
      title: "Special Procurement Rules",
      content: (
        <>
          <p className="article-body-text">
            Defence and sensitive security procurement can operate under
            specific legal frameworks, including rules for arms, munitions, war
            material, and security-sensitive works and services. In some cases,
            member states may rely on security interests when limiting normal
            market openness.
          </p>
          <p className="article-body-text">
            This creates different participation dynamics. Suppliers may need
            security credentials, controlled information handling, export
            compliance, approved facilities, or prior defence references before
            they are credible participants.
          </p>
        </>
      ),
    },
    {
      id: "programme-cycles",
      title: "Programme Cycles",
      content: (
        <>
          <p className="article-body-text">
            Defence demand is often linked to long-range capability planning.
            Modernisation programmes, replacement cycles, joint procurement
            initiatives, research funding, and interoperability requirements can
            signal future purchasing years before a contract award.
          </p>
          <p className="article-body-text">
            That means suppliers should monitor strategy documents, parliamentary
            scrutiny, budget cycles, defence agency activity, and international
            commitments as part of the opportunity pipeline.
          </p>
        </>
      ),
    },
    {
      id: "market-structure",
      title: "Market Structure",
      content: (
        <>
          <p className="article-body-text">
            Defence markets often favor established primes, national champions,
            and specialist suppliers with certified capability. Smaller or newer
            firms usually enter through partnerships, subsystem roles, research
            programmes, or supply-chain positions rather than direct prime
            competition.
          </p>
          <p className="article-body-text">
            Supplier intelligence therefore matters. Teams need to understand
            existing prime relationships, likely consortium structures,
            industrial participation requirements, and capability gaps that a
            specialist supplier can credibly fill.
          </p>
        </>
      ),
    },
    {
      id: "intelligence-implications",
      title: "Intelligence Implications",
      content: (
        <>
          <p className="article-body-text">
            Defence procurement intelligence should connect formal notices with
            earlier signals: defence data, equipment plans, policy shifts,
            funding announcements, technology priorities, and supplier
            consolidation.
          </p>
          <p className="article-body-text">
            The practical goal is to know where the market is moving before the
            tender is already structured around a small set of prepared
            suppliers.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Track defence demand before formal procurement begins.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "Why is defence procurement different from standard procurement?",
      answer:
        "Defence procurement may involve security-sensitive rules, classified requirements, eligibility controls, national security interests, and long capability programmes that are not typical in routine public purchasing.",
    },
    {
      question: "What signals matter before a defence tender is published?",
      answer:
        "Useful signals include defence strategy documents, budget announcements, capability plans, joint procurement initiatives, research funding, and industrial partnership activity.",
    },
    {
      question: "How can new suppliers enter defence procurement?",
      answer:
        "Many enter through specialist roles, partnerships with primes, research programmes, or supply-chain positions while building security credentials and relevant delivery evidence.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionDefenceProcurement",
    "europeanDefenceAgencyDefenceData",
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
  ]),
  relatedSolution: {
    solutionSlug: "tender-prediction-software",
    linkLabel: "Explore tender prediction software",
    children:
      "See how Civant connects policy, lifecycle, buyer, and supplier signals into earlier public-sector opportunity intelligence.",
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
