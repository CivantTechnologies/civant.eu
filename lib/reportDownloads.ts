import crypto from "node:crypto";

export type ReportSection = {
  title: string;
  body: string[];
};

export type ReportDefinition = {
  slug: string;
  title: string;
  eyebrow: string;
  datePublished: string;
  snapshotDate: string;
  metaTitle: string;
  metaDescription: string;
  landingPath: string;
  fileName: string;
  subtitle: string;
  summary: string;
  landingIntro: string;
  audience: string[];
  visibleSignals: string[];
  visibleActions: string[];
  reportIncludes: string[];
  supportItems: string[];
  sections: ReportSection[];
};

export type ReportLeadPayload = {
  reportSlug: string;
  name: string;
  email: string;
  company: string;
  role: string;
  companyWebsite?: string;
  marketingOptIn?: boolean;
  consentRequired: boolean;
  honeypot?: string;
};

const REPORT_DOWNLOAD_TTL_MS = 1000 * 60 * 60 * 72;

const COMMON_PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "mail.com",
  "hey.com",
  "zoho.com",
]);

const COMMON_DISPOSABLE_EMAIL_DOMAINS = new Set([
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "temp-mail.org",
  "tempmail.com",
  "yopmail.com",
  "sharklasers.com",
  "getnada.com",
  "throwawaymail.com",
  "trashmail.com",
]);

