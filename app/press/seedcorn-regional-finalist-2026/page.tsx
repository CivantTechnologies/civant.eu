import Image from "next/image";
import Link from "next/link";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { SEEDCORN_PRESS_RELEASE } from "../../../lib/press";
import {
  ORGANIZATION_ID,
  SITE_URL,
  buildArticleMetadata,
  buildBreadcrumbSchema,
} from "../../../lib/seo";

export const dynamic = "force-static";

const release = SEEDCORN_PRESS_RELEASE;

export const metadata = buildArticleMetadata({
  title: release.title,
  description: release.description,
  path: release.path,
  datePublished: release.publishedAt,
  image: release.image,
});

const newsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: release.title,
  description: release.description,
  url: `${SITE_URL}${release.path}`,
  mainEntityOfPage: `${SITE_URL}${release.path}`,
  datePublished: release.publishedAt,
  dateModified: release.publishedAt,
  inLanguage: "en",
  author: {
    "@id": ORGANIZATION_ID,
  },
  publisher: {
    "@id": ORGANIZATION_ID,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}${release.image}`,
    width: 1200,
    height: 1200,
  },
};

export default function SeedcornPressReleasePage() {
  return (
    <>
      <SchemaScript
        data={[
          newsArticleSchema,
          buildBreadcrumbSchema([
            { name: "Home", item: SITE_URL },
            { name: "Press", item: `${SITE_URL}/press` },
            { name: release.title, item: `${SITE_URL}${release.path}` },
          ]),
        ]}
      />

      <Section className="hero-block hero-section press-article-hero">
        <div className="press-article-hero-grid">
          <div className="press-article-hero-copy">
            <Link href="/press" className="press-back-link">
              ← Back to Press
            </Link>
            <p className="eyebrow">For Immediate Release</p>
            <h1 className="headline-xl">{release.title}</h1>
            <p className="text-lead">{release.description}</p>
            <div className="press-article-meta" aria-label="Publication details">
              <span>Dundalk, Ireland</span>
              <time dateTime={release.publishedAt}>{release.publishedLabel}</time>
            </div>
          </div>
          <figure className="press-article-hero-image">
            <Image
              src={release.image}
              alt={release.imageAlt}
              width={1200}
              height={1200}
              priority
            />
            <figcaption>Civant named Seedcorn regional finalist</figcaption>
          </figure>
        </div>
      </Section>

      <Section>
        <article className="press-article-body">
          <p className="press-article-lead">
            Civant, the Dundalk-based procurement intelligence company, has been
            named one of three Business-to-Business finalists for Connacht and
            Leinster in Seedcorn, InterTradeIreland&apos;s all-island
            investor-readiness competition, recognising Civant&apos;s mission to
            give suppliers earlier sight of public-sector opportunities across
            Europe. Civant will pitch in Athlone on 15 October for a €50,000
            regional prize and a place in the all-island semi-finals.
          </p>

          <aside className="seedcorn-proof" aria-label="Official Seedcorn recognition">
            <Image
              src="/images/press/seedcorn-regional-finalist-2026-stamp.png"
              alt="InterTradeIreland Seedcorn Regional Finalist 2026 stamp"
              width={720}
              height={720}
              className="seedcorn-proof-stamp"
            />
            <div className="seedcorn-proof-copy">
              <p className="module-label">Official recognition</p>
              <p>
                InterTradeIreland lists Civant Technologies as a 2026 Connacht
                and Leinster Business-to-Business regional finalist.
              </p>
              <a
                href="https://intertradeireland.com/funding/seedcorn/regional-finals"
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                View the official 2026 regional finalists
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>

          <h2>The race is half over before it starts</h2>
          <p>
            Public contracts are worth billions across Europe, but suppliers are
            expected to compete for them with very little warning. By the time a
            tender is published, the buyer has often already shaped its
            requirements, leaving suppliers less time to understand the buyer,
            take part in legitimate pre-market engagement and prepare properly.
          </p>
          <p>
            Civant was built to fix that. Its platform combines procurement
            history, contract lifecycle data, buyer behaviour and public market
            signals to forecast likely opportunities, so suppliers can prepare
            before a tender is published rather than scrambling after it. Each
            forecast retains its supporting evidence, and Civant evaluates those
            forecasts against what is subsequently published and awarded.
            Separate buyer and competitor intelligence helps suppliers decide
            where they are best placed to compete.
          </p>

          <h2>Why it matters for the tech sector</h2>
          <p>
            The IT and technology sector is project-driven and buyer-led.
            Universities, hospitals, councils and government bodies buy through
            public procurement, and integrators, manufacturers and software
            providers depend heavily on the timing of those contracts. Renewal
            cycles, refresh programmes and framework expiries often follow
            patterns, but they can be difficult for suppliers to identify early
            enough to act. Civant brings those signals together so commercial
            teams can act earlier.
          </p>

          <blockquote>
            <p>
              “We chose Civant as the backbone of our move from Finland into
              Western Europe. It lets us build the right buyer relationships
              months before the tender.”
            </p>
            <cite>Jukka Sormunen, RDI Director at Mobie</cite>
          </blockquote>

          <p>
            Civant currently supports Ireland, the UK, Spain, France, Italy,
            Finland, Belgium and Germany. Founded in 2025, Civant has already
            secured paying customers across Europe, providing early commercial
            evidence for its procurement intelligence proposition. Every current
            plan includes all eight supported countries, giving smaller suppliers
            a practical way to explore cross-border opportunities alongside
            larger industry players.
          </p>

          <h2>From one founder&apos;s frustration to paying customers</h2>
          <p>
            Civant grew from a problem David Manrique had experienced first-hand
            over fifteen years in B2B sales, including public procurement: a good
            opportunity is useful only if you find it in time to act. Today
            Civant has paying customers across Europe and support from Enterprise
            Ireland, Local Enterprise Office Louth and the DkIT New Frontiers
            Phase 2 programme. Civant&apos;s ambition is to help define the future
            of European procurement intelligence.
          </p>

          <h2>What Seedcorn means</h2>
          <p>
            Seedcorn, run by cross-border trade body InterTradeIreland, is an
            all-island investor-readiness competition with a total prize fund of
            €800,000. Entrants compete across Business-to-Business,
            Business-to-Consumer and Deep Tech categories, receiving expert
            feedback and exposure to investors. Each regional winner receives
            €50,000 without giving up equity. The 2026 competition concludes with
            its all-island final and awards ceremony on 12 November.
          </p>
          <p>
            Seedcorn mirrors a real investment process. Judges assess growth
            potential, the management team and the company&apos;s ability to build a
            significant business. For a young company like Civant, non-dilutive
            funding of this kind means the freedom to invest in growth on its own
            terms. If successful at the regional final, Civant will use Seedcorn
            funding to expand into additional European markets, invest in R&amp;D
            to strengthen its forecasting models, add data and engineering
            capacity, and accelerate customer acquisition. These priorities
            reflect Civant&apos;s commitment to delivering actionable procurement
            intelligence to more suppliers across Europe.
          </p>

          <blockquote>
            <p>
              “Seedcorn is particularly meaningful to me because Civant started
              with a very simple frustration: companies are expected to compete
              for public contracts when, by the time a tender is published, much
              of the real opportunity has already passed.”
            </p>
            <p>
              “Reaching the regional final feels like an important external vote
              of confidence. Seedcorn forces you to interrogate the opportunity,
              the model and the evidence. We&apos;re still early, and there&apos;s a
              huge amount of work ahead, but it tells me people outside our
              immediate circle can see the scale of the problem and what we&apos;re
              building around it. As an Irish company building for the European
              market, having that recognised through an all-island programme
              makes it mean even more.”
            </p>
            <cite>David Manrique, Founder and CEO of Civant</cite>
          </blockquote>

          <section className="press-boilerplate" aria-labelledby="about-civant">
            <h2 id="about-civant">About Civant</h2>
            <p>
              Civant is a procurement intelligence platform with forecasting at
              its core, helping suppliers identify likely opportunities, decide
              where to compete and prepare before formal tenders are published.
              Founded by David Manrique and registered in Ireland, Civant serves
              supplier sales and bid teams across Europe.
            </p>
            <Link href="/platform" className="text-link">
              Learn more about Civant
            </Link>
          </section>

          <section className="press-media-contact" aria-labelledby="media-contact">
            <p className="module-label">Media contact</p>
            <h2 id="media-contact">Vicki Goodlock, Pixel Beach</h2>
            <a href="mailto:vicki@pixelbeach.co.uk" className="text-link">
              vicki@pixelbeach.co.uk
            </a>
          </section>
        </article>
      </Section>
    </>
  );
}
