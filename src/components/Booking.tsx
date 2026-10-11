"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Users,
} from "lucide-react";
import { property } from "../config/site";
import CancellationSummary from "./CancellationSummary";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";
import { trackAnalyticsEvent, trackEventAndRedirect } from "../lib/analytics";
import { formatBookingDate, formatBookingMonth, getBookingToday } from "../lib/bookingDates";

type Props = {
  content: SiteContent;
  initialToday: string;
};

type PricingEstimateState =
  | { status: "idle" | "loading" }
  | {
      status: "unavailable";
      reason?: "NO_PRICING_RULES" | "INVALID_DATES" | "MIN_NIGHTS" | "BACKEND_NOT_CONFIGURED";
      nights?: number;
      minNightsRequired?: number | null;
    }
  | { status: "error" }
  | {
      status: "available";
      available: boolean;
      nights: number;
      totalCents: number;
      currency: "EUR";
      breakdown: {
        averageNightlyRateCents?: number;
        cleaningFeeCents?: number;
        touristTaxCents?: number;
        discountCents?: number;
      };
      disclaimer: string;
      lastSyncedAt: string | null;
    };

type OccupiedRange = {
  startDate: string;
  endDate: string;
  source: "EXTERNAL" | "INTERNAL";
};

type OccupiedDatesState =
  | { status: "idle" | "loading"; ranges: OccupiedRange[]; configured: boolean }
  | { status: "ready"; ranges: OccupiedRange[]; configured: boolean }
  | { status: "error"; ranges: OccupiedRange[]; configured: boolean };

type FlowCopy = {
  tagline: string;
  headline: string;
  intro: string;
  steps: Array<{ title: string; description: string }>;
  priceLabel: string;
  loadingPrice: string;
  chooseDates: string;
  available: string;
  unavailable: string;
  unavailableHelp: string;
  totalNote: string;
  directSaving: string;
  proceed: string;
  redirecting: string;
  validationError: string;
  backendUnavailable: string;
  priceUnavailable: string;
  genericError: string;
  contactFallback: string;
  microtrust: string[];
  infoTitle: string;
  infoText: string;
  infoBullets: string[];
  calendar: {
    selectedDates: string;
    checkInToChoose: string;
    checkOutToChoose: string;
    nights: string;
    nightsSelected: string;
    selectArrivalThenDeparture: string;
    title: string;
    help: string;
    previousMonth: string;
    nextMonth: string;
    availableLegend: string;
    selectedLegend: string;
    occupiedLegend: string;
    loadingAvailability: string;
    availabilityError: string;
    calendarNotConfigured: string;
    averageNightlyRate: string;
    cleaning: string;
    touristTax: string;
    directDiscount: string;
    weekdays: string[];
  };
};

