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

const LINKEDIN_URL = "https://www.linkedin.com/company/civant-technologies/";

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
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow Civant Technologies on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="footer-social-icon"
                  >
                    <path d="M5.1 8.7h3.2v10.2H5.1V8.7Zm1.6-5.1c1 0 1.8.8 1.8 1.8S7.7 7.2 6.7 7.2 4.9 6.4 4.9 5.4s.8-1.8 1.8-1.8Zm3.6 5.1h3.1v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.5h-3.2V14c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5h-3.2V8.7Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
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
