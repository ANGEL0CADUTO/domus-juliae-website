import type { Locale } from "../i18n/config";
import type { SiteContent } from "./types";
import it from "./it";
import en from "./en";
import fr from "./fr";
import es from "./es";
import de from "./de";

const contentMap: Record<Locale, SiteContent> = { it, en, fr, es, de };

/** Returns the content for a given locale */
export function getContent(locale: Locale): SiteContent {
  return contentMap[locale];
}

export type { SiteContent } from "./types";
