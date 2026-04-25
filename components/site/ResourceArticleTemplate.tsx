import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArticleActionPanel,
  ArticleAnswerBlock,
  ArticleBriefGrid,
  ArticleFaq,
  ArticleHeroVisual,
  ArticleInsightPanel,
  ArticleSources,
  ArticleTakeaways,
  ArticleToc,
} from "./ArticleBriefBlocks";
import type { ArticleSource } from "../../lib/articleSources";
import { RelatedArticles } from "./RelatedArticles";
import { RelatedSolution } from "./RelatedSolution";
import { SchemaScript } from "./SchemaScript";
import { Section } from "./Section";
import { ShareArticleButton } from "./ShareArticleButton";
import { buildArticleSchema, buildFaqSchema } from "../../lib/seo";

export type ResourceArticleSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export type ResourceArticle = {
  path: string;
  eyebrow?: string;
  title: string;
  description: string;
  publishedAt: string;
  publishedLabel: string;
  modifiedAt?: string;
  modifiedLabel?: string;
  answer: string;
  intro: ReactNode;
  visual?: {
    src: string;
    alt: string;
    caption?: string;
    tone?: "intelligence" | "preparation";
    reliefMark?: boolean;
  };
  takeaways: Array<{
    label: string;
    text: string;
  }>;
  sections: ResourceArticleSection[];
  civantView?: {
    eyebrow?: string;
    title: string;
    content: ReactNode;
  };
  action: {
    eyebrow: string;
    title: string;
    body?: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  sources?: ArticleSource[];
  relatedSolution?: {
    solutionSlug: string;
    linkLabel: string;
    children: ReactNode;
  };
};

export function ResourceArticleTemplate({ article }: { article: ResourceArticle }) {
  const schema = [
    ...buildArticleSchema({
      title: article.title,
      description: article.description,
      path: article.path,
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt,
      citations: article.sources,
    }),
    buildFaqSchema(article.faqs),
  ];

  const tocItems = article.sections.map((section) => ({
    label: section.title,
    href: `#${section.id}`,
  }));

  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">{article.eyebrow || "Resources"}</p>
        <h1 className="headline-xl">{article.title}</h1>
        <div className="article-hero-meta">
          <p className="article-byline">
            By{" "}
            <a
              href="https://www.linkedin.com/in/davidmanriquecivant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              David Manrique
            </a>{" "}
            | {article.publishedLabel}
            {article.modifiedLabel ? ` | Updated ${article.modifiedLabel}` : ""}
          </p>
          <ShareArticleButton title={article.title} path={article.path} />
        </div>
      </Section>

      <Section muted>
        <article className="article-prose">
          <div className="article-intro">{article.intro}</div>

          <ArticleAnswerBlock answer={article.answer} />

          {article.visual ? (
            <ArticleHeroVisual
              src={article.visual.src}
              alt={article.visual.alt}
              caption={article.visual.caption}
              tone={article.visual.tone}
              reliefMark={article.visual.reliefMark}
            />
          ) : null}

          <ArticleBriefGrid>
            <ArticleTakeaways items={article.takeaways} />
            <ArticleToc items={tocItems} />
          </ArticleBriefGrid>

          {article.civantView ? (
            <ArticleInsightPanel
              eyebrow={article.civantView.eyebrow || "Civant View"}
              title={article.civantView.title}
            >
              {article.civantView.content}
            </ArticleInsightPanel>
          ) : null}

          {article.sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id} className="article-subheading">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}

          <ArticleActionPanel
            eyebrow={article.action.eyebrow}
            title={article.action.title}
            body={article.action.body}
            primaryHref={article.action.primaryHref}
            primaryLabel={article.action.primaryLabel}
            secondaryHref={article.action.secondaryHref}
            secondaryLabel={article.action.secondaryLabel}
          />

          {article.sources ? <ArticleSources items={article.sources} /> : null}

          <ArticleFaq items={article.faqs} />

          {article.relatedSolution ? (
            <RelatedSolution
              solutionSlug={article.relatedSolution.solutionSlug}
              linkLabel={article.relatedSolution.linkLabel}
            >
              {article.relatedSolution.children}
            </RelatedSolution>
          ) : null}

          <RelatedArticles currentPath={article.path} />
          <div className="button-row article-end-actions">
            <Link href="/resources" className="btn btn-secondary">
              Back to Resources
            </Link>
            <Link href="/pricing" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </article>
      </Section>
      <SchemaScript data={schema} />
    </>
  );
}
