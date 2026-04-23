# Civant Page Architecture

Last updated: 2026-04-23

## Purpose

This document maps the website from "what exists" to "what should exist next" so work can be prioritized by commercial impact.

## Architecture Principles

- Lead with the category: predictive procurement intelligence for Europe
- Explain the engine before the AI layer
- Show proof without exposing sensitive operating metrics
- Separate category pages from educational resources
- Make European coverage and expansion feel concrete

## Current Core Navigation

- Home
- Platform
- Use Cases
- Methodology
- Pricing
- Resources
- Company
- Contact

This structure is workable, but it hides two important Civant strengths:

- external signal intelligence
- competitor intelligence

## Recommended Information Architecture

### Core commercial pages

| Page | Status | Job |
| --- | --- | --- |
| `/` | existing, upgrade | Category definition and primary conversion page |
| `/platform` | existing, upgrade | Product/system overview |
| `/methodology` | existing, upgrade | Trust, evidence, validation, signal logic |
| `/use-cases` | existing, upgrade | Team-level buying cases |
| `/pricing` | existing | Commercial packaging |
| `/company` | existing, upgrade | Mission, founder, advisors, trust |
| `/contact` | existing | Conversion |

### New high-impact commercial pages

| Page | Priority | Job |
| --- | --- | --- |
| `/external-signals` | high | Explain why Civant sees demand shifts before tenders publish |
| `/competitor-intelligence` | high | Sell incumbent analysis and renewal exposure |
| `/european-coverage` | high | Make the pan-European expansion story explicit |

### New medium-priority pages

| Page | Priority | Job |
| --- | --- | --- |
| `/contract-lifecycle-intelligence` | medium | Own lifecycle / renewal timing narrative |
| `/countries/[market]` | medium | Capture country-specific search and proof |
| `/industries/[segment]` | medium | Wedge pages only where there is commercial truth |

## Homepage Structure Recommendation

1. Hero:
   predictive procurement intelligence for Europe
2. Proof strip:
   official procurement data + external signals + competitor intelligence + validation
3. How it works:
   evidence -> signal model -> prioritization -> action
4. Product module overview
5. Customer/advisor proof
6. Europe coverage section
7. CTA

Homepage should answer:

- what Civant is
- why it is different
- why Europe matters
- why timing before publication matters

## Methodology Structure Recommendation

1. Evidence sources
2. Core signals
3. External signals
4. Competitor / market behavior signals
5. Validation principles
6. FAQ

Methodology should explicitly show:

- public procurement notices
- awards
- lifecycle windows
- budgets
- grants
- PINs / early notices
- hiring and policy movement
- continuous validation without fixed public totals

## Platform Structure Recommendation

Current platform page is good, but should be rebalanced so modules map more directly to commercial outcomes:

- Panorama: market view
- Finder: buyer and category targeting
- Forecast: timing intelligence
- Competitors: incumbent and renewal pressure
- Alerts: monitoring and change detection
- Bids: execution layer

Recommended additions:

- one section summarizing the full operating loop
- one section showing "engine first, AI second"
- stronger internal links to future `/external-signals` and `/competitor-intelligence`

## Use Cases Structure Recommendation

Keep audience-based framing, but sharpen outcomes:

- bid teams
- sales / partnerships
- market intelligence / strategy teams

Potential future split pages if needed:

- `/use-cases/bid-teams`
- `/use-cases/sales-teams`
- `/use-cases/market-intelligence`

Not urgent yet.

## European Coverage Page

This should become a major commercial/trust page.

Sections:

1. Live markets now
2. Markets coming next
3. One-country-per-month expansion story
4. Why Europe is fragmented and difficult to monitor
5. Why multi-country coverage compounds value

It should make clear that Civant is building a continental intelligence layer, not a local alert feed.

## Country Page Template

Recommended sections for each country:

1. Procurement landscape overview
2. Visibility problem in that market
3. Signals Civant uses there
4. Why that market matters commercially
5. Related resources
6. CTA

Country pages should stay honest if a market is:

- live
- launching soon
- planned but not yet public

## Resource Hub Architecture

Current state:

- strong content volume
- weak commercial hierarchy

Recommended structure:

- Pillar content
- Supporting content
- Commercial bridge links back to product pages

Recommended pillar groups:

- procurement intelligence
- timing and signals
- contract lifecycle
- competitor / market structure
- SME access and bid strategy

## Internal Linking Rules

Every commercial page should link to:

- homepage
- platform
- methodology
- contact

Every major resource article should link to at least one commercial page:

- platform
- methodology
- future external-signals page
- future competitor-intelligence page

## Priority Build Sequence

### Now

1. Upgrade homepage
2. Upgrade methodology
3. Upgrade platform
4. Add external signals page
5. Add competitor intelligence page

### Next

6. Add European coverage page
7. Restructure resources landing page
8. Create country page template

### Later

9. Launch country pages
10. Consolidate overlapping resource articles
11. Add industry wedge pages only where proof exists

## Open Questions For David

- Do we want "predictive procurement intelligence" as the visible homepage category line, or "procurement intelligence for Europe" with predictive language in the subhead?
- Which industry wedge deserves the first dedicated page after the core commercial set?
- For country pages, do we want to publish "coming soon" pages before launch, or only once each market is live?
