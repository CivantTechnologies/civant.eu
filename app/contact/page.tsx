import Image from "next/image";
import Link from "next/link";
import { ContactLiveSections } from "../../components/site/ContactLiveSections";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { CIVANT_LEGAL_NAME } from "../../lib/brand";
import {
  CIVANT_OFFICE_ADDRESS_LINES,
  CIVANT_OFFICE_MAP_URL,
  founder,
} from "../../lib/company";
import { buildContactPointSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Contact Civant | Procurement Intelligence",
  description:
    "Ask a Civant platform question, discuss a custom rollout, or contact the company about partnerships, research, funding, or investment.",
  path: "/contact",
});

const contactSchema = buildContactPointSchema();

export default function ContactPage() {
  return (
    <>
      <Section className="hero-block hero-section hero-compact">
        <p className="eyebrow">Contact</p>
        <h1 className="headline-xl">Talk to Civant</h1>
        <p className="text-lead">
          Choose a self-serve plan for immediate access. Use this page for
          platform fit, a custom rollout, or a company, partnership, research,
          funding, or investment enquiry.
        </p>
        <CTAGroup
          primaryHref="#contact-form"
          primaryLabel="Ask a Platform Question"
          secondaryHref="/pricing"
          secondaryLabel="View Plans"
        />
      </Section>

      <Section muted>
        <article className="team-founder-card contact-founder-card">
          <div className="team-founder-identity">
            <Link
              href={founder.profilePath}
              className="founder-photo-link team-founder-photo-link"
              aria-label={`Read about ${founder.name}`}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                width={180}
                height={180}
                className="founder-photo team-founder-photo"
              />
            </Link>
            <div>
              <p className="module-label">Founder access</p>
              <h2 className="card-title">Talk to the person building Civant</h2>
              <p className="card-body">
                Civant is founder-led. Product-fit, market, partnership, and
                research questions can be directed to {founder.name}.
              </p>
            </div>
          </div>
          <div className="team-founder-note">
            <p>
              Bring the buyer, category, market, or workflow you are trying to
              understand. The conversation starts with fit and evidence.
            </p>
            <div className="button-row team-founder-actions">
              <Link href={founder.profilePath} className="text-link">
                Read David&apos;s profile
              </Link>
              <a
                href={founder.profileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View David on LinkedIn
              </a>
            </div>
          </div>
        </article>
      </Section>

      <ContactLiveSections />
      <Section muted id="office">
        <p className="eyebrow">Find us</p>
        <h2 className="headline-lg">Dundalk office</h2>
        <address className="contact-office-address">
          <strong>{CIVANT_LEGAL_NAME}</strong>
          {CIVANT_OFFICE_ADDRESS_LINES.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <a
          href={CIVANT_OFFICE_MAP_URL}
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get directions to our Dundalk office
        </a>
      </Section>
      <SchemaScript data={contactSchema} />
    </>
  );
}
