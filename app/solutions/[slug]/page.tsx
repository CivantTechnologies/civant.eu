import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTAGroup } from "../../../components/site/CTAGroup";
import { MarketCoverageLinks } from "../../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { getSolutionBySlug, SOLUTIONS } from "../../../lib/solutions";
import {
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
  SITE_URL,
} from "../../../lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

type SolutionPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    return {};
  }

  return buildPageMetadata({
    title: `${solution.title} | Civant`,
    description: solution.description,
    path: `/solutions/${solution.slug}`,
  });
}

function buildSolutionSchema(
  solution: NonNullable<ReturnType<typeof getSolutionBySlug>>,
) {
  const pageUrl = `${SITE_URL}/solutions/${solution.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: solution.title,
      url: pageUrl,
      description: solution.description,
      about: [
        solution.title,
        "predictive procurement intelligence",
        "tender forecasting",
        "European public procurement",
      ],
      publisher: {
        "@type": "Organization",
        name: "Civant Technologies Limited",
        url: SITE_URL,
      },
      mainEntity: {
        "@type": "SoftwareApplication",
        name: "Civant",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${SITE_URL}/platform`,
        description: solution.description,
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/pricing`,
          priceCurrency: "EUR",
          price: "299",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${SITE_URL}/solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: solution.title,
          item: pageUrl,
        },
      ],
    },
    buildSoftwareApplicationSchema(),
    buildFaqSchema(solution.faqs),
  ];
}

export default function SolutionDetailPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  const relatedSolutions = SOLUTIONS.filter((item) => item.slug !== solution.slug);
  const schema = buildSolutionSchema(solution);

  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">{solution.eyebrow}</p>
        <h1 className="headline-xl">{solution.headline}</h1>
        <p className="text-lead">{solution.description}</p>
        <CTAGroup
          primaryHref="/pricing"
          primaryLabel="View Pricing"
          secondaryHref="/contact"
          secondaryLabel="Request Custom Plan"
        />
      </Section>

      <Section muted>
        <div className="solution-definition">
          <p className="eyebrow">Definition</p>
          <h2 className="headline-lg">What this means</h2>
          <p className="text-lead">{solution.definition}</p>
          <p className="solution-audience">{solution.primaryAudience}</p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-3 solution-detail-grid">
          <article className="card">
            <p className="module-label">The Problem</p>
            <h2 className="card-title">Late visibility creates weak decisions</h2>
            <p className="card-body">{solution.problem}</p>
          </article>
          <article className="card">
            <p className="module-label">Civant Approach</p>
            <h2 className="card-title">Signals before the tender window</h2>
            <p className="card-body">{solution.civantApproach}</p>
          </article>
          <article className="card">
            <p className="module-label">Why It Matters</p>
            <h2 className="card-title">Not a chatbot or alert feed</h2>
            <p className="card-body">{solution.differentiator}</p>
          </article>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Signals</p>
          <h2 className="headline-lg">The evidence Civant connects</h2>
          <p className="text-lead section-intro">{solution.proofPoint}</p>
        </div>
        <div className="solution-signal-list">
          {solution.signals.map((signal) => (
            <div key={signal} className="solution-signal-item">
              <CheckCircle2 aria-hidden="true" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Use Cases</p>
          <h2 className="headline-lg">
            What teams do with this intelligence
          </h2>
        </div>
        <div className="flow-track solution-use-case-flow">
          {solution.useCases.map((useCase, index) => (
            <article key={useCase} className="flow-card">
              <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="card-title">{useCase}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <MarketCoverageLinks
          eyebrow="Market Coverage"
          title="Live coverage across five markets, with four coming next"
          body="Civant is live in Ireland, the United Kingdom, Spain, France, and Italy. Finland, Belgium, Germany, and the Netherlands are part of the next rollout."
          compact
        />
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">FAQ</p>
          <h2 className="headline-lg">{solution.title} questions</h2>
        </div>
        <div className="faq-list">
          {solution.faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3 className="card-title">{faq.question}</h3>
              <p className="card-body">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Related Solutions</p>
          <h2 className="headline-lg">Explore adjacent search paths</h2>
        </div>
        <div className="grid grid-3 solution-related-grid">
          {relatedSolutions.map((item) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className="card card-link interactive-surface"
            >
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.description}</p>
              <span className="card-link-cta">View Solution</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Put {solution.title.toLowerCase()} to work
          </h2>
          <p className="text-lead platform-cta-copy">
            Choose a plan to start with Civant, or request a custom plan for
            multi-market setup and team onboarding.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="View Pricing"
            secondaryHref="/contact"
            secondaryLabel="Request Custom Plan"
          />
        </div>
      </Section>

      <SchemaScript data={schema} />
    </>
  );
}
