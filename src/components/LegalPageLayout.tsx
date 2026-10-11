import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import type { Locale } from "../i18n/config";
import type { SiteContent } from "../content/types";

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  locale: Locale;
  content: SiteContent;
  children: React.ReactNode;
};

const lastUpdatedLabels: Record<Locale, string> = {
  it: "Ultimo aggiornamento",
  en: "Last updated",
  fr: "Dernière mise à jour",
  es: "Última actualización",
  de: "Zuletzt aktualisiert",
};

/**
 * Layout condiviso per le pagine legali (Privacy, Cookie, Termini).
 * Garantisce coerenza visiva e struttura responsive.
 */
export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  locale,
  content,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar locale={locale} content={content} />

      <main>
        {/* Header */}
        <section className="bg-brand-slate text-white px-6 pb-14 pt-36 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl mb-4">{title}</h1>
            <p className="text-white/50 text-sm">
              {lastUpdatedLabels[locale]}: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
            {children}
          </div>
        </section>

        {/* Back to home */}
        <section className="bg-brand-warm px-6 py-12 text-center">
          <Link
            href={`/${locale}`}
            className="inline-flex px-10 py-4 bg-brand-slate text-white uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold transition-all duration-300"
          >
            {content.legal.backHome}
          </Link>
        </section>
      </main>

      <Footer locale={locale} content={content} />
    </div>
  );
}
