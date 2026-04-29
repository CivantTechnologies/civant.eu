import { ContactLiveSections } from "../../components/site/ContactLiveSections";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildContactPointSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Contact Civant | Procurement Forecasting Intelligence",
  description:
    "Request a Civant custom plan or contact our team to discuss procurement intelligence use cases.",
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
          For platform questions, custom plans, partnerships, funding, research,
          or strategic collaboration, send the right context and we will route it
          to the right conversation.
        </p>
        <CTAGroup
          primaryHref="#contact-form"
          primaryLabel="Book a 20-minute walkthrough"
          secondaryHref="/pricing"
          secondaryLabel="View Pricing"
        />
      </Section>

      <ContactLiveSections />
      <SchemaScript data={contactSchema} />
    </>
  );
}
