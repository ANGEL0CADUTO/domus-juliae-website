import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, isConfigured, location, property } from "../config/site";
import type { SiteContent } from "../content/types";
import { getLocalizedPath, type Locale } from "../i18n/config";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  locale: Locale;
  content: SiteContent;
};

type FactsCopy = {
  tagline: string;
  headline: string;
  intro: string;
  description: string;
  sections: {
    identity: string;
    space: string;
    amenities: string;
    location: string;
    booking: string;
    contacts: string;
  };
  labels: {
    structure: string;
    cin: string;
    address: string;
    host: string;
    capacity: string;
    bedrooms: string;
    beds: string;
    bathroom: string;
    kitchen: string;
    wifi: string;
    payment: string;
    touristTax: string;
    privacyTerms: string;
    bookingCta: string;
  };
  values: {
    guests: string;
    bedrooms: string;
    beds: string;
    bathroom: string;
    kitchen: string;
    payment: string;
    touristTax: string;
    privacyTerms: string;
    mainAmenities: string;
    nearby: string;
  };
};

const factsCopy: Record<Locale, FactsCopy> = {
  it: {
    description: "Domus Juliae è un appartamento con 3 camere per 4 ospiti, a pochi minuti da Villa Borghese, Piazza Barberini, Piazza di Spagna e Fontana di Trevi.",
    tagline: "Informazioni essenziali",
    headline: "Dati pratici per Domus Juliae",
    intro:
      "Una sintesi verificabile della struttura, utile prima di prenotare direttamente dal sito ufficiale.",
    sections: {
      identity: "Identità",
      space: "Spazi",
      amenities: "Dotazioni",
      location: "Posizione",
      booking: "Prenotazione",
      contacts: "Contatti",
    },
    labels: {
      structure: "Nome struttura",
      cin: "CIN",
      address: "Indirizzo",
      host: "Host",
      capacity: "Capienza",
      bedrooms: "Camere",
      beds: "Letti",
      bathroom: "Bagno",
      kitchen: "Cucina",
      wifi: "Wi-Fi",
      payment: "Pagamento online",
      touristTax: "Tassa di soggiorno",
      privacyTerms: "Privacy e termini",
      bookingCta: "Verifica date e prezzo",
    },
    values: {
      guests: "fino a 4 ospiti",
      bedrooms: "3 camere da letto",
      beds: "1 letto matrimoniale e 2 letti singoli",
      bathroom: "1 bagno completo",
      kitchen: "cucina attrezzata e soggiorno con angolo cottura",
      payment: "disponibile tramite Stripe Checkout quando prezzo e disponibilità sono validi",
      touristTax: "inclusa nel totale: €6 per ospite e per notte",
      privacyTerms: "consulta Privacy Policy e Termini prima della prenotazione",
      mainAmenities: "Wi-Fi 181 Mbps, aria condizionata, riscaldamento, TV, cucina attrezzata, ascensore, spazio di lavoro e dotazioni di sicurezza.",
      nearby: "Villa Borghese, Piazza Barberini, Piazza di Spagna e Fontana di Trevi sono indicate come raggiungibili a piedi nelle informazioni del sito.",
    },
  },
  en: {
    description: "Domus Juliae is a three-bedroom apartment for up to four guests, a short walk from Villa Borghese, Piazza Barberini, the Spanish Steps and the Trevi Fountain.",
    tagline: "Facts",
    headline: "Essential information for Domus Juliae",
    intro:
      "A verifiable summary of the apartment before booking directly through the official website.",
    sections: {
      identity: "Identity",
      space: "Space",
      amenities: "Amenities",
      location: "Location",
      booking: "Booking",
      contacts: "Contacts",
    },
    labels: {
      structure: "Property name",
      cin: "CIN",
      address: "Address",
      host: "Host",
      capacity: "Capacity",
      bedrooms: "Bedrooms",
      beds: "Beds",
      bathroom: "Bathroom",
      kitchen: "Kitchen",
      wifi: "Wi-Fi",
      payment: "Online payment",
      touristTax: "Tourist tax",
      privacyTerms: "Privacy and terms",
      bookingCta: "Check dates and price",
    },
    values: {
      guests: "up to 4 guests",
      bedrooms: "3 bedrooms",
      beds: "1 double bed and 2 single beds",
      bathroom: "1 full bathroom",
      kitchen: "equipped kitchen and living room with kitchenette",
      payment: "available through Stripe Checkout when price and availability are valid",
      touristTax: "included in the total: €6 per guest per night",
      privacyTerms: "read the Privacy Policy and Terms before booking",
      mainAmenities: "181 Mbps Wi-Fi, air conditioning, heating, TV, equipped kitchen, lift, workspace and safety amenities.",
      nearby: "Villa Borghese, Piazza Barberini, the Spanish Steps and the Trevi Fountain are listed by the website as reachable on foot.",
    },
  },
  fr: {
    description: "Domus Juliae est un appartement de trois chambres pour quatre personnes maximum, à quelques minutes à pied de la Villa Borghese, de la Piazza Barberini, de la place d’Espagne et de la fontaine de Trevi.",
    tagline: "Informations essentielles",
    headline: "Informations pratiques pour Domus Juliae",
    intro:
      "Un résumé vérifiable de l'appartement avant de réserver directement sur le site officiel.",
    sections: {
      identity: "Identité",
      space: "Espaces",
      amenities: "Équipements",
      location: "Emplacement",
      booking: "Réservation",
      contacts: "Contacts",
    },
    labels: {
      structure: "Nom de la structure",
      cin: "CIN",
      address: "Adresse",
      host: "Hôte",
      capacity: "Capacité",
      bedrooms: "Chambres",
      beds: "Lits",
      bathroom: "Salle de bain",
      kitchen: "Cuisine",
      wifi: "Wi-Fi",
      payment: "Paiement en ligne",
      touristTax: "Taxe de séjour",
      privacyTerms: "Confidentialité et conditions",
      bookingCta: "Vérifier dates et prix",
    },
    values: {
      guests: "jusqu'à 4 voyageurs",
      bedrooms: "3 chambres",
      beds: "1 lit double et 2 lits simples",
      bathroom: "1 salle de bain complète",
      kitchen: "cuisine équipée et séjour avec coin cuisine",
      payment: "disponible via Stripe Checkout lorsque le prix et la disponibilité sont valides",
      touristTax: "incluse dans le total : 6 € par voyageur et par nuit",
      privacyTerms: "consultez la politique de confidentialité et les conditions avant de réserver",
      mainAmenities: "Wi-Fi 181 Mbps, climatisation, chauffage, TV, cuisine équipée, ascenseur, espace de travail et équipements de sécurité.",
      nearby: "Villa Borghese, Piazza Barberini, la Place d'Espagne et la Fontaine de Trevi sont indiquées comme accessibles à pied.",
    },
  },
  es: {
    description: "Domus Juliae es un apartamento de tres dormitorios para un máximo de cuatro huéspedes, a pocos minutos a pie de Villa Borghese, Piazza Barberini, la plaza de España y la Fontana di Trevi.",
    tagline: "Información esencial",
    headline: "Datos prácticos de Domus Juliae",
    intro:
      "Un resumen verificable del apartamento antes de reservar directamente en el sitio oficial.",
    sections: {
      identity: "Identidad",
      space: "Espacios",
      amenities: "Equipamiento",
      location: "Ubicación",
      booking: "Reserva",
      contacts: "Contactos",
    },
    labels: {
      structure: "Nombre del alojamiento",
      cin: "CIN",
      address: "Dirección",
      host: "Anfitrión",
      capacity: "Capacidad",
      bedrooms: "Dormitorios",
      beds: "Camas",
      bathroom: "Baño",
      kitchen: "Cocina",
      wifi: "Wi-Fi",
      payment: "Pago online",
      touristTax: "Tasa turística",
      privacyTerms: "Privacidad y términos",
      bookingCta: "Ver fechas y precio",
    },
    values: {
      guests: "hasta 4 huéspedes",
      bedrooms: "3 dormitorios",
      beds: "1 cama doble y 2 camas individuales",
      bathroom: "1 baño completo",
      kitchen: "cocina equipada y salón con zona de cocina",
      payment: "disponible mediante Stripe Checkout cuando precio y disponibilidad son válidos",
      touristTax: "incluida en el total: 6 € por huésped y noche",
      privacyTerms: "consulta la Política de privacidad y los Términos antes de reservar",
      mainAmenities: "Wi-Fi 181 Mbps, aire acondicionado, calefacción, TV, cocina equipada, ascensor, espacio de trabajo y equipamiento de seguridad.",
      nearby: "Villa Borghese, Piazza Barberini, Plaza de España y Fontana di Trevi aparecen en el sitio como accesibles a pie.",
    },
  },
  de: {
    description: "Domus Juliae ist eine Ferienwohnung mit drei Schlafzimmern für bis zu vier Gäste, nur wenige Gehminuten von der Villa Borghese, der Piazza Barberini, der Spanischen Treppe und dem Trevi-Brunnen entfernt.",
    tagline: "Wichtige Informationen",
    headline: "Praktische Daten zu Domus Juliae",
    intro:
      "Eine überprüfbare Zusammenfassung der Wohnung vor der Direktbuchung über die offizielle Website.",
    sections: {
      identity: "Identität",
      space: "Räume",
      amenities: "Ausstattung",
      location: "Lage",
      booking: "Buchung",
      contacts: "Kontakt",
    },
    labels: {
      structure: "Name der Unterkunft",
      cin: "CIN",
      address: "Adresse",
      host: "Gastgeber",
      capacity: "Kapazität",
      bedrooms: "Schlafzimmer",
      beds: "Betten",
      bathroom: "Bad",
      kitchen: "Küche",
      wifi: "WLAN",
      payment: "Online-Zahlung",
      touristTax: "Touristensteuer",
      privacyTerms: "Datenschutz und Bedingungen",
      bookingCta: "Daten und Preis prüfen",
    },
    values: {
      guests: "bis zu 4 Gäste",
      bedrooms: "3 Schlafzimmer",
      beds: "1 Doppelbett und 2 Einzelbetten",
      bathroom: "1 vollständiges Bad",
      kitchen: "ausgestattete Küche und Wohnzimmer mit Küchenzeile",
      payment: "über Stripe Checkout verfügbar, wenn Preis und Verfügbarkeit gültig sind",
      touristTax: "im Gesamtpreis enthalten: 6 € pro Gast und Nacht",
      privacyTerms: "lesen Sie Datenschutzerklärung und Bedingungen vor der Buchung",
      mainAmenities: "WLAN 181 Mbit/s, Klimaanlage, Heizung, TV, ausgestattete Küche, Aufzug, Arbeitsplatz und Sicherheitsausstattung.",
      nearby: "Villa Borghese, Piazza Barberini, Spanische Treppe und Trevi-Brunnen werden auf der Website als fußläufig erreichbar angegeben.",
    },
  },
};

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-brand-gold/10 py-4 md:grid-cols-[14rem_1fr] md:gap-8">
      <dt className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">{label}</dt>
      <dd className="text-base leading-7 text-brand-slate md:text-lg">{value}</dd>
    </div>
  );
}

