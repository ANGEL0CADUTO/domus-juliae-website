"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localizedSlugs, type Locale, type PageKey } from "../i18n/config";

type Props = {
  currentLocale: Locale;
  className?: string;
};

const languageDetails = {
  it: { name: "Italiano", flag: "🇮🇹" },
  en: { name: "English", flag: "🇬🇧" },
  fr: { name: "Français", flag: "🇫🇷" },
  es: { name: "Español", flag: "🇪🇸" },
  de: { name: "Deutsch", flag: "🇩🇪" },
};

export default function LanguageSwitcher({ currentLocale, className = "" }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine the current page key by reverse-mapping the pathname
  let currentPage: PageKey = "home";

  for (const [pageKey, slugs] of Object.entries(localizedSlugs)) {
    const pk = pageKey as PageKey;
    const isMatch = locales.some(locale => {
      const slug = slugs[locale];
      const p = slug ? `/${locale}/${slug}` : `/${locale}`;
      return pathname === p;
    }) || (pathname === '/' && pk === 'home');

    if (isMatch) {
      currentPage = pk;
      break;
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentInfo = languageDetails[currentLocale];
  const isWhite = className.includes("text-white");

  return (
    <div className={`relative inline-block ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs md:text-sm font-semibold uppercase shadow-sm cursor-pointer ${
          isWhite
            ? "border-white/20 bg-white/10 hover:bg-white/20 text-white"
            : "border-brand-gold/30 bg-white/95 hover:bg-brand-gold/5 text-brand-slate"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base select-none leading-none">{currentInfo.flag}</span>
        <span className="tracking-wider text-current">{currentLocale}</span>
        <svg
          className={`w-3.5 h-3.5 opacity-70 transition-transform duration-250 ${
            isOpen ? "rotate-180 text-brand-gold" : "text-current"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-brand-gold/15 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          role="listbox"
        >
          {locales.map((locale) => {
            const slug = localizedSlugs[currentPage][locale];
            const href = slug ? `/${locale}/${slug}` : `/${locale}`;
            const isActive = locale === currentLocale;
            const details = languageDetails[locale];

            return (
              <Link
                key={locale}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all ${
                  isActive
                    ? "bg-brand-gold/10 text-brand-gold font-semibold"
                    : "text-gray-600 hover:text-brand-slate hover:bg-brand-gold/5 font-medium"
                }`}
                role="option"
                aria-selected={isActive}
              >
                <span className="text-base select-none leading-none">{details.flag}</span>
                <span className="flex-1 text-left">{details.name}</span>
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">{locale}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
