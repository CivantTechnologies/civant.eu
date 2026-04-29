"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";

type InsightsSignupProps = {
  compact?: boolean;
  source?: string;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
};

export function InsightsSignup({
  compact = false,
  source = "Resources",
}: InsightsSignupProps) {
  const formId = source.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [consentRequired, setConsentRequired] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!consentRequired) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: "Forecast reports",
          marketingOptIn: true,
          message: [
            `Company: ${formData.company}`,
            `Role or interest area: ${formData.role || "Not provided"}`,
            `Source: ${source}`,
            "",
            "Request: Send the next Civant forecast report.",
          ].join("\n"),
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Something went wrong. Please try again or contact Civant directly.");
      }

      setFormData(initialFormState);
      setConsentRequired(false);
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact Civant directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className={`insights-signup insights-signup-success ${compact ? "insights-signup-compact" : ""}`}>
        <div className="contact-live-success-icon" aria-hidden="true">
          <CheckCircle2 />
        </div>
        <h2 className="headline-lg">Thanks, we will send the next Civant forecast report to your inbox.</h2>
      </div>
    );
  }

  return (
    <aside className={`insights-signup ${compact ? "insights-signup-compact" : ""}`}>
      <div className="insights-signup-copy">
        <p className="eyebrow">Forecast Reports</p>
        <h2 className="headline-lg">Get the next Civant forecast report</h2>
        <p>
          Monthly procurement intelligence on public-sector demand, renewal
          windows, buyer activity, and market movement.
        </p>
      </div>

      <form className="insights-signup-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor={`${formId}-insights-email`} className="contact-label">
            Work email <span className="contact-required">*</span>
          </label>
          <input
            id={`${formId}-insights-email`}
            type="email"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="contact-input"
            placeholder="name@company.com"
            autoComplete="email"
          />
        </div>

        <div className="contact-field">
          <label htmlFor={`${formId}-insights-name`} className="contact-label">
            Name <span className="contact-required">*</span>
          </label>
          <input
            id={`${formId}-insights-name`}
            required
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="contact-input"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className="contact-field">
          <label htmlFor={`${formId}-insights-company`} className="contact-label">
            Company <span className="contact-required">*</span>
          </label>
          <input
            id={`${formId}-insights-company`}
            required
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="contact-input"
            placeholder="Company name"
            autoComplete="organization"
          />
        </div>

        <div className="contact-field">
          <label htmlFor={`${formId}-insights-role`} className="contact-label">
            Role or interest area
          </label>
          <input
            id={`${formId}-insights-role`}
            value={formData.role}
            onChange={(event) => updateField("role", event.target.value)}
            className="contact-input"
            placeholder="Bid, sales, market intelligence"
            autoComplete="organization-title"
          />
        </div>

        <label className="contact-live-consent-row insights-signup-consent">
          <input
            type="checkbox"
            checked={consentRequired}
            onChange={(event) => setConsentRequired(event.target.checked)}
            required
          />
          <span>
            I consent to Civant storing my details to send forecast report
            updates. <span className="contact-required">*</span>
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting || !consentRequired}
          className="btn btn-primary contact-live-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="contact-live-spinner" />
              Sending...
            </>
          ) : (
            "Get report updates"
          )}
        </button>

        {errorMessage ? (
          <p className="report-gate-error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </form>
    </aside>
  );
}
