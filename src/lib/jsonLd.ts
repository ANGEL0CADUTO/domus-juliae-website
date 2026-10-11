// ────────────────────────────────────────────────────────────
// Domus Juliae — JSON-LD Structured Data (Localized)
// ────────────────────────────────────────────────────────────

import { property, contact, location as loc, getBaseUrl, isConfigured } from "../config/site";
import { getContent } from "../content";
import { getLocalizedPath, type Locale } from "../i18n/config";
import type { PageKey } from "../i18n/config";

type BreadcrumbItem = {
  name: string;
  href: string;
};

const languageNames = ["Italian", "English", "French", "Spanish", "German"];
const languageCodes = ["it-IT", "en-GB", "fr-FR", "es-ES", "de-DE"];

const listingImages = [
  "/demo/scene-3.svg",
  "/demo/scene-1.svg",
  "/demo/scene-3.svg",
  "/demo/scene-1.svg",
  "/demo/scene-3.svg",
  "/demo/scene-1.svg",
  "/demo/scene-2.svg",
  "/demo/scene-1.svg",
  "/demo/scene-3.svg",
  "/demo/scene-4.svg",
] as const;

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }

  return `${getBaseUrl()}${path}`;
}

function listingImageUrls(): string[] {
  return listingImages.map((image) => absoluteUrl(image));
}

function sameAsUrls(): string[] {
  return [
    contact.airbnbUrl,
  ].filter(isConfigured);
}

function amenityFeatures(): Array<Record<string, unknown>> {
  return [
    { "@type": "LocationFeatureSpecification", name: "Wifi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Elevator", value: true },
    { "@type": "LocationFeatureSpecification", name: "TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Heating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dedicated workspace", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smoke alarm", value: true },
    { "@type": "LocationFeatureSpecification", name: "Carbon monoxide detector", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fire extinguisher", value: true },
  ];
}

/**
 * Genera JSON-LD per LodgingBusiness.
 * Localizzato per lingua: description e url cambiano.
 * Non include aggregateRating/review: per prudenza evitiamo rating markup
 * finché non vengono gestite recensioni individuali conformi nel markup.
 */
export function generateLodgingBusinessJsonLd(locale: Locale): Record<string, unknown> {
  const baseUrl = getBaseUrl();
  const t = getContent(locale);
  const sameAs = sameAsUrls();

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${baseUrl}/${locale}#lodging-business`,
    name: property.fullName,
    alternateName: property.name,
    description: t.seo.home.description,
    url: `${baseUrl}/${locale}`,
    telephone: contact.phone,
    email: contact.email,
    image: listingImageUrls(),
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      postalCode: loc.cap,
      addressRegion: loc.province,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9068,
      longitude: 12.4896,
    },
    numberOfRooms: property.capacity.bedrooms,
    amenityFeature: amenityFeatures(),
    maximumAttendeeCapacity: property.capacity.guests,
    identifier: {
      "@type": "PropertyValue",
      name: "CIN",
      value: property.cin,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "reservations",
      availableLanguage: languageNames,
    },
    knowsLanguage: languageCodes,
    hasMap: contact.googleMapsUrl,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/**
 * Genera JSON-LD FAQPage dalla stessa FAQ visibile in homepage.
 * FAQPage non produce più rich result generalizzati su Google, ma resta utile
 * per chiarezza entity/AI e mantiene coerenza con il contenuto renderizzato.
 */
export function generateFaqPageJsonLd(locale: Locale): Record<string, unknown> {
  const baseUrl = getBaseUrl();
  const t = getContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/${locale}#faq`,
    inLanguage: locale,
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateFactsPageJsonLd(locale: Locale): Record<string, unknown> {
  const baseUrl = getBaseUrl();
  const t = getContent(locale);
  const path = getLocalizedPath(locale, "facts");

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl}${path}#webpage`,
    url: `${baseUrl}${path}`,
    name: t.seo.facts.title,
    description: t.seo.facts.description,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: property.name,
      url: baseUrl,
    },
    about: {
      "@id": `${baseUrl}/${locale}#lodging-business`,
    },
  };
}

/**
 * Genera JSON-LD BreadcrumbList per una pagina.
 */
export function generateBreadcrumbJsonLd(items: readonly BreadcrumbItem[]): Record<string, unknown> {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`,
    })),
  };
}

/**
 * Breadcrumb predefiniti per le pagine del sito, localizzati.
 */
export function breadcrumbs(locale: Locale) {
  const home = locale === "it" ? "Home" : "Home";
  const pages: Record<string, { name: string; page: PageKey }> = {
    gallery: { name: locale === "it" ? "Galleria" : "Gallery", page: "gallery" },
    facts: {
      name:
        locale === "it"
          ? "Informazioni essenziali"
          : locale === "fr"
            ? "Informations essentielles"
            : locale === "es"
              ? "Información esencial"
              : locale === "de"
                ? "Wichtige Informationen"
                : "Facts",
      page: "facts",
    },
    privacy: { name: "Privacy Policy", page: "privacy" },
    cookie: { name: "Cookie Policy", page: "cookie" },
    terms: { name: locale === "it" ? "Termini e Condizioni" : "Terms and Conditions", page: "terms" },
  };

  return {
    home: [{ name: home, href: getLocalizedPath(locale, "home") }],
    gallery: [
      { name: home, href: getLocalizedPath(locale, "home") },
      { name: pages.gallery.name, href: getLocalizedPath(locale, "gallery") },
    ],
    facts: [
      { name: home, href: getLocalizedPath(locale, "home") },
      { name: pages.facts.name, href: getLocalizedPath(locale, "facts") },
    ],
    privacy: [
      { name: home, href: getLocalizedPath(locale, "home") },
      { name: pages.privacy.name, href: getLocalizedPath(locale, "privacy") },
    ],
    cookie: [
      { name: home, href: getLocalizedPath(locale, "home") },
      { name: pages.cookie.name, href: getLocalizedPath(locale, "cookie") },
    ],
    terms: [
      { name: home, href: getLocalizedPath(locale, "home") },
      { name: pages.terms.name, href: getLocalizedPath(locale, "terms") },
    ],
  };
}
