import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Fair Usage Policy",
  description:
    "What is and is not permitted on the Civant procurement intelligence platform.",
  path: "/legal/fair-use",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
