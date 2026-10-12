"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
      { href: "/solutions", label: "Solution" },
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
  {
    label: "Resources",
    href: "/resources",
    items: [
      { href: "/resources", label: "Resources library" },
      { href: "/resources/reports", label: "Forecast reports" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    items: [
      { href: "/company", label: "Company" },
      { href: "/team", label: "Team" },
      { href: "/understanding-civant", label: "Understanding Civant" },
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const DIRECT_NAV_ITEMS: NavLink[] = [];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const mobileCloseRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const mobileToggle = mobileToggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      mobileCloseRef.current?.focus();
    });

    function onMenuKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !mobilePanelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        mobilePanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", onMenuKeydown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onMenuKeydown);
      mobileToggle?.focus();
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
          View Plans
        </Link>

        <button
          ref={mobileToggleRef}
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
          aria-labelledby="site-mobile-menu-title"
        >
          <button
            type="button"
            className="site-mobile-backdrop"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div ref={mobilePanelRef} className="site-mobile-panel">
            <div className="site-mobile-head">
              <span id="site-mobile-menu-title" className="site-mobile-title">Menu</span>
              <button
                ref={mobileCloseRef}
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
              View Plans
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
