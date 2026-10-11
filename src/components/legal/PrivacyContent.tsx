import type { Locale } from "../../i18n/config";
import type { SiteContent } from "../../content/types";
import LegalPageLayout from "../LegalPageLayout";

type Props = { locale: Locale; content: SiteContent };
type Section = { title: string; paragraphs?: string[]; items?: string[] };

const privacyCopy: Record<Locale, Section[]> = {
  it: [
    {
      title: "Titolare del trattamento",
      paragraphs: [
        "Il titolare del trattamento è Via Veneto - Domus Juliae, gestito dall'host Demo host, Demo address, 00187 Roma (RM), Italia. CIN: DEMO-PROPERTY. Email privacy: hello@example.com.",
      ],
    },
    {
      title: "Dati raccolti",
      paragraphs: ["Attraverso il sito e la dashboard admin possono essere trattati dati forniti dall'ospite e dati tecnici limitati."],
      items: [
        "nome, email, telefono, date richieste, numero ospiti e messaggio;",
        "lingua, pagina origine, stato richiesta e note operative interne;",
        "dati tecnici limitati come user agent e ip_hash per sicurezza e prevenzione abusi;",
        "storico email, subject, corpo comunicazioni e stato di invio;",
        "prezzo stimato/confermato, stato pagamento e dati Stripe non sensibili come checkout session id, payment status e payment intent id.",
      ],
    },
    {
      title: "Finalità",
      items: [
        "gestire prenotazioni dirette, disponibilità, richieste e comunicazioni con l'ospite;",
        "calcolare prezzi, salvare richieste e inviare comunicazioni automatiche o manuali;",
        "gestire pagamenti tramite Stripe Checkout e aggiornare lo stato pagamento;",
        "creare blocchi calendario interni dopo pagamento e supportare import/export iCal;",
        "proteggere il sito, prevenire abusi e mantenere una gestione amministrativa interna.",
      ],
    },
    {
      title: "Servizi e fornitori",
      paragraphs: ["Il sito usa fornitori tecnici necessari al funzionamento del servizio."],
      items: [
        "Vercel per hosting e pubblicazione del sito;",
        "Supabase per database, richieste, storico email, stati pagamento e dashboard admin;",
        "Resend per l'invio delle email transazionali e operative;",
        "Stripe per Checkout, pagamento e webhook. Domus Juliae non conserva dati della carta;",
        "Google Analytics 4 per statistiche aggregate, solo dopo consenso tramite banner cookie;",
        "link esterni WhatsApp/email, che aprono servizi gestiti dai rispettivi provider.",
      ],
    },
    {
      title: "Statistiche con Google Analytics 4",
      paragraphs: [
        "Google Analytics 4 viene usato per misurare traffico, interazioni essenziali e conversioni del sito solo se l'utente accetta le statistiche dal banner cookie.",
        "Il sito non invia intenzionalmente a GA4 nome, email, telefono, messaggio ospite, dati carta, note interne o identificativi Stripe completi. Gli eventi configurati usano parametri tecnici non personali come lingua, ospiti, notti, valuta e valore.",
      ],
    },
    {
      title: "Pagamenti e calendario",
      paragraphs: [
        "I dati della carta sono gestiti da Stripe e non vengono salvati da Domus Juliae. Il sito riceve solo dati non sensibili utili a riconciliare checkout, stato pagamento e ricevuta.",
        "Dopo pagamento riuscito il sistema può creare un blocco calendario interno e inviare email transazionali a ospite e host.",
      ],
    },
    {
      title: "Base giuridica",
      items: [
        "misure precontrattuali o contrattuali per richieste, preventivi e pagamenti;",
        "legittimo interesse per sicurezza, log tecnici limitati, prevenzione abusi e tutela amministrativa;",
        "obblighi legali, fiscali o amministrativi se applicabili.",
      ],
    },
    {
      title: "Accesso e conservazione",
      paragraphs: [
        "I dati sono accessibili solo all'admin/host autorizzato. Richieste, comunicazioni e stati operativi sono conservati per il tempo necessario alla gestione della richiesta, alla tutela amministrativa e agli obblighi applicabili.",
        "I dati tecnici sono limitati. L'ospite può chiedere cancellazione o aggiornamento dei dati, compatibilmente con eventuali obblighi legali o necessità di tutela.",
      ],
    },
    {
      title: "Diritti dell'utente",
      paragraphs: ["L'utente può esercitare i diritti previsti dal GDPR contattando hello@example.com."],
      items: ["accesso", "rettifica", "cancellazione", "limitazione", "opposizione", "reclamo all'autorità competente"],
    },
    {
      title: "Nota",
      paragraphs: ["Questa informativa è redatta in buona fede per descrivere lo stato attuale del sito. Non sostituisce una consulenza legale professionale."],
    },
  ],
  en: [
    {
      title: "Data controller",
      paragraphs: [
        "The data controller is Via Veneto - Domus Juliae, managed by host Demo host, Demo address, 00187 Rome (RM), Italy. CIN: DEMO-PROPERTY. Privacy email: hello@example.com.",
      ],
    },
    {
      title: "Data collected",
      paragraphs: ["The website and admin dashboard may process guest-provided data and limited technical data."],
      items: [
        "name, email, phone, requested dates, number of guests and message;",
        "language, source page, request status and internal operational notes;",
        "limited technical data such as user agent and ip_hash for security and abuse prevention;",
        "email history, subject, message body and sending status;",
        "estimated/confirmed price, payment status and non-sensitive Stripe data such as checkout session id, payment status and payment intent id.",
      ],
    },
    {
      title: "Purposes",
      items: [
        "managing direct bookings, availability, requests and guest communications;",
        "calculating prices, saving requests and sending automatic or manual communications;",
        "managing payments through Stripe Checkout and updating payment status;",
        "creating internal calendar blocks after payment and supporting iCal import/export;",
        "protecting the website, preventing abuse and supporting internal administration.",
      ],
    },
    {
      title: "Services and providers",
      items: [
        "Vercel for hosting and website deployment;",
        "Supabase for database, requests, email history, payment states and admin dashboard;",
        "Resend for transactional and operational emails;",
        "Stripe for Checkout, payment and webhook processing. Domus Juliae does not store card data;",
        "Google Analytics 4 for aggregate statistics, only after consent through the cookie banner;",
        "external WhatsApp/email links, handled by their respective providers.",
      ],
    },
    {
      title: "Statistics with Google Analytics 4",
      paragraphs: [
        "Google Analytics 4 is used to measure traffic, essential interactions and website conversions only if the user accepts statistics in the cookie banner.",
        "The website does not intentionally send GA4 names, emails, phone numbers, guest messages, card data, internal notes or full Stripe identifiers. Configured events use non-personal technical parameters such as language, guests, nights, currency and value.",
      ],
    },
    {
      title: "Payments and calendar",
      paragraphs: [
        "Card data is handled by Stripe and is not stored by Domus Juliae. The site only receives non-sensitive data needed to reconcile checkout, payment status and receipt.",
        "After successful payment, the system may create an internal calendar block and send transactional emails to guest and host.",
      ],
    },
    {
      title: "Legal basis",
      items: [
        "pre-contractual or contractual steps for requests, quotes and payments;",
        "legitimate interest for security, limited technical logs, abuse prevention and administrative protection;",
        "legal, tax or administrative obligations where applicable.",
      ],
    },
    {
      title: "Access and retention",
      paragraphs: [
        "Data is accessible only to the authorised admin/host. Requests, communications and operational states are retained for the time needed to handle the request, protect administrative interests and comply with applicable obligations.",
        "Technical data is limited. Guests may request deletion or updates, subject to legal obligations or legitimate protection needs.",
      ],
    },
    {
      title: "User rights",
      paragraphs: ["Users may exercise GDPR rights by contacting hello@example.com."],
      items: ["access", "rectification", "erasure", "restriction", "objection", "complaint to the competent authority"],
    },
    {
      title: "Note",
      paragraphs: ["This notice is drafted in good faith to describe the current state of the website. It does not replace professional legal advice."],
    },
  ],
  fr: [
    {
      title: "Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement est Via Veneto - Domus Juliae, géré par l'hôte Demo host, Demo address, 00187 Rome (RM), Italie. CIN : DEMO-PROPERTY. Email : hello@example.com.",
      ],
    },
    {
      title: "Données collectées",
      items: [
        "nom, email, téléphone, dates demandées, nombre de voyageurs et message;",
        "langue, page d'origine, statut de la demande et notes internes;",
        "données techniques limitées comme user agent et ip_hash;",
        "historique des emails, état d'envoi et communications;",
        "prix estimé/confirmé, statut de paiement et données Stripe non sensibles comme checkout session id, payment status et payment intent id.",
      ],
    },
    {
      title: "Finalités",
      items: [
        "gérer les réservations directes, la disponibilité et les communications avec le voyageur;",
        "calculer les prix, enregistrer les réservations et envoyer des communications transactionnelles;",
        "gérer les paiements via Stripe Checkout et mettre à jour le statut de paiement;",
        "sécurité, prévention des abus et gestion administrative interne.",
      ],
    },
    {
      title: "Services et fournisseurs",
      items: [
        "Vercel pour l'hébergement;",
        "Supabase pour la base de données, les demandes, l'historique email, les états de paiement et le dashboard admin;",
        "Resend pour les emails transactionnels;",
        "Stripe pour Checkout, paiements et webhook. Domus Juliae ne conserve pas les données de carte;",
        "Google Analytics 4 pour des statistiques agrégées, uniquement après consentement via la bannière cookies;",
        "liens externes WhatsApp/email soumis aux fournisseurs respectifs.",
      ],
    },
    {
      title: "Statistiques avec Google Analytics 4",
      paragraphs: [
        "Google Analytics 4 est utilisé pour mesurer le trafic, les interactions essentielles et les conversions du site uniquement si l'utilisateur accepte les statistiques dans la bannière cookies.",
        "Le site n'envoie pas volontairement à GA4 les noms, emails, téléphones, messages voyageurs, données de carte, notes internes ou identifiants Stripe complets. Les événements utilisent des paramètres techniques non personnels comme langue, voyageurs, nuits, devise et valeur.",
      ],
    },
    {
      title: "Paiement et calendrier",
      paragraphs: [
        "Les données de carte sont gérées par Stripe et ne sont pas enregistrées par Domus Juliae. Le site reçoit uniquement les données non sensibles nécessaires au rapprochement du checkout, du statut de paiement et du reçu.",
        "Après paiement réussi, le système peut créer un blocage dans le calendrier interne et envoyer des e-mails transactionnels au voyageur et à l'hôte.",
      ],
    },
    {
      title: "Base juridique, conservation et droits",
      paragraphs: [
        "Le traitement repose sur les mesures précontractuelles/contractuelles, l'intérêt légitime pour la sécurité et les obligations légales applicables.",
        "Les données sont accessibles uniquement à l'admin/hôte autorisé et conservées le temps nécessaire à la gestion et à la protection administrative.",
      ],
      items: ["accès", "rectification", "effacement", "limitation", "opposition", "contact : hello@example.com"],
    },
    {
      title: "Note",
      paragraphs: ["Cette notice est rédigée de bonne foi et ne remplace pas un conseil juridique professionnel."],
    },
  ],
  es: [
    {
      title: "Responsable del tratamiento",
      paragraphs: [
        "El responsable es Via Veneto - Domus Juliae, gestionado por el anfitrión Demo host, Demo address, 00187 Roma (RM), Italia. CIN: DEMO-PROPERTY. Email: hello@example.com.",
      ],
    },
    {
      title: "Datos recogidos",
      items: [
        "nombre, email, teléfono, fechas solicitadas, número de huéspedes y mensaje;",
        "idioma, página de origen, estado de solicitud y notas internas;",
        "datos técnicos limitados como user agent e ip_hash;",
        "historial de emails, estado de envío y comunicaciones;",
        "precio estimado/confirmado, estado de pago y datos Stripe no sensibles como checkout session id, payment status y payment intent id.",
      ],
    },
    {
      title: "Finalidades",
      items: [
        "gestionar reservas directas, disponibilidad y comunicaciones con el huésped;",
        "calcular precios, guardar reservas y enviar comunicaciones transaccionales;",
        "gestionar pagos mediante Stripe Checkout y actualizar el estado de pago;",
        "seguridad, prevención de abusos y administración interna.",
      ],
    },
    {
      title: "Servicios y proveedores",
      items: [
        "Vercel para hosting;",
        "Supabase para base de datos, solicitudes, historial email, estados de pago y dashboard admin;",
        "Resend para emails transaccionales;",
        "Stripe para Checkout, pagos y webhook. Domus Juliae no conserva datos de tarjeta;",
        "Google Analytics 4 para estadísticas agregadas, solo después del consentimiento mediante el banner de cookies;",
        "enlaces externos WhatsApp/email gestionados por sus proveedores.",
      ],
    },
    {
      title: "Estadísticas con Google Analytics 4",
      paragraphs: [
        "Google Analytics 4 se usa para medir tráfico, interacciones esenciales y conversiones del sitio solo si el usuario acepta estadísticas en el banner de cookies.",
        "El sitio no envía intencionadamente a GA4 nombres, emails, teléfonos, mensajes de huéspedes, datos de tarjeta, notas internas ni identificadores Stripe completos. Los eventos usan parámetros técnicos no personales como idioma, huéspedes, noches, moneda y valor.",
      ],
    },
    {
      title: "Pago y calendario",
      paragraphs: [
        "Los datos de tarjeta son gestionados por Stripe y no se guardan en Domus Juliae. El sitio solo recibe datos no sensibles necesarios para reconciliar checkout, estado de pago y recibo.",
        "Después de un pago correcto, el sistema puede crear un bloqueo en el calendario interno y enviar emails transaccionales al huésped y al anfitrión.",
      ],
    },
    {
      title: "Base jurídica, conservación y derechos",
      paragraphs: [
        "El tratamiento se basa en medidas precontractuales/contractuales, interés legítimo para seguridad y obligaciones legales aplicables.",
        "Los datos son accesibles solo por el admin/anfitrión autorizado y se conservan durante el tiempo necesario.",
      ],
      items: ["acceso", "rectificación", "supresión", "limitación", "oposición", "contacto: hello@example.com"],
    },
    {
      title: "Nota",
      paragraphs: ["Este aviso se redacta de buena fe y no sustituye asesoramiento legal profesional."],
    },
  ],
  de: [
    {
      title: "Verantwortlicher",
      paragraphs: [
        "Verantwortlich ist Via Veneto - Domus Juliae, verwaltet durch Gastgeber Demo host, Demo address, 00187 Rom (RM), Italien. CIN: DEMO-PROPERTY. E-Mail: hello@example.com.",
      ],
    },
    {
      title: "Erhobene Daten",
      items: [
        "Name, E-Mail, Telefon, angefragte Daten, Gästezahl und Nachricht;",
        "Sprache, Herkunftsseite, Anfragestatus und interne Notizen;",
        "begrenzte technische Daten wie User Agent und ip_hash;",
        "E-Mail-Historie, Versandstatus und Kommunikation;",
        "geschätzter/bestätigter Preis, Zahlungsstatus und nicht sensible Stripe-Daten wie checkout session id, payment status und payment intent id.",
      ],
    },
    {
      title: "Zwecke",
      items: [
        "Verwaltung von Direktbuchungen, Verfügbarkeit und Kommunikation mit Gästen;",
        "Berechnung von Preisen, Speicherung von Buchungen und Versand transaktionaler E-Mails;",
        "Abwicklung von Zahlungen über Stripe Checkout und Aktualisierung des Zahlungsstatus;",
        "Sicherheit, Missbrauchsprävention und interne Verwaltung.",
      ],
    },
    {
      title: "Dienste und Anbieter",
      items: [
        "Vercel für Hosting;",
        "Supabase für Datenbank, Anfragen, E-Mail-Historie, Zahlungsstatus und Admin-Dashboard;",
        "Resend für transaktionale E-Mails;",
        "Stripe für Checkout, Zahlungen und Webhook. Domus Juliae speichert keine Kartendaten;",
        "Google Analytics 4 für aggregierte Statistiken, nur nach Einwilligung über das Cookie-Banner;",
        "externe WhatsApp/E-Mail-Links unterliegen den jeweiligen Anbietern.",
      ],
    },
    {
      title: "Statistik mit Google Analytics 4",
      paragraphs: [
        "Google Analytics 4 wird verwendet, um Traffic, wesentliche Interaktionen und Website-Conversions nur dann zu messen, wenn der Nutzer Statistik im Cookie-Banner akzeptiert.",
        "Die Website sendet GA4 nicht absichtlich Namen, E-Mails, Telefonnummern, Gästenachrichten, Kartendaten, interne Notizen oder vollständige Stripe-IDs. Die Ereignisse verwenden nicht personenbezogene technische Parameter wie Sprache, Gäste, Nächte, Währung und Wert.",
      ],
    },
    {
      title: "Zahlung und Kalender",
      paragraphs: [
        "Kartendaten werden von Stripe verarbeitet und nicht von Domus Juliae gespeichert. Die Website erhält nur nicht sensible Daten zur Zuordnung von Checkout, Zahlungsstatus und Beleg.",
        "Nach erfolgreicher Zahlung kann das System eine interne Kalendersperre erstellen und transaktionale E-Mails an Gast und Gastgeber senden.",
      ],
    },
    {
      title: "Rechtsgrundlage, Aufbewahrung und Rechte",
      paragraphs: [
        "Die Verarbeitung beruht auf vorvertraglichen/vertraglichen Maßnahmen, berechtigtem Interesse für Sicherheit und anwendbaren gesetzlichen Pflichten.",
        "Daten sind nur für den autorisierten Admin/Gastgeber zugänglich und werden nur so lange wie erforderlich gespeichert.",
      ],
      items: ["Auskunft", "Berichtigung", "Löschung", "Einschränkung", "Widerspruch", "Kontakt: hello@example.com"],
    },
    {
      title: "Hinweis",
      paragraphs: ["Dieser Hinweis wurde nach bestem Wissen erstellt und ersetzt keine professionelle Rechtsberatung."],
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

export default function PrivacyContent({ locale, content }: Props) {
  const l = content.legal.privacy;
  const sections = privacyCopy[locale] ?? privacyCopy.it;

  return (
    <LegalPageLayout title={l.title} subtitle={l.subtitle} lastUpdated={l.lastUpdated} locale={locale} content={content}>
      {renderSections(sections)}
    </LegalPageLayout>
  );
}
