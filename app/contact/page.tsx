import { ContactLiveSections } from "../../components/site/ContactLiveSections";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildContactPointSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Request a Civant demo or contact our team to discuss procurement intelligence use cases.",
  path: "/contact",
});

const contactSchema = buildContactPointSchema();

export default function ContactPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Contact</p>
        <h1 className="headline-xl">Contact the Civant Team</h1>
        <p className="text-lead">
          Select the path that matches your request. We route each inquiry type
          directly to the right team so follow-up is faster and more relevant.
        </p>
      </Section>

      <ContactLiveSections />
      <SchemaScript data={contactSchema} />
    </>
  );
}
