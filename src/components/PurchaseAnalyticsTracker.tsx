"use client";

import { useEffect, useRef } from "react";
import { COOKIE_CONSENT_CHANGED_EVENT, hasAnalyticsConsent, trackAnalyticsEvent } from "../lib/analytics";
import type { PurchaseAnalytics } from "../lib/purchaseAnalytics";

export default function PurchaseAnalyticsTracker({ purchase }: { purchase: PurchaseAnalytics }) {
  const tracked = useRef(false);
  useEffect(() => {
    const track = () => {
      if (tracked.current || !hasAnalyticsConsent()) return;
      tracked.current = true;
      // GA4 deduplicates repeat page loads using the Stripe transaction_id.
      trackAnalyticsEvent("purchase", purchase);
    };
    track();
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, track);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, track);
  }, [purchase]);
  return null;
}
