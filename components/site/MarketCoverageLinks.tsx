import Link from "next/link";
import { COMING_MARKETS, LIVE_MARKETS } from "../../lib/markets";
import { MARKET_COVERAGE_SNAPSHOT } from "../../lib/siteFacts";

type MarketCoverageLinksProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  compact?: boolean;
};

const MARKET_CODES: Record<string, string> = {
  ireland: "IE",
  "united-kingdom": "UK",
  spain: "ES",
  france: "FR",
  italy: "IT",
  finland: "FI",
  belgium: "BE",
  germany: "DE",
  netherlands: "NL",
  czechia: "CZ",
};

export function MarketCoverageLinks({
  eyebrow = "Market Coverage",
  title = "Coverage by country",
  body = "Explore Civant procurement intelligence across live European markets and the countries coming soon.",
  compact = false,
}: MarketCoverageLinksProps) {
  return (
    <div className={compact ? "market-link-panel market-link-panel-compact" : "market-link-panel"}>
      <div className="market-link-panel-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="headline-lg">{title}</h2>
        <p className="text-lead section-intro">{body}</p>
        <p className="comparison-line">
          Coverage status last reviewed {MARKET_COVERAGE_SNAPSHOT.dateLabel}.
        </p>
      </div>
      <div className="market-link-groups" aria-label="Civant country coverage">
        <div className="market-link-group">
          <p className="module-label">Live markets</p>
          <div className="market-link-row">
            {LIVE_MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="market-chip market-chip-live"
              >
                <span>{MARKET_CODES[market.slug]}</span>
                {market.country}
              </Link>
            ))}
          </div>
        </div>
        <div className="market-link-group">
          <p className="module-label">Coming soon</p>
          <div className="market-link-row">
            {COMING_MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="market-chip market-chip-coming"
              >
                <span>{MARKET_CODES[market.slug]}</span>
                {market.country}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link href="/markets" className="text-link market-link-all">
        View all market coverage
      </Link>
    </div>
  );
}