const copyByLocale: Record<Locale, FlowCopy> = {
  it: {
    tagline: "Prenotazione diretta",
    headline: "Scegli le date e paga online",
    intro: "Controlla disponibilità e prezzo dal calendario, inserisci i dati essenziali e procedi al pagamento online.",
    steps: [
      { title: "Date e ospiti", description: "Seleziona check-in, check-out e numero di ospiti." },
      { title: "Prezzo del soggiorno", description: "Vedi il totale con pulizia, tassa di soggiorno ed eventuale sconto prima di pagare." },
      { title: "Disponibilità", description: "Il sito controlla blocchi interni e calendari iCal importati." },
      { title: "Pagamento", description: "Se le date sono libere vai direttamente al pagamento online." },
    ],
    priceLabel: "Totale soggiorno",
    loadingPrice: "Calcolo prezzo e controllo date...",
    chooseDates: "Scegli date valide per vedere il totale",
    available: "Date disponibili",
    unavailable: "Date non disponibili",
    unavailableHelp: "Scegli un altro periodo oppure contatta l'host.",
    totalNote: "Totale calcolato dal sito prima del pagamento.",
    directSaving: "Prenotazione diretta, nessuna commissione piattaforma.",
    proceed: "Continua con i tuoi dati",
    redirecting: "Apertura pagamento...",
    validationError: "Inserisci nome, email, date valide e numero ospiti.",
    backendUnavailable: "Il sistema di prenotazione non è disponibile ora. Usa i contatti diretti.",
    priceUnavailable: "Non è possibile calcolare un prezzo per queste date.",
    genericError: "Non siamo riusciti ad avviare il pagamento. Riprova o contatta l'host.",
    contactFallback: "Serve aiuto? Puoi contattare l'host direttamente.",
    microtrust: ["Prezzo diretto", "Date controllate", "Pagamento online"],
    infoTitle: "Come funziona",
    infoText:
      "Il sito usa i prezzi interni e i calendari collegati per permettere una prenotazione rapida. Se trova un conflitto evidente, blocca il pagamento.",
    infoBullets: [
      "Nessun dato carta viene gestito dal sito",
      "Dopo il pagamento le date vengono bloccate nel calendario interno",
      "L'host riceve una notifica e controlla anche Airbnb/Booking",
      "Il feed iCal del sito resta disponibile per gli altri portali",
    ],
    calendar: {
      selectedDates: "Date selezionate",
      checkInToChoose: "Check-in da scegliere",
      checkOutToChoose: "Check-out da scegliere",
      nights: "{nights} notti",
      nightsSelected: "{nights} notti selezionate",
      selectArrivalThenDeparture: "Seleziona prima arrivo, poi partenza.",
      title: "Calendario disponibilità",
      help: "Scegli arrivo e partenza. Le date occupate non sono selezionabili.",
      previousMonth: "Mese precedente",
      nextMonth: "Mese successivo",
      availableLegend: "Disponibile",
      selectedLegend: "Selezionata",
      occupiedLegend: "Occupata",
      loadingAvailability: "Aggiorno le disponibilità...",
      availabilityError: "Non riesco a caricare le date occupate ora. Il controllo finale avviene comunque prima del pagamento.",
      calendarNotConfigured: "Calendario non configurato: il prezzo può essere calcolato, ma serve configurare Supabase per bloccare conflitti.",
      averageNightlyRate: "Tariffa media alloggio / notte",
      cleaning: "Pulizia",
      touristTax: "Tassa di soggiorno (€6 × ospite × notte)",
      directDiscount: "Sconto diretto",
      weekdays: ["L", "M", "M", "G", "V", "S", "D"],
    },
  },
  en: {
    tagline: "Direct booking",
    headline: "Pick dates and pay online",
    intro: "Check availability and price from the calendar, enter the essential details and continue to online payment.",
    steps: [
      { title: "Dates and guests", description: "Select check-in, check-out and number of guests." },
      { title: "Your stay price", description: "See the total, including cleaning, tourist tax and any discount, before paying." },
      { title: "Availability", description: "The site checks internal blocks and imported iCal calendars." },
      { title: "Payment", description: "If the dates are free, continue directly to online payment." },
    ],
    priceLabel: "Stay total",
    loadingPrice: "Calculating price and checking dates...",
    chooseDates: "Choose valid dates to see the total",
    available: "Dates available",
    unavailable: "Dates not available",
    unavailableHelp: "Choose another period or contact the host.",
    totalNote: "Total calculated by the site before payment.",
    directSaving: "Direct booking, no platform service fee.",
    proceed: "Continue with your details",
    redirecting: "Opening payment...",
    validationError: "Enter name, email, valid dates and number of guests.",
    backendUnavailable: "The booking system is not available right now. Use direct contact options.",
    priceUnavailable: "A price cannot be calculated for these dates.",
    genericError: "We could not start payment. Please try again or contact the host.",
    contactFallback: "Need help? You can contact the host directly.",
    microtrust: ["Direct price", "Dates checked", "Online payment"],
    infoTitle: "How it works",
    infoText:
      "The site uses internal prices and connected calendars for a fast direct booking. If it finds a clear conflict, payment is blocked.",
    infoBullets: [
      "The site never handles card data",
      "After payment, dates are blocked in the internal calendar",
      "The host is notified and checks Airbnb/Booking as well",
      "The site iCal feed remains available for other portals",
    ],
    calendar: {
      selectedDates: "Selected dates",
      checkInToChoose: "Choose check-in",
      checkOutToChoose: "Choose check-out",
      nights: "{nights} nights",
      nightsSelected: "{nights} nights selected",
      selectArrivalThenDeparture: "Select arrival first, then departure.",
      title: "Availability calendar",
      help: "Choose arrival and departure. Booked dates cannot be selected.",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      availableLegend: "Available",
      selectedLegend: "Selected",
      occupiedLegend: "Booked",
      loadingAvailability: "Updating availability...",
      availabilityError: "We cannot load booked dates right now. The final check still runs before payment.",
      calendarNotConfigured: "Calendar not configured: the price can be calculated, but Supabase must be configured to block conflicts.",
      averageNightlyRate: "Average accommodation rate / night",
      cleaning: "Cleaning",
      touristTax: "Tourist tax (€6 × guest × night)",
      directDiscount: "Direct discount",
      weekdays: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
  fr: {
    tagline: "Réservation directe",
    headline: "Choisissez les dates et payez en ligne",
    intro: "Vérifiez la disponibilité et le prix depuis le calendrier, saisissez les informations essentielles et continuez vers le paiement en ligne.",
    steps: [
      { title: "Dates et voyageurs", description: "Sélectionnez l'arrivée, le départ et le nombre de voyageurs." },
      { title: "Prix du séjour", description: "Consultez le total avec ménage, taxe de séjour et éventuelle réduction avant de payer." },
      { title: "Disponibilité", description: "Le site contrôle les blocages internes et les calendriers iCal importés." },
      { title: "Paiement", description: "Si les dates sont libres, continuez directement vers le paiement en ligne." },
    ],
    priceLabel: "Total du séjour",
    loadingPrice: "Calcul du prix et vérification des dates...",
    chooseDates: "Choisissez des dates valides pour voir le total",
    available: "Dates disponibles",
    unavailable: "Dates non disponibles",
    unavailableHelp: "Choisissez une autre période ou contactez l'hôte.",
    totalNote: "Total calculé par le site avant paiement.",
    directSaving: "Réservation directe, sans frais de plateforme.",
    proceed: "Continuer avec vos informations",
    redirecting: "Ouverture du paiement...",
    validationError: "Saisissez nom, e-mail, dates valides et nombre de voyageurs.",
    backendUnavailable: "Le système de réservation n'est pas disponible maintenant. Utilisez les contacts directs.",
    priceUnavailable: "Impossible de calculer un prix pour ces dates.",
    genericError: "Nous n'avons pas pu démarrer le paiement. Réessayez ou contactez l'hôte.",
    contactFallback: "Besoin d'aide ? Vous pouvez contacter l'hôte directement.",
    microtrust: ["Prix direct", "Dates contrôlées", "Paiement en ligne"],
    infoTitle: "Comment ça marche",
    infoText:
      "Le site utilise les prix internes et les calendriers connectés pour permettre une réservation directe rapide. En cas de conflit évident, le paiement est bloqué.",
    infoBullets: [
      "Le site ne gère jamais les données de carte",
      "Après le paiement, les dates sont bloquées dans le calendrier interne",
      "L'hôte est notifié et contrôle aussi Airbnb/Booking",
      "Le flux iCal du site reste disponible pour les autres portails",
    ],
    calendar: {
      selectedDates: "Dates sélectionnées",
      checkInToChoose: "Arrivée à choisir",
      checkOutToChoose: "Départ à choisir",
      nights: "{nights} nuits",
      nightsSelected: "{nights} nuits sélectionnées",
      selectArrivalThenDeparture: "Sélectionnez d'abord l'arrivée, puis le départ.",
      title: "Calendrier des disponibilités",
      help: "Choisissez arrivée et départ. Les dates occupées ne sont pas sélectionnables.",
      previousMonth: "Mois précédent",
      nextMonth: "Mois suivant",
      availableLegend: "Disponible",
      selectedLegend: "Sélectionnée",
      occupiedLegend: "Occupée",
      loadingAvailability: "Mise à jour des disponibilités...",
      availabilityError: "Impossible de charger les dates occupées maintenant. Le contrôle final a lieu avant le paiement.",
      calendarNotConfigured: "Calendrier non configuré : le prix peut être calculé, mais Supabase doit être configuré pour bloquer les conflits.",
      averageNightlyRate: "Tarif moyen de l'hébergement / nuit",
      cleaning: "Ménage",
      touristTax: "Taxe de séjour (6 € × voyageur × nuit)",
      directDiscount: "Réduction directe",
      weekdays: ["L", "M", "M", "J", "V", "S", "D"],
    },
  },
  es: {
    tagline: "Reserva directa",
    headline: "Elige fechas y paga online",
    intro: "Comprueba disponibilidad y precio desde el calendario, introduce los datos esenciales y continúa al pago online.",
    steps: [
      { title: "Fechas y huéspedes", description: "Selecciona llegada, salida y número de huéspedes." },
      { title: "Precio de la estancia", description: "Consulta el total con limpieza, tasa turística y cualquier descuento antes de pagar." },
      { title: "Disponibilidad", description: "El sitio comprueba bloqueos internos y calendarios iCal importados." },
      { title: "Pago", description: "Si las fechas están libres, continúa directamente al pago online." },
    ],
    priceLabel: "Total de la estancia",
    loadingPrice: "Calculando precio y comprobando fechas...",
    chooseDates: "Elige fechas válidas para ver el total",
    available: "Fechas disponibles",
    unavailable: "Fechas no disponibles",
    unavailableHelp: "Elige otro periodo o contacta con el anfitrión.",
    totalNote: "Total calculado por el sitio antes del pago.",
    directSaving: "Reserva directa, sin comisiones de plataforma.",
    proceed: "Continuar con tus datos",
    redirecting: "Abriendo pago...",
    validationError: "Introduce nombre, email, fechas válidas y número de huéspedes.",
    backendUnavailable: "El sistema de reserva no está disponible ahora. Usa los contactos directos.",
    priceUnavailable: "No es posible calcular un precio para estas fechas.",
    genericError: "No hemos podido iniciar el pago. Inténtalo de nuevo o contacta con el anfitrión.",
    contactFallback: "¿Necesitas ayuda? Puedes contactar directamente con el anfitrión.",
    microtrust: ["Precio directo", "Fechas comprobadas", "Pago online"],
    infoTitle: "Cómo funciona",
    infoText:
      "El sitio usa precios internos y calendarios conectados para permitir una reserva directa rápida. Si detecta un conflicto evidente, bloquea el pago.",
    infoBullets: [
      "El sitio nunca gestiona datos de tarjeta",
      "Después del pago, las fechas se bloquean en el calendario interno",
      "El anfitrión recibe una notificación y revisa también Airbnb/Booking",
      "El feed iCal del sitio queda disponible para otros portales",
    ],
    calendar: {
      selectedDates: "Fechas seleccionadas",
      checkInToChoose: "Elegir llegada",
      checkOutToChoose: "Elegir salida",
      nights: "{nights} noches",
      nightsSelected: "{nights} noches seleccionadas",
      selectArrivalThenDeparture: "Selecciona primero llegada y después salida.",
      title: "Calendario de disponibilidad",
      help: "Elige llegada y salida. Las fechas ocupadas no se pueden seleccionar.",
      previousMonth: "Mes anterior",
      nextMonth: "Mes siguiente",
      availableLegend: "Disponible",
      selectedLegend: "Seleccionada",
      occupiedLegend: "Ocupada",
      loadingAvailability: "Actualizando disponibilidad...",
      availabilityError: "No podemos cargar las fechas ocupadas ahora. La comprobación final se realiza antes del pago.",
      calendarNotConfigured: "Calendario no configurado: el precio puede calcularse, pero Supabase debe configurarse para bloquear conflictos.",
      averageNightlyRate: "Tarifa media del alojamiento / noche",
      cleaning: "Limpieza",
      touristTax: "Tasa turística (6 € × huésped × noche)",
      directDiscount: "Descuento directo",
      weekdays: ["L", "M", "X", "J", "V", "S", "D"],
    },
  },
  de: {
    tagline: "Direktbuchung",
    headline: "Daten wählen und online bezahlen",
    intro: "Prüfen Sie Verfügbarkeit und Preis im Kalender, geben Sie die wichtigsten Daten ein und fahren Sie mit der Online-Zahlung fort.",
    steps: [
      { title: "Daten und Gäste", description: "Wählen Sie Check-in, Check-out und Anzahl der Gäste." },
      { title: "Preis Ihres Aufenthalts", description: "Sehen Sie vor der Zahlung den Gesamtpreis mit Reinigung, Kurtaxe und gegebenenfalls Rabatt." },
      { title: "Verfügbarkeit", description: "Die Website prüft interne Sperren und importierte iCal-Kalender." },
      { title: "Zahlung", description: "Wenn die Daten frei sind, fahren Sie direkt mit der Online-Zahlung fort." },
    ],
    priceLabel: "Gesamtpreis",
    loadingPrice: "Preis wird berechnet und Daten werden geprüft...",
    chooseDates: "Wählen Sie gültige Daten, um den Gesamtpreis zu sehen",
    available: "Daten verfügbar",
    unavailable: "Daten nicht verfügbar",
    unavailableHelp: "Wählen Sie einen anderen Zeitraum oder kontaktieren Sie den Gastgeber.",
    totalNote: "Gesamtpreis vor Zahlung von der Website berechnet.",
    directSaving: "Direktbuchung, keine Plattformgebühr.",
    proceed: "Weiter mit Ihren Angaben",
    redirecting: "Zahlung wird geöffnet...",
    validationError: "Geben Sie Name, E-Mail, gültige Daten und Anzahl der Gäste ein.",
    backendUnavailable: "Das Buchungssystem ist derzeit nicht verfügbar. Nutzen Sie die direkten Kontakte.",
    priceUnavailable: "Für diese Daten kann kein Preis berechnet werden.",
    genericError: "Die Zahlung konnte nicht gestartet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie den Gastgeber.",
    contactFallback: "Brauchen Sie Hilfe? Sie können den Gastgeber direkt kontaktieren.",
    microtrust: ["Direktpreis", "Daten geprüft", "Online-Zahlung"],
    infoTitle: "So funktioniert es",
    infoText:
      "Die Website nutzt interne Preise und verbundene Kalender für eine schnelle Direktbuchung. Bei einem klaren Konflikt wird die Zahlung blockiert.",
    infoBullets: [
      "Die Website verarbeitet niemals Kartendaten",
      "Nach der Zahlung werden die Daten im internen Kalender blockiert",
      "Der Gastgeber wird benachrichtigt und prüft auch Airbnb/Booking",
      "Der iCal-Feed der Website bleibt für andere Portale verfügbar",
    ],
    calendar: {
      selectedDates: "Ausgewählte Daten",
      checkInToChoose: "Check-in wählen",
      checkOutToChoose: "Check-out wählen",
      nights: "{nights} Nächte",
      nightsSelected: "{nights} Nächte ausgewählt",
      selectArrivalThenDeparture: "Wählen Sie zuerst Anreise, dann Abreise.",
      title: "Verfügbarkeitskalender",
      help: "Wählen Sie Anreise und Abreise. Belegte Daten sind nicht auswählbar.",
      previousMonth: "Vorheriger Monat",
      nextMonth: "Nächster Monat",
      availableLegend: "Verfügbar",
      selectedLegend: "Ausgewählt",
      occupiedLegend: "Belegt",
      loadingAvailability: "Verfügbarkeit wird aktualisiert...",
      availabilityError: "Belegte Daten können derzeit nicht geladen werden. Die finale Prüfung erfolgt trotzdem vor der Zahlung.",
      calendarNotConfigured: "Kalender nicht konfiguriert: Der Preis kann berechnet werden, aber Supabase muss zum Blockieren von Konflikten konfiguriert sein.",
      averageNightlyRate: "Durchschnittlicher Unterkunftspreis / Nacht",
      cleaning: "Reinigung",
      touristTax: "Kurtaxe (6 € × Gast × Nacht)",
      directDiscount: "Direktrabatt",
      weekdays: ["M", "D", "M", "D", "F", "S", "S"],
    },
  },
};

const dayMs = 86400000;

function toDate(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

function toDateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function todayString(): string {
  return getBookingToday();
}

function monthKey(value: string): string {
  return value.slice(0, 7);
}

function addMonths(month: string, offset: number): string {
  const date = new Date(`${month}-01T00:00:00.000Z`);
  date.setUTCMonth(date.getUTCMonth() + offset);
  return toDateString(date).slice(0, 7);
}

function monthStart(month: string): string {
  return `${month}-01`;
}

function monthEndExclusive(month: string): string {
  return monthStart(addMonths(month, 1));
}

function addDays(value: string, days: number): string {
  return toDateString(new Date(toDate(value).getTime() + days * dayMs));
}

function nightsBetween(checkIn: string, checkOut: string): number {
  return Math.max(0, Math.round((toDate(checkOut).getTime() - toDate(checkIn).getTime()) / dayMs));
}

function rangesOverlap(startA: string, endA: string, startB: string, endB: string): boolean {
  return startA < endB && endA > startB;
}

function isDateOccupied(date: string, ranges: OccupiedRange[]): boolean {
  return ranges.some((range) => date >= range.startDate && date < range.endDate);
}

function rangeHasOccupiedNight(checkIn: string, checkOut: string, ranges: OccupiedRange[]): boolean {
  return ranges.some((range) => rangesOverlap(checkIn, checkOut, range.startDate, range.endDate));
}

function getCalendarDays(month: string): Array<{ date: string; inMonth: boolean }> {
  const first = toDate(monthStart(month));
  const firstWeekday = (first.getUTCDay() + 6) % 7;
  const gridStart = new Date(first.getTime() - firstWeekday * dayMs);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart.getTime() + index * dayMs);
    const value = toDateString(date);
    return {
      date: value,
      inMonth: value.startsWith(month),
    };
  });
}

