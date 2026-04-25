import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/framework-agreements-vs-dynamic-purchasing-systems-opportunities-and-constraints",
  title: "Framework Agreements vs Dynamic Purchasing Systems: Opportunities and Constraints",
  description:
    "Compare framework agreements and dynamic purchasing systems, including supplier access, competition, timing, call-offs, and bid strategy tradeoffs.",
  publishedAt: "2026-03-25T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Framework agreements usually create a fixed supplier panel for a defined period, while dynamic purchasing systems remain open to qualifying suppliers during their lifetime. Frameworks can provide stability but limit access; DPS models can improve entry but require repeated competition for call-offs.",
  intro: (
    <>
      <p className="article-body-text">
        Framework agreements and dynamic purchasing systems both help public
        buyers manage repeated purchasing. For suppliers, however, they create
        very different access, preparation, and competition dynamics.
      </p>
      <p className="article-body-text">
        Understanding the difference matters because the right strategy for a
        closed framework is not the same as the right strategy for an open,
        call-off-driven DPS.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Framework",
      text: "Strong upfront competition, fixed membership, and potential call-off stability.",
    },
    {
      label: "DPS",
      text: "Open entry during the system's life, but more continuous call-off competition.",
    },
    {
      label: "Choice",
      text: "Suppliers should compare access, workload, margin pressure, and strategic fit.",
    },
  ],
  civantView: {
    title: "The mechanism changes the commercial playbook.",
    content: (
      <p>
        Civant distinguishes frameworks, DPS structures, and individual tenders
        because each mechanism creates different timing signals, competitive
        pressure, and qualification requirements.
      </p>
    ),
  },
  sections: [
    {
      id: "access-mechanisms",
      title: "Access Mechanisms",
      content: (
        <>
          <p className="article-body-text">
            Framework agreements normally appoint suppliers through an initial
            competition. Once appointed, those suppliers can compete for or
            receive call-offs under the framework rules.
          </p>
          <p className="article-body-text">
            A DPS is designed to remain open to suppliers that meet the
            qualification criteria, creating a more flexible route for later
            entry.
          </p>
        </>
      ),
    },
    {
      id: "competition-dynamics",
      title: "Competition Dynamics",
      content: (
        <>
          <p className="article-body-text">
            Frameworks concentrate competition at the appointment stage. DPS
            models spread competition across repeated call-offs, so suppliers
            may need to maintain bid capacity throughout the system's life.
          </p>
          <p className="article-body-text">
            Neither model is automatically better. The stronger route depends
            on buyer behavior, category dynamics, supplier capacity, and the
            economics of repeated bidding.
          </p>
        </>
      ),
    },
    {
      id: "strategic-tradeoffs",
      title: "Strategic Tradeoffs",
      content: (
        <>
          <p className="article-body-text">
            Frameworks may justify heavy preparation because appointment can
            create recurring access. DPS participation may be easier to enter,
            but suppliers must decide whether the call-off volume and margin
            profile justify ongoing response effort.
          </p>
          <p className="article-body-text">
            The key is not only joining the mechanism. It is understanding how
            value is actually distributed after entry.
          </p>
        </>
      ),
    },
    {
      id: "right-route",
      title: "Choosing the Right Route",
      content: (
        <>
          <p className="article-body-text">
            Procurement intelligence helps suppliers compare upcoming framework
            renewals, active DPS opportunities, call-off patterns, panel
            membership, and buyer demand.
          </p>
          <p className="article-body-text">
            That evidence supports a clearer decision about where to invest bid
            resources and where the mechanism does not match the commercial
            model.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Match your bid strategy to the buying mechanism.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is the difference between a framework and a DPS?",
      answer:
        "A framework usually has fixed membership after award, while a dynamic purchasing system stays open to qualifying suppliers and uses repeated call-off competitions.",
    },
    {
      question: "Which is better for suppliers?",
      answer:
        "It depends. Frameworks can provide stable access once appointed, while DPS models may be easier to enter but require continuous competition for call-offs.",
    },
    {
      question: "How does procurement intelligence help compare them?",
      answer:
        "It shows renewal dates, supplier membership, call-off patterns, buyer behavior, and competitive intensity so teams can decide which mechanisms deserve effort.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "tedEforms",
    "europeanCommissionEforms",
  ]),
  relatedSolution: {
    solutionSlug: "procurement-intelligence-software",
    linkLabel: "Explore procurement intelligence software",
    children:
      "See how Civant classifies tender mechanisms, call-off structures, framework timing, and competitive context.",
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
