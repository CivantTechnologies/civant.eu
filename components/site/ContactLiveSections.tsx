"use client";

import {
  Briefcase,
  CheckCircle2,
  DollarSign,
  GraduationCap,
  Handshake,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { Section } from "./Section";

type ReasonValue = "grants" | "investment" | "partnership" | "research";

type Reason = {
  value: ReasonValue;
  label: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    value: "grants",
    label: "Grants & Funding",
    description: "EU and national grant programs, innovation funding, ecosystem support",
    icon: DollarSign,
  },
  {
    value: "investment",
    label: "Investment & Finance",
    description: "Angel, seed, and early-stage investment conversations",
    icon: Briefcase,
  },
  {
    value: "partnership",
    label: "Partnerships",
    description: "Commercial partnerships, pilot opportunities, strategic collaboration",
    icon: Handshake,
  },
  {
    value: "research",
    label: "Research & Collaboration",
    description: "Academic partnerships, procurement research, data science collaboration",
    icon: GraduationCap,
  },
];

type FormData = {
  name: string;
  email: string;
  reason: ReasonValue | "";
  message: string;
};

function reasonLabel(value: ReasonValue | "") {
  return reasons.find((reason) => reason.value === value)?.label || "";
}

export function ContactLiveSections() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [consentRequired, setConsentRequired] = useState(false);
  const [consentOptional, setConsentOptional] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleTopicClick(reasonValue: ReasonValue) {
    updateField("reason", reasonValue);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consentRequired) return;

    setIsSubmitting(true);

    try {
      const subject = `${reasonLabel(formData.reason)} - Civant`;
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Conversation topic: ${reasonLabel(formData.reason)}`,
        `Marketing opt-in: ${consentOptional ? "Yes" : "No"}`,
        "",
        "Message:",
        formData.message,
      ].join("\n");
      window.location.href = `mailto:hello@civant.eu?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      setFormData({ name: "", email: "", reason: "", message: "" });
      setConsentRequired(false);
      setConsentOptional(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Section muted>
        <div className="contact-live-success">
          <div className="contact-live-success-icon" aria-hidden="true">
            <CheckCircle2 />
          </div>
          <h2 className="headline-lg">Message received</h2>
          <p className="text-lead">
            Thanks for reaching out. We will review your message and respond as
            soon as possible.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section muted>
        <div className="contact-live-form-wrap" id="contact-form" ref={formRef}>
          <h2 className="headline-lg contact-live-form-title">How can we help?</h2>

          <article className="card contact-live-form-card">
            <form onSubmit={handleSubmit} className="contact-live-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name" className="contact-label">
                  Name <span className="contact-required">*</span>
                </label>
                <input
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="contact-input"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email" className="contact-label">
                  Email <span className="contact-required">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="contact-input"
                  placeholder="email@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-reason" className="contact-label">
                  Conversation topic <span className="contact-required">*</span>
                </label>
                <select
                  id="contact-reason"
                  required
                  value={formData.reason}
                  onChange={(event) =>
                    updateField("reason", event.target.value as ReasonValue)
                  }
                  className="contact-select"
                >
                  <option value="">Select one</option>
                  {reasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message" className="contact-label">
                  Message <span className="contact-required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="contact-textarea"
                  placeholder="Tell us what you'd like to discuss"
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
                  "Send"
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
                    I consent to Civant storing and processing my contact details
                    and message for the purpose of responding to this enquiry.{" "}
                    <span className="contact-required">*</span>
                  </span>
                </label>

                <label className="contact-live-consent-row">
                  <input
                    type="checkbox"
                    checked={consentOptional}
                    onChange={(event) => setConsentOptional(event.target.checked)}
                  />
                  <span>
                    I would like to receive occasional updates and insights from
                    Civant. (Optional)
                  </span>
                </label>
              </div>

              <p className="contact-live-note">
                We typically respond within two business days. We only use your
                details to respond to your enquiry. You can unsubscribe from
                updates at any time.
              </p>
            </form>
          </article>
        </div>
      </Section>

      <Section>
        <div className="contact-live-reasons-wrap">
          <h3 className="contact-live-reasons-title">
            Common reasons people reach out
          </h3>
          <div className="grid grid-2 contact-live-reasons-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              const active = formData.reason === reason.value;

              return (
                <button
                  key={reason.value}
                  type="button"
                  className={`card contact-live-reason-card interactive-surface ${active ? "is-active" : ""}`}
                  onClick={() => handleTopicClick(reason.value)}
                  aria-pressed={active}
                >
                  <div className="contact-live-reason-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h4 className="card-title">{reason.label}</h4>
                  <p className="card-body">{reason.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
