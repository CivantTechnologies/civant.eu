import Link from "next/link";
import { TOP_LEVEL_ROUTES } from "../../lib/routes";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Civant</h3>
            <p className="footer-copy">
              Product-led intelligence for enterprise teams operating in European
              public procurement markets.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-list">
              {TOP_LEVEL_ROUTES.filter((item) => item.href !== "/contact").map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li>
                <a href="mailto:hello@civant.eu">hello@civant.eu</a>
              </li>
              <li>
                <Link href="/contact">Request Demo</Link>
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
