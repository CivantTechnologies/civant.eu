import Link from "next/link";
import { Section } from "../../components/site/Section";
import { buildPageMetadata } from "../../lib/seo";
import {
  VALIDATION_PUBLICATION_PRINCIPLES,
  VALIDATION_RECORD_PATH,
  VALIDATION_RECORD_REVIEWED,
  VALIDATION_SUMMARY,
} from "../../lib/validation";

export const dynamic = "force-static";

export const metadata = {
  ...buildPageMetadata({
    title: "Validation Publication Standard | Civant",
    description:
      "The evidence and documentation standard Civant will use when publishing future independent review outcomes.",
    path: VALIDATION_RECORD_PATH,
    index: false,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ValidationPage() {
  return (
    <>
      <Section
        className="hero-block hero-section company-hero validation-hero"
        containerClassName="company-hero-container validation-hero-container"
      >
        <div className="company-hero-copy validation-hero-copy">
          <p className="eyebrow">Validation publication standard</p>
          <h1 className="headline-xl">Evidence before conclusions</h1>
          <p className="text-lead">{VALIDATION_SUMMARY}</p>
          <p className="company-hero-proof">
            Publication standard last reviewed {VALIDATION_RECORD_REVIEWED}.
          </p>
        </div>

        <aside className="company-hero-panel validation-hero-panel">
          <div className="company-hero-panel-head">
            <span>Required record</span>
            <strong>Every conclusion needs an inspectable boundary.</strong>
          </div>
          <div className="company-origin-flow">
            <div>
              <strong>Scope</strong>
              <p>What was examined, by whom, and against which criteria.</p>
            </div>
            <div>
              <strong>Outcome</strong>
              <p>What the work found and what Civant changed as a result.</p>
            </div>
            <div>
              <strong>Boundary</strong>
              <p>What the evidence does not prove, certify, or guarantee.</p>
            </div>
          </div>
        </aside>
      </Section>

      <Section muted>
        <div className="validation-principles-grid">
          {VALIDATION_PUBLICATION_PRINCIPLES.map((principle) => (
            <article key={principle.title} className="card validation-principle-card">
              <p className="module-label">{principle.label}</p>
              <h2 className="card-title">{principle.title}</h2>
              <p className="card-body">{principle.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Review what Civant can support today</h2>
          <p className="text-lead platform-cta-copy">
            The methodology page explains the current evidence model, validation
            loop, and forecast limits without presenting unfinished review work
            as product proof.
          </p>
          <div className="button-row">
            <Link href="/methodology" className="btn btn-primary">
              Review the Methodology
            </Link>
            <Link href="/company" className="btn btn-secondary">
              Read the Company Thesis
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
