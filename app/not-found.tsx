import Link from "next/link";
import { Section } from "../components/site/Section";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <Section className="hero-block">
      <p className="eyebrow">404</p>
      <h1 className="headline-xl">Page not found</h1>
      <p className="text-lead">
        The page you requested does not exist in the current site map.
      </p>
      <div className="button-row">
        <Link href="/" className="btn btn-primary">
          Back to homepage
        </Link>
      </div>
    </Section>
  );
}
