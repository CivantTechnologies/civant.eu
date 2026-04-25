"use client";

import Link from "next/link";
import { useEffect } from "react";

type ResourceIndexArticle = {
  href: string;
  title: string;
};

type ResourceIndexCollection = {
  pillar: string;
  id: string;
  articles: ResourceIndexArticle[];
};

function openArchiveGroupFromHash(hash: string) {
  if (!hash.endsWith("-index")) return;

  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) {
    target.open = true;
  }
}

export function ResourceIndexAccordion({
  collections,
}: {
  collections: ResourceIndexCollection[];
}) {
  useEffect(() => {
    openArchiveGroupFromHash(window.location.hash);

    function onHashChange() {
      openArchiveGroupFromHash(window.location.hash);
    }

    function onDocumentClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"][href$="-index"]',
      );
      if (!link) return;

      openArchiveGroupFromHash(link.hash);
    }

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return (
    <div className="resource-index-accordion">
      {collections.map(({ pillar, articles, id }) => (
        <details key={pillar} id={`${id}-index`} className="resource-index-group">
          <summary className="resource-index-head">
            <span className="resource-index-heading">{pillar}</span>
            <span>{articles.length}</span>
          </summary>
          <ul>
            {articles.map((article) => (
              <li key={article.href}>
                <Link href={article.href}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
