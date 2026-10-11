import { cancellationCopy } from "../../content/cancellationPolicy";
import { contact } from "../../config/site";
import type { Locale } from "../../i18n/config";

export const CANCELLATION_POLICY_VERSION = "direct-14d-2026-10-11";
const localeTags: Record<Locale, string> = { it: "it-IT", en: "en-GB", fr: "fr-FR", es: "es-ES", de: "de-DE" };

// Fourteen calendar days before arrival at 16:00 Europe/Rome, including DST.
export function getCancellationDeadline(checkIn: string): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(checkIn)) return null;
  const arrival = new Date(`${checkIn}T16:00:00.000Z`);
  if (!Number.isFinite(arrival.getTime()) || arrival.toISOString().slice(0, 10) !== checkIn) return null;
  arrival.setUTCDate(arrival.getUTCDate() - 14);
  const romeHour = Number(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Rome", hour: "2-digit", hourCycle: "h23" }).format(arrival));
  arrival.setUTCHours(arrival.getUTCHours() - (romeHour - 16));
  return arrival.toISOString();
}

export function getCancellationDeadlineLabel(checkIn: string, locale: Locale): string | null {
  const deadline = getCancellationDeadline(checkIn);
  if (!deadline) return null;
  const date = new Intl.DateTimeFormat(localeTags[locale], {
    timeZone: "Europe/Rome", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).format(new Date(deadline));
  return cancellationCopy[locale].deadline.replace("{date}", date);
}

export function acceptsCurrentPolicy(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const input = body as Record<string, unknown>;
  return input.termsAccepted === true && input.cancellationPolicyVersion === CANCELLATION_POLICY_VERSION;
}

export function createCancellationPolicySnapshot(locale: Locale, checkIn: string, acceptedAt: string) {
  const c = cancellationCopy[locale];
  return {
    version: CANCELLATION_POLICY_VERSION, locale, acceptedAt,
    freeCancellationDeadline: getCancellationDeadline(checkIn),
    timeZone: "Europe/Rome",
    // Preserve the accepted wording for email/review even after future policy changes.
    paragraphs: [c.title, getCancellationDeadlineLabel(checkIn, locale) ?? c.freeRule, c.lateRule, c.hostRule, c.taxRule, c.payment, c.request.replace("{email}", contact.email), c.refund, c.scope],
  };
}

export function getSavedCancellationParagraphs(snapshot: Record<string, unknown> | null): string[] {
  const value = snapshot?.cancellationPolicy;
  if (!value || typeof value !== "object") return [];
  const saved = value as Record<string, unknown>;
  if (typeof saved.version !== "string" || typeof saved.acceptedAt !== "string" || !Array.isArray(saved.paragraphs)) return [];
  return saved.paragraphs.filter((line): line is string => typeof line === "string");
}
