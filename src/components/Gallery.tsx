import Link from "next/link";
import GalleryGrid from "./GalleryGrid";
import { getGalleryUiLabels, getHomeGalleryImages } from "../data/gallery";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";
import { getLocalizedPath } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export default function Gallery({ locale, content }: Props) {
  const c = content.homeGallery;
  const images = getHomeGalleryImages(locale);
  const labels = getGalleryUiLabels(locale);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="reveal max-w-7xl mx-auto text-center mb-16">
        <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
          {c.tagline}
        </span>
        <h2 className="text-4xl md:text-5xl mb-8">{c.headline}</h2>
      </div>

      <div className="reveal reveal-scale reveal-delay-1">
        <GalleryGrid images={images} labels={labels} />
      </div>

      <div className="reveal mt-16 text-center">
        <Link
          href={getLocalizedPath(locale, "gallery")}
          className="inline-flex px-10 py-4 border border-brand-gold text-brand-gold uppercase tracking-widest font-semibold hover:bg-brand-gold hover:text-white transition-all duration-300"
        >
          {c.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
