import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { property, contact, location, isConfigured } from "../config/site";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";
import { getLocalizedPath, locales } from "../i18n/config";
import CookiePreferencesButton from "./CookiePreferencesButton";

type Props = {
  locale: Locale;
  content: SiteContent;
};

const cookiePreferenceLabels: Record<Locale, string> = {
  it: "Preferenze cookie",
  en: "Cookie preferences",
  fr: "Préférences cookies",
  es: "Preferencias cookies",
  de: "Cookie-Einstellungen",
};

const languageNames: Record<Locale, string> = {
  it: "Italiano", en: "English", fr: "Français", es: "Español", de: "Deutsch",
};

const languageNavigationLabels: Record<Locale, string> = {
  it: "Lingue disponibili", en: "Available languages", fr: "Langues disponibles",
  es: "Idiomas disponibles", de: "Verfügbare Sprachen",
};

export default function Footer({ locale, content }: Props) {
  const c = content.footer;
  const emailConfigured = isConfigured(contact.email);
  const phoneConfigured = isConfigured(contact.phone);

  return (
    <footer className="bg-brand-cream border-t border-brand-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-widest uppercase text-brand-slate">
                {property.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-gold">
                {location.neighborhood} • {location.city}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="text-gray-400 text-xs space-y-1">
              <p>
                {content.trust.cin}:{" "}
                <span className="font-mono text-gray-500">
                  {property.cin}
                </span>
              </p>
              <p>
                {location.address}, {location.cap} {location.city} (
                {location.province})
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-slate font-bold uppercase tracking-widest text-xs mb-8">
              {c.navigationLabel}
            </h3>
            <ul className="space-y-4">
              {c.quickLinks.map((link) => {
                const href = link.page
                  ? `${getLocalizedPath(locale, link.page)}${link.anchor ? `#${link.anchor}` : ''}`
                  : `/${locale}${link.anchor ? `#${link.anchor}` : ''}`;

                return (
                  <li key={link.label}>
                    <Link
                      href={href}
                      className="text-gray-500 text-sm underline-offset-4 hover:text-brand-gold hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-brand-slate font-bold uppercase tracking-widest text-xs mb-8">
              {c.contactLabel}
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-gold shrink-0" size={18} />
                <span className="text-gray-500 text-sm leading-relaxed">
                  {location.address},<br />
                  {location.cap} {location.city} ({location.province}),{" "}
                  {location.country}
                </span>
              </li>
              {phoneConfigured ? (
                <li className="flex items-center gap-4">
                  <Phone className="text-brand-gold shrink-0" size={18} />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-500 text-sm hover:text-brand-gold transition-colors"
                  >
                    {contact.phone}
                  </a>
                </li>
              ) : null}
              {emailConfigured ? (
                <li className="flex items-center gap-4">
                  <Mail className="text-brand-gold shrink-0" size={18} />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-500 text-sm hover:text-brand-gold transition-colors"
                  >
                    {contact.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <nav aria-label={languageNavigationLabels[locale]} className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {locales.map((language) => (
            <Link key={language} href={getLocalizedPath(language, "home")} hrefLang={language} lang={language}
              aria-current={language === locale ? "page" : undefined}
              className="inline-flex min-h-11 items-center text-sm text-brand-slate underline underline-offset-4 hover:text-brand-gold">
              {languageNames[language]}
            </Link>
          ))}
        </nav>

        <div className="pt-10 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} {property.name}. {c.copyright}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link
              href={getLocalizedPath(locale, "privacy")}
              className="text-gray-400 text-[10px] uppercase tracking-widest underline-offset-4 hover:text-brand-gold hover:underline transition-colors"
            >
              {c.legalLinks.privacy}
            </Link>
            <Link
              href={getLocalizedPath(locale, "cookie")}
              className="text-gray-400 text-[10px] uppercase tracking-widest underline-offset-4 hover:text-brand-gold hover:underline transition-colors"
            >
              {c.legalLinks.cookie}
            </Link>
            <Link
              href={getLocalizedPath(locale, "terms")}
              className="text-gray-400 text-[10px] uppercase tracking-widest underline-offset-4 hover:text-brand-gold hover:underline transition-colors"
            >
              {c.legalLinks.terms}
            </Link>
            <CookiePreferencesButton
              label={cookiePreferenceLabels[locale]}
              className="text-gray-400 text-[10px] uppercase tracking-widest underline-offset-4 transition-colors hover:text-brand-gold hover:underline"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
