import { getBaseUrl } from "../src/config/site";
import type { MetadataRoute } from "next";
import { locales, localizedSlugs, getAlternateLanguages, type PageKey } from "../src/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const entries: MetadataRoute.Sitemap = [];

  const changeFrequencies: Record<PageKey, "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"> = {
    home: "weekly",
    gallery: "monthly",
    facts: "monthly",
    privacy: "yearly",
    cookie: "yearly",
    terms: "yearly",
  };

  const priorities: Record<PageKey, number> = {
    home: 1,
    gallery: 0.8,
    facts: 0.7,
    privacy: 0.3,
    cookie: 0.3,
    terms: 0.3,
  };

  for (const [pageKey, slugs] of Object.entries(localizedSlugs)) {
    const pk = pageKey as PageKey;
    for (const locale of locales) {
      const slug = slugs[locale];
      const urlPath = slug ? `/${locale}/${slug}` : `/${locale}`;

      // Aggiungiamo l'URL alla sitemap
      entries.push({
        url: `${baseUrl}${urlPath}`,
        // Only announce a modification date when the public content actually changed.
        ...(["home", "terms"].includes(pk)
          ? { lastModified: "2026-10-11" }
          : ["facts", "privacy", "cookie", "terms"].includes(pk)
            ? { lastModified: "2026-10-08" }
            : {}),
        alternates: {
          languages: Object.fromEntries(
            [...Object.entries(getAlternateLanguages(pk)), ["x-default", getAlternateLanguages(pk).en]]
              .map(([language, path]) => [language, `${baseUrl}${path}`]),
          ),
        },
        changeFrequency: changeFrequencies[pk],
        priority: priorities[pk],
      });
    }
  }

  return entries;
}
