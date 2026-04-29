import Link from "next/link";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  SITE_URL,
} from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Understanding Civant | Procurement Forecasting Intelligence",
  description:
    "Learn how Civant works, what data it uses, how tender forecasting supports earlier public-sector decisions, and who the platform is built for.",
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

const understandingSections: UnderstandingSection[] = [
  {
    id: "about-civant",
    eyebrow: "Section 1",
    title: "About Civant",
    faqs: [
      {
        question: "What is Civant?",
        answer:
          "Civant is a procurement intelligence platform that helps teams identify likely future public-sector opportunities before formal tenders are published. It combines procurement history, contract lifecycles, buyer behaviour, competitor activity, and public signals into a structured, forward-looking view.",
      },
      {
        question: "Who is Civant for?",
        answer:
          "Civant is built for teams that compete in public-sector markets, including bid teams, sales teams, partnerships teams, and market intelligence functions that need earlier visibility and better prioritisation.",
      },
      {
        question: "How is Civant different from tender alerts?",
        answer:
          "Tender alerts notify teams once a procurement process is already live. Civant focuses on what happens before that point, helping teams understand where demand is likely to emerge so they can prepare earlier, engage sooner, and prioritise more effectively.",
      },
      {
        question: "What markets does Civant cover?",
        answer:
          "Civant is currently live across Ireland, the United Kingdom, Spain, France, and Italy, with additional European markets being added over time.",
      },
    ],
  },
  {
    id: "how-civant-works",
    eyebrow: "Section 2",
    title: "How Civant Works",
    faqs: [
      {
        question: "How does Civant forecast tenders?",
        answer:
          "Civant identifies patterns across procurement history, contract lifecycles, buyer behaviour, and public signals. These signals are structured into a forecasting layer that highlights likely future procurement activity based on timing, recurrence, and market movement.",
      },
      {
        question: "What data does Civant use?",
        answer:
          "Civant uses a combination of public procurement portals and official notices, contract and award data, pre-notices such as PINs and eForms, budget and funding signals, policy and regulatory developments, news, media, public communications, market and industry activity, and web and social signals. These sources are normalised into a unified intelligence layer.",
      },
      {
        question: "What are PINs and eForms?",
        answer:
          "PINs, or Prior Information Notices, and eForms are official pre-procurement signals used across European public procurement. They provide early indications of upcoming activity and are a key input into Civant's forecasting model.",
      },
      {
        question: "How accurate are Civant forecasts?",
        answer:
          "Civant forecasts are evidence-led and continuously validated against subsequently published tenders. Outputs are confidence-scored and designed to support planning and prioritisation rather than provide guaranteed outcomes.",
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
    eyebrow: "Section 3",
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
    eyebrow: "Section 4",
    title: "Company & Trust",
    faqs: [
      {
        question: "Who is behind Civant?",
        answer:
          "Civant is led by its founder, combining commercial, partnerships, and go-to-market experience in SaaS and public-sector ecosystems, supported by an advisory network across product, data infrastructure, and financial strategy.",
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
        question: "How is Civant supported?",
        answer:
          "Civant is supported by Enterprise Ireland, the Local Enterprise Office, and Dundalk Institute of Technology through structured programmes designed to support high-potential companies.",
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

const explainerLinks = [
  { href: "#about-civant", label: "About Civant" },
  { href: "#how-civant-works", label: "How it works" },
  { href: "#use-and-value", label: "Use & value" },
  { href: "#what-civant-is-not", label: "What it is not" },
  { href: "#company-and-trust", label: "Company & trust" },
];

const contextLinks = [
  {
    href: "/platform",
    label: "Procurement intelligence platform",
  },
  {
    href: "/methodology",
    label: "Forecasting methodology",
  },
  {
    href: "/markets",
    label: "Market coverage",
  },
];

export default function UnderstandingCivantPage() {
  return (
    <>
      <Section
        className="hero-block hero-section company-hero understanding-hero"
        containerClassName="company-hero-container team-hero-container"
      >
        <div className="company-hero-copy understanding-hero-copy">
          <p className="eyebrow">Company</p>
          <h1 className="headline-xl">Understanding Civant</h1>
          <p className="text-lead">
            Civant helps teams understand where public-sector demand is likely
            to move before the tender is published. This page answers the most
            common questions about how the platform works, what it&apos;s built
            on, and who it&apos;s for.
          </p>

          <nav className="understanding-hero-nav" aria-label="Understanding Civant sections">
            {explainerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="understanding-context-links" aria-label="Related Civant pages">
            {contextLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {understandingSections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          muted={index % 2 === 0}
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

      <Section id="what-civant-is-not" muted>
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
            <li>Civant is not a tender alert tool.</li>
            <li>Civant is not an insider information platform.</li>
            <li>Civant does not guarantee tender outcomes.</li>
            <li>Civant does not replace sales, bid, or account strategy.</li>
            <li>Civant does not rely on AI guesswork alone.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="understanding-example-callout">
          <p className="eyebrow">Example</p>
          <p>
            A supplier targeting universities in Spain can use Civant to
            identify likely renewal windows, understand incumbent activity,
            prioritise the right institutions, and prepare outreach before a
            formal tender is released.
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
            primaryHref="/contact"
            primaryLabel="Book a 20-minute walkthrough"
            secondaryHref="/pricing"
            secondaryLabel="View Pricing"
          />
        </div>
      </Section>

      <SchemaScript data={pageSchema} />
    </>
  );
}
