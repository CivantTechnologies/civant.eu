import Image from "next/image";
import Link from "next/link";
import { CTAGroup } from "../../../components/site/CTAGroup";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { CIVANT_SHORT_DEFINITION, founder } from "../../../lib/company";
import {
  buildBreadcrumbSchema,
  buildFounderPersonSchema,
  buildPageMetadata,
  SITE_URL,
} from "../../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "David Manrique, Founder and CEO | Civant",
  description:
    "David Manrique is the founder and CEO of Civant, an Irish procurement intelligence company with forecasting at its core.",
  path: founder.profilePath,
  image: founder.image,
});

const founderPageSchema = [
  buildFounderPersonSchema(),
  buildBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Team", item: `${SITE_URL}/team` },
    { name: founder.name, item: `${SITE_URL}${founder.profilePath}` },
  ]),
];

const founderResponsibilities = [
  {
    title: "Product direction",
    body: "Turning recurring public-sector commercial problems into an evidence-led product and operating model.",
  },
  {
    title: "Method and claims",
    body: "Keeping forecast evidence, AI interpretation, external review, and marketing claims clearly separated.",
  },
  {
    title: "Customer work",
    body: "Working directly with early customers on market entry, buyer focus, procurement timing, and bid discipline.",
  },
  {
    title: "Company development",
    body: "Building Civant from Ireland through customer evidence, independent scrutiny, and controlled expansion.",
  },
];

export default function DavidManriquePage() {
  return (
    <>
      <Section
        className="hero-block hero-section company-hero founder-entity-hero"
        containerClassName="company-hero-container founder-entity-hero-container"
      >
        <div className="company-hero-copy founder-entity-copy">
          <p className="eyebrow">Founder &amp; CEO</p>
          <h1 className="headline-xl">{founder.name}</h1>
          <p className="text-lead">
            David founded Civant after repeatedly seeing capable suppliers reach
            public-sector opportunities too late, with too little context and too
            much pressure on small commercial and bid teams.
          </p>
          <p className="founder-entity-definition">{CIVANT_SHORT_DEFINITION}</p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Talk to David"
            secondaryHref="/company"
            secondaryLabel="Why Civant Exists"
          />
        </div>

        <article className="team-founder-card founder-entity-card">
          <div className="founder-entity-photo-wrap">
            <Image
              src={founder.image}
              alt={founder.name}
              width={420}
              height={420}
              priority
              className="founder-entity-photo"
            />
          </div>
          <div>
            <p className="module-label">Experience</p>
            <p className="card-body founder-entity-experience">{founder.experience}</p>
            <a
              href={founder.profileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View David on LinkedIn
            </a>
          </div>
        </article>
      </Section>

      <Section muted>
        <div className="section-heading-wrap founder-entity-heading">
          <p className="eyebrow">Founder accountability</p>
          <h2 className="headline-lg">The person behind the product and its claims</h2>
          <p className="text-lead section-intro">
            Civant is founder-led. David remains directly accountable for how
            the platform is described, what evidence is published, and where the
            company draws a clear limit around uncertainty.
          </p>
        </div>
        <div className="grid grid-2 founder-responsibility-grid">
          {founderResponsibilities.map((item) => (
            <article key={item.title} className="card founder-responsibility-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="founder-public-record">
          <div>
            <p className="eyebrow">Public responsibility</p>
            <h2 className="headline-lg">Named ownership of Civant&apos;s claims and method</h2>
            <p className="card-body section-intro company-copy">
              David is publicly accountable for how Civant describes the
              platform, its evidence, its limitations, and its development.
            </p>
            <p className="card-body company-copy">
              Independent outcomes will be published only after the scope,
              findings, actions, limitations, and implementation status can be
              documented.
            </p>
            <Link href="/methodology" className="text-link">
              Review the forecasting methodology
            </Link>
          </div>
          <div className="founder-research-links">
            <p className="module-label">Research &amp; method</p>
            <Link href="/methodology">Civant forecasting methodology</Link>
            <Link href="/resources">Civant research and resources</Link>
            <Link href="/understanding-civant">Understanding Civant</Link>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Bring David the real procurement problem</h2>
          <p className="text-lead platform-cta-copy">
            Share the market, buyer, category, or workflow you are trying to
            understand. The first conversation is about fit, evidence, and what
            Civant can responsibly support.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Start the Conversation"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>

      <SchemaScript data={founderPageSchema} />
    </>
  );
}
