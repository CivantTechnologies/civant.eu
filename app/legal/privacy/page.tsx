"use client";

import { Section } from "../../../components/site/Section";

export default function PrivacyPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Legal</p>
        <h1 className="headline-xl">Privacy Policy</h1>
        <p className="text-lead">
          How Civant collects, uses, and protects your personal data.
        </p>
        <p className="legal-effective">
          Effective: <time dateTime="2026-03-09">9 March 2026</time> · Version 1.0
        </p>
      </Section>

      <Section muted>
        <div className="legal-body">
          <h2>Plain-English Summary</h2>
          <ul>
            <li>Civant uses personal data to operate accounts, billing, support, and product security.</li>
            <li>We do not sell personal data.</li>
            <li>AI prompts are designed to avoid sending personal identifiers to AI providers.</li>
            <li>You can contact us at hello@civant.eu about privacy rights or data questions.</li>
          </ul>

          <h2>1. Who We Are</h2>
          <p>
            Civant Technologies Limited is the data controller for personal data collected through
            app.civant.eu and civant.eu. Incorporated in Ireland, subject to the EU GDPR and Irish
            Data Protection Acts. Contact: hello@civant.eu
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            <strong>Account and Profile Data:</strong> name, email, job title, company
            name/size/country/sector, CPV preferences, target markets, billing name and address
            (card data processed by payment provider, not stored by us).
          </p>
          <p>
            <strong>Usage Data:</strong> searches, alert configurations, competitor tracking, AI
            brief requests, login timestamps, session data, feature usage, IP address,
            device/browser information.
          </p>
          <p>
            <strong>Communications:</strong> email correspondence with support, responses to
            optional feedback requests.
          </p>

          <h2>3. How We Use Your Data</h2>
          <p>
            <strong>To provide the Platform:</strong> account management, personalised intelligence
            delivery, billing, service notifications.
          </p>
          <p>
            <strong>To improve the Platform:</strong> usage pattern analysis; signal and scoring
            model calibration using aggregated anonymised data only.
          </p>
          <p>
            <strong>Legal basis (GDPR):</strong> contract performance, legitimate interests, legal
            obligation, and consent where separately requested.
          </p>

          <h2>4. Data Sharing</h2>
          <p>We do not sell your data. Processors:</p>
          <ul>
            <li><strong>Supabase</strong> — database and authentication (EU data hosting)</li>
            <li><strong>Vercel</strong> — application hosting</li>
            <li><strong>Payment processor</strong> — billing data only</li>
            <li><strong>Anthropic and OpenAI</strong> — AI brief generation only (see clause 5)</li>
            <li><strong>Law enforcement</strong> where required by law</li>
          </ul>
          <p>All processors bound by data processing agreements.</p>

          <h2>5. AI Processing</h2>
          <p>
            Our systems are designed to avoid sending personal data to AI providers. Prompts
            contain only procurement context, tender data, and anonymised analytical inputs — not
            user names, email addresses, or other personal identifiers. AI-generated outputs are
            not stored by the AI provider; Civant retains them subject to normal retention rules.
          </p>

          <h2>6. Data Retention</h2>
          <ul>
            <li><strong>Active account data:</strong> subscription duration plus 30 days post-cancellation</li>
            <li><strong>Billing records:</strong> 7 years (Irish tax/accounting obligations)</li>
            <li><strong>Anonymised analytics:</strong> indefinite</li>
            <li><strong>Support correspondence:</strong> 3 years</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>
            Under GDPR: access, rectification, erasure, objection, restriction, portability,
            withdrawal of consent. Contact hello@civant.eu. Response within 30 days. Complaints to
            the Irish Data Protection Commission at dataprotection.ie.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Strictly necessary cookies for authentication and session management only. No
            advertising or tracking cookies on the Platform. Marketing website may use analytics
            cookies with your consent via the cookie banner.
          </p>

          <h2>9. Security</h2>
          <p>
            Encrypted data storage, row-level security, HTTPS-only access, regular security
            reviews.
          </p>

          <h2>10. International Transfers</h2>
          <p>
            Data primarily stored within the EU (Supabase EU region). Where transferred outside
            the EU/EEA, appropriate safeguards in place per GDPR Chapter V.
          </p>

          <h2>11. Changes</h2>
          <p>
            Material changes communicated by email or in-Platform notice.
          </p>

          <h2>12. Contact</h2>
          <p>Civant Technologies Limited, Ireland · hello@civant.eu</p>
        </div>
      </Section>
    </>
  );
}
