import {
  ResourceArticleTemplate,
  type ResourceArticle,
} from "../../../components/site/ResourceArticleTemplate";
import { getArticleSources } from "../../../lib/articleSources";
import { buildArticleMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

const article: ResourceArticle = {
  path: "/resources/the-role-of-framework-agreements-in-sustaining-supplier-relationships",
  title: "The Role of Framework Agreements in Sustaining Supplier Relationships",
  description:
    "How framework agreements shape supplier relationships, market access, call-off competition, renewal timing, and public procurement strategy for incumbents and challengers.",
  publishedAt: "2026-03-14T00:00:00+00:00",
  publishedLabel: "March 2026",
  modifiedAt: "2026-04-25T00:00:00+00:00",
  modifiedLabel: "April 2026",
  answer:
    "Framework agreements sustain supplier relationships by pre-approving suppliers for future call-offs over a defined period. They can create stable demand for suppliers on the panel, but they can also close access for outsiders until the framework is renewed, making timing and renewal tracking essential.",
  intro: (
    <>
      <p className="article-body-text">
        Framework agreements are one of the most important structures in public
        procurement because they separate the competition for a place on the
        framework from later call-offs under that framework.
      </p>
      <p className="article-body-text">
        For suppliers, the consequences are strategic. Winning a place can
        create access to recurring demand. Missing the window can leave a market
        difficult to enter until the next framework cycle.
      </p>
    </>
  ),
  takeaways: [
    {
      label: "Access",
      text: "A framework place can open future call-offs; missing it can limit access for years.",
    },
    {
      label: "Relationships",
      text: "Framework suppliers build buyer familiarity through repeated call-offs and delivery.",
    },
    {
      label: "Renewal",
      text: "The strongest challenger window is often before the next framework is designed.",
    },
  ],
  civantView: {
    title: "Framework intelligence is renewal intelligence.",
    content: (
      <p>
        The most important question is not only who is on the current panel. It
        is when the next framework will be shaped, whether requirements are
        changing, and whether challengers have time to influence or prepare.
      </p>
    ),
  },
  sections: [
    {
      id: "how-frameworks-work",
      title: "How Frameworks Work",
      content: (
        <>
          <p className="article-body-text">
            Framework agreements allow buyers to establish terms and supplier
            panels for future contracts. Buyers can then award call-offs through
            the framework rather than running a full open competition every
            time.
          </p>
          <p className="article-body-text">
            This can reduce administrative burden and create purchasing
            flexibility. It also concentrates opportunity among suppliers that
            secured a place at the initial framework competition.
          </p>
        </>
      ),
    },
    {
      id: "relationship-effects",
      title: "Relationship Effects",
      content: (
        <>
          <p className="article-body-text">
            Framework suppliers can build delivery knowledge, buyer trust, and
            category familiarity through repeated call-offs. Over time, that can
            strengthen their position when the next framework is designed or
            re-competed.
          </p>
          <p className="article-body-text">
            For suppliers outside the framework, the market can feel closed
            even when future demand exists. The strategic task is to monitor the
            renewal window and prepare before the next competition is fixed.
          </p>
        </>
      ),
    },
    {
      id: "renewal-dynamics",
      title: "Renewal Dynamics",
      content: (
        <>
          <p className="article-body-text">
            Framework renewal is a natural moment for buyer reflection. The
            authority may reassess lots, evaluation criteria, supplier
            performance, pricing, social value, sustainability, innovation, and
            whether market conditions have changed.
          </p>
          <p className="article-body-text">
            Suppliers that wait for the framework notice may be late. Early
            market engagement, prior information, budget plans, and expiring
            framework dates can all signal a coming reset.
          </p>
        </>
      ),
    },
    {
      id: "supplier-strategy",
      title: "Supplier Strategy",
      content: (
        <>
          <p className="article-body-text">
            Suppliers on a framework should track call-off performance,
            relationship quality, changing buyer needs, and evidence for the
            next renewal. Suppliers outside the framework should track expiry,
            engagement signals, and potential partner routes.
          </p>
          <p className="article-body-text">
            Procurement intelligence connects those signals into a timeline so
            teams can prepare for the next access point rather than discovering
            it after the rules are already set.
          </p>
        </>
      ),
    },
  ],
  action: {
    eyebrow: "Next Step",
    title: "Track framework renewals before market access closes again.",
    primaryHref: "/platform",
    primaryLabel: "Explore Platform",
    secondaryHref: "/contact",
    secondaryLabel: "Talk To Civant",
  },
  faqs: [
    {
      question: "What is a framework agreement in public procurement?",
      answer:
        "A framework agreement sets terms and approved suppliers for future contracts, allowing buyers to place call-offs without repeating a full open procurement each time.",
    },
    {
      question: "Why do frameworks matter for supplier relationships?",
      answer:
        "They create repeated interaction between buyers and panel suppliers, which can build familiarity, delivery evidence, and incumbent advantage over the framework period.",
    },
    {
      question: "How can challengers prepare for framework opportunities?",
      answer:
        "They should track framework expiry dates, early engagement signals, buyer needs, lot structures, and evidence gaps well before the renewal competition opens.",
    },
  ],
  sources: getArticleSources([
    "eurLexDirective201424",
    "europeanCommissionPublicProcurement",
    "europeanCourtAuditorsCompetition",
    "tedEforms",
  ]),
  relatedSolution: {
    solutionSlug: "contract-renewal-tracking",
    linkLabel: "Explore contract renewal tracking",
    children:
      "See how Civant helps teams follow framework lifecycles, call-off patterns, and renewal windows before the next competition opens.",
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
