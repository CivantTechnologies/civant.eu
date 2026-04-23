"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

type ReportLeadCaptureProps = {
  reportSlug: string;
  reportTitle: string;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  companyWebsite: string;
  honeypot: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  companyWebsite: "",
  honeypot: "",
};

export function ReportLeadCapture({
  reportSlug,
  reportTitle,
}: ReportLeadCaptureProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [consentRequired, setConsentRequired] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successState, setSuccessState] = useState<{
    downloadUrl: string;
    deliveredByEmail: boolean;
  } | null>(null);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reports/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reportSlug,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          companyWebsite: formData.companyWebsite,
          honeypot: formData.honeypot,
          consentRequired,
          marketingOptIn,
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "We could not process your request.");
      }

      setSuccessState({
        downloadUrl: payload.downloadUrl,
        deliveredByEmail: Boolean(payload.deliveredByEmail),
      });
      setFormData(initialFormState);
      setConsentRequired(false);
      setMarketingOptIn(false);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not process your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (successState) {
    return (
      <div className="contact-live-success report-gate-success">
        <div className="contact-live-success-icon" aria-hidden="true">
          <CheckCircle2 />
        </div>
        <h2 className="headline-lg">Your report is ready</h2>
        <p className="text-lead">
          {successState.deliveredByEmail
            ? "We have also sent a copy to your work email."
            : "The direct download link is ready below."}
        </p>
        <div className="button-row">
          <a href={successState.downloadUrl} className="btn btn-primary">
            Download {reportTitle}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-live-form-wrap">
      <h2 className="headline-lg contact-live-form-title">Get the report</h2>
      <article className="card contact-live-form-card">
        <form onSubmit={handleSubmit} className="contact-live-form-grid">
          <div className="contact-field">
            <label htmlFor="report-name" className="contact-label">
              Name <span className="contact-required">*</span>
            </label>
            <input
              id="report-name"
              required
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="contact-input"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="report-email" className="contact-label">
              Work email <span className="contact-required">*</span>
            </label>
            <input
              id="report-email"
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
            <label htmlFor="report-company" className="contact-label">
              Company <span className="contact-required">*</span>
            </label>
            <input
              id="report-company"
              required
              value={formData.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="contact-input"
              placeholder="Company name"
              autoComplete="organization"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="report-role" className="contact-label">
              Role <span className="contact-required">*</span>
            </label>
            <input
              id="report-role"
              required
              value={formData.role}
              onChange={(event) => updateField("role", event.target.value)}
              className="contact-input"
              placeholder="Your role"
              autoComplete="organization-title"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="report-website" className="contact-label">
              Company website
            </label>
            <input
              id="report-website"
              type="url"
              value={formData.companyWebsite}
              onChange={(event) => updateField("companyWebsite", event.target.value)}
              className="contact-input"
              placeholder="https://company.com"
              autoComplete="url"
            />
          </div>

          <div className="report-honeypot" aria-hidden="true">
            <label htmlFor="report-department" className="contact-label">
              Department
            </label>
            <input
              id="report-department"
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
                Delivering...
              </>
            ) : (
              "Unlock the report"
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
                I consent to Civant storing and processing my details to
                deliver this report and follow up about this request.{" "}
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
