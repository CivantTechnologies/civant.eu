import Link from "next/link";
import { BrowserFrame } from "../../components/site/BrowserFrame";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { CIVANT_DEFINITION, founder } from "../../lib/company";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  SITE_URL,
} from "../../lib/seo";
import { COMING_MARKET_LIST, LIVE_MARKET_LIST } from "../../lib/markets";
import { MARKET_COVERAGE_SNAPSHOT } from "../../lib/siteFacts";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Understanding Civant | Procurement Forecasting Intelligence",
  description:
    "Learn how Civant connects forecast timing, buyer intelligence, competitor activity, and procurement evidence for public-sector growth decisions.",
  path: "/understanding-civant",
});

type UnderstandingFaq = {
  question: string;
  answer: string;
};

type UnderstandingSection = {
  id: string;
  eyebrow: string;
  title: string;
  faqs: UnderstandingFaq[];
};

const operatingLayers = [
  {
    label: "Core planning engine",
    title: "Forecast",
    body: "Connects procurement evidence, recurrence, and contract timing to identify likely future opportunity windows.",
    href: "/platform#forecast",
    featured: true,
  },
  {
    label: "Buyer intelligence",
    title: "Buyers",
    body: "Helps teams discover, assess, and track the public institutions that fit their market and account strategy.",
    href: "/platform#buyers",
    featured: false,
  },
  {
    label: "Competitive context",
    title: "Competitors",
    body: "Adds incumbent footprint, participation patterns, and market pressure before a team commits bid effort.",
    href: "/platform#competitors",
    featured: false,
  },
];

const understandingSections: UnderstandingSection[] = [
  {
    id: "about-civant",
    eyebrow: "Platform",
    title: "About Civant",
    faqs: [
      {
        question: "What is Civant?",
        answer: CIVANT_DEFINITION,
      },
      {
        question: "Who is Civant for?",
        answer:
          "Civant is built for teams that compete in public-sector markets, including bid teams, sales teams, partnerships teams, and market intelligence functions that need earlier visibility and better prioritisation.",
      },
      {
        question: "How is Civant different from tender alerts?",
        answer:
          "Tender alerts notify teams once a procurement process is already live. Civant focuses on what happens before that point, helping teams understand where demand is likely to emerge, decide where to compete, and act before the formal response window opens.",
      },
      {
        question: "What markets does Civant cover?",
        answer:
          `Coverage status last reviewed ${MARKET_COVERAGE_SNAPSHOT.dateLabel}: Civant was live across ${LIVE_MARKET_LIST}, with ${COMING_MARKET_LIST} planned next. A market is live when it is accessible to users and fully operational in the platform.`,
      },
    ],
  },
  {
    id: "how-civant-works",
    eyebrow: "Method",
    title: "How Civant Works",
    faqs: [
      {
        question: "How does Civant forecast tenders?",
        answer:
          "Civant identifies patterns across procurement history, contract lifecycles, buyer behaviour, and public signals. These signals are structured into a forecasting layer that highlights likely future procurement activity based on timing, recurrence, and market movement.",
      },
      {
        question: "Where do Buyers and Competitors fit?",
        answer:
          "They are core parts of the Civant workflow. Forecast identifies likely opportunity timing. Buyers helps teams discover and track the relevant public institutions. Competitors adds incumbent position, participation patterns, and market pressure so teams can judge where to compete with better context.",
      },
      {
        question: "What data does Civant use?",
        answer:
          "Civant uses a combination of public procurement portals and official notices, contract and award data, pre-notices such as PINs and eForms, budget and funding signals, policy and regulatory developments, news, media, public communications, market and industry activity, and web and social signals. These sources are normalised into a unified intelligence layer.",
      },
      {
        question: "What are PINs and eForms?",
        answer:
          "PINs, or Prior Information Notices, can provide advance notice of planned procurement activity. eForms are the EU-standard digital forms used to publish procurement notices across planning, competition, and award stages. Civant uses relevant records as evidence across the procurement lifecycle.",
      },
      {
        question: "How accurate are Civant forecasts?",
        answer:
          "Civant forecasts are evidence-led and checked against subsequently published tenders. Outputs are confidence-scored and support planning rather than guarantee outcomes. Public performance results are published only when the cohort, method, time window, limitations, and supporting documentation are inspectable.",
      },
      {
        question: "How does Civant use AI?",
        answer:
          "AI helps interpret relevance, buyer context, scope, and next best action. It works as an interpretation layer on top of structured procurement evidence rather than replacing the forecasting model.",
      },
      {
        question: "Does Civant guarantee future tenders?",
        answer:
          "No. Civant provides structured insight into where demand is likely to emerge. It does not guarantee that a tender will be published or awarded.",
      },
    ],
  },
  {
    id: "use-and-value",
    eyebrow: "In practice",
    title: "Use & Value",
    faqs: [
      {
        question: "How do teams use Civant?",
        answer:
          "Teams use Civant to identify likely upcoming opportunities, prioritise accounts and markets, plan bid and commercial activity earlier, understand buyer behaviour and timing, track competitor positioning, and align internal teams around a shared market view.",
      },
      {
        question: "When should I engage buyers?",
        answer:
          "Civant helps identify earlier engagement windows before a tender becomes formalised. This allows teams to build relationships, understand requirements, and position effectively before the process becomes reactive.",
      },
      {
        question: "How does Civant help with bid strategy?",
        answer:
          "Civant helps teams decide where to focus effort by highlighting which opportunities are more likely, better aligned, and strategically relevant. This reduces wasted bid effort and improves prioritisation.",
      },
      {
        question: "How is Civant used for market expansion?",
        answer:
          "Civant provides visibility across multiple European markets, allowing teams to understand where demand is forming, which buyers are active, and how to enter new markets with better timing and context.",
      },
    ],
  },
  {
    id: "company-and-trust",
    eyebrow: "Accountability",
    title: "Company & Trust",
    faqs: [
      {
        question: "Who is behind Civant?",
        answer:
          `${founder.name} is Civant's founder and CEO. He is directly accountable for the product, its evidence standards, and its public claims, supported by named advisors across product, infrastructure, finance, and market strategy.`,
      },
      {
        question: "Is Civant a large team?",
        answer:
          "Civant is intentionally built as a focused, high-capability organisation. The platform is designed around systems, data, and automation, supported by specialist advisors rather than a large internal team.",
      },
      {
        question: "Where is Civant based?",
        answer:
          "Civant is based in Ireland and focused on European public procurement markets.",
      },
      {
        question: "How does Civant publish independent review outcomes?",
        answer:
          "Civant publishes an external review outcome only when the scope, findings, resulting actions, implementation status, and limitations are documented. Participation, selection, or funding is not presented as evidence of product performance.",
      },
    ],
  },
];

