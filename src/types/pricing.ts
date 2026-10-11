export type PricingRule = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  start_date: string;
  end_date: string;
  weekday_price_cents: number;
  weekend_price_cents: number | null;
  cleaning_fee_cents: number;
  min_nights: number;
  direct_discount_percent: number;
  priority: number;
  enabled: boolean;
  notes: string | null;
};

export type PricingCalculationInput = {
  checkIn: string;
  checkOut: string;
  guests: number;
};

export type PriceBreakdownNight = {
  date: string;
  ruleId: string;
  ruleName: string;
  isWeekend: boolean;
  priceCents: number;
};

export type PriceBreakdown = {
  nights: number;
  nightlyItems: PriceBreakdownNight[];
  subtotalNightsCents: number;
  averageNightlyRateCents: number;
  cleaningFeeCents: number;
  touristTaxCents: number;
  discountCents: number;
  totalCents: number;
  currency: "EUR";
  missingDates: string[];
  minNightsViolated: boolean;
  minNightsRequired: number | null;
  stayRuleId: string | null;
  stayRuleName: string | null;
  directDiscountPercent: number;
  note: string;
  snapshot: Record<string, unknown>;
};

export type PricingCalculationResult =
  | ({ priceAvailable: true } & PriceBreakdown)
  | {
      priceAvailable: false;
      nights: number;
      currency: "EUR";
      missingDates: string[];
      minNightsViolated: boolean;
      minNightsRequired: number | null;
      reason: "NO_PRICING_RULES" | "INVALID_DATES" | "MIN_NIGHTS";
      snapshot: Record<string, unknown>;
    };
