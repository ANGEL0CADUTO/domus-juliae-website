import type { NextConfig } from "next";

const locales = ["it", "en", "fr", "es", "de"] as const;

const localizedSlugs = {
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

function getLocalizedRedirects() {
  const redirects: Array<{
    source: string;
    destination: string;
    permanent: true;
  }> = [];

  for (const locale of locales) {
    for (const slugs of Object.values(localizedSlugs)) {
      const canonicalSlug = slugs[locale];
      const destination = `/${locale}/${canonicalSlug}`;
      const aliases = Array.from(new Set(Object.values(slugs))).filter(
        (slug) => slug !== canonicalSlug,
      );

      for (const alias of aliases) {
        redirects.push({
          source: `/${locale}/${alias}`,
          destination,
          permanent: true,
        });
      }
    }
  }

  return redirects;
}

const nextConfig: NextConfig = {
  experimental: { cpus: 2 },
  async redirects() {
    return [
      // Root → Italian homepage
      {
        source: "/",
        destination: "/it",
        permanent: true,
      },
      // Old routes → Italian equivalents
      {
        source: "/home",
        destination: "/it",
        permanent: true,
      },
      {
        source: "/galleria",
        destination: "/it/galleria",
        permanent: true,
      },
      {
        source: "/informazioni-essenziali",
        destination: "/it/informazioni-essenziali",
        permanent: true,
      },
      {
        source: "/facts",
        destination: "/en/facts",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/it/privacy",
        permanent: true,
      },
      {
        source: "/cookie",
        destination: "/it/cookie",
        permanent: true,
      },
      {
        source: "/termini",
        destination: "/it/termini",
        permanent: true,
      },
      // Cross-language edges and typos
      {
        source: "/en/galleria",
        destination: "/en/gallery",
        permanent: true,
      },
      {
        source: "/it/terms",
        destination: "/it/termini",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/en/terms",
        permanent: true,
      },
      ...getLocalizedRedirects(),
    ];
  },
};

export default nextConfig;
