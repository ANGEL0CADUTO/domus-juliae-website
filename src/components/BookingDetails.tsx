"use client";

import Link from "next/link";
import CancellationSummary from "./CancellationSummary";
import { cancellationCopy } from "../content/cancellationPolicy";
import { CANCELLATION_POLICY_VERSION } from "../lib/booking/cancellationPolicy";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AlertCircle, ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { contact, isConfigured, property } from "../config/site";
import type { SiteContent } from "../content/types";
import { getLocalizedPath, type Locale } from "../i18n/config";
import { trackAnalyticsEvent, trackCheckoutAndRedirect } from "../lib/analytics";
import { bookingSupport } from "../content/bookingSupport";
import { buildWhatsAppUrl } from "../lib/phone";
import { formatBookingDate } from "../lib/bookingDates";

type Props = { content: SiteContent; initialCheckIn: string; initialCheckOut: string; initialGuests: string };
type Estimate =
  | { status: "idle" | "loading" | "unavailable" | "error" }
  | {
      status: "available";
      available: boolean;
      nights: number;
      totalCents: number;
      averageNightlyRateCents: number | null;
      touristTaxCents: number | null;
      cleaningFeeCents: number | null;
      discountCents: number | null;
    };
type CheckoutResult =
  | { ok: true; paymentUrl: string }
  | { ok: false; error: "DATES_NOT_AVAILABLE" | "PRICE_NOT_AVAILABLE" | "BACKEND_NOT_CONFIGURED" | "STRIPE_NOT_CONFIGURED" | "SITE_URL_NOT_CONFIGURED" | "AVAILABILITY_CHECK_FAILED" | "VALIDATION_ERROR" | "EMAIL_REQUIRED" | "CHECKOUT_FAILED" | "TERMS_ACCEPTANCE_REQUIRED" };

