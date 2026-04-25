import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "public/images/resources");
mkdirSync(outDir, { recursive: true });

const W = 1570;
const H = 1000;

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function labelLines(value, max = 18) {
  const words = String(value).split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function multilineText(lines, x, y, options = {}) {
  const {
    fill = "#aeb9ca",
    size = 18,
    weight = 600,
    anchor = "start",
    leading = 26,
    letterSpacing,
  } = options;
  const spacing = letterSpacing ? ` letter-spacing="${letterSpacing}"` : "";
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}"${spacing}>${lines
    .map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : leading}">${esc(line)}</tspan>`)
    .join("")}</text>`;
}

function background(id, accent = "#00c4c4", secondary = "#6ee7b7") {
  return `
  <defs>
    <radialGradient id="${id}-glow" cx="50%" cy="45%" r="62%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.23"/>
      <stop offset="48%" stop-color="#0a1628" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#060d18" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="${id}-panel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#11304a" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#111827" stop-opacity="0.56"/>
    </linearGradient>
    <linearGradient id="${id}-accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.15"/>
      <stop offset="45%" stop-color="${accent}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${secondary}" stop-opacity="0.28"/>
    </linearGradient>
    <filter id="${id}-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <pattern id="${id}-grid" width="58" height="58" patternUnits="userSpaceOnUse">
      <path d="M 58 0 L 0 0 0 58" fill="none" stroke="#ffffff" stroke-opacity="0.055" stroke-width="1"/>
    </pattern>
    <pattern id="${id}-dots" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="${accent}" fill-opacity="0.28"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#08111f"/>
  <rect width="${W}" height="${H}" fill="url(#${id}-glow)"/>
  <rect width="${W}" height="${H}" fill="url(#${id}-grid)" opacity="0.58"/>
  <path d="M-80 690 C 220 540, 342 770, 610 612 S 1090 505, 1650 340" fill="none" stroke="${accent}" stroke-opacity="0.14" stroke-width="2"/>
  <path d="M-60 760 C 260 575, 410 775, 720 630 S 1110 665, 1630 475" fill="none" stroke="${secondary}" stroke-opacity="0.1" stroke-width="2"/>
  <path d="M-60 335 C 270 520, 510 235, 780 400 S 1180 545, 1640 285" fill="none" stroke="${accent}" stroke-opacity="0.1" stroke-width="2"/>
  `;
}

function shell(id, title, kicker, children, accent = "#00c4c4", secondary = "#6ee7b7") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-title ${id}-desc">
  <title id="${id}-title">${esc(title)}</title>
  <desc id="${id}-desc">Civant editorial procurement intelligence graphic for ${esc(title)}.</desc>
  ${background(id, accent, secondary)}
  <g font-family="Montserrat, Inter, Arial, sans-serif">
    <text x="70" y="86" fill="${accent}" font-size="24" font-weight="800" letter-spacing="9">${esc(kicker.toUpperCase())}</text>
    <text x="70" y="148" fill="#f8fafc" font-size="54" font-weight="800" letter-spacing="-1">${esc(title)}</text>
    <line x1="70" y1="188" x2="1500" y2="188" stroke="${accent}" stroke-opacity="0.35"/>
    ${children}
  </g>
</svg>
`;
}

