import type { Locale } from "../i18n/config";

export const bookingSupport: Record<Locale, {
  cleaning: string; discount: string; help: string; conditions: string; terms: string; priceError: string;
}> = {
  it: {
    cleaning: "Pulizia", discount: "Sconto diretto", help: "Hai una domanda prima di pagare?",
    conditions: "Per chiarimenti su arrivo, cancellazione o rimborso, leggi le condizioni e contatta Demo host prima di procedere.",
    terms: "Leggi le condizioni", priceError: "Non riusciamo a verificare il prezzo adesso. Riprova o contatta Demo host.",
  },
  en: {
    cleaning: "Cleaning", discount: "Direct discount", help: "Have a question before paying?",
    conditions: "For questions about arrival, cancellation or refunds, read the terms and contact Demo host before proceeding.",
    terms: "Read the terms", priceError: "We cannot verify the price right now. Please try again or contact Demo host.",
  },
  fr: {
    cleaning: "Ménage", discount: "Réduction directe", help: "Une question avant de payer ?",
    conditions: "Pour toute question sur l'arrivée, l'annulation ou le remboursement, consultez les conditions et contactez Demo host avant de continuer.",
    terms: "Lire les conditions", priceError: "Impossible de vérifier le prix pour le moment. Réessayez ou contactez Demo host.",
  },
  es: {
    cleaning: "Limpieza", discount: "Descuento directo", help: "¿Tienes una pregunta antes de pagar?",
    conditions: "Para dudas sobre llegada, cancelación o reembolsos, lee las condiciones y contacta con Demo host antes de continuar.",
    terms: "Lee las condiciones", priceError: "No podemos comprobar el precio ahora. Inténtalo de nuevo o contacta con Demo host.",
  },
  de: {
    cleaning: "Reinigung", discount: "Direktrabatt", help: "Haben Sie vor der Zahlung eine Frage?",
    conditions: "Bei Fragen zu Anreise, Stornierung oder Erstattung lesen Sie die Bedingungen und kontaktieren Sie Demo host, bevor Sie fortfahren.",
    terms: "Bedingungen lesen", priceError: "Der Preis kann derzeit nicht geprüft werden. Versuchen Sie es erneut oder kontaktieren Sie Demo host.",
  },
};
