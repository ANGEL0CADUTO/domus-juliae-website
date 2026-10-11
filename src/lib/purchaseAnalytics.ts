/** Only Stripe-verified live payments may become revenue events. No guest data is included. */
export type VerifiedCheckout = {
  id: string;
  livemode: boolean;
  status: string | null;
  payment_status: string;
  amount_total: number | null;
  currency: string | null;
  metadata: Record<string, string> | null;
};

export function buildVerifiedPurchase(
  session: VerifiedCheckout,
  requestId: string,
  snapshot: Record<string, unknown> | null = null,
) {
  if (!session.livemode || session.status !== "complete" || session.payment_status !== "paid"
    || session.metadata?.booking_request_id !== requestId || session.metadata?.purpose === "stripe_live_test"
    || session.metadata?.domus_juliae_flow === "stripe_live_smoke_test" || session.metadata?.creates_booking === "false"
    || !session.amount_total || session.amount_total < 0 || session.currency !== "eur") return null;

  const snapshotTax = snapshot?.touristTaxCents;
  const taxCents = snapshot?.totalCents === session.amount_total && typeof snapshotTax === "number"
    && Number.isInteger(snapshotTax) && snapshotTax >= 0 && snapshotTax <= session.amount_total ? snapshotTax : 0;
  const value = (session.amount_total - taxCents) / 100;
  return {
    transaction_id: session.id,
    currency: "EUR",
    value,
    tax: taxCents / 100,
    items: [{ item_id: "domus-juliae-stay", item_name: "Domus Juliae stay", price: value, quantity: 1 }],
  };
}

export type PurchaseAnalytics = NonNullable<ReturnType<typeof buildVerifiedPurchase>>;