function getDateLocale(locale: Locale): string {
  const localesByCode: Record<Locale, string> = {
    it: "it-IT",
    en: "en-GB",
    fr: "fr-FR",
    es: "es-ES",
    de: "de-DE",
  };

  return localesByCode[locale];
}

function formatDisplayDate(value: string, locale: Locale): string {
  return formatBookingDate(value, locale);
}

function formatMonthLabel(month: string, locale: Locale): string {
  return formatBookingMonth(month, locale);
}

function formatNightsSelected(copy: FlowCopy, nights: number): string {
  return copy.calendar.nightsSelected.replace("{nights}", String(nights));
}

function formatNights(copy: FlowCopy, nights: number): string {
  return copy.calendar.nights.replace("{nights}", String(nights));
}

function getCopy(locale: Locale): FlowCopy {
  return copyByLocale[locale];
}

function formatMoney(cents: number, locale: Locale): string {
  return new Intl.NumberFormat(getDateLocale(locale), { style: "currency", currency: "EUR" }).format(cents / 100);
}

function getPricingStatusMessage(state: PricingEstimateState, locale: Locale): string {
  const messages: Record<Locale, {
    idle: string;
    loading: string;
    error: string;
    backendNotConfigured: string;
    noPricingRules: string;
    minNights: string;
    priceUnavailable: string;
    datesUnavailable: string;
    available: string;
  }> = {
    it: {
      idle: "Scegli check-in e check-out per calcolare prezzo e disponibilità.",
      loading: "Sto calcolando il prezzo e controllando le date.",
      error: "Il controllo prezzo non risponde ora. Riprova tra poco.",
      backendNotConfigured: "Il pagamento resta disattivato perché backend e calendario non sono configurati.",
      noPricingRules: "Il pagamento resta disattivato perché non esiste una regola prezzo attiva per queste notti.",
      minNights: "Il soggiorno selezionato è troppo breve. Minimo richiesto: {min} notti.",
      priceUnavailable: "Prezzo non disponibile per queste date: scegli un altro periodo.",
      datesUnavailable: "Le date selezionate risultano occupate: il pagamento è bloccato.",
      available: "Prezzo e disponibilità confermati: puoi procedere al pagamento.",
    },
    en: {
      idle: "Choose check-in and check-out to calculate price and availability.",
      loading: "Calculating price and checking dates.",
      error: "The price check is not responding right now. Please try again shortly.",
      backendNotConfigured: "Payment stays disabled because backend and calendar are not configured.",
      noPricingRules: "Payment stays disabled because no active price rule covers these nights.",
      minNights: "The selected stay is too short. Minimum required: {min} nights.",
      priceUnavailable: "Price is not available for these dates: choose another period.",
      datesUnavailable: "The selected dates are unavailable: payment is blocked.",
      available: "Price and availability confirmed: you can continue to payment.",
    },
    fr: {
      idle: "Choisissez arrivée et départ pour calculer le prix et la disponibilité.",
      loading: "Calcul du prix et vérification des dates.",
      error: "Le contrôle du prix ne répond pas pour le moment. Réessayez dans quelques instants.",
      backendNotConfigured: "Le paiement reste désactivé car le backend et le calendrier ne sont pas configurés.",
      noPricingRules: "Le paiement reste désactivé car aucune règle de prix active ne couvre ces nuits.",
      minNights: "Le séjour sélectionné est trop court. Minimum requis : {min} nuits.",
      priceUnavailable: "Prix non disponible pour ces dates : choisissez une autre période.",
      datesUnavailable: "Les dates sélectionnées sont occupées : le paiement est bloqué.",
      available: "Prix et disponibilité confirmés : vous pouvez continuer au paiement.",
    },
    es: {
      idle: "Elige llegada y salida para calcular precio y disponibilidad.",
      loading: "Calculando precio y comprobando fechas.",
      error: "La comprobación de precio no responde ahora. Inténtalo de nuevo en unos instantes.",
      backendNotConfigured: "El pago queda desactivado porque backend y calendario no están configurados.",
      noPricingRules: "El pago queda desactivado porque no hay una regla de precio activa para estas noches.",
      minNights: "La estancia seleccionada es demasiado corta. Mínimo requerido: {min} noches.",
      priceUnavailable: "Precio no disponible para estas fechas: elige otro periodo.",
      datesUnavailable: "Las fechas seleccionadas están ocupadas: el pago está bloqueado.",
      available: "Precio y disponibilidad confirmados: puedes continuar al pago.",
    },
    de: {
      idle: "Wählen Sie Check-in und Check-out, um Preis und Verfügbarkeit zu berechnen.",
      loading: "Preis wird berechnet und Daten werden geprüft.",
      error: "Die Preisprüfung antwortet derzeit nicht. Bitte versuchen Sie es gleich erneut.",
      backendNotConfigured: "Die Zahlung bleibt deaktiviert, da Backend und Kalender nicht konfiguriert sind.",
      noPricingRules: "Die Zahlung bleibt deaktiviert, da keine aktive Preisregel diese Nächte abdeckt.",
      minNights: "Der ausgewählte Aufenthalt ist zu kurz. Mindestaufenthalt: {min} Nächte.",
      priceUnavailable: "Preis für diese Daten nicht verfügbar: Wählen Sie einen anderen Zeitraum.",
      datesUnavailable: "Die ausgewählten Daten sind belegt: Die Zahlung ist blockiert.",
      available: "Preis und Verfügbarkeit bestätigt: Sie können mit der Zahlung fortfahren.",
    },
  };
  const t = messages[locale];

  if (state.status === "idle") {
    return t.idle;
  }

  if (state.status === "loading") {
    return t.loading;
  }

  if (state.status === "error") {
    return t.error;
  }

  if (state.status === "unavailable") {
    if (state.reason === "BACKEND_NOT_CONFIGURED") {
      return t.backendNotConfigured;
    }

    if (state.reason === "NO_PRICING_RULES") {
      return t.noPricingRules;
    }

    if (state.reason === "MIN_NIGHTS") {
      const min = state.minNightsRequired ? String(state.minNightsRequired) : "-";
      return t.minNights.replace("{min}", min);
    }

    return t.priceUnavailable;
  }

  if (state.status === "available") {
    if (!state.available) {
      return t.datesUnavailable;
    }

    return t.available;
  }

  return "";
}

