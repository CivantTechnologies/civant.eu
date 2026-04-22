import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { BrowserFrame } from "../../components/site/BrowserFrame";
import { buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Use Cases | Procurement Intelligence for Teams",
  description:
    "See how bid teams, sales organizations, and market intelligence teams use Civant procurement intelligence to improve planning, prioritization, and execution.",
  path: "/use-cases",
});

const audiences = [
  {
    title: "Bid Management Teams",
    challenge:
      "Teams are often forced into late-stage bid decisions with limited preparation time and unclear opportunity quality.",
    help: "Civant identifies likely upcoming opportunities earlier, ranks signal strength, and helps teams sequence effort before deadlines compress.",
    outcomes: [
      "Better bid resource allocation across high-probability targets",
      "Earlier qualification and go/no-go decisions",
      "Reduced reactive workload from last-minute tender discovery",
    ],
    screenshot: "/screenshots/finder-results.png",
    screenshotWidth: 2880,
    screenshotHeight: 1554,
    screenshotAlt: "Finder results showing tender opportunities with source tags, dates, and buyer details",
    screenshotCaption: "Finder: how bid teams discover and qualify opportunities",
  },
  {
    title: "Sales & Partnerships",
    challenge:
      "Account teams struggle to time engagement in public-sector markets where buying cycles are opaque and relationship windows are narrow.",
    help: "Civant maps procurement cycles and buyer behavior so commercial teams can engage accounts and partners before formal tender publication.",
    outcomes: [
      "Improved account timing and stakeholder planning",
      "Stronger partner alignment before bid windows open",
      "More strategic, less reactive public-sector pipeline development",
    ],
    screenshot: "/screenshots/competitors.png",
    screenshotWidth: 2880,
    screenshotHeight: 1552,
    screenshotAlt: "Competitors overview showing contract count, total value, strategic insights and strengths",
    screenshotCaption: "Competitors: competitive intelligence for account planning",
  },
  {
    title: "Market Intelligence Teams",
    challenge:
      "Analysts need to monitor fragmented procurement data and explain market movement to leadership with confidence.",
    help: "Civant consolidates procurement and participation signals into one intelligence layer with clear contextual interpretation.",
    outcomes: [
      "Faster market monitoring across institutions and categories",
      "Clearer visibility into participation and competitive shifts",
      "Actionable insight outputs for commercial and bid teams",
    ],
    screenshot: "/screenshots/executive-summary.png",
    screenshotWidth: 2404,
    screenshotHeight: 1060,
    screenshotAlt: "Executive summary with target sectors, forecast counts, and accuracy metrics",
    screenshotCaption: "Executive Summary: market-level intelligence for leadership reporting",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Use Cases</p>
        <h1 className="headline-xl">How teams apply Civant in public-sector markets</h1>
        <p className="text-lead">
          Civant supports organizations operating in public-sector markets by
          translating procurement-cycle signals into practical planning and
          execution workflows.
        </p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Primary Audiences</p>
          <h2 className="headline-lg">
            Three high-impact use cases for procurement intelligence
          </h2>
        </div>
        <div className="use-case-stack">
          {audiences.map((audience) => (
            <article key={audience.title} className="audience-block">
              <h2 className="headline-lg audience-title">{audience.title}</h2>
              <div className="grid grid-3 audience-grid">
                <article className="card audience-item-card">
                  <p className="module-label">Core challenge</p>
                  <p className="card-body">{audience.challenge}</p>
                </article>
                <article className="card audience-item-card">
                  <p className="module-label">How Civant helps</p>
                  <p className="card-body">{audience.help}</p>
                </article>
                <article className="card audience-item-card">
                  <p className="module-label">Practical outcomes</p>
                  <ul className="audience-outcome-list">
                    {audience.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
              {audience.screenshot && (
                <div className="audience-screenshot">
                  <BrowserFrame
                    src={audience.screenshot}
                    alt={audience.screenshotAlt || audience.title}
                    caption={audience.screenshotCaption}
                    width={audience.screenshotWidth}
                    height={audience.screenshotHeight}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            See your team’s use case in a live walkthrough
          </h2>
          <p className="text-lead platform-cta-copy">
            Request a demo to review the Civant workflow most relevant to your
            team’s priorities.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Demo"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>
    </>
  );
}
