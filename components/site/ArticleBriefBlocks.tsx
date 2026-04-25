import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { ArticleSource } from "../../lib/articleSources";

type BriefItem = {
  label: string;
  text: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function ArticleBriefGrid({ children }: { children: ReactNode }) {
  return <div className="article-brief-grid">{children}</div>;
}

export function ArticleAnswerBlock({
  answer,
  label = "TL;DR",
}: {
  answer: string;
  label?: string;
}) {
  return (
    <aside className="article-answer-block" aria-label={label}>
      <p className="eyebrow">{label}</p>
      <p>{answer}</p>
    </aside>
  );
}

export function ArticleHeroVisual({
  src,
  alt,
  caption,
  tone = "intelligence",
  reliefMark = true,
}: {
  src: string;
  alt: string;
  caption?: string;
  tone?: "intelligence" | "preparation";
  reliefMark?: boolean;
}) {
  return (
    <figure
      className={`article-hero-visual article-hero-visual-${tone} ${
        reliefMark ? "article-hero-visual-relief" : ""
      }`.trim()}
    >
      <div className="article-hero-image">
        <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 48rem" priority={false} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function ArticleTakeaways({ items }: { items: BriefItem[] }) {
  return (
    <aside className="article-brief-card article-takeaways" aria-label="Key takeaways">
      <p className="eyebrow">Briefing Notes</p>
      <h2 className="card-title">What to take from this article</h2>
      <ul className="article-brief-list">
        {items.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function ArticleToc({ items }: { items: LinkItem[] }) {
  return (
    <nav className="article-brief-card article-toc" aria-label="Article sections">
      <p className="eyebrow">In This Brief</p>
      <ol>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleInsightPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="article-insight-panel">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="card-title">{title}</h2>
      <div className="article-insight-copy">{children}</div>
    </aside>
  );
}

export function ArticleActionPanel({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <aside className="article-action-panel">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="card-title">{title}</h2>
        {body ? <p className="card-body">{body}</p> : null}
      </div>
      <div className="article-action-buttons">
        <Link href={primaryHref} className="btn btn-primary">
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link href={secondaryHref} className="btn btn-secondary">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </aside>
  );
}

export function ArticleSources({ items }: { items: ArticleSource[] }) {
  if (items.length === 0) return null;

  return (
    <section className="article-sources" aria-labelledby="article-sources-heading">
      <p className="eyebrow">Sources</p>
      <h2 id="article-sources-heading" className="article-subheading">
        Sources and Further Reading
      </h2>
      <ul className="article-sources-list">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
            {item.note ? <p>{item.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ArticleFaq({ items }: { items: FaqItem[] }) {
  return (
    <section className="article-faq" aria-labelledby="article-faq-heading">
      <p className="eyebrow">FAQ</p>
      <h2 id="article-faq-heading" className="article-subheading">
        Frequently Asked Questions
      </h2>
      <div className="article-faq-list">
        {items.map((item) => (
          <details key={item.question} className="article-faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
