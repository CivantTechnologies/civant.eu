import Image from "next/image";
import Link from "next/link";
import { SchemaScript } from "../../components/site/SchemaScript";
import { Section } from "../../components/site/Section";
import { PRESS_RELEASES } from "../../lib/press";
import { buildCollectionPageSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

const title = "Press and Company News";
const description =
  "Official Civant announcements, company milestones, media resources and press contact information.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/press",
  image: PRESS_RELEASES[0].image,
});

export default function PressPage() {
  return (
    <>
      <SchemaScript
        data={buildCollectionPageSchema({
          name: title,
          description,
          path: "/press",
          items: PRESS_RELEASES.map((release) => ({
            name: release.title,
            path: release.path,
            description: release.description,
          })),
        })}
      />

      <Section className="hero-block hero-section press-hero">
        <div className="press-hero-grid">
          <div>
            <p className="eyebrow">Press Room</p>
            <h1 className="headline-xl">Company news, milestones and press enquiries</h1>
            <p className="text-lead">
              Official announcements from Civant, including programme milestones,
              partnerships, product developments and independent recognition.
            </p>
          </div>
          <aside className="press-contact-card" aria-label="Media contact">
            <p className="module-label">Media enquiries</p>
            <h2>Talk to the Civant press team</h2>
            <p>
              For interviews, approved photography, company background or other
              media enquiries, contact Vicki Goodlock at Pixel Beach.
            </p>
            <a href="mailto:vicki@pixelbeach.co.uk" className="text-link">
              vicki@pixelbeach.co.uk
            </a>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="press-section-heading">
          <div>
            <p className="eyebrow">Latest Release</p>
            <h2 className="headline-lg">The latest from Civant</h2>
          </div>
          <p>
            Verified company announcements with publication dates, supporting
            context and a named media contact.
          </p>
        </div>

        <div className="press-release-grid">
          {PRESS_RELEASES.map((release) => (
            <article key={release.path} className="press-release-card">
              <Link href={release.path} className="press-release-image-link" tabIndex={-1}>
                <Image
                  src={release.image}
                  alt={release.imageAlt}
                  width={1200}
                  height={1200}
                  priority
                  className="press-release-image"
                />
              </Link>
              <div className="press-release-card-copy">
                <div className="press-release-meta">
                  <span>{release.category}</span>
                  <time dateTime={release.publishedAt}>{release.publishedLabel}</time>
                </div>
                <h3>
                  <Link href={release.path}>{release.title}</Link>
                </h3>
                <p>{release.description}</p>
                <Link href={release.path} className="card-link-cta">
                  Read the release <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
