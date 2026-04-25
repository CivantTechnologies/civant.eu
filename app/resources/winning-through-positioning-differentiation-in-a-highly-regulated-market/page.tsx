import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/winning-through-positioning-differentiation-in-a-highly-regulated-market",
  title: "Winning Through Positioning: Differentiation in a Highly Regulated Market",
  description:
    "How suppliers can differentiate in regulated public procurement through evidence, buyer context, quality, risk reduction, social value, and early positioning.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Suppliers differentiate in regulated procurement by proving value inside the buyer's rules: stronger evidence, lower delivery risk, clearer implementation, measurable outcomes, social value, sustainability, and better fit with the buyer's priorities. Differentiation is strongest when it is prepared before the tender is published.",
  intro: (
    <>
      <p className="article-body-text">
        Public tenders can feel restrictive because buyers define formal
        requirements, evaluation criteria, compliance rules, and submission
        structures. But regulated markets still leave room for suppliers to win
        through positioning.
      </p>
      <p className="article-body-text">
        The key is to differentiate in ways the buyer can evaluate. A supplier
        does not stand out by ignoring the rules. It stands out by proving
        better outcomes, lower risk, stronger delivery, and a clearer fit within
        the buyer's stated framework.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Evidence",
      text: "Differentiation must be supported by proof the evaluator can score.",
    },
    {
      label: "Risk",
      text: "Reducing delivery, transition, and compliance risk is a powerful form of positioning.",
    },
    {
      label: "Timing",
      text: "The strongest positioning is built from buyer intelligence before the tender arrives.",
    },
  ],
  civantView: {
    title: "In regulated markets, positioning is evidence design.",
    content: (
      <p>
        The winning story is not a louder story. It is a better-supported one:
        aligned to buyer priorities, grounded in proof, and shaped early enough
        that the team can build the evidence before evaluation begins.
      </p>
    ),
  },
  sections: [
    {
      id: "where-differentiation-fits",
      title: "Where Differentiation Fits",
      content: (
        <>
          <p className="article-body-text">
            Even when specifications are detailed, buyers may evaluate quality,
            technical approach, implementation, social value, sustainability,
            user experience, resilience, innovation, and whole-life value.
          </p>
          <p className="article-body-text">
            Suppliers should identify which parts of the evaluation leave room
            for judgment and then build evidence around those criteria instead
            of relying on generic claims.
          </p>
        </>
      ),
    },
    {
      id: "buyer-context",
      title: "Buyer Context",
      content: (
        <>
          <p className="article-body-text">
            Positioning depends on understanding what the buyer is trying to
            achieve. Strategy documents, previous awards, market engagement,
            budget signals, incumbent performance, and policy priorities all
            help reveal what matters beyond the specification.
          </p>
          <p className="article-body-text">
            A bid that mirrors the buyer's real constraints is more credible
            than a bid that simply lists supplier capabilities.
          </p>
        </>
      ),
    },
    {
      id: "proof-and-risk",
      title: "Proof And Risk",
      content: (
        <>
          <p className="article-body-text">
            Differentiation needs evidence: references, measurable outcomes,
            implementation plans, governance models, risk controls, mobilisation
            detail, accreditations, and relevant case studies.
          </p>
          <p className="article-body-text">
            Risk reduction is often overlooked as a competitive advantage. If a
            supplier can show the buyer a safer path to better outcomes, that
            can matter as much as a novel feature or lower price.
          </p>
        </>
      ),
    },
    {
      id: "intelligence-led-positioning",
      title: "Intelligence-Led Positioning",
      content: (
        <>
          <p className="article-body-text">
            Procurement intelligence supports positioning by showing buyer
            patterns, past award criteria, competitor behavior, renewal timing,
            and early signals of changing priorities.
          </p>
          <p className="article-body-text">
            With that evidence, suppliers can decide where to compete, which
            proof to build, and how to frame their value before the tender
            response window narrows the room for thought.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Build positioning from buyer evidence before the tender opens.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "How can suppliers differentiate in public procurement?",
      answer:
        "They can differentiate through stronger evidence, clearer implementation, lower risk, measurable outcomes, social value, sustainability, innovation, and better alignment with buyer priorities.",
    },
    {
      question: "Does regulation limit supplier positioning?",
      answer:
        "It limits unsupported claims and informal influence, but suppliers can still position strongly within the evaluation criteria using evidence the buyer can score.",
    },
    {
      question: "Why does early intelligence matter for positioning?",
      answer:
        "Early intelligence reveals buyer priorities, incumbent context, evaluation patterns, and evidence gaps before the tender deadline compresses preparation.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionGreenProcurement",
    "europeanCourtAuditorsCompetition",
    "ukProcurementActGuidance",
  ]),
  relatedSolution: {
    solutionSlug: "procurement-intelligence-software",
    linkLabel: "Explore procurement intelligence software",
    children:
      "Use Civant to connect buyer context, market evidence, and early signals into sharper public-sector positioning.",
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
