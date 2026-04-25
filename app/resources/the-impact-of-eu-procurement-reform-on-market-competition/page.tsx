import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/the-impact-of-eu-procurement-reform-on-market-competition",
  title: "The Impact of EU Procurement Reform on Market Competition",
  description:
    "Understand how EU procurement reform affects competition, transparency, digital notices, SME access, evaluation criteria, and supplier strategy.",
  publishedAt: "2026-04-19T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "EU procurement reform affects competition by changing procedures, transparency, notice standards, evaluation criteria, and market-access mechanisms. But rule changes only improve competition when buyers implement them well and suppliers can understand the new signals.",
  intro: (
    <>
      <p className="article-body-text">
        Procurement reform changes the rules of the market. Directives,
        national implementation, eForms, digital systems, and strategic
        procurement policies all influence how buyers publish, evaluate, and
        award public contracts.
      </p>
      <p className="article-body-text">
        For suppliers, the question is not only what changed in law. It is how
        each authority applies the change in practice.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Rules",
      text: "Reform can change procedures, evaluation, notice data, transparency, and supplier access.",
    },
    {
      label: "Practice",
      text: "Competitive impact depends on authority capability and implementation quality.",
    },
    {
      label: "Strategy",
      text: "Suppliers should monitor how buyers adopt new tools, not just the existence of reform.",
    },
  ],
  civantView: {
    title: "Reform creates signals when buyers change behavior.",
    content: (
      <p>
        Civant tracks procurement practice through notices, awards, buyer
        history, and market signals so teams can see where reforms are changing
        real competition.
      </p>
    ),
  },
  sections: [
    {
      id: "regulatory-changes",
      title: "Regulatory Changes",
      content: (
        <>
          <p className="article-body-text">
            EU procurement rules support transparency, competition, equal
            treatment, SME access, and value-based evaluation. Reforms also
            introduce or refine tools such as dynamic purchasing systems,
            innovation-oriented procedures, and structured digital notices.
          </p>
          <p className="article-body-text">
            The effect depends on how member states and authorities implement
            the rules.
          </p>
        </>
      ),
    },
    {
      id: "market-impact",
      title: "Market Impact",
      content: (
        <>
          <p className="article-body-text">
            Reform can open markets by improving visibility, simplifying access,
            encouraging lots, or allowing quality and lifecycle criteria beyond
            lowest price.
          </p>
          <p className="article-body-text">
            It can also create complexity if buyers use new mechanisms
            inconsistently or suppliers cannot interpret the data.
          </p>
        </>
      ),
    },
    {
      id: "competition-effect",
      title: "Competition Effect",
      content: (
        <>
          <p className="article-body-text">
            Competition is affected by more than formal rules. Publication
            quality, preparation windows, buyer planning, incumbent behavior,
            and supplier capacity all influence whether reforms improve market
            access.
          </p>
          <p className="article-body-text">
            This is why reform analysis should be grounded in actual notice and
            award behavior.
          </p>
        </>
      ),
    },
    {
      id: "new-rules-impact",
      title: "New Rules Impact",
      content: (
        <>
          <p className="article-body-text">
            Suppliers should monitor which authorities adopt DPS, market
            consultations, quality-based evaluation, eForms, and transparent
            forward planning.
          </p>
          <p className="article-body-text">
            Those adoption patterns can indicate which buyers are more open to
            differentiated suppliers and early engagement.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Track reform through buyer behavior, not headlines.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "How does EU procurement reform affect suppliers?",
      answer:
        "It can change procedures, evaluation criteria, publication data, transparency, market-access mechanisms, and how suppliers need to prepare.",
    },
    {
      question: "Does procurement reform always increase competition?",
      answer:
        "No. Reform can support competition, but actual impact depends on buyer implementation, supplier awareness, data quality, and market structure.",
    },
    {
      question: "What should suppliers monitor after procurement reform?",
      answer:
        "They should monitor buyer adoption of new procedures, notice quality, evaluation models, DPS usage, market consultations, framework structures, and award patterns.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "europeanCommissionEforms",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant connects procurement rules, notice behavior, buyer history, and market signals into practical intelligence.",
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
