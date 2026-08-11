import Image from "next/image";
import Link from "next/link";
import { founder } from "../../lib/company";

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

type ProofSectionProps = {
  compact?: boolean;
};

export function ProofSection({ compact = false }: ProofSectionProps) {
  return (
    <div className={`proof-section ${compact ? "proof-section-compact" : ""}`.trim()}>
      <div className="section-heading-wrap">
        <p className="eyebrow">Customer Evidence</p>
        <h2 className="headline-lg">Proof from live customer workflows</h2>
        <p className="text-lead section-intro">
          Customer accounts show how Civant supports market entry, buyer focus,
          and bid decisions in practice.
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

      <article className="team-founder-card home-founder-proof">
        <div className="team-founder-identity">
          <Link
            href={founder.profilePath}
            className="founder-photo-link team-founder-photo-link"
            aria-label={`Read about ${founder.name}`}
          >
            <Image
              src={founder.image}
              alt={founder.name}
              width={180}
              height={180}
              className="founder-photo team-founder-photo"
            />
          </Link>
          <div>
            <p className="module-label">Founder accountability</p>
            <h3 className="card-title">A named person behind the product and its claims</h3>
            <p className="card-body">
              Civant is founder-led by {founder.name}, who is directly accountable
              for the platform, its evidence standards, and its public claims.
            </p>
          </div>
        </div>
        <div className="team-founder-note home-founder-proof-note">
          <p>
            Public procurement should be transparent and competitive. Civant
            helps capable suppliers, including SMEs, build tender readiness
            without disrupting delivery to existing customers.
          </p>
          <span className="home-founder-proof-status">
            External support will be reported only when the work, outcomes,
            actions, and limitations are ready to inspect.
          </span>
          <div className="button-row">
            <Link href={founder.profilePath} className="text-link">
              Meet {founder.name}
            </Link>
            <a
              href={founder.profileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              LinkedIn profile
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
