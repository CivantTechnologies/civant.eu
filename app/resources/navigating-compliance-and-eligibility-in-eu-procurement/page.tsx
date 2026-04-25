import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/navigating-compliance-and-eligibility-in-eu-procurement",
  title: "Navigating Compliance and Eligibility in EU Procurement",
  description:
    "A practical guide to EU procurement compliance, eligibility, exclusion grounds, evidence requirements, thresholds, and how suppliers can prepare earlier.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "EU procurement compliance means meeting the buyer's procedural, legal, financial, technical, and evidence requirements without creating grounds for rejection. Suppliers reduce risk by tracking thresholds, reading selection criteria early, maintaining reusable compliance evidence, and qualifying opportunities before bid work begins.",
  intro: (
    <>
      <p className="article-body-text">
        Public procurement rules are designed to support transparency,
        competition, and equal treatment. For suppliers, those rules create a
        practical challenge: a strong service offering still needs complete,
        compliant, and timely evidence.
      </p>
      <p className="article-body-text">
        Eligibility problems are expensive because they can remove a supplier
        before the buyer evaluates the quality of the proposal. Compliance
        should therefore be treated as an early qualification layer, not a final
        document check.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Evidence",
      text: "Financial, technical, certification, and exclusion evidence should be prepared before deadlines.",
    },
    {
      label: "Fit",
      text: "Eligibility criteria can make an otherwise attractive tender unrealistic for a supplier.",
    },
    {
      label: "Timing",
      text: "Early visibility lets teams close compliance gaps before the formal response window.",
    },
  ],
  civantView: {
    title: "Compliance is a qualification signal, not just a legal checklist.",
    content: (
      <p>
        A tender that fits commercially can still be a poor pursuit if the
        supplier lacks required references, certifications, turnover evidence,
        or jurisdiction-specific documentation. Intelligence helps surface those
        risks earlier.
      </p>
    ),
  },
  sections: [
    {
      id: "eligibility-criteria",
      title: "Eligibility Criteria",
      content: (
        <>
          <p className="article-body-text">
            Eligibility criteria often cover financial standing, technical
            capacity, professional experience, insurance, certifications,
            exclusion grounds, and evidence of similar delivery. The exact
            burden varies by buyer, category, procedure, and jurisdiction.
          </p>
          <p className="article-body-text">
            SMEs can be disadvantaged when requirements are disproportionate or
            difficult to evidence. Suppliers should therefore assess eligibility
            before committing bid resource, especially when entering a new
            country, sector, or contract size.
          </p>
        </>
      ),
    },
    {
      id: "thresholds-and-procedures",
      title: "Thresholds And Procedures",
      content: (
        <>
          <p className="article-body-text">
            EU thresholds affect which publication and procedural rules apply.
            Below threshold, national or local rules may create different
            documentation routes. Above threshold, suppliers should expect more
            formal requirements and broader publication obligations.
          </p>
          <p className="article-body-text">
            Compliance routines should therefore include a threshold and
            procedure check. The same service category can carry different
            obligations depending on buyer type, contract value, and location.
          </p>
        </>
      ),
    },
    {
      id: "evidence-library",
      title: "Evidence Library",
      content: (
        <>
          <p className="article-body-text">
            The practical answer is an evidence library. Suppliers should keep
            current financial statements, policies, insurance certificates,
            references, certifications, quality documents, data protection
            material, ESG evidence, and delivery case studies in reusable form.
          </p>
          <p className="article-body-text">
            Reuse does not mean generic bidding. It means administrative
            confidence. Teams should spend deadline time tailoring the response,
            not searching for documents that could have been prepared months
            earlier.
          </p>
        </>
      ),
    },
    {
      id: "early-risk-detection",
      title: "Early Risk Detection",
      content: (
        <>
          <p className="article-body-text">
            Procurement intelligence helps by connecting future opportunities to
            buyer behavior, category patterns, thresholds, and likely evidence
            needs. That gives teams time to fix gaps before a tender arrives.
          </p>
          <p className="article-body-text">
            The goal is simple: identify compliance risk while there is still
            time to act.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Spot eligibility risk before it becomes a failed submission.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What does eligibility mean in EU procurement?",
      answer:
        "Eligibility refers to the legal, financial, technical, professional, and evidence requirements a supplier must meet before its tender can be considered.",
    },
    {
      question: "Why do suppliers get rejected from public tenders?",
      answer:
        "Common causes include missing documents, failing mandatory criteria, inadequate financial or technical evidence, certification gaps, or misunderstanding exclusion and selection requirements.",
    },
    {
      question: "How can suppliers reduce compliance risk?",
      answer:
        "They should maintain a reusable evidence library, qualify opportunities early, understand threshold rules, and identify certification or reference gaps before the tender deadline.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionThresholds",
    "europeanCommissionSmeNeeds",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "public-procurement-intelligence",
    linkLabel: "Explore public procurement intelligence",
    children:
      "Use Civant to connect opportunity timing, buyer context, and qualification evidence before formal tender deadlines arrive.",
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
