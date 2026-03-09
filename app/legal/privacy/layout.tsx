import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Civant",
  description:
    "How Civant Technologies Limited collects, uses, and protects your personal data.",
  path: "/legal/privacy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