const allFaqs = understandingSections.flatMap((section) => section.faqs);

const pageSchema = [
  buildFaqSchema(allFaqs),
  buildBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Company", item: `${SITE_URL}/company` },
    { name: "Understanding Civant", item: `${SITE_URL}/understanding-civant` },
  ]),
];

export default function UnderstandingCivantPage() {
  return (
    <>
      <Section
        className="hero-block hero-section hero-compact company-hero understanding-hero"
        containerClassName="company-hero-container team-hero-container"
      >
        <div className="company-hero-copy understanding-hero-copy">
          <p className="eyebrow">Platform explainer</p>
          <h1 className="headline-xl">Understanding Civant</h1>
          <p className="text-lead">{CIVANT_DEFINITION}</p>
        </div>
      </Section>

      <Section id="operating-model" muted className="understanding-operating-section">
        <div className="section-heading-wrap understanding-operating-heading">
          <p className="eyebrow">The operating model</p>
          <h2 className="headline-lg">Forecasting leads. Context makes it useful.</h2>
          <p className="text-lead section-intro">
            Civant does not treat a forecast as a detached score. It connects
            likely timing to the buyer, competitor landscape, and supporting
            evidence so teams can make a practical commercial decision.
          </p>
        </div>

        <div className="understanding-operating-layout">
          <div className="understanding-operating-visual">
            <BrowserFrame
              src="/screenshots/forecast-pipeline.png"
              alt="Civant Forecast showing likely opportunity windows, buyer context, and planning status"
              caption="Forecast: likely opportunity timing connected to buyer and planning context"
              width={1352}
              height={760}
            />
          </div>

          <div className="understanding-operating-layers">
            {operatingLayers.map((layer) => (
              <Link
                key={layer.title}
                href={layer.href}
                className={`understanding-operating-layer${
                  layer.featured ? " understanding-operating-layer-featured" : ""
                }`}
              >
                <p className="module-label">{layer.label}</p>
                <h3 className="card-title">{layer.title}</h3>
                <p className="card-body">{layer.body}</p>
                <span className="text-link">See this platform layer</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {understandingSections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          muted={index % 2 !== 0}
          className="understanding-faq-section"
        >
          <div className="section-heading-wrap understanding-faq-heading">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="headline-lg">{section.title}</h2>
          </div>

          <div className="solution-compact-faq understanding-faq-block">
            <div className="solution-compact-faq-list understanding-faq-list">
              {section.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="solution-compact-faq-item understanding-faq-item"
                >
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section id="what-civant-is-not">
        <div className="understanding-trust-grid">
          <div className="understanding-trust-copy">
            <p className="eyebrow">Clarity</p>
            <h2 className="headline-lg">What Civant is not</h2>
            <p className="text-lead section-intro">
              Civant is built for disciplined public-sector planning. It gives
              teams earlier context without pretending the market is certain.
            </p>
          </div>
          <ul className="understanding-not-list" aria-label="What Civant is not">
            <li>Civant is not limited to tender alerts.</li>
            <li>Civant is not an insider information platform.</li>
            <li>Civant does not guarantee tender outcomes.</li>
            <li>Civant does not replace sales, bid, or account strategy.</li>
            <li>Civant does not rely on AI guesswork alone.</li>
          </ul>
        </div>
      </Section>

      <Section muted>
        <div className="understanding-example-callout">
          <p className="eyebrow">Example</p>
          <p>
            A supplier targeting universities in Spain can use Forecast to
            identify likely renewal windows, Buyers to assess and track the
            right institutions, and Competitors to understand incumbent
            activity before deciding where to focus commercial and bid effort.
          </p>
        </div>
      </Section>

      <Section>
        <div className="final-cta understanding-final-cta">
          <h2 className="headline-lg final-cta-title">
            Map your next public-sector opportunity
          </h2>
          <p className="text-lead platform-cta-copy">
            Bring a country, category, or target buyer, and we&apos;ll show
            where demand is likely to emerge.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="View Plans"
            secondaryHref="/contact"
            secondaryLabel="Book a Walkthrough"
          />
        </div>
      </Section>

      <SchemaScript data={pageSchema} />
    </>
  );
}
