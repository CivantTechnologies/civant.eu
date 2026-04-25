"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  reportFocus: string;
  message: string;
  honeypot: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  reportFocus: "",
  message: "",
  honeypot: "",
};

export function ReportRequestForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [consentRequired, setConsentRequired] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!consentRequired) return;
    if (formData.honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: "Custom sector report request",
          marketingOptIn,
          message: [
            `Company: ${formData.company}`,
            `Role: ${formData.role}`,
            `Requested report focus: ${formData.reportFocus}`,
            "",
            "Context:",
            formData.message,
          ].join("\n"),
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "We could not send your request.");
      }

      setFormData(initialFormState);
      setConsentRequired(false);
      setMarketingOptIn(false);
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="contact-live-success report-request-success">
        <div className="contact-live-success-icon" aria-hidden="true">
          <CheckCircle2 />
        </div>
        <h2 className="headline-lg">Report request received</h2>
        <p className="text-lead">
          Thanks. We will review the sector, market, and buyer context you shared
          and follow up if it fits the next Civant report cycle.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-live-form-wrap report-request-form-wrap">
      <h2 className="headline-lg contact-live-form-title">
        Tell us what would help
      </h2>
      <article className="card contact-live-form-card">
        <form onSubmit={handleSubmit} className="contact-live-form-grid">
          <div className="contact-field">
            <label htmlFor="request-report-name" className="contact-label">
              Name <span className="contact-required">*</span>
            </label>
            <input
              id="request-report-name"
              required
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="contact-input"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="request-report-email" className="contact-label">
              Work email <span className="contact-required">*</span>
            </label>
            <input
              id="request-report-email"
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
            <label htmlFor="request-report-company" className="contact-label">
              Company <span className="contact-required">*</span>
            </label>
            <input
              id="request-report-company"
              required
              value={formData.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="contact-input"
              placeholder="Company name"
              autoComplete="organization"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="request-report-role" className="contact-label">
              Role <span className="contact-required">*</span>
            </label>
            <input
              id="request-report-role"
              required
              value={formData.role}
              onChange={(event) => updateField("role", event.target.value)}
              className="contact-input"
              placeholder="Your role"
              autoComplete="organization-title"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="request-report-focus" className="contact-label">
              Report focus <span className="contact-required">*</span>
            </label>
            <input
              id="request-report-focus"
              required
              value={formData.reportFocus}
              onChange={(event) => updateField("reportFocus", event.target.value)}
              className="contact-input"
              placeholder="e.g. transport, SaaS, defence, local government"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="request-report-message" className="contact-label">
              What would make this useful?{" "}
              <span className="contact-required">*</span>
            </label>
            <textarea
              id="request-report-message"
              required
              rows={6}
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="contact-textarea"
              placeholder="Tell us the sector, country, buyer type, or procurement question your team is trying to answer."
            />
          </div>

          <div className="report-honeypot" aria-hidden="true">
            <label htmlFor="request-report-department" className="contact-label">
              Department
            </label>
            <input
              id="request-report-department"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(event) => updateField("honeypot", event.target.value)}
              className="contact-input"
            />
          </div>

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
              "Send report request"
            )}
          </button>

          <div className="contact-live-consents">
            <label className="contact-live-consent-row">
              <input
                type="checkbox"
                checked={consentRequired}
                onChange={(event) => setConsentRequired(event.target.checked)}
                required
              />
              <span>
                I consent to Civant storing and processing my details to respond
                to this report request.{" "}
                <span className="contact-required">*</span>
              </span>
            </label>

            <label className="contact-live-consent-row">
              <input
                type="checkbox"
                checked={marketingOptIn}
                onChange={(event) => setMarketingOptIn(event.target.checked)}
              />
              <span>
                I would like to receive occasional Civant insights and report
                updates. (Optional)
              </span>
            </label>
          </div>

          {errorMessage ? (
            <p className="report-gate-error" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </form>
      </article>
    </div>
  );
}
