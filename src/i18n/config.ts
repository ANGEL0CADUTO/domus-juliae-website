// ────────────────────────────────────────────────────────────
// Domus Juliae — Internazionalizzazione
// Configurazione lingue, tipi e helpers per routing localizzato.
// Nessuna libreria esterna: tutto gestito con App Router e
// content files statici.
// ────────────────────────────────────────────────────────────

export const locales = ["it", "en", "fr", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

/** Mappa delle route localizzate (slug diversi per lingua) */
export const localizedSlugs = {
  home: { it: "", en: "", fr: "", es: "", de: "" },
  gallery: { it: "galleria", en: "gallery", fr: "galerie", es: "galeria", de: "galerie" },
  facts: {
    it: "informazioni-essenziali",
    en: "facts",
    fr: "informations-essentielles",
    es: "informacion-esencial",
    de: "wichtige-informationen",
  },
  privacy: { it: "privacy", en: "privacy", fr: "confidentialite", es: "privacidad", de: "datenschutz" },
  cookie: { it: "cookie", en: "cookie", fr: "cookies", es: "cookies", de: "cookies" },
  terms: { it: "termini", en: "terms", fr: "conditions", es: "terminos", de: "bedingungen" },
} as const;

/** Tipo delle pagine con route localizzate */
export type PageKey = keyof typeof localizedSlugs;

/**
 * Genera il path completo per una pagina in una data lingua.
 * Es: getLocalizedPath("it", "gallery") → "/it/galleria"
 */
export function getLocalizedPath(locale: Locale, page: PageKey): string {
  const slug = localizedSlugs[page][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/**
 * Genera la mappa delle alternative per hreflang.
 * Restituisce un oggetto con gli URL per tutte le lingue.
 */
export function getAlternateLanguages(page: PageKey): Record<Locale, string> {
  const alts = {} as Record<Locale, string>;
  for (const locale of locales) {
    alts[locale] = getLocalizedPath(locale, page);
  }
  return alts;
}

/**
 * Verifica che un valore sia un locale valido.
 */
export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
