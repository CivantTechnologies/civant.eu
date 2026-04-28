import Image from "next/image";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { advisors, founder } from "../../lib/company";
import { buildFounderPersonSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Team",
  description:
    "Meet the founder and advisory network behind Civant Technologies, the Irish procurement intelligence platform for European public-sector markets.",
  path: "/team",
});

const founderSchema = buildFounderPersonSchema();

export default function TeamPage() {
  return (
    <>
      <Section
        className="hero-block hero-section company-hero team-hero"
        containerClassName="company-hero-container team-hero-container"
      >
        <div className="company-hero-copy team-hero-copy">
          <p className="eyebrow">Team</p>
          <h1 className="headline-xl">The operators behind Civant</h1>
          <p className="text-lead">
            Civant is founder-led and supported by advisors across company
            management, product infrastructure, financial operations, and
            go-to-market partnerships.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Talk to Us"
            secondaryHref="/company"
            secondaryLabel="Company Thesis"
          />
          <p className="company-hero-proof">
            Founder-led · Operator advised · Built in Ireland
          </p>
        </div>

        <aside className="team-hero-panel" aria-label="Civant operating guidance">
          <div className="team-operator-panel-head">
            <span>Operating Model</span>
            <strong>Founder-led execution with specialist guidance.</strong>
            <p>
              Product judgement, procurement-market experience, technical
              infrastructure, finance discipline, and European go-to-market
              perspective.
            </p>
          </div>
          <div className="team-domain-grid" aria-label="Advisory domains">
            <div>
              <span>Company</span>
              <strong>Management & sales</strong>
            </div>
            <div>
              <span>Product</span>
              <strong>Technical scale</strong>
            </div>
            <div>
              <span>Finance</span>
              <strong>Operations & regulation</strong>
            </div>
            <div>
              <span>GTM</span>
              <strong>Strategy & partnerships</strong>
            </div>
          </div>
        </aside>
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

          <article className="founder-profile-card founder-profile-card-premium team-founder-card">
            <a
              href={founder.profileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="founder-photo-link"
              aria-label="View David Manrique on LinkedIn"
            >
              <Image
                src={founder.image}
                alt={founder.name}
                width={220}
                height={220}
                className="founder-photo"
              />
            </a>
            <div>
              <p className="module-label">Founder & CEO</p>
              <h3 className="card-title">{founder.name}</h3>
              <p className="card-body founder-role">{founder.role}</p>
              <p className="founder-belief">
                Building Civant as a prediction intelligence platform: evidence
                first, public-data only, and designed for better bid/no-bid
                discipline.
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
      </Section>

      <Section>
        <div className="section-heading-wrap company-reading advisor-section">
          <div className="advisor-heading-block">
            <p className="eyebrow">Advisory Network</p>
            <h2 className="headline-lg">
              Guidance across the decisions that define Civant
            </h2>
            <p className="card-body section-intro company-copy">
              From product architecture and data infrastructure to financial
              strategy and go-to-market execution.
            </p>
          </div>
          <div className="grid grid-4 advisor-grid">
            {advisors.map((advisor) => (
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

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Meet the system behind the team</h2>
          <CTAGroup
            primaryHref="/company"
            primaryLabel="Company Thesis"
            secondaryHref="/contact"
            secondaryLabel="Talk to Us"
          />
        </div>
      </Section>
      <SchemaScript data={founderSchema} />
    </>
  );
}
