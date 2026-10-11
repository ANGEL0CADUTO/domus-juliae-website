import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../src/index.css";
import { locales } from "../../src/i18n/config";
import { requireValidLocale } from "../../src/i18n/routing";
import { getContent } from "../../src/content";
import { getBaseUrl } from "../../src/config/site";
import { inter, playfairDisplay } from "../../src/lib/fonts";
import { getDefaultOgImageAlt, getOpenGraphLocale } from "../../src/lib/seoMetadata";
import GoogleTag from "../../src/components/GoogleTag";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  params: Promise<{ lang: string }>;
  children: ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  const t = getContent(locale);
  const baseUrl = getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.seo.home.title,
      template: `%s | Domus Juliae`,
    },
    description: t.seo.home.description,
    keywords: [...t.seo.home.keywords],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        it: "/it",
        en: "/en",
        fr: "/fr",
        es: "/es",
        de: "/de",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: t.seo.home.title,
      description: t.seo.home.description,
      type: "website",
      locale: getOpenGraphLocale(locale),
      siteName: "Domus Juliae",
      url: `${baseUrl}/${locale}`,
      images: [
        {
          url: "/demo/scene-3.svg",
          width: 1200,
          height: 630,
          alt: getDefaultOgImageAlt(locale),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.home.title,
      description: t.seo.home.description,
      images: ["/demo/scene-3.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LangLayout({ params, children }: Props) {
  const { lang } = await params;
  const locale = requireValidLocale(lang);
  return (
    <html lang={locale} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <GoogleTag locale={locale} />
        {children}
      </body>
    </html>
  );
}
