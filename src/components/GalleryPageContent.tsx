import Image from "next/image";
import Footer from "./Footer";
import GalleryGrid from "./GalleryGrid";
import Navbar from "./Navbar";
import { getGallerySections, getGalleryUiLabels } from "../data/gallery";
import { contact, isConfigured } from "../config/site";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export default function GalleryPageContent({ locale, content }: Props) {
  const emailConfigured = isConfigured(contact.email);
  const c = content.galleryPage;
  const gallerySections = getGallerySections(locale);
  const galleryIndex = c.sections.map((section) => ({
    href: `#${section.id}`,
    label: section.label,
  }));
  const labels = getGalleryUiLabels(locale);

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar locale={locale} content={content} />

      <main>
        <section
          id="top"
          className="relative overflow-hidden border-b border-brand-gold/10 px-6 pb-14 pt-36 md:px-12 lg:px-24"
        >
          <div className="absolute inset-0">
            <Image
              src="/demo/scene-3.svg"
              alt={content.seo.gallery.title}
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-95 saturate-75"
            />
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-black/48" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
              {c.tagline}
            </span>
            <h1 className="max-w-3xl text-5xl leading-[1.1] text-white md:text-6xl">
              {c.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              {c.intro}
            </p>
          </div>
        </section>

        <section className="hidden md:block border-b border-brand-gold/10 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-8 md:px-12 lg:px-24">
            {galleryIndex.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="bg-brand-warm border border-brand-gold/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-white hover:shadow-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        {gallerySections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={
              index % 2 === 0
                ? "section-padding deferred-section scroll-mt-28 bg-brand-cream"
                : "section-padding deferred-section scroll-mt-28 bg-white"
            }
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 max-w-3xl">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-4xl md:text-5xl">{section.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                  {section.description}
                </p>
              </div>

              <GalleryGrid
                images={section.images}
                itemClassName="bg-white"
                imageClassName="h-72 md:h-80 lg:h-[22rem]"
                labels={labels}
              />
            </div>
          </section>
        ))}

        <section className="section-padding bg-brand-slate text-white">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
              {c.ctaTagline}
            </span>
            <h2 className="text-4xl md:text-5xl">
              {c.ctaHeadline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {c.ctaText}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`/${locale}#booking`}
                aria-label={c.ctaPrimary}
                className="w-full bg-brand-gold px-10 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-brand-slate sm:w-auto"
              >
                {c.ctaPrimary}
              </a>
              {emailConfigured ? (
                <a
                  href={`mailto:${contact.email}`}
                  aria-label={c.ctaSecondary}
                  className="w-full border border-white/20 px-10 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-brand-gold hover:text-brand-gold sm:w-auto"
                >
                  {c.ctaSecondary}
                </a>
              ) : (
                <a
                  href={`/${locale}#booking`}
                  className="w-full border border-white/20 px-10 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-brand-gold hover:text-brand-gold sm:w-auto"
                >
                  {c.ctaSecondary}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} content={content} />
    </div>
  );
}
