import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms of Service | Civant",
  description:
    "Terms governing access to and use of the Civant procurement intelligence platform.",
  path: "/legal/terms",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
