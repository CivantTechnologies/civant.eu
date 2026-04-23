import Link from "next/link";
import type { ReactNode } from "react";
import { getSolutionBySlug } from "../../lib/solutions";

type RelatedSolutionProps = {
  solutionSlug: string;
  children: ReactNode;
  linkLabel: string;
};

export function RelatedSolution({
  solutionSlug,
  children,
  linkLabel,
}: RelatedSolutionProps) {
  const solution = getSolutionBySlug(solutionSlug);

  if (!solution) {
    return null;
  }

  return (
    <aside className="related-solution" aria-label="Related Civant solution">
      <p className="module-label">Related Civant Solution</p>
      <h2 className="card-title">{solution.title}</h2>
      <p className="card-body">{children}</p>
      <Link href={`/solutions/${solution.slug}`} className="text-link">
        {linkLabel}
      </Link>
    </aside>
  );
}
