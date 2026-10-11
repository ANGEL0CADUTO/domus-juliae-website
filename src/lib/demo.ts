import { calculatePrice } from "./pricing/calculatePrice";
import type { PricingRule } from "../types/pricing";

export function validDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function demoEstimate(input: { checkIn?: unknown; checkOut?: unknown; guests?: unknown }) {
  const { checkIn, checkOut, guests } = input;
  if (!validDate(checkIn) || !validDate(checkOut) || checkOut <= checkIn || !Number.isInteger(guests) || Number(guests) < 1 || Number(guests) > 4) return null;
  const nights = (Date.parse(checkOut) - Date.parse(checkIn)) / 86400000;
  if (nights > 60) return null;
  const rule: PricingRule = {
    id: "demo-rule", name: "Demo nightly rate", created_at: "2026-01-01", updated_at: "2026-01-01",
    start_date: checkIn, end_date: checkOut, weekday_price_cents: 10000, weekend_price_cents: 12000,
    cleaning_fee_cents: 5000, min_nights: 1, direct_discount_percent: 0, priority: 1, enabled: true, notes: "Fictional demo pricing",
  };
  const result = calculatePrice({ checkIn, checkOut, guests: Number(guests) }, [rule]);
  if (!result.priceAvailable) return null;
  return { ok: true, demo: true, priceAvailable: true, available: true, nights: result.nights, totalCents: result.totalCents, currency: result.currency, breakdown: result, lastSyncedAt: null, disclaimer: "Demo: prezzi e disponibilità fittizi; nessuna prenotazione viene registrata." };
}
