import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTAGroup } from "../../../components/site/CTAGroup";
import { MarketCoverageLinks } from "../../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { getSolutionBySlug, SOLUTIONS } from "../../../lib/solutions";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  buildSoftwareApplicationSchema,
  SITE_URL,
} from "../../../lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

type SolutionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return buildPageMetadata({
    title: solution.metaTitle || solution.title,
    description: solution.metaDescription || solution.description,
    path: `/solutions/${solution.slug}`,
  });
}

function buildSolutionSchema(
  solution: NonNullable<ReturnType<typeof getSolutionBySlug>>,
) {
  return [
    buildServiceSchema({
      name: solution.title,
      description: solution.description,
      path: `/solutions/${solution.slug}`,
      serviceType: solution.title,
      audience: solution.primaryAudience,
    }),
    buildBreadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Solutions", item: `${SITE_URL}/solutions` },
      { name: solution.title, item: `${SITE_URL}/solutions/${solution.slug}` },
    ]),
    buildSoftwareApplicationSchema(),
    buildFaqSchema(solution.faqs),
  ];
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const relatedSolutions = SOLUTIONS.filter((item) => item.slug !== solution.slug);
  const schema = buildSolutionSchema(solution);
  const authorityLinks =
    solution.slug === "public-procurement-intelligence"
      ? [
          {
            title: "Read about competitor intelligence",
            body: "See how incumbent footprint, participation patterns, and market pressure shape stronger public-sector bid decisions.",
            href: "/resources/competitor-intelligence-in-public-procurement",
            cta: "Read the resource",
          },
        ]
      : solution.slug === "eu-tender-monitoring"
        ? [
            {
              title: "Read what European coverage really means",
              body: "Understand why real market coverage is more than a country list and how a cross-border workflow should actually work.",
              href: "/resources/european-procurement-coverage-what-market-coverage-really-means",
              cta: "Read the resource",
            },
          ]
        : solution.slug === "tender-prediction-software"
          ? [
              {
                title: "Read about external signals",
                body: "See how budgets, grants, PINs, hiring, and policy changes strengthen a forecasting model when they are tied back to procurement evidence.",
                href: "/resources/external-signals-in-public-procurement",
                cta: "Read the resource",
              },
            ]
          : [];
  const solutionPathLinks = [
    {
      title: "See the full platform workflow",
      body: "Understand how this solution fits into Panorama, Finder, Forecast, Competitors, Alerts, and Bids.",
      href: "/platform",
      cta: "View Platform",
    },
    {
      title: "Explore market coverage",
      body: "See where the workflow is live now and which countries are joining next.",
      href: "/markets",
      cta: "View Markets",
    },
    {
      title: "Understand the methodology",
      body: "Read how evidence-led forecasting and AI interpretation work together inside Civant.",
      href: "/methodology",
      cta: "View Methodology",
    },
    {
      title: "Move into pricing",
      body: "Choose a self-serve plan or talk through a custom rollout for a larger team.",
      href: "/pricing",
      cta: "View Pricing",
    },
  ];

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
          <p className="eyebrow">Why This Works</p>
          <h2 className="headline-lg">
            The answer is not more alerts. It is better timing.
          </h2>
          <p className="text-lead section-intro">
            {solution.proofPoint}
          </p>
        </div>
        <div className="solution-proof-strip">
          <article>
            <h3 className="card-title">Grounded in public evidence</h3>
            <p className="card-body">
              Civant connects official records, award history, lifecycle
              patterns, and public external signals before AI interpretation begins.
            </p>
          </article>
          <article>
            <h3 className="card-title">Designed for earlier action</h3>
            <p className="card-body">
              Teams use this workflow to shape buyer engagement, partnerships,
              and bid planning before the notice window compresses options.
            </p>
          </article>
          <article>
            <h3 className="card-title">Applied across live markets</h3>
            <p className="card-body">
              The same solution path runs across all currently live Civant
              countries, with the next rollout added into the same model.
            </p>
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

      {authorityLinks.length > 0 && (
        <Section>
          <div className="section-heading-wrap">
            <p className="eyebrow">Go Deeper</p>
            <h2 className="headline-lg">Authority reading for this topic</h2>
          </div>
          <div className="grid grid-2 solution-related-grid">
            {authorityLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card card-link interactive-surface"
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">{item.body}</p>
                <span className="card-link-cta">{item.cta}</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">FAQ</p>
          <h2 className="headline-lg">{solution.title} questions</h2>
          <p className="text-lead section-intro">
            Short answers to the search questions that usually bring teams to
            this solution page.
          </p>
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
          <p className="eyebrow">Next Steps</p>
          <h2 className="headline-lg">
            Keep following this solution path through Civant
          </h2>
        </div>
        <div className="grid grid-4 solution-related-grid">
          {solutionPathLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card card-link interactive-surface solution-link-card"
            >
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
              <span className="card-link-cta">{item.cta}</span>
            </Link>
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
