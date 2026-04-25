import Link from "next/link";
import { PageContainer } from "./PageContainer";

const FOOTER_NAV_ITEMS = [
  { href: "/platform", label: "Platform" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/markets", label: "Markets" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Civant</h3>
            <p className="footer-copy">
              Procurement forecasting intelligence for enterprise teams operating
              in European public-sector markets.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-list">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-list">
              <li>
                <Link href="/legal/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/legal/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/fair-use">Fair Usage Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li>
                <a href="mailto:hello@civant.eu">hello@civant.eu</a>
              </li>
              <li>
                <Link href="/pricing">View Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Custom Plans</Link>
              </li>
              <li>Registered in Ireland</li>
            </ul>
          </div>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} Civant Technologies Limited. All rights
          reserved.
        </p>
      </PageContainer>
    </footer>
  );
}
