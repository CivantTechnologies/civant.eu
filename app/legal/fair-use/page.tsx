"use client";

import { Section } from "../../../components/site/Section";

export default function FairUsePage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Legal</p>
        <h1 className="headline-xl">Fair Usage Policy</h1>
        <p className="text-lead">
          What is permitted and what is not permitted on the Civant platform.
        </p>
        <p className="legal-effective">
          Effective: <time dateTime="2026-03-09">9 March 2026</time> · Version 1.0
        </p>
      </Section>

      <Section muted>
        <div className="legal-body">
          <p>
            This Fair Usage Policy forms part of the Civant Terms of Service. Capitalised terms
            have the same meaning as in the Terms of Service.
          </p>

          <h2>1. Permitted Uses</h2>
          <ul>
            <li>Research and monitor public procurement opportunities relevant to your organisation&rsquo;s commercial activity</li>
            <li>Track buyer organisations, procurement categories, and competitor activity within your Plan limits</li>
            <li>Configure alert rules and receive notifications about relevant procurement signals</li>
            <li>Generate AI intelligence briefs to support bid/no-bid decisions and preparation</li>
            <li>Export or download information for internal use within your organisation</li>
            <li>Share Platform outputs internally with colleagues who hold active Seats on your Tenant</li>
          </ul>

          <h2>2. Prohibited Uses</h2>

          <p><strong>2.1 Commercial Redistribution:</strong></p>
          <ul>
            <li>Resell, sublicense, or redistribute Platform access or Data to any third party</li>
            <li>Use Platform Data to build a competing product or service</li>
            <li>White-label or rebrand the Platform or its outputs for external distribution</li>
          </ul>

          <p><strong>2.2 Technical Abuse:</strong></p>
          <ul>
            <li>Use automated tools, bots, scripts, or crawlers to access or extract Data in bulk</li>
            <li>Bypass, circumvent, or disable any technical limit or access control</li>
            <li>Reverse engineer the Platform&rsquo;s algorithms, scoring models, or signal methodology</li>
            <li>Probe or test the Platform for security vulnerabilities without prior written consent from Civant</li>
          </ul>

          <p><strong>2.3 Data Misuse:</strong></p>
          <ul>
            <li>Use Platform Data to target or contact procurement officers in violation of applicable law or professional standards</li>
            <li>Present AI-generated briefs as verified factual statements without appropriate caveats</li>
            <li>Combine Platform Data with personal data from other sources in violation of GDPR</li>
          </ul>

          <h2>3. Seat Rules</h2>
          <p>One Seat is assigned to one named individual. You must not:</p>
          <ul>
            <li>Share login credentials between multiple individuals</li>
            <li>Allow a single Seat to be used concurrently by more than one person</li>
            <li>Create generic or shared login accounts unless each Seat corresponds to a real individual</li>
          </ul>

          <h2>4. Plan Limits and Enforcement</h2>
          <p>
            <strong>4.1 Limits</strong> — Seats, saved alert rules, tracked competitors, and daily
            AI Credits enforced at platform level.
          </p>
          <p>
            <strong>4.2 Limit Restoration</strong> — Deleting a saved item frees the quota slot
            immediately.
          </p>
          <p>
            <strong>4.3 AI Credits</strong> — Reset daily at midnight UTC. Unused credits do not
            accumulate. Custom Plan customers may negotiate a larger daily credit pool.
          </p>
          <p>
            <strong>4.4 Storage</strong> — No explicit storage limits currently. Civant reserves
            the right to introduce limits with 30 days notice.
          </p>

          <h2>5. Consequences of Violation</h2>
          <p>
            Civant may: issue a written warning for a first or minor breach; suspend your Account
            pending investigation; terminate your Account without refund for serious or repeated
            breaches; pursue legal remedies for material harm. We act proportionately and will
            contact you before acting except where immediate action is required.
          </p>

          <h2>6. Reporting Concerns</h2>
          <p>
            Report suspected abuse or unauthorised access to hello@civant.eu.
          </p>

          <h2>7. Changes</h2>
          <p>
            Updates communicated with 14 days notice. Material changes trigger a re-acceptance
            prompt within the Platform.
          </p>

          <h2>8. Contact</h2>
          <p>Civant Technologies Limited · hello@civant.eu · civant.eu</p>
        </div>
      </Section>
    </>
  );
}
