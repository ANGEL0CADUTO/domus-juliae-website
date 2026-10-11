"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  getStoredCookieConsent,
  loadGoogleAnalytics,
  trackPageView,
  updateGoogleConsent,
} from "../lib/analytics";

export default function AnalyticsPageViewTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const stored = getStoredCookieConsent();
    if (!stored) {
      return;
    }

    updateGoogleConsent(stored.analytics);
    if (stored.analytics) {
      void loadGoogleAnalytics();
    }
  }, []);

  useEffect(() => {
    if (lastTrackedPath.current === pathname) {
      return;
    }

    lastTrackedPath.current = pathname;
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleConsentChange = () => {
      lastTrackedPath.current = null;
      trackPageView(pathname);
    };

    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, handleConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, handleConsentChange);
  }, [pathname]);

  return null;
}
