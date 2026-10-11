import type { Locale } from "../i18n/config";

const dateLocales: Record<Locale, string> = {
  it: "it-IT", en: "en-GB", fr: "fr-FR", es: "es-ES", de: "de-DE",
};

// Stay dates are calendar dates, not instants in the visitor's time zone.
export function formatBookingDate(value: string, locale: Locale): string {
  if (!value) return "-";
  return new Intl.DateTimeFormat(dateLocales[locale], {
    day: "2-digit", month: "short", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

export function formatBookingMonth(month: string, locale: Locale): string {
  const label = new Intl.DateTimeFormat(dateLocales[locale], {
    month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${month}-01T00:00:00.000Z`));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function getBookingToday(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Europe/Rome", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)!.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}
