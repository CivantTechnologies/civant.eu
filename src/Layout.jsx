import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on ESC key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Set global metadata on mount
  React.useEffect(() => {
    // Set document title default
    if (!document.title.includes('|')) {
      document.title = 'Civant — Predict Public-Sector Tenders Before They Go Live';
    }

    // Set or update meta tags with Civant branding
    const setMetaTag = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        isProperty ? element.setAttribute('property', name) : element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Global meta tags
    setMetaTag('description', 'Civant turns procurement data, renewal cycles, and market signals into AI-powered forecasts so partners act earlier and win smarter.');
    setMetaTag('application-name', 'Civant');
    setMetaTag('apple-mobile-web-app-title', 'Civant');

    // Micro logo URL for favicon
    const microLogoUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/0733be937_Civant-Micrologo.jpg';
    const ogImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/civant-og-preview.jpg';

    // Open Graph tags
    setMetaTag('og:title', 'Civant — Predict Public-Sector Tenders Before They Go Live', true);
    setMetaTag('og:description', 'Civant turns procurement data into AI-powered tender forecasts.', true);
    setMetaTag('og:site_name', 'Civant', true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:image', ogImageUrl, true);
    setMetaTag('og:image:type', 'image/jpeg', true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Civant — Predict Public-Sector Tenders Before They Go Live');
    setMetaTag('twitter:description', 'Civant turns procurement data into AI-powered tender forecasts.');
    setMetaTag('twitter:image', ogImageUrl);

    // Set favicon to Civant micro logo
    let favicon = document.querySelector("link[rel*='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = microLogoUrl;
    favicon.type = 'image/jpeg';

    // Set Apple web-app meta tags
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', 'Civant');

    // Set manifest reference
    let manifestLink = document.querySelector('link[rel="manifest"]');
    if (!manifestLink) {
      manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      document.head.appendChild(manifestLink);
    }
    manifestLink.href = '/manifest.webmanifest';

    // Set apple-touch-icon
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = microLogoUrl;

    // Remove any Base44 references
    const baseAppNameMeta = document.querySelector('meta[name="base44-app"]');
    if (baseAppNameMeta) {
      baseAppNameMeta.remove();
    }
    
    // Remove any old manifest links pointing to Base44
    const oldManifests = document.querySelectorAll('link[rel="manifest"]');
    oldManifests.forEach(m => {
      if (m.href && (m.href.includes('base44') || !m.href.includes('manifest'))) {
        // Keep only our Civant manifest
        if (!m.href.includes('/manifest.webmanifest')) {
          m.remove();
        }
      }
    });
  }, []);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'Challenge', page: 'challenge' },
    { name: 'Solution', page: 'solution' },
    { name: 'Proof', page: 'proof' },
    { name: 'About', page: 'about' },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-white font-['Montserrat',_'Inter',_'Helvetica_Neue',_Arial,_sans-serif] relative" style={{ isolation: 'isolate' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        html {
          background: #0A1628;
          min-height: 100%;
        }

        body {
          background: linear-gradient(to bottom, #0B1829 0%, #0A1628 50%, #08111F 100%);
          background-attachment: fixed;
          min-height: 100%;
          margin: 0;
          padding: 0;
        }

        #root {
          min-height: 100vh;
          background: transparent;
        }
      `}</style>
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10" style={{ zIndex: 1000 }}>
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl('home')} className="flex items-center flex-shrink-0">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/ba393f483_CivantLogo.png"
                alt="Civant Technologies - Home"
                className="h-12 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                    currentPageName === item.page
                      ? 'text-[#00C4C4]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {currentPageName === item.page && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00C4C4] to-transparent rounded-full shadow-[0_0_12px_rgba(0,196,196,0.8)]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Link 
              to={createPageUrl('contact')}
              className="hidden lg:flex items-center px-4 py-2 bg-[#00C4C4]/80 text-[#0A1628] text-sm font-medium rounded hover:bg-[#00C4C4]/70 transition-colors duration-200 flex-shrink-0"
            >
              Get in Touch
            </Link>

            {/* Mobile/Tablet Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              </div>
              </nav>
              </header>

              {/* Mobile/Tablet Menu Overlay - Top Level */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <>
                    <motion.div 
                      className="fixed inset-0 bg-black/70 lg:hidden"
                      style={{ zIndex: 2147483646, backdropFilter: 'blur(6px)' }}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-hidden="true"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                    <motion.div 
                      className="fixed top-4 left-4 right-4 mx-auto w-[calc(100vw-32px)] max-w-[520px] max-h-[80vh] bg-[#0A1628] border border-white/10 rounded-[20px] lg:hidden overflow-y-auto"
                      style={{ zIndex: 2147483647 }}
                      role="dialog"
                      aria-modal="true"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="p-6 relative">
                        <button
                          onClick={() => setMobileMenuOpen(false)}
                          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                          aria-label="Close menu"
                        >
                          <X className="w-5 h-5" />
                        </button>

                        <div className="space-y-1 mt-8">
                          {navigation.map((item) => (
                            <Link
                              key={item.page}
                              to={createPageUrl(item.page)}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-150 ease-out border-b-2 border-transparent active:scale-[0.97] ${
                                currentPageName === item.page
                                  ? 'text-[#00C4C4] bg-white/5 border-[#00C4C4]/20'
                                  : 'text-gray-300 hover:text-white hover:bg-[#00C4C4]/10 hover:border-[#00C4C4]/15 active:bg-[#00C4C4]/15'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <Link
                          to={createPageUrl('contact')}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block mt-6 px-4 py-3 bg-[#00C4C4]/80 text-[#0A1628] text-base font-medium rounded-lg text-center hover:bg-[#00C4C4]/70 transition-colors duration-200"
                        >
                          Get in Touch
                        </Link>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#060D18] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697a52afa63291e0147b78b4/ba393f483_CivantLogo.png"
                    alt="Civant Technologies"
                    className="h-12 w-auto"
                  />
                </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Civant Technologies is an Irish-founded SaaS company developing predictive 
                intelligence solutions for public-sector procurement markets.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Registered in Ireland
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {navigation.slice(5).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://forms.gle/jfARBJYn7zgNa63h7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    Survey: Your experience with public-sector tenders
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Civant Technologies Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}