const copy: Record<Locale, Record<string, string>> = {
  it: { eyebrow: "Prenotazione diretta", title: "I tuoi dati", intro: "Controlla il riepilogo, inserisci i dati e continua al pagamento sicuro.", step: "Passo 2 di 2", dates: "Date del soggiorno", modifyDates: "Modifica date", price: "Totale soggiorno", nightlyRate: "Tariffa media alloggio / notte", touristTax: "Tassa di soggiorno (€6 × ospite × notte)", loading: "Controllo prezzo e disponibilità…", unavailable: "Queste date non sono più disponibili. Modifica le date e riprova.", submit: "Continua al pagamento", redirecting: "Apertura pagamento…", back: "Torna al calendario", validation: "Inserisci almeno nome, email e un numero di ospiti valido.", genericError: "Non siamo riusciti ad avviare il pagamento. Riprova o contatta l'host.", unavailableError: "Le date sono appena diventate non disponibili. Torna al calendario e scegline altre.", secure: "I dati della carta saranno inseriti solo su Stripe." },
  en: { eyebrow: "Direct booking", title: "Your details", intro: "Review the stay, add your details and continue to secure payment.", step: "Step 2 of 2", dates: "Stay dates", modifyDates: "Change dates", price: "Stay total", nightlyRate: "Average accommodation rate / night", touristTax: "Tourist tax (€6 × guest × night)", loading: "Checking price and availability…", unavailable: "These dates are no longer available. Change the dates and try again.", submit: "Continue to payment", redirecting: "Opening payment…", back: "Back to calendar", validation: "Enter your name, email and a valid number of guests.", genericError: "We could not start payment. Please try again or contact the host.", unavailableError: "The dates have just become unavailable. Return to the calendar and choose different ones.", secure: "Card details are entered only on Stripe." },
  fr: { eyebrow: "Réservation directe", title: "Vos informations", intro: "Vérifiez le séjour, saisissez vos informations et continuez vers le paiement sécurisé.", step: "Étape 2 sur 2", dates: "Dates du séjour", modifyDates: "Modifier les dates", price: "Total du séjour", nightlyRate: "Tarif moyen de l'hébergement / nuit", touristTax: "Taxe de séjour (6 € × voyageur × nuit)", loading: "Vérification du prix et de la disponibilité…", unavailable: "Ces dates ne sont plus disponibles. Modifiez-les et réessayez.", submit: "Continuer au paiement", redirecting: "Ouverture du paiement…", back: "Retour au calendrier", validation: "Saisissez votre nom, votre e-mail et un nombre de voyageurs valide.", genericError: "Impossible de démarrer le paiement. Réessayez ou contactez l'hôte.", unavailableError: "Les dates viennent de ne plus être disponibles. Retournez au calendrier.", secure: "Les données de carte sont saisies uniquement sur Stripe." },
  es: { eyebrow: "Reserva directa", title: "Tus datos", intro: "Revisa la estancia, introduce tus datos y continúa al pago seguro.", step: "Paso 2 de 2", dates: "Fechas de estancia", modifyDates: "Cambiar fechas", price: "Total de la estancia", nightlyRate: "Tarifa media del alojamiento / noche", touristTax: "Tasa turística (6 € × huésped × noche)", loading: "Comprobando precio y disponibilidad…", unavailable: "Estas fechas ya no están disponibles. Cámbialas e inténtalo de nuevo.", submit: "Continuar al pago", redirecting: "Abriendo pago…", back: "Volver al calendario", validation: "Introduce tu nombre, correo y un número de huéspedes válido.", genericError: "No hemos podido iniciar el pago. Inténtalo de nuevo o contacta con el anfitrión.", unavailableError: "Las fechas ya no están disponibles. Vuelve al calendario y elige otras.", secure: "Los datos de tarjeta se introducen solo en Stripe." },
  de: { eyebrow: "Direktbuchung", title: "Ihre Angaben", intro: "Prüfen Sie den Aufenthalt, geben Sie Ihre Daten ein und fahren Sie mit der sicheren Zahlung fort.", step: "Schritt 2 von 2", dates: "Aufenthaltsdaten", modifyDates: "Daten ändern", price: "Gesamtsumme", nightlyRate: "Durchschnittlicher Unterkunftspreis / Nacht", touristTax: "Kurtaxe (6 € × Gast × Nacht)", loading: "Preis und Verfügbarkeit werden geprüft…", unavailable: "Diese Daten sind nicht mehr verfügbar. Ändern Sie die Daten und versuchen Sie es erneut.", submit: "Weiter zur Zahlung", redirecting: "Zahlung wird geöffnet…", back: "Zurück zum Kalender", validation: "Geben Sie Name, E-Mail und eine gültige Gästezahl ein.", genericError: "Die Zahlung konnte nicht gestartet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie den Gastgeber.", unavailableError: "Die Daten sind nicht mehr verfügbar. Kehren Sie zum Kalender zurück.", secure: "Kartendaten werden nur bei Stripe eingegeben." },
};

function isDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(new Date(`${value}T00:00:00.000Z`).getTime());
}

function formatDate(value: string, locale: Locale): string {
  return formatBookingDate(value, locale);
}

function formatMoney(cents: number, locale: Locale): string {
  const localeMap: Record<Locale, string> = { it: "it-IT", en: "en-GB", fr: "fr-FR", es: "es-ES", de: "de-DE" };
  return new Intl.NumberFormat(localeMap[locale], { style: "currency", currency: "EUR" }).format(cents / 100);
}

