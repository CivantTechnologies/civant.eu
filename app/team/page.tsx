import Image from "next/image";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { advisors, founder } from "../../lib/company";
import {
  buildFaqSchema,
  buildFounderPersonSchema,
  buildPageMetadata,
} from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Founder and Advisory Team | Civant",
  description:
    "Meet the founder and advisory network behind Civant Technologies, the Irish procurement intelligence platform for European public-sector markets.",
  path: "/team",
});

const founderSchema = buildFounderPersonSchema();
const visibleAdvisors = advisors.filter((advisor) => advisor.visible);

const teamFaqs = [
  {
    question: "Who is behind Civant?",
    answer:
      "Civant is led by its founder, combining commercial, partnerships, and go-to-market experience in SaaS and public-sector ecosystems, supported by an advisory network across product, data infrastructure, and financial strategy.",
  },
  {
    question: "How involved is the advisory network?",
    answer:
      "Advisors support specific areas of the business including product architecture, data infrastructure, financial strategy, and go-to-market execution. Their role is to guide critical decisions as Civant evolves.",
  },
  {
    question: "Is Civant a large team?",
    answer:
      "Civant is intentionally built as a focused, high-capability organisation. The platform is designed around data systems and automation, supported by specialist advisors rather than a large internal team.",
  },
  {
    question: "What experience is behind Civant?",
    answer:
      "Civant is built on experience across SaaS, partnerships, and European public-sector markets, with a strong focus on market expansion, commercial strategy, and data-led decision making.",
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
];

export default function TeamPage() {
  const pageSchema = [founderSchema, buildFaqSchema(teamFaqs)];

  return (
    <>
      <Section
        className="hero-block hero-section company-hero team-hero"
        containerClassName="company-hero-container team-hero-container"
      >
        <div className="company-hero-copy team-hero-copy">
          <p className="eyebrow">Team</p>
          <h1 className="headline-xl">The people behind Civant</h1>
          <p className="text-lead">
            Civant is founder-led and built from direct experience in SaaS,
            EdTech, public-sector selling, and partner-led go-to-market
            execution.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Talk to Us"
            secondaryHref="/company"
            secondaryLabel="Company Thesis"
          />
          <p className="company-hero-proof">
            Founder-led · Advisor-supported · Built in Ireland
          </p>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap company-reading team-founder-section">
          <div className="team-founder-copy">
            <p className="eyebrow">Founder</p>
            <h2 className="headline-lg">Built from close contact with public-sector markets</h2>
            <p className="card-body section-intro company-copy">
              After 15 years across SaaS, education technology, and public-sector
              markets, David kept seeing capable teams arrive too late, with too
              little context, against incumbents who already understood the buyer
              and renewal cycle.
            </p>
            <p className="card-body company-copy">
              Civant turns that repeated problem into a system: official data,
              lifecycle signals, competitor movement, and external public signals
              connected into decisions teams can act on before pressure peaks.
            </p>
          </div>

          <article className="team-founder-card">
            <div className="team-founder-identity">
              <a
                href={founder.profileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="founder-photo-link team-founder-photo-link"
                aria-label="View David Manrique on LinkedIn"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={220}
                  height={220}
                  className="founder-photo team-founder-photo"
                />
              </a>
              <div>
                <p className="module-label">Founder & CEO</p>
                <h3 className="card-title">{founder.name}</h3>
                <p className="card-body founder-role">{founder.role}</p>
              </div>
            </div>

            <div className="team-founder-note">
              <p>
                Civant is built for preparation before pressure: evidence first,
                public-data only, and disciplined decisions before the tender
                window closes.
              </p>
              <a
                href={founder.profileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View David on LinkedIn →
              </a>
            </div>
          </article>
        </div>
        <p className="team-trust-line">
          Supported by Irish enterprise networks, with advisory input across
          product, finance, and market expansion.
        </p>
      </Section>

      <Section>
        <div className="section-heading-wrap company-reading advisor-section">
          <div className="advisor-heading-block">
            <p className="eyebrow">Advisory Network</p>
            <h2 className="headline-lg">
              Guidance across the decisions that define Civant
            </h2>
            <p className="card-body section-intro company-copy">
              Civant draws on a compact group of approved advisors across
              company building, technical infrastructure, and go-to-market
              execution.
            </p>
          </div>
          <div className="grid grid-3 advisor-grid advisor-grid-approved">
            {visibleAdvisors.map((advisor) => (
              <article key={advisor.name} className="card advisor-card">
                <a
                  href={advisor.profileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="advisor-photo-link"
                  aria-label={advisor.profileLabel}
                >
                  <Image
                    src={advisor.image}
                    alt={advisor.imageAlt}
                    width={180}
                    height={180}
                    className="advisor-photo"
                    style={{
                      objectPosition: advisor.imagePosition,
                    }}
                  />
                </a>
                <h3 className="card-title">{advisor.name}</h3>
                <p className="module-label">{advisor.role}</p>
                <div className="advisor-focus">
                  <span>Advises on</span>
                  <strong>{advisor.advice}</strong>
                </div>
                <p className="card-body">{advisor.context}</p>
                <a
                  href={advisor.profileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link advisor-link"
                >
                  {advisor.profileLabel} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section muted id="faq" className="team-faq-section">
        <div className="solution-compact-faq team-compact-faq">
          <h3 className="card-title">Team FAQ</h3>
          <div className="solution-compact-faq-list team-compact-faq-list">
            {teamFaqs.map((faq) => (
              <details
                key={faq.question}
                className="solution-compact-faq-item team-compact-faq-item"
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Talk to the people building procurement intelligence differently
          </h2>
          <p className="text-lead platform-cta-copy">
            If your team needs stronger bid discipline, better market context,
            or a clearer way to read public-sector demand, Civant can help you
            understand what is forming before the tender window closes.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Talk to Us"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>
      <SchemaScript data={pageSchema} />
    </>
  );
}
