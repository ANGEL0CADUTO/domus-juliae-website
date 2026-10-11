import type { Metadata } from "next";
import { getContent } from "../../../src/content";
import { requireValidLocale } from "../../../src/i18n/routing";
import { staticLocales } from "../../../src/i18n/staticParams";
import { generateBreadcrumbJsonLd, breadcrumbs } from "../../../src/lib/jsonLd";
import { buildPageMetadata } from "../../../src/lib/seoMetadata";
import PrivacyContent from "../../../src/components/legal/PrivacyContent";

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticLocales("de");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const t = getContent(locale);
  return buildPageMetadata({ locale, page: "privacy", title: t.seo.privacy.title, description: t.seo.privacy.description });
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const content = getContent(locale);
  const bc = generateBreadcrumbJsonLd(breadcrumbs(locale).privacy);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <PrivacyContent locale={locale} content={content} />
    </>
  );
}
