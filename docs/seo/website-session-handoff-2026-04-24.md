# Civant Website Handoff

Date: 2026-04-24
Repo: `/Users/david/projects/civant-investment-website-main`
Branch status: `main` clean
Latest live commit at handoff: `c5c99dc`

## What We Finished

### Technical / quality foundations
- Restored real linting.
- Added Lighthouse CI and production verification against `https://civant.eu`.
- Self-hosted Montserrat.
- Optimized logos, favicon assets, and large screenshots.
- Improved footer contrast and other visual polish items.

### Pricing / conversion work
- Reworked pricing page hero and CTA logic.
- Shifted the page toward self-serve signup for standard plans and custom-plan contact for enterprise cases.
- Improved plan-card copy and the ROI calculator section.
- Kept pricing commercially sharper and less generic.

### Trust / company / proof work
- Added and reordered trust content on the company page.
- Separated real advisors from institutional support / founder networks.
- Added customer proof and support-network sections with cleaned logo presentation.

### SEO / AEO structure
- Created search intent map:
  - [search-intent-map.md](/Users/david/projects/civant-investment-website-main/docs/seo/search-intent-map.md)
- Applied intent ownership across:
  - homepage
  - platform
  - methodology
  - use cases
  - solutions
  - markets
- Tightened metadata across core pages.
- Added authority resource pages:
  - external signals
  - competitor intelligence
  - European procurement coverage

### Report system
- Built gated report flow with work-email validation, honeypot, rate limiting, tokenized downloads, and email delivery support.
- Created reusable report landing-page system.
- Added live reports:
  - `/resources/education-procurement-outlook-q4-2026`
  - `/resources/healthcare-procurement-outlook-q4-2026`
  - `/resources/public-construction-procurement-outlook-q4-2026`
- Added dedicated reports hub:
  - `/resources/reports`
- Split `Resources` navigation so reports are separated from the article library.

### Final UI tidy pass
- Simplified reports hub copy.
- Added CTA row under report cards.
- Simplified footer navigation.
- Cleaned report-hub card spacing and report-gate layout issues.

## Current Live Structure

### Main content areas
- `/platform`
- `/use-cases`
- `/markets`
- `/pricing`
- `/resources`
- `/resources/reports`
- `/company`

### Reports hub purpose
The main resources page is now article / explainer oriented.
The reports hub is now the home for downloadable sector outlooks.

## Important Strategic Positioning

Keep reinforcing:
- Civant is **not** an AI chatbot company.
- Civant is a **predictive procurement intelligence platform**.
- The core edge comes from:
  - historical procurement cycles
  - award outcomes
  - external signals
  - competitor / buyer intelligence
- AI is the interpretation layer on top, not the core product identity.

Preferred wording direction:
- `predictive engine`
- `forecasting model`
- `procurement intelligence`
- `public-sector market intelligence`

Avoid overusing:
- `predictive` on its own when it sounds magical
- em dashes in customer-facing copy
- copy that sounds like internal commentary rather than commercial messaging

## Current Baseline Read

As discussed in-session:
- Technical SEO baseline: effectively `100/100` on the tested live production pages
- Strategic AEO baseline: approximately `84/100`
- Main gap is no longer technical site quality; it is authority, entity strength, and broader public proof

Official baseline report still to compile as a standalone summary if desired:
- score snapshot
- what changed
- what remains
- next recheck date

## Key Live URLs

- Home: `https://civant.eu`
- Platform: `https://civant.eu/platform`
- Pricing: `https://civant.eu/pricing`
- Resources library: `https://civant.eu/resources`
- Reports hub: `https://civant.eu/resources/reports`
- Education report: `https://civant.eu/resources/education-procurement-outlook-q4-2026`
- Healthcare report: `https://civant.eu/resources/healthcare-procurement-outlook-q4-2026`
- Public Construction report: `https://civant.eu/resources/public-construction-procurement-outlook-q4-2026`

## What Is Still Worth Doing Next

### Highest-value next moves
1. Build the end-of-day / checkpoint SEO-AEO report
2. Improve off-site authority plan
3. Add public-safe proof generation beyond the website:
   - founder commentary
   - third-party mentions
   - partner/customer references
4. Strengthen downloadable asset strategy around sectors / verticals
5. Consider a more explicit reports CTA from other relevant pages

### Content / growth opportunities
1. More sector reports if backed by safe data
2. Turn report launches into LinkedIn / email / outreach rhythm
3. Add one or two flagship authority assets beyond reports
4. Keep expanding resource clusters intentionally, not randomly

## Recommended Next Session Order

1. Do a calm live visual pass on:
   - `/resources/reports`
   - the three sector report landing pages
   - `/pricing`
2. Compile the standalone SEO / AEO baseline report with:
   - current score snapshot
   - what changed in this sprint
   - remaining gaps
   - recheck date in one month
3. Decide whether the next push is:
   - off-site authority and mentions, or
   - another on-site authority asset cluster
4. If continuing on-site, prioritize:
   - promotion paths into reports
   - report launch support assets
   - one more strong proof / authority asset

## Open Questions / Taste Notes

- Reports hub may still deserve a small live visual pass for spacing and hierarchy after sleep.
- Education report page had multiple rounds of alignment fixes; if revisited, check visually first before changing again.
- Footer is intentionally slimmer now; reassess only if a truly important route is missing.

## Repo / Process Status

- `main` is clean
- No open PRs at handoff
- Local scratch files were cleaned up
- Last merged PR at handoff: `#32`
- This handoff file is meant to be the restart document for the next session

## Useful Pickup Prompt For Next Session

Suggested restart prompt:

> Pick up from `docs/seo/website-session-handoff-2026-04-24.md` in the website repo. Review what is already live on civant.eu, then continue with the next highest-value SEO/AEO and authority-building work without regressing the current site quality.
