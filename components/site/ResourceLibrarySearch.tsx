"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ResourceSearchItem = {
  href: string;
  title: string;
  description: string;
  type: "Report" | "Resource" | "Briefing" | "Market";
  category?: string;
  tags?: string[];
  country?: string;
  sector?: string;
  slug?: string;
  searchableText?: string;
};

type RankedSearchItem = ResourceSearchItem & {
  score: number;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9%]+/g, " ")
    .trim();
}

function uniqueTokens(query: string) {
  return Array.from(new Set(normalize(query).split(" ").filter(Boolean)));
}

function fieldScore(fieldValue: string | undefined, query: string, tokens: string[], weight: number) {
  if (!fieldValue) return 0;

  const field = normalize(fieldValue);
  if (!field) return 0;

  let score = 0;
  if (field === query) score += weight * 4;
  if (query && field.includes(query)) score += weight * 2;

  for (const token of tokens) {
    if (field.includes(token)) score += weight;
  }

  return score;
}

function rankItem(item: ResourceSearchItem, query: string, tokens: string[]) {
  const tagText = item.tags?.join(" ");
  const searchableText = [
    item.searchableText,
    item.title,
    item.description,
    item.type,
    item.category,
    item.country,
    item.sector,
    item.slug,
    tagText,
  ]
    .filter(Boolean)
    .join(" ");

  let score = 0;
  score += fieldScore(item.title, query, tokens, 18);
  score += fieldScore(tagText, query, tokens, 11);
  score += fieldScore(item.category, query, tokens, 10);
  score += fieldScore(item.description, query, tokens, 7);
  score += fieldScore(item.type, query, tokens, 7);
  score += fieldScore(item.country, query, tokens, 7);
  score += fieldScore(item.sector, query, tokens, 7);
  score += fieldScore(item.slug, query, tokens, 5);
  score += fieldScore(searchableText, query, tokens, 2);

  const normalizedSearchableText = normalize(searchableText);
  if (tokens.length > 1 && tokens.every((token) => normalizedSearchableText.includes(token))) {
    score += 16;
  }

  return score;
}

function ctaForType(type: ResourceSearchItem["type"]) {
  if (type === "Report") return "View report";
  if (type === "Market") return "View market";
  return "Read briefing";
}

function ResultCard({
  item,
  featured = false,
}: {
  item: RankedSearchItem;
  featured?: boolean;
}) {
  const visibleTags = [item.category, ...(item.tags || [])]
    .filter((tag): tag is string => Boolean(tag))
    .filter((tag, index, tags) => tags.indexOf(tag) === index)
    .slice(0, featured ? 4 : 3);

  return (
    <article className={featured ? "resource-search-result resource-search-result-featured" : "resource-search-result"}>
      <div className="resource-search-result-body">
        <p className="resource-search-meta">
          <span>{item.type}</span>
          {item.category ? <span>{item.category}</span> : null}
        </p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {visibleTags.length ? (
          <div className="resource-search-tags" aria-label="Matched topics">
            {visibleTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
      <Link href={item.href} className="resource-search-cta">
        {ctaForType(item.type)}
      </Link>
    </article>
  );
}

export function ResourceLibrarySearch({ items }: { items: ResourceSearchItem[] }) {
  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim();

  const results = useMemo(() => {
    const normalizedQuery = normalize(trimmedQuery);
    if (!normalizedQuery) return [];

    const tokens = uniqueTokens(normalizedQuery);
    return items
      .map((item) => ({
        ...item,
        score: rankItem(item, normalizedQuery, tokens),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  }, [items, trimmedQuery]);

  const closestMatch = results[0];
  const relatedResults = results.slice(1, 7);

  return (
    <section className="resource-library-search" aria-labelledby="resource-library-search-title">
      <div className="resource-library-search-copy">
        <p className="eyebrow">Library Search</p>
        <h3 id="resource-library-search-title">Search the Civant intelligence library</h3>
        <p>
          Find forecast reports, resource briefings, market explainers, and
          procurement-cycle insights by topic, market, buyer signal, or
          commercial challenge.
        </p>
      </div>
      <div className="resource-search-form">
        <label htmlFor="resource-library-search">Search library content</label>
        <div className="resource-search-control">
          <input
            id="resource-library-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search reports, renewal signals, buyer cycles, markets, procurement strategy..."
            autoComplete="off"
          />
          {trimmedQuery ? (
            <button type="button" onClick={() => setQuery("")}>
              Clear
            </button>
          ) : null}
        </div>
      </div>

      {trimmedQuery ? (
        <div className="resource-search-results" aria-live="polite">
          {closestMatch ? (
            <>
              <div className="resource-search-result-group">
                <p className="resource-search-section-label">Closest match</p>
                <ResultCard item={closestMatch} featured />
              </div>
              {relatedResults.length ? (
                <div className="resource-search-result-group">
                  <p className="resource-search-section-label">Related results</p>
                  <div className="resource-search-related-grid">
                    {relatedResults.map((item) => (
                      <ResultCard key={item.href} item={item} />
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <p className="resource-search-empty">
              No close matches found. Try searching by market, buyer cycle,
              renewal window, sector, or procurement challenge.
            </p>
          )}
        </div>
      ) : null}
    </section>
  );
}