export default function Booking({ content, initialToday }: Props) {
  const bookingViewTrackedRef = useRef(false);
  const pricingTrackedKeyRef = useRef<string | null>(null);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
  });
  const [selectionMessage, setSelectionMessage] = useState("");
  const [pricingEstimate, setPricingEstimate] = useState<PricingEstimateState>({ status: "idle" });
  const [today, setToday] = useState(initialToday);
  const [visibleMonth, setVisibleMonth] = useState(() => monthKey(initialToday));
  const [occupiedDates, setOccupiedDates] = useState<OccupiedDatesState>({
    status: "idle",
    ranges: [],
    configured: true,
  });

  const c = getCopy(content.locale);
  const formCopy = content.booking.form;
  const canProceed = pricingEstimate.status === "available" && pricingEstimate.available;

  // Restore the selection when guests return from the details step.
  useEffect(() => {
    // Hydrate using the server snapshot, then refresh a statically built page's date.
    const currentToday = todayString();
    setToday(currentToday);
    setVisibleMonth(monthKey(currentToday));
    const query = new URLSearchParams(window.location.search);
    const checkIn = query.get("checkIn") ?? "";
    const checkOut = query.get("checkOut") ?? "";
    const guests = Number(query.get("guests"));
    const validDate = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date)
      && !Number.isNaN(toDate(date).getTime()) && toDateString(toDate(date)) === date;
    if (validDate(checkIn) && validDate(checkOut) && checkIn >= todayString() && checkOut > checkIn
      && Number.isInteger(guests) && guests >= 1 && guests <= property.capacity.guests) {
      setFormData({ checkIn, checkOut, guests: String(guests) });
      setVisibleMonth(monthKey(checkIn));
    }
  }, []);

  useEffect(() => {
    // A tall calendar section may never reach 35% visibility on a phone.
    const bookingSection = document.querySelector("#booking h2");
    if (!bookingSection || bookingViewTrackedRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (bookingViewTrackedRef.current || !entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        bookingViewTrackedRef.current = true;
        trackAnalyticsEvent("view_booking_form", {
          language: content.locale,
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(bookingSection);
    return () => observer.disconnect();
  }, [content.locale]);

  const dateSummary = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut || formData.checkOut <= formData.checkIn) {
      return c.chooseDates;
    }

    return `${formData.checkIn} / ${formData.checkOut}`;
  }, [c.chooseDates, formData.checkIn, formData.checkOut]);

  useEffect(() => {
    const controller = new AbortController();
    const start = monthStart(visibleMonth);
    const end = monthEndExclusive(addMonths(visibleMonth, 2));

    setOccupiedDates((prev) => ({
      status: "loading",
      ranges: prev.ranges,
      configured: prev.configured,
    }));

    fetch(`/api/availability/occupied?start=${start}&end=${end}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result?.ok) {
          setOccupiedDates({
            status: "ready",
            ranges: Array.isArray(result.ranges) ? result.ranges : [],
            configured: result.configured !== false,
          });
          return;
        }

        setOccupiedDates({ status: "error", ranges: [], configured: true });
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setOccupiedDates({ status: "error", ranges: [], configured: true });
      });

    return () => controller.abort();
  }, [visibleMonth]);

  useEffect(() => {
    const guests = Number(formData.guests);
    if (
      !formData.checkIn ||
      !formData.checkOut ||
      formData.checkOut <= formData.checkIn ||
      !Number.isInteger(guests) ||
      guests < 1 ||
      guests > property.capacity.guests
    ) {
      setPricingEstimate({ status: "idle" });
      return;
    }

    const controller = new AbortController();
    setPricingEstimate({ status: "loading" });

    const timeout = window.setTimeout(() => {
      fetch("/api/pricing/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: content.locale,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests,
        }),
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result?.ok && result.priceAvailable === true) {
            if (result.available === true) {
              const trackingKey = [
                content.locale,
                formData.checkIn,
                formData.checkOut,
                guests,
                result.nights,
                result.totalCents,
              ].join(":");

              if (pricingTrackedKeyRef.current !== trackingKey) {
                pricingTrackedKeyRef.current = trackingKey;
                trackAnalyticsEvent("pricing_estimate", {
                  currency: result.currency,
                  value: result.totalCents / 100,
                  nights: result.nights,
                  guests,
                  language: content.locale,
                });
              }
            }

            setPricingEstimate({
              status: "available",
              available: result.available === true,
              nights: result.nights,
              totalCents: result.totalCents,
              currency: result.currency,
              breakdown: result.breakdown ?? {},
              disclaimer: result.disclaimer,
              lastSyncedAt: result.lastSyncedAt ?? null,
            });
            return;
          }

          setPricingEstimate({
            status: "unavailable",
            reason: result?.reason,
            nights: result?.nights,
            minNightsRequired: result?.minNightsRequired,
          });
        })
        .catch((error) => {
          if (error instanceof DOMException && error.name === "AbortError") {
            return;
          }

          setPricingEstimate({ status: "error" });
        });
    }, 250);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [content.locale, formData.checkIn, formData.checkOut, formData.guests]);

  const handleDateSelect = (date: string) => {
    if (isDateOccupied(date, occupiedDates.ranges) || date < todayString()) {
      return;
    }

    setSelectionMessage("");

    if (!formData.checkIn || (formData.checkIn && formData.checkOut) || date <= formData.checkIn) {
      setFormData((prev) => ({
        ...prev,
        checkIn: date,
        checkOut: "",
      }));
      setPricingEstimate({ status: "idle" });
      setVisibleMonth(monthKey(date));
      return;
    }

    if (rangeHasOccupiedNight(formData.checkIn, date, occupiedDates.ranges)) {
      setSelectionMessage(c.unavailable);
      setFormData((prev) => ({
        ...prev,
        checkOut: "",
      }));
      setPricingEstimate({ status: "idle" });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      checkOut: date,
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectionMessage("");
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleContinue = () => {
    if (!canProceed) {
      setSelectionMessage(c.priceUnavailable);
      return;
    }

    const query = new URLSearchParams({
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
    });
    trackEventAndRedirect("select_booking_dates", `/${content.locale}/booking?${query.toString()}`, {
      currency: "EUR", value: pricingEstimate.totalCents / 100, nights: pricingEstimate.nights,
      guests: Number(formData.guests), language: content.locale,
    });
  };

  return (
    <section id="booking" className="section-padding deferred-section scroll-mt-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="bg-brand-warm px-5 py-10 md:px-12 md:py-14">
          <div className="reveal mb-10 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
              {c.tagline}
            </span>
            <h2 className="text-4xl leading-tight md:text-5xl">{c.headline}</h2>
            <p className="mt-5 text-lg leading-8 text-gray-700 md:text-xl">{c.intro}</p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {c.steps.slice(0, 2).map((step, index) => (
              <div key={step.title} className={`reveal reveal-delay-${(index % 4) + 1} border-l border-brand-gold/30 bg-white/55 p-4`}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold">
                  0{index + 1}
                </p>
                <p className="mt-2 text-lg font-bold text-brand-slate">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="reveal reveal-scale bg-white p-5 shadow-2xl md:p-8">
              <DateRangeCalendar
                today={today}
                checkIn={formData.checkIn}
                checkOut={formData.checkOut}
                visibleMonth={visibleMonth}
                occupiedDates={occupiedDates}
                locale={content.locale}
                copy={c}
                onPreviousMonth={() => setVisibleMonth((month) => addMonths(month, -1))}
                onNextMonth={() => setVisibleMonth((month) => addMonths(month, 1))}
                onSelectDate={handleDateSelect}
              />

              <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1.2fr]">
                <Field label={formCopy.guests} htmlFor="booking-guests" icon={<Users size={16} />}>
                  <select
                    id="booking-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="booking-input"
                  >
                    {Array.from({ length: property.capacity.guests }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? formCopy.guestSingular : formCopy.guestPlural}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="rounded-md border border-brand-gold/20 bg-[#FDFCF8] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold">
                    {c.calendar.selectedDates}
                  </p>
                  <p className="mt-2 text-sm font-bold text-brand-slate">
                    {formData.checkIn ? formatDisplayDate(formData.checkIn, content.locale) : c.calendar.checkInToChoose}
                    <span className="mx-2 text-brand-gold">→</span>
                    {formData.checkOut ? formatDisplayDate(formData.checkOut, content.locale) : c.calendar.checkOutToChoose}
                  </p>
                  {formData.checkIn && formData.checkOut ? (
                    <p className="mt-1 text-xs font-semibold text-gray-600">
                      {formatNightsSelected(c, nightsBetween(formData.checkIn, formData.checkOut))}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs font-semibold text-gray-600">
                      {c.calendar.selectArrivalThenDeparture}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 border border-brand-gold/30 bg-brand-warm/60 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
                      {c.priceLabel}
                    </p>
                    {pricingEstimate.status === "available" ? (
                      <>
                        <p className="mt-2 text-4xl font-bold text-brand-slate">
                          {formatMoney(pricingEstimate.totalCents, content.locale)}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-gray-600">
                          {formatNights(c, pricingEstimate.nights)} · {dateSummary}
                        </p>
                        {typeof pricingEstimate.breakdown.averageNightlyRateCents === "number" ? (
                          <p className="mt-3 text-base font-bold text-brand-slate">
                            {c.calendar.averageNightlyRate}: {formatMoney(pricingEstimate.breakdown.averageNightlyRateCents, content.locale)}
                          </p>
                        ) : null}
                      </>
                    ) : pricingEstimate.status === "loading" ? (
                      <p className="mt-2 text-lg font-bold text-brand-slate">{c.loadingPrice}</p>
                    ) : (
                      <p className="mt-2 text-lg font-bold text-brand-slate">{c.chooseDates}</p>
                    )}
                  </div>

                  <AvailabilityBadge state={pricingEstimate} copy={c} />
                </div>

                <p
                  id="booking-payment-status"
                  className={`mt-4 rounded-md border px-3 py-2 text-sm font-bold ${
                    pricingEstimate.status === "available" && pricingEstimate.available
                      ? "border-green-200 bg-green-50 text-green-800"
                      : pricingEstimate.status === "loading"
                        ? "border-brand-gold/25 bg-white text-brand-slate"
                        : "border-amber-200 bg-amber-50 text-amber-900"
                  }`}
                  role="status"
                >
                  {getPricingStatusMessage(pricingEstimate, content.locale)}
                </p>

                {pricingEstimate.status === "available" ? (
                  <div className="mt-4 grid gap-2 text-sm font-semibold text-gray-700 sm:grid-cols-2">
                    {typeof pricingEstimate.breakdown.cleaningFeeCents === "number" ? (
                      <p>{c.calendar.cleaning} {formatMoney(pricingEstimate.breakdown.cleaningFeeCents, content.locale)}</p>
                    ) : null}
                    {typeof pricingEstimate.breakdown.touristTaxCents === "number" ? (
                      <p>{c.calendar.touristTax} {formatMoney(pricingEstimate.breakdown.touristTaxCents, content.locale)}</p>
                    ) : null}
                    {typeof pricingEstimate.breakdown.discountCents === "number" &&
                    pricingEstimate.breakdown.discountCents > 0 ? (
                      <p className="text-green-700">
                        {c.calendar.directDiscount} -{formatMoney(pricingEstimate.breakdown.discountCents, content.locale)}
                      </p>
                    ) : null}
                    <p>{c.totalNote}</p>
                    <p>{c.directSaving}</p>
                  </div>
                ) : null}

                {pricingEstimate.status === "available" && !pricingEstimate.available ? (
                  <p className="mt-3 flex items-start gap-2 text-sm font-bold text-red-700" role="status">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    {c.unavailableHelp}
                  </p>
                ) : null}
              </div>

              <CancellationSummary locale={content.locale} checkIn={formData.checkIn} />
              <div className="mt-7">
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!canProceed}
                  aria-describedby="booking-payment-status"
                  className="flex min-h-12 w-full items-center justify-center gap-3 bg-brand-slate px-5 py-4 text-base font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold hover:text-brand-slate disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {c.proceed}
                  <ArrowRight size={18} />
                </button>

                {selectionMessage ? (
                  <p
                    className="mt-3 text-center text-sm font-bold text-brand-slate"
                    role="alert"
                  >
                    {selectionMessage}
                  </p>
                ) : null}

                <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                  {c.microtrust.join(" · ")}
                </p>
              </div>

            </div>

            <aside className="reveal reveal-delay-1 space-y-6">
              <div>
                <h3 className="text-3xl font-serif text-brand-slate">{c.infoTitle}</h3>
                <p className="mt-4 text-lg leading-8 text-gray-700">{c.infoText}</p>
              </div>
              <ul className="space-y-4">
                {c.infoBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-1 shrink-0 text-brand-gold" />
                    <span className="text-base leading-7 text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 border-t border-brand-gold/25 pt-5 text-brand-slate sm:flex-row">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-brand-gold" size={20} />
                  <span className="font-semibold">{c.available}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-brand-gold" size={20} />
                  <span className="font-semibold">
                    {property.capacity.guests} {content.apartment.amenityLabels.guests}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function DateRangeCalendar({
  today,
  checkIn,
  checkOut,
  visibleMonth,
  occupiedDates,
  locale,
  copy,
  onPreviousMonth,
  onNextMonth,
  onSelectDate,
}: {
  today: string;
  checkIn: string;
  checkOut: string;
  visibleMonth: string;
  occupiedDates: OccupiedDatesState;
  locale: Locale;
  copy: FlowCopy;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onSelectDate: (date: string) => void;
}) {
  const months = [visibleMonth, addMonths(visibleMonth, 1)];
  const selectionReady = Boolean(checkIn && checkOut);

  return (
    <div className="rounded-lg border border-brand-gold/25 bg-[#FDFCF8] p-4 shadow-sm md:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-brand-gold">
            <CalendarDays size={16} />
            {copy.calendar.title}
          </p>
          <p className="mt-2 text-sm font-semibold text-gray-700">
            {copy.calendar.help}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPreviousMonth}
            aria-label={copy.calendar.previousMonth}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-gold/25 bg-white text-brand-slate transition hover:bg-brand-warm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={onNextMonth}
            aria-label={copy.calendar.nextMonth}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-gold/25 bg-white text-brand-slate transition hover:bg-brand-warm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mb-4 grid gap-2 text-xs font-bold text-gray-600 sm:grid-cols-3">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-brand-gold bg-white" />
          {copy.calendar.availableLegend}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-brand-slate" />
          {copy.calendar.selectedLegend}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-red-200 bg-red-50" />
          {copy.calendar.occupiedLegend}
        </span>
      </div>

      {occupiedDates.status === "loading" ? (
        <p className="mb-3 text-xs font-semibold text-brand-slate/60">{copy.calendar.loadingAvailability}</p>
      ) : null}
      {occupiedDates.status === "error" ? (
        <p className="mb-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900">
          {copy.calendar.availabilityError}
        </p>
      ) : null}
      {!occupiedDates.configured ? (
        <p className="mb-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900">
          {copy.calendar.calendarNotConfigured}
        </p>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        {months.map((month) => (
          <div key={month} className={month === visibleMonth ? "" : "hidden md:block"}>
            <MonthCalendar
              month={month}
              today={today}
              checkIn={checkIn}
              checkOut={checkOut}
              ranges={occupiedDates.ranges}
              selectionReady={selectionReady}
              locale={locale}
              copy={copy}
              onSelectDate={onSelectDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthCalendar({
  month,
  today,
  checkIn,
  checkOut,
  ranges,
  selectionReady,
  locale,
  copy,
  onSelectDate,
}: {
  month: string;
  today: string;
  checkIn: string;
  checkOut: string;
  ranges: OccupiedRange[];
  selectionReady: boolean;
  locale: Locale;
  copy: FlowCopy;
  onSelectDate: (date: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-3 text-base font-bold text-brand-slate">{formatMonthLabel(month, locale)}</h4>
      <div className="grid grid-cols-7 gap-1.5 touch-manipulation">
        {copy.calendar.weekdays.map((weekday, index) => (
          <div key={`${weekday}-${index}`} className="h-8 text-center text-[11px] font-black uppercase text-brand-gold">
            {weekday}
          </div>
        ))}
        {getCalendarDays(month).map(({ date, inMonth }) => {
          const occupied = isDateOccupied(date, ranges);
          const past = date < today;
          const selectedStart = date === checkIn;
          const selectedEnd = date === checkOut;
          const inSelectedRange = Boolean(checkIn && checkOut && date > checkIn && date < checkOut);
          const selectingCheckout = Boolean(checkIn && !checkOut && date > checkIn);
          const invalidCheckout =
            selectingCheckout &&
            rangeHasOccupiedNight(checkIn, date, ranges);
          const disabled = !inMonth || past || invalidCheckout || (occupied && !selectingCheckout);

          return (
            <button
              key={date}
              type="button"
              onClick={() => onSelectDate(date)}
              disabled={disabled}
              aria-label={`${formatDisplayDate(date, locale)}${occupied ? ` ${copy.calendar.occupiedLegend.toLowerCase()}` : ""}`}
              className={`relative flex h-12 min-w-0 items-center justify-center rounded-md border text-sm font-bold transition touch-manipulation ${
                selectedStart || selectedEnd
                  ? "border-brand-slate bg-brand-slate text-white shadow-sm"
                  : inSelectedRange
                    ? "border-brand-gold/30 bg-brand-gold/15 text-brand-slate"
                    : occupied
                      ? "border-red-200 bg-red-50 text-red-500 line-through"
                      : invalidCheckout
                        ? "border-amber-200 bg-amber-50 text-amber-600 line-through"
                        : inMonth && !past
                          ? "border-brand-gold/15 bg-white text-brand-slate hover:border-brand-gold hover:bg-brand-warm"
                          : "border-transparent bg-transparent text-gray-300"
              } disabled:cursor-not-allowed disabled:opacity-70`}
            >
              <span>{date.slice(8, 10)}</span>
              {occupied ? (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-red-500" />
              ) : null}
              {selectionReady && (selectedStart || selectedEnd) ? (
                <span className="sr-only">{selectedStart ? " check-in" : " check-out"}</span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gray-500">
        {icon ? <span className="text-brand-gold">{icon}</span> : null}
        {label}
      </label>
      {children}
    </div>
  );
}

function AvailabilityBadge({ state, copy }: { state: PricingEstimateState; copy: FlowCopy }) {
  if (state.status === "available") {
    return (
      <span
        className={`inline-flex min-h-11 items-center gap-2 self-start rounded-md border px-3 py-2 text-sm font-black uppercase tracking-wider ${
          state.available
            ? "border-green-300 bg-green-100 text-green-800"
            : "border-red-300 bg-red-100 text-red-800"
        }`}
      >
        {state.available ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
        {state.available ? copy.available : copy.unavailable}
      </span>
    );
  }

  if (state.status === "loading") {
    return (
      <span className="inline-flex min-h-11 items-center rounded-md border border-brand-gold/30 bg-white px-3 py-2 text-sm font-bold text-brand-slate">
        {copy.loadingPrice}
      </span>
    );
  }

  return null;
}
