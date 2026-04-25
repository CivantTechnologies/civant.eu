import Image from "next/image";

type AdvisorProof = {
  name: string;
  href: string;
  context: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoTone?: "dark" | "light";
  logoSize?: "compact" | "standard" | "wide";
};

const customerProof = [
  {
    company: "UbiCast",
    href: "https://www.ubicast.eu/",
    logo: "/logos/ubicast-logo-white.png",
    logoWidth: 210,
    logoHeight: 59,
    quote:
      "We see every market in one place, score each tender against our strengths, often before they're even published, and know immediately where to bid.",
    person: "Jean-Marie Cognet",
    role: "CEO, UbiCast",
  },
  {
    company: "Mobie",
    href: "https://www.mobie.fi/en/",
    logo: "/logos/mobie-logo-white.png",
    logoWidth: 210,
    logoHeight: 55,
    quote:
      "We chose Civant as the backbone of our move from Finland into Western Europe. It lets us build the right buyer relationships months before the tender.",
    person: "Jukka Sormunen",
    role: "RDI Director, Mobie",
  },
];

export const advisedBy: AdvisorProof[] = [
  {
    name: "Local Enterprise Office Louth",
    href: "https://www.localenterprise.ie/louth/",
    logo: "/logos/local-enterprise-office-logo.png",
    logoWidth: 267,
    logoHeight: 189,
    logoTone: "dark",
    logoSize: "compact",
    context: "Enterprise support and advisory network for Louth-based businesses.",
  },
  {
    name: "Enterprise Ireland / New Frontiers",
    href: "https://www.enterprise-ireland.com/en/about-enterprise-ireland",
    logo: "/logos/enterprise-ireland-logo.png",
    logoWidth: 615,
    logoHeight: 173,
    logoTone: "dark",
    logoSize: "standard",
    context:
      "Enterprise Ireland's national entrepreneur development programme, delivered locally through the Regional Development Centre in Dundalk.",
  },
  {
    name: "Regional Development Centre Dundalk",
    href: "https://www.louthmeathhubs.ie/hubs/regional-development-center/",
    logo: "/logos/dkit-rdc-logo-white.png",
    logoWidth: 300,
    logoHeight: 100,
    logoTone: "dark",
    logoSize: "wide",
    context:
      "Dundalk enterprise hub supporting early-stage companies with incubation, development, and growth infrastructure.",
  },
];

type ProofSectionProps = {
  compact?: boolean;
};

export function ProofSection({ compact = false }: ProofSectionProps) {
  if (compact) {
    return (
      <div className="proof-section proof-section-compact">
        <div className="section-heading-wrap">
          <p className="eyebrow">Proof</p>
          <h2 className="headline-lg">Trusted customers. Trusted advisors.</h2>
          <p className="text-lead section-intro">
            Civant is already supporting European market entry and shaped with
            credible enterprise advisory networks.
          </p>
        </div>

        <div className="home-proof-grid">
          {customerProof.map((item) => (
            <article key={item.company} className="card customer-proof-card home-proof-card">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="customer-logo-link"
                aria-label={`Visit ${item.company}`}
              >
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  loading="eager"
                  className="customer-logo"
                />
              </a>
              <blockquote className="customer-quote">
                <p>"{item.quote}"</p>
                <footer>
                  {item.person}
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        <div className="home-advisor-rail" aria-label="Civant advisory support">
          {advisedBy.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-advisor-logo-link"
              aria-label={`Visit ${item.name}`}
            >
              {item.logo && item.logoWidth && item.logoHeight ? (
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  loading="eager"
                  className={`advisor-logo advisor-logo-${item.logoSize ?? "standard"}`}
                />
              ) : (
                item.name
              )}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="proof-section">
      <div className="section-heading-wrap">
        <p className="eyebrow">Proof</p>
        <h2 className="headline-lg">Trusted customers. Trusted advisors.</h2>
        <p className="text-lead section-intro">
          Customer proof shows Civant in use. Advisory support shows the
          enterprise network helping shape the company.
        </p>
      </div>

      <div className="proof-layout">
        <div className="proof-block">
          <div className="proof-block-heading">
            <p className="eyebrow">Trusted by</p>
            <h3 className="card-title">Customers using Civant to enter markets earlier</h3>
          </div>
          <div className="grid grid-2 customer-proof-grid">
            {customerProof.map((item) => (
              <article key={item.company} className="card customer-proof-card">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="customer-logo-link"
                  aria-label={`Visit ${item.company}`}
                >
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={item.logoWidth}
                    height={item.logoHeight}
                    className="customer-logo"
                  />
                </a>
                <blockquote className="customer-quote">
                  <p>"{item.quote}"</p>
                  <footer>
                    {item.person}
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
        </div>

        <div className="proof-block advisor-proof-block">
          <div className="proof-block-heading">
            <p className="eyebrow">Advised by</p>
            <h3 className="card-title">Enterprise support and founder advisory networks</h3>
          </div>
          <div className="advisor-proof-grid">
            {advisedBy.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-link advisor-proof-card interactive-surface"
              >
                {item.logo && item.logoWidth && item.logoHeight ? (
                  <span
                    className={`advisor-logo-wrap advisor-logo-wrap-${item.logoTone ?? "light"}`}
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={item.logoWidth}
                      height={item.logoHeight}
                      className={`advisor-logo advisor-logo-${item.logoSize ?? "standard"}`}
                    />
                  </span>
                ) : null}
                <h4 className="card-title">{item.name}</h4>
                <p className="card-body">{item.context}</p>
                <span className="card-link-cta">Visit website</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
