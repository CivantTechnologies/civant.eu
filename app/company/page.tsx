import Image from "next/image";
import { CTAGroup } from "../../components/site/CTAGroup";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { Section } from "../../components/site/Section";
import {
  companySupport,
  companyWhyPoints,
  whatCivantIs,
  whatCivantIsNot,
} from "../../lib/company";
import { buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Company, Mission and Trust | Civant",
  description:
    "About Civant Technologies and the evidence-led procurement intelligence system we are building for European public-sector markets.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <Section
        className="hero-block hero-section company-hero"
        containerClassName="company-hero-container"
      >
        <div className="company-hero-copy">
          <p className="eyebrow">Company</p>
          <h1 className="headline-xl">A new way to understand public procurement</h1>
          <p className="text-lead">
            Civant turns official records, renewal cycles, competitor movement,
            and external public signals into evidence-led market decisions for
            teams that need to prepare before the tender appears.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/team"
            secondaryLabel="Meet the Team"
          />
          <p className="company-hero-proof">
            For teams preparing earlier, choosing better, and competing on evidence.
          </p>
        </div>

        <aside
          className="company-hero-panel"
          aria-label="How Civant understands public procurement"
        >
          <div className="company-hero-panel-head">
            <span>System Thesis</span>
            <strong>Public data becomes useful when timing, context, and market structure connect.</strong>
          </div>
          <div className="company-origin-flow">
            <div>
              <strong>Official records</strong>
              <p>Notices, eForms, awards, and public procurement histories.</p>
            </div>
            <div>
              <strong>Market memory</strong>
              <p>Renewal cycles, buyer recurrence, incumbent patterns, and category movement.</p>
            </div>
            <div>
              <strong>Earlier decisions</strong>
              <p>Teams align around fit, timing, and bid discipline before pressure peaks.</p>
            </div>
          </div>
          <div className="company-hero-principles">
            <span>Evidence &gt; assumptions</span>
            <span>Signals &gt; noise</span>
            <span>Timing before reaction</span>
          </div>
        </aside>
      </Section>

      <Section>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Mission</p>
          <h2 className="headline-lg">Public procurement intelligence for decisions made earlier</h2>
          <p className="card-body section-intro company-copy">
            Civant turns fragmented procurement markets into structured,
            evidence-led decisions.
          </p>
          <p className="card-body company-copy">
            By combining procurement history, contract lifecycles, competitor
            movement, and public signals, Civant builds a continuous view of
            where demand is likely to emerge. AI acts as an interpretation
            layer, helping teams understand relevance, buyer intent, and the
            next best action with clarity and confidence.
          </p>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap company-reading company-background-block">
          <div className="company-background-intro">
            <div className="company-background-heading">
              <p className="eyebrow">Background</p>
              <h2 className="headline-lg">To balance the scales.</h2>
              <p className="card-body section-intro company-copy">
                Public procurement is meant to be transparent and competitive.
                In practice, advantage still gathers around the teams with the
                time, proximity, and resources to interpret the market first.
              </p>
            </div>
          </div>

          <div className="company-origin-system company-origin-system-thesis">
            <article className="company-system-thesis">
              <p className="module-label">Why Civant exists</p>
              <h3>
                Fair competition depends on more than access to documents. It
                depends on the ability to read the market in time.
              </h3>
              <p>
                Civant connects fragmented public data into a practical market
                view, so better solutions have a better chance to win.
              </p>
            </article>

            <div className="company-why-grid">
              {companyWhyPoints.map((item) => (
                <article key={item.title} className="company-why-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <p className="company-principle-line">
              Better solutions should have a better chance to win the contract.
            </p>
          </div>
        </div>
      </Section>

      <Section muted>
        <MarketCoverageLinks
          eyebrow="Country Coverage"
          title="A consistent intelligence model across European markets"
          body="Civant applies the same evidence model country by country: live coverage across Ireland, the United Kingdom, Spain, France, and Italy, with Finland, Belgium, Germany, and the Netherlands coming next."
        />
      </Section>

      <Section>
        <div className="company-reading company-matters-panel">
          <figure className="company-matters-image">
            <Image
              src="/images/company/public-procurement-architecture.jpg"
              alt="Modern public-sector architecture with glass and concrete"
              width={2200}
              height={1469}
              className="company-matters-photo"
            />
            <figcaption>Public markets should be readable before the tender window closes.</figcaption>
          </figure>

          <div className="company-matters-copy">
            <p className="eyebrow">Why This Matters</p>
            <h2 className="headline-lg">
              The real competition starts before the tender is published
            </h2>
            <p className="card-body section-intro company-copy">
              Once a tender is published, the conversation narrows. Buyers
              cannot simply brief every supplier or answer strategic questions
              outside the formal process. By then, the incumbent often has
              context others are still trying to assemble.
            </p>
            <p className="card-body company-copy">
              That timing gap shapes more than bids. Sales teams chase late
              leads, leaders question where effort is going, and marketing,
              technical, and commercial teams struggle to prioritize together.
            </p>
            <p className="card-body company-copy">
              Civant gives those teams a shared evidence base earlier, so they
              can focus on the right opportunities, estimate acquisition cost
              more accurately, and compete on substance before the window
              closes.
            </p>
            <div className="company-matters-action">
              <p>Turn public procurement data into earlier market decisions.</p>
              <CTAGroup
                primaryHref="/pricing"
                primaryLabel="Get Started"
                secondaryHref="/contact"
                secondaryLabel="Talk to Us"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
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

      <Section>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Supported by & member of</p>
          <h2 className="headline-lg">
            Institutional support around Civant in Ireland
          </h2>
          <p className="card-body section-intro company-copy">
            These programmes, institutions, and membership networks support
            Civant as the company takes shape in Ireland and builds its early
            operating foundation.
          </p>
          <div className="company-support-network">
            <div className="company-support-core">
              <span>Built in Ireland</span>
              <strong>Enterprise support around Civant</strong>
              <p>
                Founder development, regional incubation, and local business
                membership give Civant a practical base as the company grows.
              </p>
            </div>

            <div className="company-support-nodes" aria-label="Civant support network">
              {companySupport.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-support-node interactive-surface"
                  aria-label={`${item.relationship}: ${item.name}. ${item.context}`}
                >
                  {item.logo && item.logoWidth && item.logoHeight ? (
                    <span
                      className={`advisor-logo-wrap advisor-logo-wrap-${item.logoTone ?? "light"}`}
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        width={item.logoWidth}
                        height={item.logoHeight}
                        quality={100}
                        className={`advisor-logo advisor-logo-${item.logoSize ?? "standard"}`}
                      />
                    </span>
                  ) : null}
                  <span className="support-relationship">{item.relationship}</span>
                  <strong>{item.name}</strong>
                  <p>{item.supportLine}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Build from evidence, not reaction</h2>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/team"
            secondaryLabel="Meet the Team"
          />
        </div>
      </Section>
    </>
  );
}