export const REPORTS: ReportDefinition[] = [
  {
    slug: "education-procurement-outlook-q4-2026",
    title: "Education Procurement Outlook Q4 2026",
    eyebrow: "Forecast Report",
    datePublished: "2026-04-23T00:00:00+00:00",
    snapshotDate: "23 April 2026",
    metaTitle: "Education Procurement Outlook Q4 2026 | Civant",
    metaDescription:
      "Download Civant's Education Procurement Outlook for Q4 2026 to see a dated runway snapshot, country benchmarks, and supplier pressure across public education buyers.",
    landingPath: "/resources/education-procurement-outlook-q4-2026",
    fileName: "civant-education-procurement-outlook-q4-2026.html",
    subtitle:
      "A dated Q4 runway snapshot for teams selling into public education markets across Civant's current European coverage layers.",
    summary:
      "This report uses a dated Civant snapshot from 23 April 2026 to show where high-confidence education runway is already visible, how contract values differ by market, and where repeat supplier pressure is already visible in public award history.",
    landingIntro:
      "Download a concise public-safe brief designed to help your team decide where education demand is moving now, what that demand can look like by market, and where deeper follow-up is worth the effort.",
    audience: [
      "Bid teams preparing for education-sector opportunities",
      "B2G sales teams building earlier account plans in public education",
      "Commercial leaders deciding where to focus Q4 public-sector effort",
    ],
    visibleSignals: [
      "A current runway snapshot showing 41 high-confidence education opportunities in the approved Civant snapshot",
      "Country mix led by Italy with 25 opportunities, followed by France with 8, the United Kingdom with 7, and Ireland with 1",
      "Historic education award benchmarks showing a much heavier ticket size in Ireland and France than in Spain",
      "Repeat supplier pressure already visible in public education categories such as food services, library content, campus works, and support contracts",
    ],
    visibleActions: [
      "Treat Italy as the densest current runway in this snapshot, especially where digital, facilities, construction, and professional services overlap",
      "Use France and Ireland for earlier account planning where historic education buying patterns are easier to benchmark",
      "Treat incumbent-heavy categories as qualification decisions, not automatic pursuits",
    ],
    reportIncludes: [
      "A dated country snapshot of high-confidence education runway",
      "Historic contract-value benchmarks from education award history",
      "Named repeat suppliers where public award history is already visible",
      "A short methodology note explaining how Civant turns signals into runway",
    ],
    supportItems: [
      "Built for bid teams, B2G sales teams, and commercial leaders",
      "Snapshot dated 23 April 2026",
      "Public-safe by design. Full buyer-level depth stays inside Civant",
    ],
    sections: [
      {
        title: "Executive Summary",
        body: [
          "This report is anchored to a dated Civant snapshot from 23 April 2026. In that snapshot, Civant surfaced 41 high-confidence education opportunities across four markets: Italy with 25, France with 8, the United Kingdom with 7, and Ireland with 1.",
          "That mix matters because it does not describe the whole education market. It shows where the current runway is already dense enough to justify attention inside the approved tenant snapshot. Italy carries the heaviest visible runway right now, while France and the United Kingdom show smaller but still credible clusters of near-term education demand.",
          "This report is meant to be commercially useful without exposing buyer-level scoring or the full Civant workflow. It gives enough evidence to show where the market is moving, how contract sizes differ by country, and where incumbent pressure is likely to matter first.",
        ],
      },
      {
        title: "Current Runway Snapshot",
        body: [
          "Italy is the most concentrated education runway in the current snapshot. The strongest high-confidence cluster sits around universities and inter-university entities, with visible activity across professional services, digital and ICT, facilities, research, and selected construction categories.",
          "France shows a smaller but cleaner university-led runway, including visible movement around Bordeaux, Lorraine, Aix-Marseille, Caen, Rouen, and Sorbonne-linked institutions. The United Kingdom adds a smaller set of university opportunities, including the University of the West of England, Birmingham City University, the University of Essex, the University of Sussex, and the University of Salford.",
          "Ireland is lighter in this specific high-confidence slice, which is exactly why a runway view matters. The absence of volume in one snapshot does not mean the market is weak. It means teams should distinguish between current visible runway and the broader education procurement base that sits underneath it.",
        ],
      },
      {
        title: "Historic Value And Incumbent Benchmarks",
        body: [
          "The same approved tenant snapshot also contains deep public education award history in Ireland, France, and Spain. That history gives a useful benchmark for contract size and repeat supplier pressure, even when the current high-confidence runway is concentrated elsewhere.",
          "Ireland's education awards average about EUR 1.23 million, with a median closer to EUR 191 thousand. France averages about EUR 1.13 million, with a median around EUR 300 thousand. Spain is lighter on average at roughly EUR 247 thousand, with a median closer to EUR 55 thousand. Those medians matter because they show the typical contract is usually smaller than the headline average suggests.",
          "Repeat supplier pressure is already visible in that history. Public-safe examples include The Lunch Bag Unlimited in Ireland, EBSCO Information Services SAS in France, and Fulton S.A. in Spain. These names are not the whole market. They are signals that some education categories already have visible repeat winners, which should shape qualification decisions early.",
        ],
      },
      {
        title: "What Suppliers Should Do Now",
        body: [
          "First, split runway from benchmark. Use the live high-confidence snapshot to decide where Q4 attention is warranted now, then use award history to understand what a realistic deal profile looks like in each market.",
          "Second, narrow by category before you narrow by logo. In the current snapshot, the education runway does not sit in one neat bucket. It cuts across digital, campus services, professional services, construction, research, and facilities. Teams that segment categories early will qualify more cleanly.",
          "Third, use incumbent pressure to decide whether a pursuit deserves real effort. Categories with obvious repeat suppliers are often still attractive, but they call for sharper qualification, partner strategy, and account planning before notice-stage work begins.",
        ],
      },
      {
        title: "How Civant Builds Your Runway",
        body: [
          "Civant does not build this view from one notice feed. The runway layer combines current high-confidence forecast output with contract lifecycle context, buyer behavior, award history, and external public signals that point to change before formal publication.",
          "For this public report, the visible layer is intentionally partial. You can see the shape of the runway, the weight of different markets, and some repeat supplier pressure, but not the buyer-level scoring, evidence chain, or qualification workflow that sits behind it.",
          "That is the point of the report. It should help a serious team understand where to look next, while making clear that the real advantage is inside the platform once you need buyer timing, scope, and competitor context at working depth.",
        ],
      },
    ],
  },
  {
    slug: "healthcare-procurement-outlook-q4-2026",
    title: "Healthcare Procurement Outlook Q4 2026",
    eyebrow: "Forecast Report",
    datePublished: "2026-04-23T00:00:00+00:00",
    snapshotDate: "23 April 2026",
    metaTitle: "Healthcare Procurement Outlook Q4 2026 | Civant",
    metaDescription:
      "Download Civant's Healthcare Procurement Outlook for Q4 2026 to see a dated runway snapshot, contract-value context, and supplier pressure across public healthcare buyers.",
    landingPath: "/resources/healthcare-procurement-outlook-q4-2026",
    fileName: "civant-healthcare-procurement-outlook-q4-2026.html",
    subtitle:
      "A dated Q4 runway snapshot for teams selling into public healthcare markets across Civant's current European coverage layers.",
    summary:
      "This report uses a dated Civant snapshot from 23 April 2026 to show where healthcare demand is already clustering, how contract shapes differ by market, and where repeat supplier pressure may change qualification decisions.",
    landingIntro:
      "Download a concise public-safe brief designed to help your team understand where healthcare demand is forming, which buying patterns matter most, and where deeper account work is worth the effort.",
    audience: [
      "Bid teams preparing for healthcare-sector opportunities",
      "Commercial leaders deciding where to focus near-term healthcare effort",
      "B2G sales teams planning earlier engagement with hospitals, health systems, and procurement bodies",
    ],
    visibleSignals: [
      "A dated snapshot of visible healthcare runway across Civant's current market view",
      "Historic contract-value context showing how healthcare buying behaves across equipment, services, and digital categories",
      "Repeat supplier pressure signals where healthcare categories already show entrenched winners",
      "Category-level clues pointing to where healthcare demand may move first in Q4",
    ],
    visibleActions: [
      "Separate medtech, digital health, facilities, and support-service demand before deciding which accounts deserve attention",
      "Use historic benchmark context to frame realistic deal sizes and resourcing assumptions early",
      "Treat incumbent-heavy healthcare categories as sharper qualification decisions, not automatic pursuits",
    ],
    reportIncludes: [
      "A dated healthcare runway snapshot across Civant's current market view",
      "Historic contract-value context to help frame likely deal sizes",
      "Repeat-supplier signals already visible in public award history",
      "Practical actions for Q4 planning and qualification",
    ],
    supportItems: [
      "Built for healthcare bid teams, sales teams, and commercial leaders",
      "Snapshot dated 23 April 2026",
      "Public-safe by design. Full buyer-level depth stays inside Civant",
    ],
    sections: [
      {
        title: "Executive Summary",
        body: [
          "Healthcare procurement is structurally uneven. Large buyers can concentrate demand into framework-heavy programmes, while local entities create more fragmented buying windows across equipment, services, and digital categories.",
          "This report gives a dated, public-safe view of where healthcare runway is visible now, where award history helps frame deal size, and where repeat supplier pressure is already apparent enough to affect qualification.",
          "The aim is not to replicate the Civant workflow. It is to help a serious team decide where deeper account work is likely to pay off first.",
        ],
      },
      {
        title: "Where Healthcare Runway Tends To Form",
        body: [
          "Healthcare demand rarely sits in one clean category. It often spans digital systems, facilities, specialist equipment, logistics, and outsourced support in parallel, which is why category discipline matters before account targeting.",
          "A dated runway view helps teams distinguish current visible movement from the broader healthcare market. That difference matters because a market can be strategically important without showing the densest immediate Q4 runway in every category.",
        ],
      },
      {
        title: "Historic Value And Supplier Pressure",
        body: [
          "Award history is useful in healthcare because average values can hide big variation between routine supply categories and larger service or infrastructure contracts. Median values usually give the more practical benchmark for planning.",
          "Repeat supplier pressure also matters more than headline volume. Categories with visible recurring winners often require stronger positioning, partner strategy, or qualification discipline before a pursuit deserves real effort.",
        ],
      },
      {
        title: "What Suppliers Should Do Now",
        body: [
          "First, split the sector into practical motions: digital health, medtech and equipment, estates and facilities, and outsourced support. Teams that do that early avoid chasing a generic healthcare market that is too broad to act on.",
          "Second, use benchmark context to calibrate where a pursuit fits your commercial model. The point is not only to find demand. It is to find demand that matches how your team can win.",
          "Third, treat repeat supplier pressure as a planning signal. It should influence account strategy, not only bid-stage behaviour.",
        ],
      },
      {
        title: "How Civant Builds Your Runway",
        body: [
          "Civant combines current runway signals with contract lifecycle context, buyer behaviour, award history, and external public evidence to help teams understand where demand is forming before formal notice-stage urgency takes over.",
          "For this public report, the visible layer is intentionally partial. You can see the shape of the opportunity, but not the buyer-level scoring, evidence chain, or qualification workflow that sits behind the platform.",
        ],
      },
    ],
  },
  {
    slug: "public-construction-procurement-outlook-q4-2026",
    title: "Public Construction Procurement Outlook Q4 2026",
    eyebrow: "Forecast Report",
    datePublished: "2026-04-23T00:00:00+00:00",
    snapshotDate: "23 April 2026",
    metaTitle: "Public Construction Procurement Outlook Q4 2026 | Civant",
    metaDescription:
      "Download Civant's Public Construction Procurement Outlook for Q4 2026 to see a dated runway snapshot, contract-value context, and supplier pressure across public construction buyers.",
    landingPath: "/resources/public-construction-procurement-outlook-q4-2026",
    fileName: "civant-public-construction-procurement-outlook-q4-2026.html",
    subtitle:
      "A dated Q4 runway snapshot for teams selling into public construction and capital-project markets across Civant's current European coverage layers.",
    summary:
      "This report uses a dated Civant snapshot from 23 April 2026 to show where public construction demand is clustering, how contract shapes differ by market, and where repeat supplier pressure may alter qualification and partner strategy.",
    landingIntro:
      "Download a concise public-safe brief designed to help your team understand where public construction demand is forming, how project sizes can differ by market, and where account effort should go first.",
    audience: [
      "Construction bid teams and commercial leaders planning Q4 public-sector effort",
      "B2G sales teams working around capital programmes and infrastructure demand",
      "Partners assessing where qualification and consortium strategy matter most",
    ],
    visibleSignals: [
      "A dated snapshot of visible public construction runway across Civant's current market view",
      "Historic contract-value context showing how project sizes differ across construction categories and markets",
      "Repeat supplier pressure signals where framework or incumbent advantage is already visible",
      "Category-level clues pointing to where project planning may convert into procurement activity first",
    ],
    visibleActions: [
      "Split civils, estates, specialist works, and project services before deciding where to commit bid effort",
      "Use value context to separate flagship pursuits from repeatable mid-market opportunities",
      "Treat incumbent pressure and partner requirements as early qualification questions, not late-stage surprises",
    ],
    reportIncludes: [
      "A dated public construction runway snapshot across Civant's current market view",
      "Historic contract-value context to help frame likely project sizes",
      "Repeat-supplier signals already visible in public award history",
      "Practical actions for Q4 planning and qualification",
    ],
    supportItems: [
      "Built for construction bid teams, sales teams, and commercial leaders",
      "Snapshot dated 23 April 2026",
      "Public-safe by design. Full buyer-level depth stays inside Civant",
    ],
    sections: [
      {
        title: "Executive Summary",
        body: [
          "Public construction behaves differently from many other public-sector categories because planning horizons are longer, deal sizes can swing dramatically, and partner strategy often matters before a notice is even published.",
          "This report gives a dated, public-safe view of where public construction runway is visible now, where historic value context matters most, and where repeat supplier pressure or framework structures can change qualification decisions.",
          "The goal is to help teams decide where to go deeper, not to replace the working depth inside Civant.",
        ],
      },
      {
        title: "Where Construction Runway Tends To Form",
        body: [
          "Construction demand usually appears first through planning context, buyer behaviour, and project structure rather than neat category labels alone. Civils, estates, project services, and specialist works often move on different timelines even inside the same buyer programme.",
          "A runway view helps teams separate visible movement from broad market ambition. That distinction matters because strategic markets can still require patience, partner work, or sharper qualification before they become active pursuits.",
        ],
      },
      {
        title: "Historic Value And Supplier Pressure",
        body: [
          "Value context matters in construction because averages can be distorted by a small number of very large projects. Median values and category-specific benchmarks usually tell a more practical story about where repeatable opportunities sit.",
          "Supplier pressure also matters early. Repeat winners, framework structures, and partner-heavy categories can all change how a team should resource a pursuit long before tender-stage work begins.",
        ],
      },
      {
        title: "What Suppliers Should Do Now",
        body: [
          "First, narrow the market by project motion. Teams that separate infrastructure, estates, specialist works, and project services early will qualify more cleanly and avoid treating construction as one generic market.",
          "Second, use value context to decide whether a category supports direct pursuit, partner-led entry, or lighter account monitoring.",
          "Third, treat repeat supplier pressure as a commercial planning signal. It should shape partner choices, resource allocation, and where to pursue early engagement.",
        ],
      },
      {
        title: "How Civant Builds Your Runway",
        body: [
          "Civant combines current runway signals with contract lifecycle context, award history, buyer behaviour, and external public evidence to help teams understand where construction demand is likely to become actionable.",
          "For this public report, the visible layer is intentionally partial. It shows the shape of the opportunity without exposing the buyer-level scoring, evidence chain, or working qualification depth that lives inside the platform.",
        ],
      },
    ],
  },
];

