import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildFounderPersonSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Company",
  description:
    "About Civant Technologies and our mission to improve enterprise decision-making in European public procurement markets.",
  path: "/company",
});

const founderSchema = buildFounderPersonSchema();

const whatCivantIs = [
  "Civant brings visibility to public procurement opportunities.",
  "Civant reconciles and normalizes data from EU and national procurement sources.",
  "Civant analyzes publicly available procurement data.",
  "Civant supports earlier preparation and more intentional planning.",
];

const whatCivantIsNot = [
  "Civant is not an insider tool or source of non-public information.",
  "Civant is not a tender issuer, influencer, or intermediary.",
  "Civant does not guarantee tender outcomes.",
  "Civant does not replace sales strategy, account management expertise, or commercial judgement.",
];

const advisoryPillars = [
  "Public procurement",
  "Enterprise technology",
  "Data and analytics",
  "Go-to-market leadership",
];

export default function CompanyPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Company</p>
        <h1 className="headline-xl">Who we are and why we exist</h1>
        <p className="text-lead">
          Civant was built from practical procurement operating experience and
          is focused on enabling structured, earlier, and better-timed decisions
          in public-sector markets.
        </p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Background</p>
          <h2 className="headline-lg">
            Civant originated from real operational procurement pressure
          </h2>
          <p className="card-body section-intro company-copy">
            Civant Technologies was founded in Ireland by David Manrique, after
            more than 15 years working in SaaS and educational technology with
            public-sector buyers and suppliers across international markets.
          </p>
          <p className="card-body company-copy">
            Over time, David saw strong teams lose opportunities not because
            solutions were weak, but because tenders surfaced too late and
            decisions were forced under compressed timelines.
          </p>
          <p className="card-body company-copy">
            While entering new markets, he manually mapped institutions,
            incumbents, and renewal cycles with spreadsheets and reminders. That
            manual process exposed a systemic visibility gap in procurement
            planning and became the first real iteration of Civant.
          </p>
          <p className="card-body company-copy">
            The underlying issue was structural: public procurement data exists,
            but it has not been consistently usable, connected, or organized for
            proactive decision-making.
          </p>

          <blockquote className="company-quote">
            <p className="company-quote-text">
              "When preparation replaces reaction, tenders stop being feared and
              start becoming a viable, repeatable path to growth."
            </p>
            <p className="company-quote-meta">
              — David Manrique
              <br />
              Founder, Civant
            </p>
          </blockquote>

          <a
            href="https://www.linkedin.com/in/davidmanriquec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link company-link"
          >
            View David Manrique on LinkedIn →
          </a>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Mission</p>
          <h2 className="headline-lg">What Civant is built to do</h2>
          <p className="card-body section-intro company-copy">
            Civant exists to transform complex public procurement processes into
            structured, confident, and well-timed decisions for suppliers,
            buyers, and the public sector.
          </p>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Why This Matters</p>
          <h2 className="headline-lg">
            Procurement intelligence has system-level impact
          </h2>
          <p className="card-body section-intro company-copy">
            Public procurement is designed to support fair competition, stronger
            outcomes, and responsible use of public funds.
          </p>
          <p className="card-body company-copy">
            When preparation time is uneven and timing visibility is poor, those
            goals weaken: capable suppliers are excluded, buyers receive fewer
            high-quality responses, and public value is reduced.
          </p>
          <p className="card-body company-copy">
            Making timing visible helps teams compete on merit rather than
            reaction speed, improves planning quality, and supports healthier
            market participation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Commitment to Transparency</p>
          <h2 className="headline-lg">How Civant defines its role</h2>
        </div>
        <div className="grid grid-2 company-trust-grid">
          <article className="card company-trust-card">
            <h3 className="card-title">What Civant is</h3>
            <ul className="stack-list coverage-list">
              {whatCivantIs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card company-trust-card company-trust-card-muted">
            <h3 className="card-title">What Civant is not</h3>
            <ul className="stack-list coverage-list">
              {whatCivantIsNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Advisory Network</p>
          <h2 className="headline-lg">
            Guidance from experienced domain and operating leaders
          </h2>
          <p className="card-body section-intro company-copy">
            Civant benefits from advisors with experience across:
          </p>
          <div className="pill-row">
            {advisoryPillars.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Continue the conversation</h2>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Demo"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>
      <SchemaScript data={founderSchema} />
    </>
  );
}
