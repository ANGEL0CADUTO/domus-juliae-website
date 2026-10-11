import { locales } from "../../src/i18n/config";
import { requireValidLocale } from "../../src/i18n/routing";
import { getContent } from "../../src/content";
import App from "../../src/App";
import {
  generateLodgingBusinessJsonLd,
  generateFaqPageJsonLd,
  generateBreadcrumbJsonLd,
  breadcrumbs,
} from "../../src/lib/jsonLd";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const content = getContent(locale);
  const lodgingJsonLd = generateLodgingBusinessJsonLd(locale);
  const faqJsonLd = generateFaqPageJsonLd(locale);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbs(locale).home);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <App locale={locale} content={content} />
    </>
  );
}
