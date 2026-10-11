import type {
  PriceBreakdownNight,
  PricingCalculationInput,
  PricingCalculationResult,
  PricingRule,
} from "../../types/pricing";

const currency = "EUR" as const;
export const CLEANING_FEE_CENTS = 5_000;
export const TOURIST_TAX_PER_NIGHT_CENTS = 0;
const pricingNote = "Il totale include 50 EUR di pulizia e 0 EUR di tassa di soggiorno per persona per notte.";

function isDateString(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function addDays(value: string, days: number): string {
  const date = new Date(`${value}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function getNights(checkIn: string, checkOut: string): string[] {
  const nights: string[] = [];
  let cursor = checkIn;

  while (cursor < checkOut) {
    nights.push(cursor);
    cursor = addDays(cursor, 1);
  }

  return nights;
}

function getRangeLength(rule: PricingRule): number {
  return Math.max(1, getNights(rule.start_date, rule.end_date).length);
}

function isWeekendNight(date: string): boolean {
  const day = new Date(`${date}T00:00:00.000Z`).getUTCDay();
  return day === 5 || day === 6;
}

function compareRules(left: PricingRule, right: PricingRule): number {
  if (left.priority !== right.priority) {
    return right.priority - left.priority;
  }

  const rangeDiff = getRangeLength(left) - getRangeLength(right);
  if (rangeDiff !== 0) {
    return rangeDiff;
  }

  return right.start_date.localeCompare(left.start_date);
}

function findRuleForNight(date: string, rules: PricingRule[]): PricingRule | null {
  return [...rules]
    .filter((rule) => rule.enabled && rule.start_date <= date && date < rule.end_date)
    .sort(compareRules)[0] ?? null;
}

function createUnavailableResult(
  input: PricingCalculationInput,
  nights: string[],
  missingDates: string[],
  reason: "NO_PRICING_RULES" | "INVALID_DATES" | "MIN_NIGHTS",
  minNightsViolated = false,
  minNightsRequired: number | null = null,
): PricingCalculationResult {
  return {
    priceAvailable: false,
    nights: nights.length,
    currency,
    missingDates,
    minNightsViolated,
    minNightsRequired,
    reason,
    snapshot: {
      input,
      priceAvailable: false,
      reason,
      missingDates,
      minNightsViolated,
      minNightsRequired,
      generatedAt: new Date().toISOString(),
    },
  };
}

export function calculatePrice(
  input: PricingCalculationInput,
  rules: PricingRule[],
): PricingCalculationResult {
  if (!isDateString(input.checkIn) || !isDateString(input.checkOut) || input.checkOut <= input.checkIn) {
    return createUnavailableResult(input, [], [], "INVALID_DATES");
  }

  const nights = getNights(input.checkIn, input.checkOut);
  const enabledRules = rules.filter((rule) => rule.enabled);
  const nightlyItems: PriceBreakdownNight[] = [];
  const selectedRules: PricingRule[] = [];
  const missingDates: string[] = [];

  for (const date of nights) {
    const rule = findRuleForNight(date, enabledRules);
    if (!rule) {
      missingDates.push(date);
      continue;
    }

    const isWeekend = isWeekendNight(date);
    const priceCents = isWeekend
      ? rule.weekend_price_cents ?? rule.weekday_price_cents
      : rule.weekday_price_cents;

    selectedRules.push(rule);
    nightlyItems.push({
      date,
      ruleId: rule.id,
      ruleName: rule.name,
      isWeekend,
      priceCents,
    });
  }

  if (missingDates.length > 0 || nightlyItems.length !== nights.length) {
    return createUnavailableResult(input, nights, missingDates, "NO_PRICING_RULES");
  }

  const stayRule = [...selectedRules].sort(compareRules)[0] ?? null;
  const minNightsRequired = selectedRules.reduce((max, rule) => Math.max(max, rule.min_nights), 1);
  const minNightsViolated = nights.length < minNightsRequired;

  if (minNightsViolated) {
    return createUnavailableResult(input, nights, [], "MIN_NIGHTS", true, minNightsRequired);
  }

  const subtotalNightsCents = nightlyItems.reduce((sum, item) => sum + item.priceCents, 0);
  const averageNightlyRateCents = Math.round(subtotalNightsCents / nights.length);
  const cleaningFeeCents = CLEANING_FEE_CENTS;
  const touristTaxCents = nights.length * input.guests * TOURIST_TAX_PER_NIGHT_CENTS;
  const directDiscountPercent = Number(stayRule?.direct_discount_percent ?? 0);
  const discountCents = Math.round(subtotalNightsCents * (directDiscountPercent / 100));
  const totalCents = Math.max(0, subtotalNightsCents + cleaningFeeCents + touristTaxCents - discountCents);
  const snapshot = {
    input,
    priceAvailable: true,
    nights: nights.length,
    nightlyItems,
    subtotalNightsCents,
    averageNightlyRateCents,
    cleaningFeeCents,
    touristTaxCents,
    discountCents,
    totalCents,
    currency,
    missingDates: [],
    minNightsViolated: false,
    minNightsRequired,
    stayRuleId: stayRule?.id ?? null,
    stayRuleName: stayRule?.name ?? null,
    directDiscountPercent,
    note: pricingNote,
    generatedAt: new Date().toISOString(),
  };

  return {
    priceAvailable: true,
    nights: nights.length,
    nightlyItems,
    subtotalNightsCents,
    averageNightlyRateCents,
    cleaningFeeCents,
    touristTaxCents,
    discountCents,
    totalCents,
    currency,
    missingDates: [],
    minNightsViolated: false,
    minNightsRequired,
    stayRuleId: stayRule?.id ?? null,
    stayRuleName: stayRule?.name ?? null,
    directDiscountPercent,
    note: pricingNote,
    snapshot,
  };
}