function timeline(id, title, kicker, steps, opts = {}) {
  const accent = opts.accent || "#00c4c4";
  const secondary = opts.secondary || "#6ee7b7";
  const cardWidth = opts.cardWidth || 152;
  const startX = opts.startX || 180;
  const endX = opts.endX || 1390;
  const y = 442;
  const gap = (endX - startX) / (steps.length - 1);
  const bottomY = opts.bottomY || 748;
  const bottomHeight = opts.bottomHeight || 132;
  const bottomWidth = opts.bottomWidth || 655;
  const bottomLeftX = opts.bottomLeftX || 100;
  const bottomRightX = opts.bottomRightX || 815;
  const bottomTextPad = opts.bottomTextPad || 35;
  const bottomTitleSize = opts.bottomTitleSize || 26;
  const bottomNoteSize = opts.bottomNoteSize || 20;
  const bottomNoteMax = opts.bottomNoteMax || 46;
  const stepMarkup = steps
    .map((step, i) => {
      const x = startX + gap * i;
      const active = i < (opts.activeUntil ?? steps.length);
      const color = active ? accent : "#cbd5e1";
      const label = labelLines(step.label, 12);
      return `
        <g>
          <rect x="${x - cardWidth / 2}" y="${y - 102}" width="${cardWidth}" height="258" rx="22" fill="${active ? "#06222f" : "#111827"}" fill-opacity="${active ? 0.58 : 0.5}" stroke="${color}" stroke-opacity="${active ? 0.42 : 0.28}"/>
          <circle cx="${x}" cy="${y - 34}" r="37" fill="#0b1d31" stroke="${color}" stroke-opacity="${active ? 0.95 : 0.64}" stroke-width="3"/>
          <circle cx="${x}" cy="${y - 34}" r="10" fill="${color}" filter="url(#${id}-soft-glow)"/>
          <text x="${x}" y="${y + 50}" fill="${active ? "#72f7f6" : "#e5e7eb"}" font-size="20" font-weight="900" text-anchor="middle">${label
            .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : 24}">${esc(line)}</tspan>`)
            .join("")}</text>
          <text x="${x}" y="${y + 112}" fill="#aeb9ca" font-size="15" font-weight="600" text-anchor="middle">${esc(step.note)}</text>
        </g>`;
    })
    .join("");

  return shell(
    id,
    title,
    kicker,
    `
    <rect x="88" y="250" width="1394" height="456" rx="32" fill="#071321" fill-opacity="0.54" stroke="${accent}" stroke-opacity="0.25"/>
    <rect x="112" y="272" width="570" height="54" rx="18" fill="${accent}" fill-opacity="0.12" stroke="${accent}" stroke-opacity="0.3"/>
    <rect x="888" y="272" width="570" height="54" rx="18" fill="#cbd5e1" fill-opacity="0.07" stroke="#cbd5e1" stroke-opacity="0.22"/>
    <text x="397" y="307" fill="${accent}" font-size="21" font-weight="900" text-anchor="middle">${esc(opts.leftLabel || "Civant advantage")}</text>
    <text x="1173" y="307" fill="#dbeafe" font-size="21" font-weight="800" text-anchor="middle">${esc(opts.rightLabel || "Market awareness")}</text>
    <line x1="${startX}" y1="${y - 34}" x2="${endX}" y2="${y - 34}" stroke="url(#${id}-accent)" stroke-width="5"/>
    <rect x="114" y="594" width="1342" height="84" rx="22" fill="url(#${id}-dots)" opacity="0.35"/>
    ${stepMarkup}
    <rect x="${bottomLeftX}" y="${bottomY}" width="${bottomWidth}" height="${bottomHeight}" rx="22" fill="#06222f" fill-opacity="0.72" stroke="${accent}" stroke-opacity="0.7"/>
    <text x="${bottomLeftX + bottomTextPad}" y="${bottomY + 52}" fill="${accent}" font-size="${bottomTitleSize}" font-weight="900">${esc(opts.primary || "Earlier signals")}</text>
    ${multilineText(labelLines(opts.primaryNote || "More time to prepare, qualify, and position.", bottomNoteMax), bottomLeftX + bottomTextPad, bottomY + 94, {
      fill: "#dbeafe",
      size: bottomNoteSize,
      weight: 650,
      leading: bottomNoteSize + 8,
    })}
    <rect x="${bottomRightX}" y="${bottomY}" width="${bottomWidth}" height="${bottomHeight}" rx="22" fill="#111827" fill-opacity="0.72" stroke="#cbd5e1" stroke-opacity="0.4"/>
    <text x="${bottomRightX + bottomTextPad}" y="${bottomY + 52}" fill="#e5e7eb" font-size="${bottomTitleSize}" font-weight="900">${esc(opts.secondaryTitle || "Reactive window")}</text>
    ${multilineText(labelLines(opts.secondaryNote || "Less context, weaker evidence, compressed decisions.", bottomNoteMax), bottomRightX + bottomTextPad, bottomY + 94, {
      fill: "#aeb9ca",
      size: bottomNoteSize,
      weight: 650,
      leading: bottomNoteSize + 8,
    })}
    `,
    accent,
    secondary,
  );
}

function matrix(id, title, kicker, rows, opts = {}) {
  const accent = opts.accent || "#00c4c4";
  const risk = opts.risk || "#f59e0b";
  const recommendationX = opts.recommendationX || 1088;
  const recommendationY = opts.recommendationY || 800;
  const recommendationWidth = opts.recommendationWidth || 315;
  const recommendationHeight = opts.recommendationHeight || 86;
  const recommendationPadding = opts.recommendationPadding || 28;
  const cols = ["Fit", "Timing", "Evidence", "Risk"];
  const cellW = 190;
  const startX = 595;
  const startY = 305;
  const rowH = 100;
  const rowTitleY = opts.rowTitleY || 28;
  const rowNoteY = opts.rowNoteY || 58;
  const rowLabels = rows.map((r, i) => `
    <text x="125" y="${startY + rowTitleY + i * rowH}" fill="#f8fafc" font-size="25" font-weight="800">${esc(r.label)}</text>
    <text x="125" y="${startY + rowNoteY + i * rowH}" fill="#9ca3af" font-size="17">${esc(r.note)}</text>
  `).join("");
  const headers = cols.map((c, i) => `<text x="${startX + i * cellW + 68}" y="270" fill="${accent}" font-size="20" font-weight="900" text-anchor="middle">${esc(c)}</text>`).join("");
  const cells = rows
    .map((row, r) =>
      row.scores
        .map((score, c) => {
          const color = score > 75 ? accent : score > 50 ? "#6ee7b7" : risk;
          return `
          <g>
            <rect x="${startX + c * cellW}" y="${startY + r * rowH}" width="136" height="58" rx="15" fill="#0b1d31" stroke="${color}" stroke-opacity="0.54"/>
            <rect x="${startX + c * cellW + 14}" y="${startY + r * rowH + 23}" width="${Math.min(108, Math.max(18, score))}" height="12" rx="6" fill="${color}" opacity="0.9"/>
          </g>`;
        })
        .join(""),
    )
    .join("");

  return shell(
    id,
    title,
    kicker,
    `
    <rect x="90" y="220" width="1390" height="540" rx="30" fill="#071321" fill-opacity="0.58" stroke="${accent}" stroke-opacity="0.25"/>
    ${headers}
    ${rowLabels}
    ${cells}
    <g transform="translate(${recommendationX} ${recommendationY})">
      <rect width="${recommendationWidth}" height="${recommendationHeight}" rx="20" fill="#06222f" stroke="${accent}" stroke-opacity="0.65"/>
      <text x="${recommendationPadding}" y="${opts.recommendationLabelY || 34}" fill="${accent}" font-size="15" font-weight="900" letter-spacing="3.2">RECOMMENDED</text>
      ${multilineText(labelLines(opts.recommendation || "Prepare earlier", 22), recommendationPadding, opts.recommendationTextY || 62, {
        fill: "#f8fafc",
        size: 21,
        weight: 850,
        leading: 23,
      })}
    </g>
    `,
    accent,
    opts.secondary || "#6ee7b7",
  );
}

function positioning(id, title, kicker, points, opts = {}) {
  const accent = opts.accent || "#00c4c4";
  const pointMarkup = points
    .map((p) => {
      const labelX = p.labelX ?? p.x + p.r + 20;
      const labelY = p.labelY ?? p.y - 6;
      const noteY = p.noteY ?? labelY + 30;
      const anchor = p.anchor || "start";
      return `
      <g>
        <circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="${p.color}" fill-opacity="0.72" stroke="${p.stroke || p.color}" stroke-width="3"/>
        ${multilineText(labelLines(p.label, p.labelMax || 18), labelX, labelY, {
          fill: "#f8fafc",
          size: p.labelSize || 24,
          weight: 900,
          anchor,
          leading: 27,
        })}
        ${multilineText(labelLines(p.note, p.noteMax || 24), labelX, noteY, {
          fill: "#aeb9ca",
          size: p.noteSize || 18,
          weight: 650,
          anchor,
          leading: 24,
        })}
      </g>`;
    })
    .join("");
  return shell(
    id,
    title,
    kicker,
    `
    <rect x="92" y="242" width="1008" height="638" rx="30" fill="#071321" fill-opacity="0.55" stroke="${accent}" stroke-opacity="0.3"/>
    <line x1="190" y1="792" x2="1018" y2="792" stroke="${accent}" stroke-opacity="0.75" stroke-width="3"/>
    <line x1="190" y1="792" x2="190" y2="330" stroke="${accent}" stroke-opacity="0.75" stroke-width="3"/>
    <text x="615" y="836" fill="${accent}" font-size="22" font-weight="900" text-anchor="middle">${esc(opts.xLabel || "Forward-looking")}</text>
    <text x="125" y="555" fill="${accent}" font-size="21" font-weight="900" text-anchor="middle" transform="rotate(-90 125 555)">${esc(opts.yLabel || "Competitive leverage")}</text>
    <rect x="650" y="318" width="345" height="245" rx="30" fill="${accent}" fill-opacity="0.1" stroke="${accent}" stroke-dasharray="14 12" stroke-opacity="0.75"/>
    <text x="822" y="365" fill="${accent}" font-size="24" font-weight="900" text-anchor="middle">${esc(opts.zone || "Opportunity zone")}</text>
    ${pointMarkup}
    <rect x="1142" y="288" width="336" height="448" rx="28" fill="#0b1d31" fill-opacity="0.74" stroke="#cbd5e1" stroke-opacity="0.26"/>
    <text x="1180" y="352" fill="${accent}" font-size="29" font-weight="900">${esc(opts.sideTitle || "Civant view")}</text>
    ${multilineText([opts.sideOne || "Earlier context", opts.sideTwo || "Better fit", opts.sideThree || "Lower risk"], 1180, 412, {
      fill: "#f8fafc",
      size: 22,
      weight: 850,
      leading: 50,
    })}
    ${multilineText(labelLines(opts.sideNote || "Use evidence to choose where to compete.", 28), 1180, 610, {
      fill: "#aeb9ca",
      size: 18,
      weight: 650,
      leading: 25,
    })}
    `,
    accent,
    opts.secondary || "#6ee7b7",
  );
}

function operatingSystem() {
  const accent = "#00c4c4";
  const layers = [
    ["Data", "Notices, awards, budgets"],
    ["Signals", "Cycles, renewals, policy"],
    ["Scoring", "Fit, timing, competition"],
    ["Workflow", "Account and bid actions"],
    ["Learning", "Outcomes improve models"],
  ];
  const layerMarkup = layers
    .map((layer, i) => {
      const y = 280 + i * 105;
      return `
      <g>
        <rect x="170" y="${y}" width="${820 - i * 48}" height="72" rx="20" fill="#0b1d31" fill-opacity="${0.74 - i * 0.06}" stroke="${accent}" stroke-opacity="${0.55 - i * 0.04}"/>
        <text x="205" y="${y + 44}" fill="${accent}" font-size="22" font-weight="900">${esc(layer[0])}</text>
        <text x="350" y="${y + 44}" fill="#dbeafe" font-size="20" font-weight="700">${esc(layer[1])}</text>
      </g>`;
    })
    .join("");
  return shell(
    "guide-intelligence-function",
    "Building a Procurement Intelligence Function",
    "Operating system",
    `
    ${layerMarkup}
    <g>
      <path d="M900 515 C1010 515, 1010 370, 1130 370" fill="none" stroke="${accent}" stroke-width="5" stroke-opacity="0.8"/>
      <path d="M900 515 C1010 515, 1010 650, 1130 650" fill="none" stroke="#6ee7b7" stroke-width="5" stroke-opacity="0.55"/>
      <circle cx="915" cy="515" r="14" fill="${accent}" filter="url(#guide-intelligence-function-soft-glow)"/>
    </g>
    <rect x="1130" y="300" width="300" height="150" rx="28" fill="#06222f" fill-opacity="0.78" stroke="${accent}" stroke-opacity="0.65"/>
    <text x="1170" y="365" fill="${accent}" font-size="22" font-weight="900">ACCOUNT FOCUS</text>
    <text x="1170" y="405" fill="#f8fafc" font-size="26" font-weight="900">Prepare earlier</text>
    <rect x="1130" y="580" width="300" height="150" rx="28" fill="#111827" fill-opacity="0.78" stroke="#6ee7b7" stroke-opacity="0.52"/>
    <text x="1170" y="645" fill="#6ee7b7" font-size="22" font-weight="900">BID DECISION</text>
    <text x="1170" y="685" fill="#f8fafc" font-size="26" font-weight="900">Prioritize effort</text>
    <circle cx="775" cy="835" r="30" fill="#0b1d31" stroke="${accent}" stroke-width="2.5" stroke-opacity="0.82"/>
    <path d="M760 835h30 M775 820v30" stroke="${accent}" stroke-width="3"/>
    <text x="825" y="844" fill="#dbeafe" font-size="21" font-weight="800">Repeatable intelligence routine</text>
    `,
    accent,
    "#6ee7b7",
  );
}

const assets = [
  {
    file: "guide-public-procurement-cycles.svg",
    svg: timeline(
      "guide-public-procurement-cycles",
      "Public Procurement Cycles",
      "Lifecycle intelligence",
      [
        { label: "Need", note: "Demand forms" },
        { label: "Planning", note: "Budget and scope" },
        { label: "Engagement", note: "Market input" },
        { label: "Tender", note: "Notice published" },
        { label: "Award", note: "Supplier chosen" },
        { label: "Review", note: "Performance" },
        { label: "Renewal", note: "Next window" },
      ],
      {
        activeUntil: 3,
        primary: "Earlier preparation",
        primaryNote: "Signals appear before the formal notice.",
        secondaryTitle: "Published tender",
        secondaryNote: "The market becomes aware when time is already compressed.",
      },
    ),
  },
  {
    file: "guide-contract-lifecycle-signals.svg",
    svg: timeline(
      "guide-contract-lifecycle-signals",
      "Contract Lifecycle Signals",
      "Renewal evidence",
      [
        { label: "Award", note: "Start point" },
        { label: "Delivery", note: "Performance" },
        { label: "Modify", note: "Scope shifts" },
        { label: "Extend", note: "Option used" },
        { label: "Expiry", note: "Window opens" },
        { label: "Renew", note: "Re-compete" },
      ],
      {
        activeUntil: 5,
        primary: "Signal window",
        primaryNote: "Extensions and modifications reveal timing.",
        secondaryTitle: "Late discovery",
        secondaryNote: "Waiting for the notice misses lifecycle context.",
      },
    ),
  },
  {
    file: "guide-renewal-cycles.svg",
    svg: timeline(
      "guide-renewal-cycles",
      "Renewal Cycles",
      "Pipeline timing",
      [
        { label: "Register", note: "Award data" },
        { label: "Duration", note: "Term length" },
        { label: "Monitor", note: "Signals" },
        { label: "Qualify", note: "Fit and risk" },
        { label: "Prepare", note: "Account plan" },
        { label: "Pipeline", note: "Future tender" },
      ],
      {
        activeUntil: 5,
        primary: "Expiry becomes pipeline",
        primaryNote: "Contract dates turn into account preparation windows.",
        secondaryTitle: "Unplanned response",
        secondaryNote: "A surprise tender forces rushed bid choices.",
      },
    ),
  },
  {
    file: "guide-framework-competition.svg",
    svg: timeline(
      "guide-framework-competition",
      "Framework Competition",
      "Access windows",
      [
        { label: "Open", note: "Panel formed" },
        { label: "Award", note: "Suppliers set" },
        { label: "Call-offs", note: "Closed access" },
        { label: "Review", note: "Needs change" },
        { label: "Renewal", note: "Market reopens" },
      ],
      {
        activeUntil: 2,
        startX: 190,
        endX: 1380,
        cardWidth: 148,
        primary: "Panel access",
        primaryNote: "Framework win controls future call-offs.",
        secondaryTitle: "Closed period",
        secondaryNote: "Non-panel suppliers wait for renewal.",
        bottomY: 768,
        bottomHeight: 104,
        bottomWidth: 545,
        bottomLeftX: 185,
        bottomRightX: 840,
        bottomTextPad: 30,
        bottomTitleSize: 24,
        bottomNoteSize: 18,
        bottomNoteMax: 44,
      },
    ),
  },
  {
    file: "guide-incumbent-advantage.svg",
    svg: positioning(
      "guide-incumbent-advantage",
      "Incumbent Advantage",
      "Competitive positioning",
      [
        {
          x: 340,
          y: 652,
          r: 70,
          color: "#f59e0b",
          label: "Incumbent",
          note: "context + relationships",
          labelX: 440,
          labelY: 626,
          noteY: 660,
        },
        {
          x: 675,
          y: 715,
          r: 42,
          color: "#94a3b8",
          label: "Late challenger",
          note: "notice-led response",
          labelX: 745,
          labelY: 690,
          noteY: 724,
        },
        {
          x: 770,
          y: 455,
          r: 56,
          color: "#00c4c4",
          label: "Prepared challenger",
          note: "early evidence",
          labelX: 850,
          labelY: 430,
          noteY: 488,
          labelMax: 14,
        },
      ],
      {
        xLabel: "Earlier preparation",
        yLabel: "Buyer confidence",
        zone: "Challenger window",
        sideOne: "Renewal timing",
        sideTwo: "Switching proof",
        sideThree: "Buyer context",
      },
    ),
  },
  {
    file: "guide-single-bidder-competition.svg",
    svg: positioning(
      "guide-single-bidder-competition",
      "Competition Deficit",
      "Single-bidder signals",
      [
        {
          x: 365,
          y: 690,
          r: 62,
          color: "#94a3b8",
          label: "Low competition",
          note: "few bidders",
          labelX: 458,
          labelY: 672,
          noteY: 706,
          labelMax: 16,
        },
        {
          x: 515,
          y: 535,
          r: 76,
          color: "#f59e0b",
          label: "Single bidder",
          note: "market concentration",
          labelX: 622,
          labelY: 510,
          noteY: 544,
          labelMax: 16,
        },
        {
          x: 810,
          y: 430,
          r: 50,
          color: "#00c4c4",
          label: "Opening",
          note: "better-qualified entry",
          labelX: 890,
          labelY: 410,
          noteY: 444,
        },
      ],
      {
        xLabel: "Market openness",
        yLabel: "Competition quality",
        zone: "New entry signal",
        sideTitle: "Read the gap",
        sideOne: "Few bidders",
        sideTwo: "Incumbent pull",
        sideThree: "Entry timing",
      },
    ),
  },
  {
    file: "guide-confidence-scoring.svg",
    svg: matrix(
      "guide-confidence-scoring",
      "Confidence Scoring",
      "Decision matrix",
      [
        { label: "Opportunity A", note: "High fit, strong timing", scores: [104, 96, 92, 34] },
        { label: "Opportunity B", note: "Good value, weak evidence", scores: [82, 70, 48, 78] },
        { label: "Opportunity C", note: "Poor timing, crowded market", scores: [56, 32, 52, 95] },
      ],
      { recommendation: "Prioritize A" },
    ),
  },
  {
    file: "guide-reactive-bidding-cost.svg",
    svg: matrix(
      "guide-reactive-bidding-cost",
      "Reactive Bidding Cost",
      "Preparation economics",
      [
        { label: "Reactive", note: "Late start, many bids", scores: [42, 28, 38, 104] },
        { label: "Selective", note: "Qualified earlier", scores: [84, 82, 78, 46] },
        { label: "Prepared", note: "Account plan ready", scores: [104, 96, 90, 28] },
      ],
      { accent: "#00c4c4", risk: "#f97316", recommendation: "Prepare selectively" },
    ),
  },
  {
    file: "guide-procurement-intelligence-smes.svg",
    svg: matrix(
      "guide-procurement-intelligence-smes",
      "SME Opportunity Focus",
      "Resource allocation",
      [
        { label: "Local buyer", note: "Strong fit, near renewal", scores: [104, 90, 82, 34] },
        { label: "Partner route", note: "Capability gap covered", scores: [76, 80, 68, 52] },
        { label: "Large framework", note: "Access closed", scores: [48, 30, 44, 96] },
      ],
      {
        recommendation: "Focus scarce time",
        recommendationX: 1110,
        recommendationY: 807,
        recommendationWidth: 280,
        recommendationHeight: 78,
        recommendationPadding: 24,
        recommendationLabelY: 32,
        recommendationTextY: 59,
      },
    ),
  },
  {
    file: "guide-intelligence-function.svg",
    svg: operatingSystem(),
  },
];

for (const asset of assets) {
  writeFileSync(join(outDir, asset.file), asset.svg, "utf8");
  console.log(`generated ${asset.file}`);
}
