"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLocalizedPath } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export default function Navbar({ locale, content }: Props) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const updateNavbarState = () => {
      const hash = window.location.hash;
      const isAtHomeTop =
        (pathname === `/${locale}` || pathname === `/${locale}/`) &&
        (hash === "" || hash === "#home") &&
        window.scrollY <= 50;

      setIsScrolled(!isAtHomeTop);
    };

    updateNavbarState();
    const frameId = window.requestAnimationFrame(updateNavbarState);

    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("hashchange", updateNavbarState);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("hashchange", updateNavbarState);
    };
  }, [pathname, locale]);

  const navLinks = content.nav.links.map(link => {
    let href = "";
    if (link.page) {
      // It's a localized page route
      href = getLocalizedPath(locale, link.page as any);
      if (isHomePage && link.page === "home") {
        href = "#home";
      }
    } else if (link.anchor) {
      // It's an anchor on the home page
      href = isHomePage ? link.anchor : `/${locale}${link.anchor}`;
    }
    return { name: link.name, href };
  });

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href={isHomePage ? "#home" : `/${locale}`} className="flex flex-col">
          <span className={cn(
            "text-xl md:text-2xl font-serif tracking-widest uppercase transition-colors duration-300",
            isScrolled ? "text-brand-slate" : "text-white"
          )}>
            Domus Juliae
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-300",
            isScrolled ? "text-brand-gold" : "text-brand-gold/80"
          )}>
            {content.nav.brandSub}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-all hover:text-brand-gold",
                isScrolled ? "text-brand-slate" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <LanguageSwitcher
            currentLocale={locale}
            className={isScrolled ? "text-brand-slate" : "text-white"}
          />
          <Link
            href={isHomePage ? "#booking" : `/${locale}#booking`}
            aria-label={content.nav.ctaLabel}
            className={cn(
              "px-6 py-2 text-sm uppercase tracking-widest font-semibold transition-all",
              isScrolled
                ? "bg-brand-slate text-white hover:bg-brand-gold"
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-brand-slate"
            )}
          >
            {content.nav.ctaLabel}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher
            currentLocale={locale}
            className={isScrolled ? "text-brand-slate" : "text-white"}
          />
          <button
            type="button"
            aria-label={isMobileMenuOpen ? content.nav.mobileMenuClose : content.nav.mobileMenuOpen}
            className="text-brand-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-brand-slate" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen ? (
        <div className="absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-gold/10 p-6 md:hidden flex flex-col space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-slate text-lg font-serif tracking-wide border-b border-brand-gold/5 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={isHomePage ? "#booking" : `/${locale}#booking`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label={content.nav.ctaLabel}
            className="bg-brand-slate text-white text-center py-4 uppercase tracking-widest font-semibold"
          >
            {content.nav.ctaLabel}
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