export default function FactsPageContent({ locale, content }: Props) {
  const c = factsCopy[locale] ?? factsCopy.it;
  const emailConfigured = isConfigured(contact.email);
  const phoneConfigured = isConfigured(contact.phone);
  const fullAddress = `${location.address}, ${location.cap} ${location.city} (${location.province}), ${location.country}`;
  const primaryAmenities = content.amenities.included.slice(0, 8).join(", ");

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar locale={locale} content={content} />

      <main>
        <section className="bg-brand-slate px-6 pb-14 pt-36 text-white md:px-12 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
              {c.tagline}
            </span>
            <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">{c.headline}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{c.intro}</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">
                {property.fullName}
              </p>
              <p className="mt-4 text-2xl font-serif leading-tight text-brand-slate md:text-3xl">
                {c.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}#booking`}
                  className="inline-flex min-h-11 items-center justify-center bg-brand-slate px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-brand-gold hover:text-brand-slate"
                >
                  {c.labels.bookingCta}
                </Link>
                <Link
                  href={getLocalizedPath(locale, "gallery")}
                  className="inline-flex min-h-11 items-center justify-center border border-brand-slate px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-brand-slate transition-colors hover:bg-brand-slate hover:text-white"
                >
                  {content.homeGallery.ctaLabel}
                </Link>
              </div>
            </div>

            <dl>
              <h2 className="mb-2 text-2xl">{c.sections.identity}</h2>
              <FactRow label={c.labels.structure} value={property.fullName} />
              <FactRow label={c.labels.cin} value={property.cin} />
              <FactRow label={c.labels.address} value={fullAddress} />
              <FactRow label={c.labels.host} value={property.host} />

              <h2 className="mb-2 mt-10 text-2xl">{c.sections.space}</h2>
              <FactRow label={c.labels.capacity} value={c.values.guests} />
              <FactRow label={c.labels.bedrooms} value={c.values.bedrooms} />
              <FactRow label={c.labels.beds} value={c.values.beds} />
              <FactRow label={c.labels.bathroom} value={c.values.bathroom} />
              <FactRow label={c.labels.kitchen} value={c.values.kitchen} />

              <h2 className="mb-2 mt-10 text-2xl">{c.sections.amenities}</h2>
              <FactRow label={c.labels.wifi} value={content.apartment.amenityLabels.wifi} />
              <FactRow label={c.sections.amenities} value={`${c.values.mainAmenities} ${primaryAmenities}.`} />

              <h2 className="mb-2 mt-10 text-2xl">{c.sections.location}</h2>
              <FactRow label={c.labels.address} value={fullAddress} />
              <FactRow label={c.sections.location} value={c.values.nearby} />
              {content.location.distances.map((distance) => (
                <FactRow key={distance.name} label={distance.name} value={distance.time} />
              ))}

              <h2 className="mb-2 mt-10 text-2xl">{c.sections.booking}</h2>
              <FactRow label={c.labels.payment} value={c.values.payment} />
              <FactRow label={c.labels.touristTax} value={c.values.touristTax} />
              <FactRow label={c.labels.privacyTerms} value={c.values.privacyTerms} />

              <h2 className="mb-2 mt-10 text-2xl">{c.sections.contacts}</h2>
              {emailConfigured ? <FactRow label="Email" value={contact.email} /> : null}
              {phoneConfigured ? <FactRow label="Phone" value={contact.phone} /> : null}
            </dl>
          </div>
        </section>

        <section className="bg-brand-warm px-6 py-14 md:px-12 lg:px-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 text-sm font-semibold text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-gold" />
                {fullAddress}
              </p>
              {emailConfigured ? (
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-brand-gold" />
                  <a href={`mailto:${contact.email}`} className="hover:text-brand-gold">
                    {contact.email}
                  </a>
                </p>
              ) : null}
              {phoneConfigured ? (
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-brand-gold" />
                  <a href={`tel:${contact.phone}`} className="hover:text-brand-gold">
                    {contact.phone}
                  </a>
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={getLocalizedPath(locale, "privacy")}
                className="text-sm font-bold uppercase tracking-widest text-brand-slate underline-offset-4 hover:text-brand-gold hover:underline"
              >
                {content.footer.legalLinks.privacy}
              </Link>
              <Link
                href={getLocalizedPath(locale, "terms")}
                className="text-sm font-bold uppercase tracking-widest text-brand-slate underline-offset-4 hover:text-brand-gold hover:underline"
              >
                {content.footer.legalLinks.terms}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} content={content} />
    </div>
  );
}
