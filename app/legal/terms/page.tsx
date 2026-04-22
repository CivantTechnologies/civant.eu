"use client";

import { Section } from "../../../components/site/Section";

export default function TermsPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Legal</p>
        <h1 className="headline-xl">Terms of Service</h1>
        <p className="text-lead">
          The rules governing your access to and use of the Civant platform.
        </p>
        <p className="legal-effective">
          Effective: <time dateTime="2026-03-09">9 March 2026</time> · Version 1.0
        </p>
      </Section>

      <Section muted>
        <div className="legal-body">
          <h2>1. Introduction and Agreement</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
            Civant procurement intelligence platform, including the application at app.civant.eu,
            the marketing website at civant.eu, and all related APIs, data feeds, and services
            (collectively, the &ldquo;Platform&rdquo;), operated by Civant Technologies Limited,
            a company incorporated in Ireland.
          </p>
          <p>
            By creating an account, accepting these Terms within the Platform, or using any part
            of the Platform, you agree to be bound by these Terms and our Privacy Policy. If you
            are accepting on behalf of a company, you represent that you have authority to bind
            that entity. If you do not agree, you must not use the Platform.
          </p>

          <h2>2. Definitions</h2>
          <ul>
            <li><strong>&ldquo;Account&rdquo;</strong> — a registered user account on the Platform</li>
            <li><strong>&ldquo;Customer&rdquo; or &ldquo;you&rdquo;</strong> — the individual or entity that has agreed to these Terms</li>
            <li><strong>&ldquo;Data&rdquo;</strong> — procurement notices, award records, buyer information, and related intelligence data</li>
            <li><strong>&ldquo;Plan&rdquo;</strong> — the subscription tier (Vanguard, Summit, or Custom) selected by the Customer</li>
            <li><strong>&ldquo;Seat&rdquo;</strong> — an individual named user account authorised under a Customer subscription</li>
            <li><strong>&ldquo;Tenant&rdquo;</strong> — the Customer&rsquo;s isolated workspace on the Platform</li>
            <li><strong>&ldquo;AI Credits&rdquo;</strong> — the daily allowance of AI-generated intelligence briefs under each Plan</li>
          </ul>

          <h2>3. Procurement Intelligence Disclaimer</h2>
          <p>
            Civant provides analytical insights derived from publicly available procurement
            information and statistical modelling. The Platform assists users in identifying and
            evaluating procurement opportunities — it does not constitute legal, financial,
            tendering, or commercial advice.
          </p>
          <p>
            Civant does not guarantee the publication of any procurement opportunity, the accuracy
            of any forecast, or the successful award of any contract. Users are solely responsible
            for their own bid decisions and submissions.
          </p>
          <p>
            All AI-generated content is provided for informational purposes only. Users should
            verify all outputs independently before relying on them for commercial decisions.
          </p>

          <h2>4. Data Sources and Accuracy</h2>
          <p>
            The Platform aggregates information from publicly available official open procurement
            sources including eTenders (Ireland), Find a Tender and Contracts Finder (United
            Kingdom), PLACSP (Spain), BOAMP/PLACE (France), and the Official Journal of the
            European Union. New markets will be added over time and made available to all Plans
            automatically.
          </p>
          <p>
            Civant does not guarantee the completeness or accuracy of third-party public data.
            Source data may contain errors, omissions, or delays outside Civant&rsquo;s control.
          </p>

          <h2>5. Accounts and Access</h2>
          <p>
            <strong>5.1 Registration</strong> — You must complete the onboarding process including
            accurate company information, CPV code preferences, and billing details. You are
            responsible for the security of your credentials.
          </p>
          <p>
            <strong>5.2 Seats and Users</strong> — Each Plan includes a defined number of Seats.
            Each Seat must be assigned to a named individual. Sharing login credentials is not
            permitted. Additional Seats may be purchased subject to the applicable per-seat fee.
          </p>
          <p>
            <strong>5.3 Minimum Age</strong> — You must be at least 18 years old to create an
            Account.
          </p>

          <h2>6. Subscription Plans and Billing</h2>
          <p><strong>6.1 Available Plans:</strong></p>
          <ul>
            <li>
              <strong>Vanguard:</strong> €299/month or €249/month billed annually (€2,988/year).
              1 Seat, 10 saved alert rules, 5 tracked competitors, 50 AI Credits/day.
            </li>
            <li>
              <strong>Summit:</strong> €699/month or €599/month billed annually (€7,188/year).
              3 Seats, 50 saved alert rules, 25 tracked competitors, 100 AI Credits/day.
              Additional Seats at €99/seat/month.
            </li>
            <li>
              <strong>Custom:</strong> Bespoke annual contract. Unlimited Seats, alerts, and
              competitors with a configurable AI Credit pool.
            </li>
          </ul>
          <p>
            <strong>6.2 Billing</strong> — Monthly plans billed on the same date each month.
            Annual plans billed upfront. All prices exclude VAT. Civant reserves the right to
            update pricing with 30 days notice to existing subscribers.
          </p>
          <p>
            <strong>6.3 Payment</strong> — Processed via our third-party payment provider. Civant
            does not store card details. Non-payment may result in suspension or termination.
          </p>
          <p>
            <strong>6.4 Cancellation</strong> — Monthly plans may be cancelled at any time,
            effective at end of the current billing period. Annual plans may be cancelled at any
            time; no refund is issued outside the 14-day window in clause 6.5.
          </p>
          <p>
            <strong>6.5 Annual Plan Money-Back Guarantee</strong> — Full refund available within
            14 calendar days of annual subscription start. Contact hello@civant.eu with your
            account email. Annual Plans only. May be exercised once per Customer.
          </p>

          <h2>7. Platform Use and Fair Usage</h2>
          <p>
            <strong>7.1 Permitted Use</strong> — Internal business use only for identifying and
            pursuing public procurement opportunities. No resale or sublicensing to third parties.
          </p>
          <p>
            <strong>7.2 Plan Limits</strong> — Seats, alert rules, tracked competitors, and daily
            AI Credits are enforced at the platform level. Deleted items free the corresponding
            slot immediately.
          </p>
          <p><strong>7.3 Prohibited Uses:</strong></p>
          <ul>
            <li>Bulk scraping or extraction of Data</li>
            <li>Automated scripts, bots, or crawlers</li>
            <li>Redistribution of Platform Data to third parties</li>
            <li>Circumvention of technical limits or access controls</li>
            <li>Use in violation of applicable law</li>
          </ul>
          <p>
            <strong>7.4 AI Intelligence Briefs</strong> — Credits reset daily at midnight UTC.
            Unused credits do not roll over. AI-generated content does not constitute advice of
            any kind.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            <strong>8.1 Our IP</strong> — Platform software, design, algorithms, scoring models,
            signal methodology, and AI systems are the exclusive IP of Civant Technologies Limited.
          </p>
          <p>
            <strong>8.2 Your Data</strong> — Data you input remains your property. You grant
            Civant a limited licence to process it solely to provide the Platform services.
          </p>

          <h2>9. Availability and Support</h2>
          <p>
            Civant operates redundant cloud infrastructure and targets at least 99% availability.
            Planned maintenance communicated in advance. Not liable for outages caused by
            third-party infrastructure or force majeure. Support at hello@civant.eu. Custom Plan
            customers receive a separate SLA.
          </p>

          <h2>10. Export Compliance</h2>
          <p>
            Users must comply with all applicable export control and economic sanctions laws
            including those of Ireland, the EU, and the UK. You represent that you are not located
            in, or a national or resident of, any country subject to EU or UN sanctions.
          </p>

          <h2>11. Marketing Reference</h2>
          <p>
            Civant may identify you as a customer in its marketing materials, website, and investor
            communications, including use of your company name and logo. To opt out, notify us in
            writing at hello@civant.eu.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Civant shall not be liable for indirect,
            incidental, consequential, or punitive damages. Total aggregate liability shall not
            exceed fees paid in the preceding 12 months. Nothing limits Civant&rsquo;s liability
            for death or personal injury caused by negligence, or fraud.
          </p>

          <h2>13. Modifications</h2>
          <p>
            Civant may modify the Platform or these Terms with reasonable notice. Material changes
            will prompt re-acceptance within the Platform.
          </p>

          <h2>14. Termination</h2>
          <p>
            Either party may terminate at any time. Civant may suspend or terminate immediately
            for breach, non-payment, or prohibited activity. Account data retained for 30 days
            post-termination then deleted.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These Terms are governed by Irish law. Disputes are subject to the exclusive
            jurisdiction of the courts of Ireland.
          </p>

          <h2>16. Contact</h2>
          <p>hello@civant.eu · Civant Technologies Limited, Ireland</p>
        </div>
      </Section>
    </>
  );
}
