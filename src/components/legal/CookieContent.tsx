import type { Locale } from "../../i18n/config";
import type { SiteContent } from "../../content/types";
import CookiePreferencesButton from "../CookiePreferencesButton";
import LegalPageLayout from "../LegalPageLayout";

type Props = { locale: Locale; content: SiteContent };
type Section = { title: string; paragraphs?: string[]; items?: string[] };

const preferenceLabels: Record<Locale, string> = {
  it: "Modifica preferenze cookie",
  en: "Change cookie preferences",
  fr: "Modifier les préférences cookies",
  es: "Cambiar preferencias de cookies",
  de: "Cookie-Einstellungen ändern",
};

const cookieCopy: Record<Locale, Section[]> = {
  it: [
    {
      title: "Cookie e strumenti simili",
      paragraphs: [
        "Il sito usa cookie tecnici necessari al funzionamento, alla sicurezza e all'area admin. Questi strumenti non vengono bloccati dal banner perché sono necessari per fornire il servizio.",
      ],
    },
    {
      title: "Google Analytics 4",
      paragraphs: [
        "Il sito usa Google Analytics 4 per finalità statistiche aggregate, solo dopo consenso tramite banner cookie.",
        "Il tag GA4 viene inizializzato con Google Consent Mode v2 e consenso analytics negato di default. Se l'utente accetta le statistiche, analytics_storage viene aggiornato a granted.",
      ],
      items: [
        "ad_storage resta denied;",
        "ad_user_data resta denied;",
        "ad_personalization resta denied;",
        "non usiamo Google Ads sul sito;",
        "non usiamo Meta Pixel o strumenti di remarketing.",
      ],
    },
    {
      title: "Gestione del consenso",
      paragraphs: [
        "Il banner permette di accettare, rifiutare o aprire le preferenze. La scelta viene salvata in modo persistente nel browser e può essere modificata dal pulsante preferenze cookie.",
        "Con consenso negato o non ancora espresso, il sito non invia eventi analytics a GA4.",
      ],
    },
    {
      title: "Dati personali",
      paragraphs: [
        "Domus Juliae non invia intenzionalmente a GA4 nome, email, telefono, messaggi, dati carta, note interne o identificativi Stripe completi.",
      ],
    },
    {
      title: "Servizi esterni",
      items: [
        "Vercel ospita e pubblica il sito;",
        "Supabase gestisce database, richieste, calendario e area admin;",
        "Resend invia email transazionali e operative;",
        "Stripe gestisce Checkout e pagamenti su dominio esterno; Domus Juliae non conserva dati carta;",
        "WhatsApp, email e mappe sono link esterni e applicano le rispettive policy.",
      ],
    },
    {
      title: "Nota",
      paragraphs: [
        "Questa informativa descrive lo stato tecnico attuale del sito e non sostituisce consulenza legale professionale.",
      ],
    },
  ],
  en: [
    {
      title: "Cookies and similar tools",
      paragraphs: [
        "The website uses necessary technical cookies for operation, security and the admin area. These tools are not blocked by the banner because they are needed to provide the service.",
      ],
    },
    {
      title: "Google Analytics 4",
      paragraphs: [
        "The website uses Google Analytics 4 for aggregate statistics only after consent through the cookie banner.",
        "The GA4 tag is initialized with Google Consent Mode v2 and analytics consent denied by default. If the user accepts statistics, analytics_storage is updated to granted.",
      ],
      items: [
        "ad_storage remains denied;",
        "ad_user_data remains denied;",
        "ad_personalization remains denied;",
        "we do not use Google Ads on the website;",
        "we do not use Meta Pixel or remarketing tools.",
      ],
    },
    {
      title: "Consent management",
      paragraphs: [
        "The banner lets users accept, reject or open preferences. The choice is stored persistently in the browser and can be changed through the cookie preferences button.",
        "With denied consent or before any choice is made, the website does not send analytics events to GA4.",
      ],
    },
    {
      title: "Personal data",
      paragraphs: [
        "Domus Juliae does not intentionally send GA4 names, emails, phone numbers, messages, card data, internal notes or full Stripe identifiers.",
      ],
    },
    {
      title: "External services",
      items: [
        "Vercel hosts and deploys the website;",
        "Supabase manages database, requests, calendar and admin area;",
        "Resend sends transactional and operational emails;",
        "Stripe manages Checkout and payments on an external domain; Domus Juliae does not store card data;",
        "WhatsApp, email and map links are external and apply their own policies.",
      ],
    },
    {
      title: "Note",
      paragraphs: [
        "This notice describes the current technical state of the website and does not replace professional legal advice.",
      ],
    },
  ],
  fr: [
    {
      title: "Cookies et outils similaires",
      paragraphs: [
        "Le site utilise les cookies techniques nécessaires au fonctionnement, à la sécurité et à l'espace admin. Ils ne sont pas bloqués par la bannière car ils sont nécessaires au service.",
      ],
    },
    {
      title: "Google Analytics 4",
      paragraphs: [
        "Le site utilise Google Analytics 4 à des fins statistiques agrégées uniquement après consentement via la bannière cookies.",
        "Le tag GA4 est initialisé avec Google Consent Mode v2 et le consentement analytics est refusé par défaut. Si l'utilisateur accepte les statistiques, analytics_storage passe à granted.",
      ],
      items: [
        "ad_storage reste denied;",
        "ad_user_data reste denied;",
        "ad_personalization reste denied;",
        "nous n'utilisons pas Google Ads sur le site;",
        "nous n'utilisons pas Meta Pixel ni remarketing.",
      ],
    },
    {
      title: "Gestion du consentement",
      paragraphs: [
        "La bannière permet d'accepter, de refuser ou d'ouvrir les préférences. Le choix est enregistré dans le navigateur et peut être modifié avec le bouton préférences cookies.",
        "Avec un consentement refusé ou non encore exprimé, le site n'envoie pas d'événements analytics à GA4.",
      ],
    },
    {
      title: "Données personnelles",
      paragraphs: [
        "Domus Juliae n'envoie pas volontairement à GA4 les noms, emails, téléphones, messages, données de carte, notes internes ou identifiants Stripe complets.",
      ],
    },
    {
      title: "Services externes",
      items: [
        "Vercel héberge et publie le site;",
        "Supabase gère la base de données, les demandes, le calendrier et l'espace admin;",
        "Resend envoie les emails transactionnels et opérationnels;",
        "Stripe gère Checkout et les paiements sur un domaine externe; Domus Juliae ne conserve pas les données de carte;",
        "WhatsApp, email et liens de cartes sont externes et appliquent leurs propres politiques.",
      ],
    },
    {
      title: "Note",
      paragraphs: [
        "Cette notice décrit l'état technique actuel du site et ne remplace pas un conseil juridique professionnel.",
      ],
    },
  ],
  es: [
    {
      title: "Cookies y herramientas similares",
      paragraphs: [
        "El sitio usa cookies técnicos necesarios para funcionamiento, seguridad y área admin. Estos instrumentos no se bloquean con el banner porque son necesarios para prestar el servicio.",
      ],
    },
    {
      title: "Google Analytics 4",
      paragraphs: [
        "El sitio usa Google Analytics 4 con fines estadísticos agregados solo después del consentimiento mediante el banner de cookies.",
        "La etiqueta GA4 se inicializa con Google Consent Mode v2 y consentimiento analytics denegado por defecto. Si el usuario acepta estadísticas, analytics_storage se actualiza a granted.",
      ],
      items: [
        "ad_storage permanece denied;",
        "ad_user_data permanece denied;",
        "ad_personalization permanece denied;",
        "no usamos Google Ads en el sitio;",
        "no usamos Meta Pixel ni herramientas de remarketing.",
      ],
    },
    {
      title: "Gestión del consentimiento",
      paragraphs: [
        "El banner permite aceptar, rechazar o abrir preferencias. La elección se guarda de forma persistente en el navegador y puede cambiarse con el botón de preferencias de cookies.",
        "Con consentimiento denegado o sin elección previa, el sitio no envía eventos analytics a GA4.",
      ],
    },
    {
      title: "Datos personales",
      paragraphs: [
        "Domus Juliae no envía intencionadamente a GA4 nombres, emails, teléfonos, mensajes, datos de tarjeta, notas internas ni identificadores Stripe completos.",
      ],
    },
    {
      title: "Servicios externos",
      items: [
        "Vercel aloja y publica el sitio;",
        "Supabase gestiona base de datos, solicitudes, calendario y área admin;",
        "Resend envía emails transaccionales y operativos;",
        "Stripe gestiona Checkout y pagos en dominio externo; Domus Juliae no conserva datos de tarjeta;",
        "WhatsApp, email y enlaces de mapas son externos y aplican sus propias políticas.",
      ],
    },
    {
      title: "Nota",
      paragraphs: [
        "Este aviso describe el estado técnico actual del sitio y no sustituye asesoramiento legal profesional.",
      ],
    },
  ],
  de: [
    {
      title: "Cookies und ähnliche Tools",
      paragraphs: [
        "Die Website verwendet notwendige technische Cookies für Betrieb, Sicherheit und Admin-Bereich. Diese Tools werden nicht durch das Banner blockiert, da sie für den Service erforderlich sind.",
      ],
    },
    {
      title: "Google Analytics 4",
      paragraphs: [
        "Die Website verwendet Google Analytics 4 für aggregierte Statistiken nur nach Einwilligung über das Cookie-Banner.",
        "Der GA4-Tag wird mit Google Consent Mode v2 initialisiert und Analytics-Einwilligung ist standardmäßig denied. Wenn Statistik akzeptiert wird, wird analytics_storage auf granted aktualisiert.",
      ],
      items: [
        "ad_storage bleibt denied;",
        "ad_user_data bleibt denied;",
        "ad_personalization bleibt denied;",
        "wir verwenden auf der Website kein Google Ads;",
        "wir verwenden kein Meta Pixel und kein Remarketing.",
      ],
    },
    {
      title: "Einwilligungsverwaltung",
      paragraphs: [
        "Das Banner erlaubt Akzeptieren, Ablehnen oder Öffnen der Einstellungen. Die Wahl wird dauerhaft im Browser gespeichert und kann über den Cookie-Einstellungen-Button geändert werden.",
        "Bei abgelehnter oder noch nicht erteilter Einwilligung sendet die Website keine Analytics-Ereignisse an GA4.",
      ],
    },
    {
      title: "Personenbezogene Daten",
      paragraphs: [
        "Domus Juliae sendet GA4 nicht absichtlich Namen, E-Mails, Telefonnummern, Nachrichten, Kartendaten, interne Notizen oder vollständige Stripe-IDs.",
      ],
    },
    {
      title: "Externe Dienste",
      items: [
        "Vercel hostet und veröffentlicht die Website;",
        "Supabase verwaltet Datenbank, Anfragen, Kalender und Admin-Bereich;",
        "Resend versendet transaktionale und operative E-Mails;",
        "Stripe verwaltet Checkout und Zahlungen auf einer externen Domain; Domus Juliae speichert keine Kartendaten;",
        "WhatsApp, E-Mail und Kartenlinks sind extern und verwenden eigene Richtlinien.",
      ],
    },
    {
      title: "Hinweis",
      paragraphs: [
        "Dieser Hinweis beschreibt den aktuellen technischen Zustand der Website und ersetzt keine professionelle Rechtsberatung.",
      ],
    },
  ],
};

function renderSections(sections: Section[]) {
  return sections.map((section) => (
    <section key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.items ? (
        <ul>
          {section.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}
    </section>
  ));
}

export default function CookieContent({ locale, content }: Props) {
  const l = content.legal.cookie;
  const sections = cookieCopy[locale] ?? cookieCopy.it;

  return (
    <LegalPageLayout title={l.title} subtitle={l.subtitle} lastUpdated={l.lastUpdated} locale={locale} content={content}>
      {renderSections(sections)}
      <p>
        <CookiePreferencesButton
          label={preferenceLabels[locale]}
          className="inline-flex min-h-11 items-center border border-brand-slate px-5 py-3 text-sm font-bold uppercase tracking-widest text-brand-slate transition-colors hover:bg-brand-slate hover:text-white"
        />
      </p>
    </LegalPageLayout>
  );
}
