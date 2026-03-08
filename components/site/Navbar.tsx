"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TOP_LEVEL_ROUTES } from "../../lib/routes";
import { PageContainer } from "./PageContainer";

const BRAND_LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/ba393f483_CivantLogo.png";

export function Navbar() {
  const pathname = usePathname() ?? "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = TOP_LEVEL_ROUTES.filter(
    (item) => item.href !== "/" && item.href !== "/contact",
  );

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <PageContainer className="site-nav-row">
        <Link href="/" className="site-brand" aria-label="Civant home">
          <img src={BRAND_LOGO_URL} alt="Civant" className="site-brand-logo" />
        </Link>

        <nav className="site-nav-links site-nav-desktop" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav-link ${isActive ? "is-active" : ""}`.trim()}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-primary btn-sm site-cta-desktop">
          Get in Touch
        </Link>

        <button
          type="button"
          className="site-mobile-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </PageContainer>

      {mobileMenuOpen ? (
        <div
          className="site-mobile-menu-wrap"
          id="site-mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="site-mobile-backdrop"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="site-mobile-panel">
            <div className="site-mobile-head">
              <span className="site-mobile-title">Menu</span>
              <button
                type="button"
                className="site-mobile-close"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="site-mobile-nav" aria-label="Mobile primary">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`site-mobile-link ${isActive ? "is-active" : ""}`.trim()}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/contact" className="btn btn-primary site-mobile-cta">
              Get in Touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
