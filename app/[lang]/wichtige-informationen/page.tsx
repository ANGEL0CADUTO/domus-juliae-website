import type { Metadata } from "next";
import FactsPageContent from "../../../src/components/FactsPageContent";
import { getContent } from "../../../src/content";
import { requireValidLocale } from "../../../src/i18n/routing";
import { staticLocales } from "../../../src/i18n/staticParams";
import { breadcrumbs, generateBreadcrumbJsonLd, generateFactsPageJsonLd } from "../../../src/lib/jsonLd";
import { buildPageMetadata } from "../../../src/lib/seoMetadata";

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticLocales("de");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const t = getContent(locale);
  return buildPageMetadata({ locale, page: "facts", title: t.seo.facts.title, description: t.seo.facts.description });
}

export default async function FactsPage({ params }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const content = getContent(locale);
  const bc = generateBreadcrumbJsonLd(breadcrumbs(locale).facts);
  const factsJsonLd = generateFactsPageJsonLd(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(factsJsonLd) }} />
      <FactsPageContent locale={locale} content={content} />
    </>
  );
}
