import type { Locale } from "./config";

export function staticLocales(...allowedLocales: Locale[]) {
  return allowedLocales.map((lang) => ({ lang }));
}
