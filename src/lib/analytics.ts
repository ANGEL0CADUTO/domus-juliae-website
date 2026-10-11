export const GA_MEASUREMENT_ID = "";
export const COOKIE_CONSENT_STORAGE_KEY = "domus_cookie_consent_v1";
export const COOKIE_CONSENT_CHANGED_EVENT = "domus:cookie-consent-changed";
export const OPEN_COOKIE_PREFERENCES_EVENT = "domus:open-cookie-preferences";

type ConsentStatus = "granted" | "denied";
type GtagValue = string | number | boolean | Array<Record<string, string | number>>;
type GtagParams = Record<string, GtagValue | undefined | null>;

export type StoredCookieConsent = {
  version: 1;
  analytics: boolean;
  updatedAt: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __domusGaInitialized?: boolean;
    __domusGaLoading?: Promise<void>;
  }
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function ensureGtag(): void {
  if (!isBrowser()) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };
}

function consentStatus(analytics: boolean): ConsentStatus {
  return analytics ? "granted" : "denied";
}

export function getStoredCookieConsent(): StoredCookieConsent | null {
  if (!isBrowser()) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as Partial<StoredCookieConsent>;
    if (parsed.version === 1 && typeof parsed.analytics === "boolean" && typeof parsed.updatedAt === "string") {
      return {
        version: 1,
        analytics: parsed.analytics,
        updatedAt: parsed.updatedAt,
      };
    }
  } catch {
    return null;
  }

  return null;
}

export function hasAnalyticsConsent(): boolean {
  return getStoredCookieConsent()?.analytics === true;
}

export function updateGoogleConsent(analytics: boolean): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();
  window.gtag?.("consent", "update", {
    analytics_storage: consentStatus(analytics),
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function saveCookieConsent(analytics: boolean): StoredCookieConsent {
  const consent: StoredCookieConsent = {
    version: 1,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  if (isBrowser()) {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
    updateGoogleConsent(analytics);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: consent }));

    if (analytics) {
      void loadGoogleAnalytics().catch(() => {});
    }
  }

  return consent;
}

export function loadGoogleAnalytics(): Promise<void> {
  if (!GA_MEASUREMENT_ID) return Promise.resolve();
  if (!isBrowser() || !hasAnalyticsConsent()) {
    return Promise.resolve();
  }

  ensureGtag();

  if (window.__domusGaInitialized) {
    return Promise.resolve();
  }

  if (window.__domusGaLoading) {
    return window.__domusGaLoading;
  }

  window.__domusGaLoading = new Promise<void>((resolve, reject) => {
    const finish = () => {
      if (!window.__domusGaInitialized) {
        window.gtag?.("js", new Date());
        window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });
        window.__domusGaInitialized = true;
      }
      resolve();
    };

    const existing = document.getElementById("domus-ga4-script") as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") {
        finish();
        return;
      }

      existing.addEventListener("load", finish, { once: true });
      existing.addEventListener("error", () => reject(new Error("GA4 script failed to load")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "domus-ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        finish();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(new Error("GA4 script failed to load")), { once: true });
    document.head.appendChild(script);
  }).finally(() => {
    window.__domusGaLoading = undefined;
  });

  return window.__domusGaLoading;
}

function cleanParams(params: GtagParams): Record<string, GtagValue> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  ) as Record<string, GtagValue>;
}

export function trackAnalyticsEvent(eventName: string, params: GtagParams = {}): void {
  if (!isBrowser() || !hasAnalyticsConsent()) {
    return;
  }

  void loadGoogleAnalytics().then(() => {
    if (!hasAnalyticsConsent()) {
      return;
    }

    window.gtag?.("event", eventName, cleanParams(params));
  }).catch(() => {});
}

export function trackPageView(pathname: string): void {
  if (!isBrowser() || !hasAnalyticsConsent()) {
    return;
  }

  void loadGoogleAnalytics().then(() => {
    if (!hasAnalyticsConsent()) {
      return;
    }

    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
      page_title: document.title,
    });
  }).catch(() => {});
}

/** Analytics must never hold up a valid payment link, even if Google is blocked. */
export function trackCheckoutAndRedirect(paymentUrl: string, params: GtagParams): void {
  trackEventAndRedirect("begin_checkout", paymentUrl, params);
}

export function trackEventAndRedirect(eventName: string, destination: string, params: GtagParams): void {
  if (!isBrowser()) return;
  let redirected = false;
  const redirect = () => {
    if (redirected) return;
    redirected = true;
    window.location.assign(destination);
  };
  if (!hasAnalyticsConsent()) {
    redirect();
    return;
  }
  const fallback = window.setTimeout(redirect, 800);
  void loadGoogleAnalytics().then(() => {
    if (redirected) return;
    if (!hasAnalyticsConsent()) {
      redirect();
      return;
    }
    window.gtag?.("event", eventName, {
      ...cleanParams(params),
      transport_type: "beacon",
      event_timeout: 700,
      event_callback: () => { window.clearTimeout(fallback); redirect(); },
    });
  }).catch(redirect);
}