export default function BookingDetails({ content, initialCheckIn, initialCheckOut, initialGuests }: Props) {
  const c = copy[content.locale];
  const support = bookingSupport[content.locale];
  const policy = cancellationCopy[content.locale];
  const [termsAccepted, setTermsAccepted] = useState(false);
  const detailsViewTracked = useRef(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", guests: initialGuests, honeypot: "" });
  const [estimate, setEstimate] = useState<Estimate>({ status: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const validDates = isDate(initialCheckIn) && isDate(initialCheckOut) && initialCheckOut > initialCheckIn;
  const guests = Number(form.guests);
  const calendarHref = `/${content.locale}?${new URLSearchParams({ checkIn: initialCheckIn, checkOut: initialCheckOut, guests: form.guests })}#booking`;
  const canSubmit = false;

  useEffect(() => {
    if (detailsViewTracked.current || !validDates) return;
    detailsViewTracked.current = true;
    trackAnalyticsEvent("view_booking_details", { language: content.locale });
  }, [content.locale, validDates]);

  useEffect(() => {
    if (!validDates || !Number.isInteger(guests) || guests < 1 || guests > property.capacity.guests) {
      setEstimate({ status: "idle" });
      return;
    }
    const controller = new AbortController();
    setEstimate({ status: "loading" });
    fetch("/api/pricing/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: content.locale, checkIn: initialCheckIn, checkOut: initialCheckOut, guests }),
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result?.ok === false) {
          setEstimate({ status: "error" });
          return;
        }
        if (result?.ok && result.priceAvailable === true) {
          setEstimate({
            status: "available",
            available: result.available === true,
            nights: result.nights,
            totalCents: result.totalCents,
            averageNightlyRateCents:
              typeof result.breakdown?.averageNightlyRateCents === "number"
                ? result.breakdown.averageNightlyRateCents
                : null,
            touristTaxCents:
              typeof result.breakdown?.touristTaxCents === "number"
                ? result.breakdown.touristTaxCents
                : null,
            cleaningFeeCents: typeof result.breakdown?.cleaningFeeCents === "number" ? result.breakdown.cleaningFeeCents : null,
            discountCents: typeof result.breakdown?.discountCents === "number" ? result.breakdown.discountCents : null,
          });
          return;
        }
        setEstimate({ status: result?.reason === "BACKEND_NOT_CONFIGURED" ? "error" : "unavailable" });
      })
      .catch((error) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) setEstimate({ status: "error" });
      });
    return () => controller.abort();
  }, [content.locale, guests, initialCheckIn, initialCheckOut, validDates]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setMessage("");
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Demo: prenotazioni e pagamenti disattivati. Nessun dato viene trasmesso.");
  };

  const fallbackHref = `mailto:${isConfigured(contact.email) ? contact.email : ""}?subject=${encodeURIComponent(content.booking.emailSubject)}&body=${encodeURIComponent(`${content.booking.form.checkIn}: ${initialCheckIn}\n${content.booking.form.checkOut}: ${initialCheckOut}`)}`;
  const whatsappBase = buildWhatsAppUrl(contact.whatsapp);
  const whatsappHref = whatsappBase ? `${whatsappBase}?text=${encodeURIComponent(`${content.booking.whatsappBase}${content.booking.whatsappDates.replace("{checkIn}", initialCheckIn).replace("{checkOut}", initialCheckOut)}${content.booking.whatsappGuests.replace("{guests}", form.guests)}`)}` : null;
  const trackContact = (channel: string) => trackAnalyticsEvent("contact_click", { channel, source: "booking_details", language: content.locale });

  return (
    <main className="min-h-dvh bg-brand-cream px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-2xl">
        <Link href={calendarHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-slate underline underline-offset-4 hover:text-brand-gold"><ArrowLeft size={18} />{c.back}</Link>
        <section className="mt-6 bg-white p-5 shadow-xl sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">{c.eyebrow} · {c.step}</p>
          <p role="note" className="mb-4 rounded border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950">Demo: prezzi e disponibilità fittizi. Prenotazioni e pagamenti disattivati.</p>
          <h1 className="mt-3 text-4xl text-brand-slate sm:text-5xl">{c.title}</h1>
          <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">{c.intro}</p>
          {validDates ? <div className="mt-6 border border-brand-gold/25 bg-brand-warm/60 p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold">{c.dates}</p><p className="mt-2 font-bold text-brand-slate">{formatDate(initialCheckIn, content.locale)} <span className="px-1 text-brand-gold">→</span> {formatDate(initialCheckOut, content.locale)}</p></div><Link href={calendarHref} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">{c.modifyDates}</Link></div></div> : <p className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 font-semibold text-red-800">{c.unavailable}</p>}
          <div className="mt-5 rounded-md border border-brand-gold/20 p-4" aria-live="polite">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold">{c.price}</p>
            {estimate.status === "available" ? (
              <>
                <p className="mt-2 text-3xl font-bold text-brand-slate">{formatMoney(estimate.totalCents, content.locale)}</p>
                {estimate.averageNightlyRateCents !== null ? (
                  <p className="mt-3 text-sm font-bold text-brand-slate">
                    {c.nightlyRate}: {formatMoney(estimate.averageNightlyRateCents, content.locale)}
                  </p>
                ) : null}
                {estimate.touristTaxCents !== null ? (
                  <p className="mt-1 text-sm font-semibold text-gray-600">
                    {c.touristTax}: {formatMoney(estimate.touristTaxCents, content.locale)}
                  </p>
                ) : null}
                {estimate.cleaningFeeCents !== null ? <p className="mt-1 text-sm font-semibold text-gray-600">{support.cleaning}: {formatMoney(estimate.cleaningFeeCents, content.locale)}</p> : null}
                {estimate.discountCents !== null && estimate.discountCents > 0 ? <p className="mt-1 text-sm font-semibold text-gray-600">{support.discount}: −{formatMoney(estimate.discountCents, content.locale)}</p> : null}
              </>
            ) : (
              <p className="mt-2 font-semibold text-gray-700">{estimate.status === "error" ? support.priceError : estimate.status === "unavailable" ? c.unavailable : c.loading}</p>
            )}
          </div>
          <CancellationSummary locale={content.locale} checkIn={initialCheckIn} />
          <p className="mt-3 text-sm leading-6 text-gray-700">{policy.payment}</p>
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <input name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div className="grid gap-5 sm:grid-cols-2">
              <BookingField label={content.booking.form.name} htmlFor="booking-name"><input id="booking-name" name="name" type="text" value={form.name} onChange={handleChange} required autoComplete="name" placeholder={content.booking.form.namePlaceholder} className="booking-input" autoFocus /></BookingField>
              <BookingField label={content.booking.form.email} htmlFor="booking-email"><input id="booking-email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder={content.booking.form.emailPlaceholder} className="booking-input" /></BookingField>
              <BookingField label={content.booking.form.phone} htmlFor="booking-phone"><input id="booking-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" placeholder={content.booking.form.phonePlaceholder} className="booking-input" /></BookingField>
              <BookingField label={content.booking.form.guests} htmlFor="booking-guests"><select id="booking-guests" name="guests" value={form.guests} onChange={handleChange} className="booking-input">{Array.from({ length: property.capacity.guests }, (_, index) => index + 1).map((value) => <option key={value} value={value}>{value} {value === 1 ? content.booking.form.guestSingular : content.booking.form.guestPlural}</option>)}</select></BookingField>
            </div>
            <BookingField label={content.booking.form.message} htmlFor="booking-message"><textarea id="booking-message" name="message" value={form.message} onChange={handleChange} maxLength={1500} rows={3} placeholder={content.booking.form.messagePlaceholder} className="booking-input resize-y" /></BookingField>
            <div className="rounded-md border border-brand-slate/20 p-3">
              <label htmlFor="booking-terms" className="flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-6 text-brand-slate">
                <input id="booking-terms" name="termsAccepted" type="checkbox" required checked={termsAccepted} onChange={(event) => { setTermsAccepted(event.target.checked); setMessage(""); }} className="mt-1 h-5 w-5 shrink-0 accent-brand-slate" />
                <span>{policy.accept}</span>
              </label>
              <Link href={getLocalizedPath(content.locale, "terms")} target="_blank" rel="noopener noreferrer" className="ml-8 inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">{policy.terms}</Link>
            </div>
            <button type="submit" disabled={!canSubmit} className="flex min-h-12 w-full items-center justify-center gap-3 bg-brand-slate px-5 py-4 text-base font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-brand-gold hover:text-brand-slate disabled:cursor-not-allowed disabled:opacity-50"><CreditCard size={18} />{submitting ? c.redirecting : c.submit}</button>
            {message ? <p role="alert" className="flex gap-2 text-sm font-bold text-red-700"><AlertCircle size={18} className="shrink-0" />{message}</p> : null}
          </form>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-500"><ShieldCheck size={16} className="text-brand-gold" />{c.secure}</p>
          <aside className="mt-6 border-t border-brand-gold/20 pt-5">
            <h2 className="text-xl font-semibold text-brand-slate">{support.help}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">{support.conditions}</p>
            <Link href={getLocalizedPath(content.locale, "terms")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">{support.terms}</Link>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {whatsappHref ? <a href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackContact("whatsapp")} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">{content.booking.whatsappButton}</a> : null}
              {isConfigured(contact.email) ? <a href={fallbackHref} onClick={() => trackContact("email")} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">{content.booking.emailButton}</a> : null}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function BookingField({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return <div className="space-y-2"><label htmlFor={htmlFor} className="text-xs font-extrabold uppercase tracking-widest text-gray-500">{label}</label>{children}</div>;
}
