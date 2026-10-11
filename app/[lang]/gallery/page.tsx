import type { Metadata } from "next";
import { getContent } from "../../../src/content";
import { requireValidLocale } from "../../../src/i18n/routing";
import { staticLocales } from "../../../src/i18n/staticParams";
import { generateBreadcrumbJsonLd, breadcrumbs } from "../../../src/lib/jsonLd";
import { buildPageMetadata } from "../../../src/lib/seoMetadata";
import GalleryPageContent from "../../../src/components/GalleryPageContent";

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticLocales("en");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const t = getContent(locale);
  return buildPageMetadata({
    locale,
    page: "gallery",
    title: t.seo.gallery.title,
    description: t.seo.gallery.description,
    image: "/demo/scene-1.svg",
    imageAlt: t.seo.gallery.title,
  });
}

export default async function GalleryPage({ params }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const content = getContent(locale);
  const bc = generateBreadcrumbJsonLd(breadcrumbs(locale).gallery);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <GalleryPageContent locale={locale} content={content} />
    </>
  );
}
