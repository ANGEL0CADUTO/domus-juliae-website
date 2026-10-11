import type { Metadata } from "next";
import { getContent } from "../../../src/content";
import { requireValidLocale } from "../../../src/i18n/routing";
import { staticLocales } from "../../../src/i18n/staticParams";
import { generateBreadcrumbJsonLd, breadcrumbs } from "../../../src/lib/jsonLd";
import { buildPageMetadata } from "../../../src/lib/seoMetadata";
import CookieContent from "../../../src/components/legal/CookieContent";

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticLocales("fr", "es", "de");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const t = getContent(locale);
  return buildPageMetadata({ locale, page: "cookie", title: t.seo.cookie.title, description: t.seo.cookie.description });
}

export default async function CookiePage({ params }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const content = getContent(locale);
  const bc = generateBreadcrumbJsonLd(breadcrumbs(locale).cookie);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <CookieContent locale={locale} content={content} />
    </>
  );
}
