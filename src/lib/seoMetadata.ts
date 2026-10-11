import type { Metadata } from "next";
import { getBaseUrl } from "../config/site";
import { getAlternateLanguages, type Locale, type PageKey } from "../i18n/config";

const openGraphLocales: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
};

const defaultImageAlt: Record<Locale, string> = {
  it: "Domus Juliae, appartamento vacanze a Via Veneto, Roma",
  en: "Domus Juliae, holiday apartment near Via Veneto, Rome",
  fr: "Domus Juliae, appartement de vacances près de Via Veneto, Rome",
  es: "Domus Juliae, apartamento vacacional cerca de Via Veneto, Roma",
  de: "Domus Juliae, Ferienwohnung nahe Via Veneto, Rom",
};

type PageMetadataInput = {
  locale: Locale;
  page: PageKey;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function getOpenGraphLocale(locale: Locale): string {
  return openGraphLocales[locale];
}

export function getDefaultOgImageAlt(locale: Locale): string {
  return defaultImageAlt[locale];
}

export function buildPageMetadata({
  locale,
  page,
  title,
  description,
  image = "/demo/scene-3.svg",
  imageAlt = defaultImageAlt[locale],
}: PageMetadataInput): Metadata {
  const baseUrl = getBaseUrl();
  const alts = getAlternateLanguages(page);
  const canonical = alts[locale];

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...alts, "x-default": alts.en },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: openGraphLocales[locale],
      siteName: "Domus Juliae",
      url: `${baseUrl}${canonical}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
