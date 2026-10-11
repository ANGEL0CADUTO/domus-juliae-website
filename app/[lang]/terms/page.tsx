import type { Metadata } from "next";
import { getContent } from "../../../src/content";
import { requireValidLocale } from "../../../src/i18n/routing";
import { staticLocales } from "../../../src/i18n/staticParams";
import { generateBreadcrumbJsonLd, breadcrumbs } from "../../../src/lib/jsonLd";
import { buildPageMetadata } from "../../../src/lib/seoMetadata";
import TermsContent from "../../../src/components/legal/TermsContent";

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticLocales("en");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const t = getContent(locale);
  return buildPageMetadata({ locale, page: "terms", title: t.seo.terms.title, description: t.seo.terms.description });
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const content = getContent(locale);
  const bc = generateBreadcrumbJsonLd(breadcrumbs(locale).terms);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <TermsContent locale={locale} content={content} />
    </>
  );
}
