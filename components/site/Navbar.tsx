"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PageContainer } from "./PageContainer";

const BRAND_LOGO_URL = "/civant-logo.png";

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  label: string;
  href: string;
  items: NavLink[];
};

const PRIMARY_NAV_GROUPS: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      { href: "/platform", label: "Platform overview" },
      { href: "/solutions", label: "Solutions" },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    items: [
      { href: "/use-cases", label: "Use cases" },
      { href: "/markets", label: "Markets" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
];

const DIRECT_NAV_ITEMS: NavLink[] = [
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Image
            src={BRAND_LOGO_URL}
            alt="Civant logo"
            width={384}
            height={139}
            priority
            className="site-brand-logo"
          />
        </Link>

        <nav className="site-nav-links site-nav-desktop" aria-label="Primary">
          {PRIMARY_NAV_GROUPS.map((group) => {
            const isActive = group.items.some((item) => isActivePath(pathname, item.href));

            return (
              <div key={group.href} className="site-nav-group">
                <Link
                  href={group.href}
                  className={`site-nav-link site-nav-trigger ${isActive ? "is-active" : ""}`.trim()}
                  aria-current={isActivePath(pathname, group.href) ? "page" : undefined}
                  aria-haspopup="true"
                >
                  <span>{group.label}</span>
                  <ChevronDown className="site-nav-chevron" size={15} aria-hidden="true" />
                </Link>

                <div className="site-nav-menu" role="menu">
                  {group.items.map((item) => {
                    const childIsActive = isActivePath(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`site-nav-menu-link ${childIsActive ? "is-active" : ""}`.trim()}
                        aria-current={childIsActive ? "page" : undefined}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {DIRECT_NAV_ITEMS.map((item) => {
            const isActive = isActivePath(pathname, item.href);

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

        <Link href="/pricing" className="btn btn-primary btn-sm site-cta-desktop">
          View Pricing
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
              {PRIMARY_NAV_GROUPS.map((group) => (
                <div key={group.href} className="site-mobile-group">
                  <span className="site-mobile-group-label">{group.label}</span>
                  {group.items.map((item) => {
                    const isActive = isActivePath(pathname, item.href);

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
                </div>
              ))}

              {DIRECT_NAV_ITEMS.map((item) => {
                const isActive = isActivePath(pathname, item.href);

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

            <Link href="/pricing" className="btn btn-primary site-mobile-cta">
              View Pricing
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