export function getReportBySlug(slug: string) {
  return REPORTS.find((report) => report.slug === slug);
}

export function getAllReports() {
  return REPORTS;
}

export function validateWorkEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  const parts = normalized.split("@");

  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const domain = parts[1];

  if (COMMON_PERSONAL_EMAIL_DOMAINS.has(domain)) {
    return {
      ok: false,
      message: "Please use your work email to access this report.",
    };
  }

  if (COMMON_DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return {
      ok: false,
      message: "Temporary email addresses are not accepted for this report.",
    };
  }

  if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".")) {
    return { ok: false, message: "Please enter a valid work email address." };
  }

  return { ok: true, normalized };
}

export function validateReportLead(payload: ReportLeadPayload) {
  if (payload.honeypot?.trim()) {
    return { ok: false, message: "Submission blocked." };
  }

  if (!payload.reportSlug || !getReportBySlug(payload.reportSlug)) {
    return { ok: false, message: "That report is not available." };
  }

  if (!payload.name.trim() || !payload.company.trim() || !payload.role.trim()) {
    return { ok: false, message: "Please complete all required fields." };
  }

  if (!payload.consentRequired) {
    return {
      ok: false,
      message: "Please confirm consent so we can deliver the report.",
    };
  }

  return validateWorkEmail(payload.email);
}

