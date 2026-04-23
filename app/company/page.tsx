import Image from "next/image";
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
  "Civant is a predictive procurement intelligence platform for Europe.",
  "Civant reconciles and normalizes data from EU, national, and public-domain procurement sources.",
  "Civant analyzes hard procurement evidence, contract lifecycles, competitor activity, and external signals.",
  "Civant uses AI to interpret match, scope, buyer intent, and strategy on top of structured evidence.",
];

const whatCivantIsNot = [
  "Civant is not an AI chatbot company.",
  "Civant is not an insider tool or source of non-public information.",
  "Civant is not a tender issuer, influencer, or intermediary.",
  "Civant does not guarantee tender outcomes.",
  "Civant does not replace sales strategy, account management expertise, or commercial judgement.",
];

const advisoryPillars = [
  "Public procurement",
  "Education market expansion",
  "Enterprise technology",
  "Data and analytics",
  "Go-to-market leadership",
];

const founder = {
  name: "David Manrique",
  role: "Founder & CEO, Civant",
  image: "/people/david-manrique.jpg",
  profileHref: "https://www.linkedin.com/in/davidmanriquec/",
};

const advisors = [
  {
    name: "Jean-Marie Cognet",
    role: "Co-founder & CEO, UbiCast",
    context: "VP Higher Education at EdTech France, with deep European EdTech and public-sector market experience.",
    image: "/people/jean-marie-cognet.jpg",
    imageAlt: "Jean-Marie Cognet",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/jmcognet/",
    profileLabel: "View Jean-Marie on LinkedIn",
  },
  {
    name: "Florent Thiery",
    role: "Product, OVHcloud; former CTO, UbiCast",
    context: "Technical and infrastructure guidance for European SaaS scale-up decisions.",
    image: "/people/florent-thiery.jpg",
    imageAlt: "Florent Thiery",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/fthiery/",
    profileLabel: "View Florent on LinkedIn",
  },
  {
    name: "Anita van der Laan",
    role: "Director Shipping, Hanzevast",
    context: "Scale-up, finance, and category-expansion perspective from regulated operating environments.",
    image: "/people/anita-van-der-laan.jpg",
    imageAlt: "Anita van der Laan",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/anita-van-der-laan-40450218/",
    profileLabel: "View Anita on LinkedIn",
  },
  {
    name: "Jukka Sormunen",
    role: "RDI Director, Mobie",
    context:
      "Education-market, Nordic expansion, and public-sector learning technology perspective.",
    image: "/people/jukka-sormunen.jpg",
    imageAlt: "Jukka Sormunen",
    imagePosition: "50% 50%",
    profileHref: "https://www.linkedin.com/in/jukkasormunen/",
    profileLabel: "View Jukka on LinkedIn",
  },
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
          <article className="founder-profile-card">
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
              <p className="module-label">Founder</p>
              <h3 className="card-title">{founder.name}</h3>
              <p className="card-body founder-role">{founder.role}</p>
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

      <Section muted>
        <div className="section-heading-wrap company-reading">
          <p className="eyebrow">Mission</p>
          <h2 className="headline-lg">What Civant is built to do</h2>
          <p className="card-body section-intro company-copy">
            Civant exists to transform complex public procurement processes into
            structured, confident, and well-timed decisions for suppliers,
            buyers, and the public sector.
          </p>
          <p className="card-body company-copy">
            The platform is built as a prediction engine first: official
            procurement records, contract lifecycles, competitor movement, and
            external public signals form the evidence base. AI is used as an
            interpretation layer that helps teams understand match, scope,
            buyer intent, and next-best action.
          </p>
        </div>
      </Section>

      <Section>
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
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Choose the path that fits</h2>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Book a Demo"
            secondaryHref="/pricing"
            secondaryLabel="View Pricing"
          />
        </div>
      </Section>
      <SchemaScript data={founderSchema} />
    </>
  );
}
