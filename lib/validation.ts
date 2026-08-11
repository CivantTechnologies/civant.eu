export const VALIDATION_RECORD_PATH = "/validation";
export const VALIDATION_RECORD_REVIEWED = "10 August 2026";

export const VALIDATION_SUMMARY =
  "Civant will publish independent review outcomes only when the scope, findings, actions, limitations, and implementation status are documented and ready to inspect.";

export const VALIDATION_PUBLICATION_PRINCIPLES = [
  {
    label: "Evidence before promotion",
    title: "Support is not presented as product proof",
    body: "External support, selection, or participation stays separate from claims about platform quality, forecast performance, security, or enterprise readiness.",
  },
  {
    label: "Findings need consequences",
    title: "A review matters when it changes the work",
    body: "Each published record will connect material findings to actions, implementation status, remaining risk, and inspectable evidence where publication is safe.",
  },
  {
    label: "Limits stay visible",
    title: "Every record will state what it does not prove",
    body: "Technical review, academic evaluation, commercial selection, and forecast performance are different forms of evidence and will not be presented as interchangeable.",
  },
] as const;
