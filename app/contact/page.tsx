import { ContactLiveSections } from "../../components/site/ContactLiveSections";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
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
      <Section className="hero-block hero-section">
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

      <ContactLiveSections />
      <SchemaScript data={contactSchema} />
    </>
  );
}
