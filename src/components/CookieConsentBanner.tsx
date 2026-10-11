"use client";

import { useEffect, useState } from "react";
import type { Locale } from "../i18n/config";
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  getStoredCookieConsent,
  saveCookieConsent,
  updateGoogleConsent,
} from "../lib/analytics";

type Props = {
  locale: Locale;
};

const copy: Record<
  Locale,
  {
    title: string;
    text: string;
    essentialTitle: string;
    essentialText: string;
    analyticsTitle: string;
    analyticsText: string;
    advertisingText: string;
    accept: string;
    reject: string;
    preferences: string;
    save: string;
  }
> = {
  it: {
    title: "Preferenze cookie",
    text: "Usiamo cookie tecnici necessari. Google Analytics 4 viene caricato solo se accetti le statistiche.",
    essentialTitle: "Tecnici necessari",
    essentialText: "Sempre attivi per sicurezza, admin e funzionamento del sito.",
    analyticsTitle: "Statistiche GA4",
    analyticsText: "Misurano visite e conversioni senza inviare intenzionalmente dati personali.",
    advertisingText: "Google Ads, dati utente pubblicitari e personalizzazione annunci restano disattivati.",
    accept: "Accetta",
    reject: "Rifiuta",
    preferences: "Preferenze",
    save: "Salva preferenze",
  },
  en: {
    title: "Cookie preferences",
    text: "We use necessary technical cookies. Google Analytics 4 loads only if you accept statistics.",
    essentialTitle: "Necessary technical cookies",
    essentialText: "Always active for security, admin and website operation.",
    analyticsTitle: "GA4 statistics",
    analyticsText: "Measures visits and conversions without intentionally sending personal data.",
    advertisingText: "Google Ads, ad user data and ad personalization remain disabled.",
    accept: "Accept",
    reject: "Reject",
    preferences: "Preferences",
    save: "Save preferences",
  },
  fr: {
    title: "Préférences cookies",
    text: "Nous utilisons les cookies techniques nécessaires. Google Analytics 4 ne se charge que si vous acceptez les statistiques.",
    essentialTitle: "Cookies techniques nécessaires",
    essentialText: "Toujours actifs pour la sécurité, l'admin et le fonctionnement du site.",
    analyticsTitle: "Statistiques GA4",
    analyticsText: "Mesure les visites et conversions sans envoyer volontairement de données personnelles.",
    advertisingText: "Google Ads, données utilisateur publicitaires et personnalisation restent désactivés.",
    accept: "Accepter",
    reject: "Refuser",
    preferences: "Préférences",
    save: "Enregistrer",
  },
  es: {
    title: "Preferencias de cookies",
    text: "Usamos cookies técnicos necesarios. Google Analytics 4 solo se carga si aceptas estadísticas.",
    essentialTitle: "Cookies técnicos necesarios",
    essentialText: "Siempre activos para seguridad, admin y funcionamiento del sitio.",
    analyticsTitle: "Estadísticas GA4",
    analyticsText: "Mide visitas y conversiones sin enviar intencionadamente datos personales.",
    advertisingText: "Google Ads, datos publicitarios de usuario y personalización siguen desactivados.",
    accept: "Aceptar",
    reject: "Rechazar",
    preferences: "Preferencias",
    save: "Guardar",
  },
  de: {
    title: "Cookie-Einstellungen",
    text: "Wir verwenden notwendige technische Cookies. Google Analytics 4 wird nur geladen, wenn Sie Statistik akzeptieren.",
    essentialTitle: "Notwendige technische Cookies",
    essentialText: "Immer aktiv für Sicherheit, Admin und Betrieb der Website.",
    analyticsTitle: "GA4-Statistik",
    analyticsText: "Misst Besuche und Conversions, ohne absichtlich personenbezogene Daten zu senden.",
    advertisingText: "Google Ads, Werbenutzerdaten und Anzeigenpersonalisierung bleiben deaktiviert.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    preferences: "Einstellungen",
    save: "Speichern",
  },
};

export default function CookieConsentBanner({ locale }: Props) {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const c = copy[locale] ?? copy.it;

  useEffect(() => {
    const stored = getStoredCookieConsent();
    if (stored) {
      setAnalyticsEnabled(stored.analytics);
      updateGoogleConsent(stored.analytics);
      return;
    }

    setVisible(true);
  }, []);

  useEffect(() => {
    const openPreferences = () => {
      const stored = getStoredCookieConsent();
      setAnalyticsEnabled(stored?.analytics ?? false);
      setPreferencesOpen(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  function choose(analytics: boolean) {
    saveCookieConsent(analytics);
    setAnalyticsEnabled(analytics);
    setVisible(false);
    setPreferencesOpen(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 md:px-6 md:pb-6" role="region" aria-label={c.title}>
      <div className="mx-auto max-w-5xl border border-brand-gold/30 bg-white p-5 shadow-2xl md:p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">{c.title}</p>
            <p className="mt-2 text-sm leading-6 text-gray-700 md:text-base">{c.text}</p>

            {preferencesOpen ? (
              <div className="mt-5 grid gap-3 text-sm">
                <div className="border border-gray-200 bg-brand-cream p-4">
                  <p className="font-bold text-brand-slate">{c.essentialTitle}</p>
                  <p className="mt-1 leading-6 text-gray-600">{c.essentialText}</p>
                </div>
                <label className="flex items-start gap-3 border border-gray-200 bg-white p-4">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="mt-1 h-4 w-4 accent-brand-gold"
                  />
                  <span>
                    <span className="block font-bold text-brand-slate">{c.analyticsTitle}</span>
                    <span className="mt-1 block leading-6 text-gray-600">{c.analyticsText}</span>
                    <span className="mt-1 block text-xs font-semibold text-gray-500">{c.advertisingText}</span>
                  </span>
                </label>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <button
              type="button"
              onClick={() => choose(true)}
              className="min-h-11 bg-brand-slate px-5 py-3 text-sm font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-brand-gold hover:text-brand-slate"
            >
              {c.accept}
            </button>
            <button
              type="button"
              onClick={() => choose(false)}
              className="min-h-11 border border-brand-slate px-5 py-3 text-sm font-extrabold uppercase tracking-widest text-brand-slate transition-colors hover:bg-brand-slate hover:text-white"
            >
              {c.reject}
            </button>
            {preferencesOpen ? (
              <button
                type="button"
                onClick={() => choose(analyticsEnabled)}
                className="min-h-11 border border-brand-gold px-5 py-3 text-sm font-extrabold uppercase tracking-widest text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
              >
                {c.save}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setPreferencesOpen(true)}
                className="min-h-11 border border-brand-gold px-5 py-3 text-sm font-extrabold uppercase tracking-widest text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
              >
                {c.preferences}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
