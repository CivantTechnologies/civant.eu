import Link from "next/link";
import { getRelatedArticles } from "../../lib/articles";

type RelatedArticlesProps = {
  currentPath: string;
};

export function RelatedArticles({ currentPath }: RelatedArticlesProps) {
  const related = getRelatedArticles(currentPath, 4);
  if (related.length === 0) return null;

  return (
    <nav aria-label="Related articles" className="related-articles">
      <h2 className="article-subheading">Related Articles</h2>
      <ul className="related-articles-list">
        {related.map((article) => (
          <li key={article.href} className="related-article-item">
            <Link href={article.href} className="text-link">
              {article.title}
            </Link>
            <span className="related-article-pillar">{article.pillar}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
