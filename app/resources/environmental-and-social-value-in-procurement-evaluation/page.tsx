import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/environmental-and-social-value-in-procurement-evaluation",
  title: "Environmental and Social Value in Procurement Evaluation",
  description:
    "Understand how environmental and social value criteria affect public procurement evaluation, supplier differentiation, and bid strategy.",
  publishedAt: "2026-04-21T00:00:00+00:00",
  publishedLabel: "April 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Environmental and social value criteria let public buyers evaluate more than price. Sustainability, lifecycle impact, social outcomes, labour standards, training, and community benefit can influence bid strategy when they are material to the scoring model.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement is increasingly used to support wider policy goals,
        including sustainability and social value. That changes how suppliers
        should prepare and differentiate.
      </p>
      <p className="article-body-text">
        The important question is whether environmental and social criteria are
        meaningful evaluation factors in a specific tender, not whether they
        appear as general policy language.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Criteria",
      text: "Environmental and social value can affect scoring, especially when criteria are specific and weighted.",
    },
    {
      label: "Evidence",
      text: "Suppliers need credible proof, not generic sustainability claims.",
    },
    {
      label: "Strategy",
      text: "Value criteria can create differentiation when they align with buyer priorities and evaluation rules.",
    },
  ],
  civantView: {
    title: "Value criteria are competitive signals when they affect scoring.",
    content: (
      <p>
        Civant helps teams read tender and buyer evidence to understand when
        environmental or social value should shape positioning, partnerships,
        and bid/no-bid decisions.
      </p>
    ),
  },
  sections: [
    {
      id: "esg-criteria",
      title: "ESG Criteria",
      content: (
        <>
          <p className="article-body-text">
            Environmental criteria may include emissions, energy efficiency,
            lifecycle impact, waste reduction, or product standards. Social
            criteria may include employment, training, fair work, supply-chain
            practices, or community benefit.
          </p>
          <p className="article-body-text">
            Criteria matter most when they are clearly linked to evaluation and
            contract delivery.
          </p>
        </>
      ),
    },
    {
      id: "value-assessment",
      title: "Value Assessment",
      content: (
        <>
          <p className="article-body-text">
            Suppliers should assess how much weight the buyer gives to
            environmental and social value, what evidence is required, and how
            claims will be verified.
          </p>
          <p className="article-body-text">
            Weak or generic claims can damage credibility. Strong evidence can
            support differentiation.
          </p>
        </>
      ),
    },
    {
      id: "sustainability-impact",
      title: "Sustainability Impact",
      content: (
        <>
          <p className="article-body-text">
            Sustainability criteria can change the competitive field by
            rewarding suppliers with credible reporting, lower-impact delivery
            models, or stronger supply-chain practices.
          </p>
          <p className="article-body-text">
            They can also increase bid complexity, especially where evidence
            requirements differ across buyers and markets.
          </p>
        </>
      ),
    },
    {
      id: "holistic-evaluation",
      title: "Holistic Evaluation",
      content: (
        <>
          <p className="article-body-text">
            The strongest bid strategy reads environmental and social value
            alongside price, quality, risk, buyer policy, and contract outcomes.
          </p>
          <p className="article-body-text">
            Procurement intelligence helps suppliers understand which buyers
            consistently prioritise these criteria and where they are likely to
            matter commercially.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Treat value criteria as part of competitive positioning.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is environmental value in procurement?",
      answer:
        "Environmental value refers to criteria such as emissions, energy efficiency, lifecycle impact, waste reduction, sustainable materials, and lower environmental harm.",
    },
    {
      question: "What is social value in procurement?",
      answer:
        "Social value refers to wider public benefits such as employment, training, fair work, community benefit, inclusion, and responsible supply-chain practices.",
    },
    {
      question: "How should suppliers respond to value criteria?",
      answer:
        "They should understand the scoring weight, provide credible evidence, avoid generic claims, and align the value response with buyer priorities and contract delivery.",
    },
  ],
  sources: getArticleSources([
    "europeanCommissionGreenProcurement",
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "See how Civant helps teams understand buyer priorities, scoring signals, and differentiation opportunities.",
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