function getDownloadSecret() {
  return (
    process.env.REPORT_DOWNLOAD_SECRET ||
    process.env.RESEND_API_KEY ||
    "civant-local-report-secret"
  );
}

function toBase64Url(input: string) {
  return Buffer.from(input).toString("base64url");
}

function fromBase64Url(input: string) {
  return Buffer.from(input, "base64url").toString("utf8");
}

export function createReportDownloadToken(reportSlug: string, email: string) {
  const payload = JSON.stringify({
    reportSlug,
    email: email.trim().toLowerCase(),
    exp: Date.now() + REPORT_DOWNLOAD_TTL_MS,
  });
  const encodedPayload = toBase64Url(payload);
  const signature = crypto
    .createHmac("sha256", getDownloadSecret())
    .update(encodedPayload)
    .digest("base64url");

  return `${encodedPayload}.${signature}`;
}

export function verifyReportDownloadToken(token: string) {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = crypto
    .createHmac("sha256", getDownloadSecret())
    .update(encodedPayload)
    .digest("base64url");

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return null;
  }

  try {
    const parsed = JSON.parse(fromBase64Url(encodedPayload)) as {
      reportSlug: string;
      email: string;
      exp: number;
    };

    if (!parsed.reportSlug || !parsed.email || typeof parsed.exp !== "number") {
      return null;
    }

    if (parsed.exp < Date.now()) {
      return null;
    }

    const report = getReportBySlug(parsed.reportSlug);

    if (!report) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderReportHtml(report: ReportDefinition) {
  const audienceHtml = report.audience
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const signalHtml = report.visibleSignals
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const actionHtml = report.visibleActions
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const includesHtml = report.reportIncludes
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const sectionsHtml = report.sections
    .map(
      (section) => `
        <section>
          <h2>${escapeHtml(section.title)}</h2>
          ${section.body
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join("")}
        </section>
      `,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(report.title)}</title>
    <style>
      body { margin: 0; font-family: Arial, Helvetica, sans-serif; background: #f5f7fb; color: #08111f; line-height: 1.6; }
      main { max-width: 920px; margin: 0 auto; padding: 48px 24px 80px; }
      .hero { background: #08111f; color: #f7f9fc; border-radius: 24px; padding: 40px; margin-bottom: 28px; }
      .hero-logo-wrap { margin-bottom: 24px; }
      .hero-logo {
        display: block;
        width: 220px;
        max-width: 100%;
        height: auto;
      }
      .eyebrow { margin: 0 0 12px; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: #60d3da; }
      h1 { margin: 0 0 12px; font-size: 42px; line-height: 1.1; }
      .subtitle { margin: 0 0 12px; font-size: 20px; color: #d6deeb; }
      .summary { margin: 0; max-width: 720px; color: #d6deeb; }
      .panel { background: #ffffff; border: 1px solid rgba(8, 17, 31, 0.08); border-radius: 20px; padding: 28px; margin-bottom: 24px; }
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
      h2 { margin-top: 0; margin-bottom: 14px; font-size: 26px; }
      ul { margin: 0; padding-left: 20px; }
      li + li { margin-top: 10px; }
      section + section { margin-top: 28px; }
      p + p { margin-top: 14px; }
      .footer { margin-top: 32px; font-size: 14px; color: #516074; }
      @media (max-width: 760px) {
        main { padding: 24px 16px 48px; }
        .hero { padding: 24px; }
        h1 { font-size: 32px; }
        .grid { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    <main>
      <article class="hero">
        <div class="hero-logo-wrap">
          <img
            class="hero-logo"
            src="https://civant.eu/civant-logo.png"
            alt="Civant"
          />
        </div>
        <p class="eyebrow">${escapeHtml(report.eyebrow)}</p>
        <h1>${escapeHtml(report.title)}</h1>
        <p class="subtitle">${escapeHtml(report.subtitle)}</p>
        <p class="summary">${escapeHtml(report.summary)}</p>
      </article>
      <div class="grid">
        <section class="panel">
          <h2>Who this is for</h2>
          <ul>${audienceHtml}</ul>
        </section>
        <section class="panel">
          <h2>What suppliers should do now</h2>
          <ul>${actionHtml}</ul>
        </section>
      </div>
      <div class="grid">
        <section class="panel">
          <h2>Signals worth watching</h2>
          <ul>${signalHtml}</ul>
        </section>
        <section class="panel">
          <h2>What this report includes</h2>
          <ul>${includesHtml}</ul>
        </section>
      </div>
      <section class="panel">
        ${sectionsHtml}
        <p class="footer">
          This report is a public-safe preview designed to help teams understand the sector
          and decide whether they should go deeper with Civant.
        </p>
      </section>
    </main>
  </body>
</html>`;
}
