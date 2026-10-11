// ────────────────────────────────────────────────────────────
// Domus Juliae — German Content
// Natural tourism-grade copy, no machine translation.
// ────────────────────────────────────────────────────────────

import type { SiteContent } from "./types";
import { property } from "../config/site";

const de: SiteContent = {
  locale: "de",

  seo: {
    home: {
      title: "Ferienwohnung nahe Via Veneto Rom | Domus Juliae",
      description:
        "Domus Juliae ist eine Ferienwohnung mit 3 Schlafzimmern im Zentrum von Rom, nahe Via Veneto und Villa Borghese, für bis zu 4 Gäste, mit schnellem WLAN und direkter Online-Buchung.",
      keywords: [
        "Ferienwohnung nahe Via Veneto Rom",
        "Ferienwohnung nahe Villa Borghese",
        "3-Zimmer-Apartment im Zentrum von Rom",
        "Apartment für Familien in Rom",
        "Unterkunft nahe Spanischer Treppe",
      ],
    },
    gallery: {
      title: "Fotogalerie | Ferienwohnung nahe Via Veneto Rom",
      description:
        "Fotogalerie von Domus Juliae: Wohnzimmer, Schlafzimmer, Küche und Bad. Ferienwohnung nahe Via Veneto, im Zentrum von Rom.",
    },
    facts: {
      title: "Wichtige Informationen zur Ferienwohnung in Rom",
      description:
        "Wichtige Informationen zu Domus Juliae in der Demo address, Rom: CIN, Kapazität, Zimmer, Ausstattung, Kontakt und Direktbuchung.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      description:
        "Datenschutzerklärung für Domus Juliae, Ferienwohnung nahe Via Veneto, Rom.",
    },
    cookie: {
      title: "Cookie-Richtlinie",
      description:
        "Cookie-Richtlinie für Domus Juliae, Ferienwohnung nahe Via Veneto, Rom.",
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      description:
        "Allgemeine Geschäftsbedingungen für Domus Juliae, Ferienwohnung nahe Via Veneto, Rom.",
    },
  },

  nav: {
    links: [
      { name: "Startseite", page: "home" },
      { name: "Apartment", anchor: "#apartment" },
      { name: "Lage", anchor: "#location" },
      { name: "Galerie", page: "gallery" },
      { name: "FAQ", anchor: "#faq" },
    ],
    ctaLabel: "Daten und Preis prüfen",
    brandSub: "Via Veneto • Rom",
    mobileMenuOpen: "Navigationsmenü öffnen",
    mobileMenuClose: "Navigationsmenü schließen",
  },

  hero: {
    ratingLabel: "auf",
    headline: "Ferienwohnung nahe Via Veneto,",
    headlineAccent: "im Herzen von Rom",
    subtitle:
      "Domus Juliae ist ein 3-Zimmer-Apartment für bis zu 4 Gäste, nur wenige Minuten von der Villa Borghese, der Piazza Barberini, der Spanischen Treppe und dem Trevi-Brunnen entfernt.",
    ctaPrimary: "Daten und Preis prüfen",
    ctaSecondary: "Apartment entdecken",
    statsGuests: "Gäste",
    statsBedrooms: "Schlafzimmer",
    statsBeds: "Betten",
    statsBathroom: "Badezimmer",
  },

  trust: {
    rating: "Bewertung",
    reviews: "Bewertungen",
    superhost: "Superhost",
    wifi: "WLAN",
    cin: "CIN",
    walkable: "Gut zu Fuß erreichbar",
  },

  homeGallery: {
    tagline: "Fotogalerie",
    headline: "Ein Blick ins Innere",
    ctaLabel: "Komplette Galerie ansehen",
  },

  features: {
    tagline: "Willkommen zu Hause",
    headline: "Ferienwohnung",
    headlineAccent: "nahe Villa Borghese",
    intro:
      "Domus Juliae ist eine Ferienunterkunft in der Via Veneto, im Stadtteil Rione Ludovisi. Ein 3-Zimmer-Apartment für 4 Gäste, wo elegante Einrichtung auf den Komfort einer erstklassigen zentralen Lage trifft.",
    quote: "Ein authentischer römischer Aufenthalt im Herzen der Stadt.",
    items: [
      {
        title: "Erstklassige Lage",
        description:
          "Nur wenige Schritte von der Via Veneto, der Villa Borghese, der Spanischen Treppe und dem Trevi-Brunnen entfernt. Alles ist zu Fuß erreichbar.",
      },
      {
        title: "Komplettes Apartment",
        description:
          "3 Schlafzimmer, Wohnzimmer mit Kochnische, voll ausgestattete Küche und ein komplettes Badezimmer für einen komfortablen Aufenthalt.",
      },
      {
        title: "Anerkannte Gastfreundschaft",
        description: `Bewertet mit ${property.rating.score.toLocaleString("de-DE")}/5 auf Airbnb bei ${property.rating.reviewCount} Bewertungen. Aktuelle Angaben finden Sie im Inserat.`,
      },
      {
        title: "Leben wie ein Einheimischer",
        description:
          "Im Viertel Rione Ludovisi, umgeben von historischen Cafés, Restaurants und der authentischen Atmosphäre der Dolce Vita.",
      },
    ],
  },

  apartment: {
    tagline: "Das Apartment",
    headline: "Ferienwohnung mit 3 Schlafzimmern",
    headlineAccent: "im Zentrum von Rom",
    fullDescription:
      "Domus Juliae ist eine komplette Ferienwohnung in der Demo address im römischen Viertel Ludovisi nahe der Via Veneto. Bis zu 4 Gäste schlafen in drei getrennten Schlafzimmern: einem mit Doppelbett und zwei mit jeweils einem Einzelbett. Familien und gemeinsam Reisende haben damit eigene Schlafbereiche. Zur Wohnung gehören ein Wohnzimmer, eine ausgestattete Küche und ein gemeinsames Badezimmer. WLAN, Klimaanlage und ein Arbeitsplatz ermöglichen Erholung oder Arbeit zwischen den Besichtigungen. Die Villa Borghese ist etwa fünf Gehminuten entfernt; die U-Bahn-Station Barberini verbindet das Viertel mit dem übrigen Rom. In der Fotogalerie können Sie sich vor der Auswahl Ihrer Reisedaten jedes Zimmer ansehen.",
    accessNote:
      "Der Zugang zum Apartment erfolgt über den Innenhof des Gebäudes. Vor dem Aufzug gibt es 5 Stufen.",
    galleryLink: "Galerie ansehen",
    amenityLabels: {
      guests: "Gäste",
      bedrooms: "Schlafzimmer",
      beds: "Betten",
      bathroom: "komplettes Badezimmer",
      kitchen: "Ausgestattete Küche",
      ac: "Klimaanlage",
      wifi: "WLAN 181 Mbit/s",
      elevator: "Aufzug",
      elevatorNote: "5 Stufen vor dem Aufzug",
      host: "Persönlicher Empfang durch den Gastgeber",
    },
  },

  location: {
    tagline: "Lage",
    headline: "Ferienwohnung im",
    headlineAccent: "Rione Ludovisi",
    intro:
      "Domus Juliae liegt nur wenige Schritte von der legendären Via Veneto entfernt, in einem der prestigeträchtigsten Viertel Roms. Alles, was die Stadt einzigartig macht, ist zu Fuß erreichbar: Museen, historische Plätze und Restaurants. Das Apartment ist hervorragend an die U-Bahn (Linie A, Haltestelle Barberini) und zahlreiche Busse angebunden, mit Parkmöglichkeiten in der Nähe.",
    distances: [
      { name: "Villa Borghese", time: "5 Min. zu Fuß" },
      { name: "Piazza Barberini", time: "10 Min. zu Fuß" },
      { name: "Spanische Treppe", time: "10 Min. zu Fuß" },
      { name: "Trevi-Brunnen", time: "weniger als 15 Min. zu Fuß" },
    ],
    transport: [
      { type: "U-Bahn", line: "Linie A", stop: "Barberini", detail: "" },
      { type: "Bus", line: "", stop: "Via Veneto / Villa Borghese", detail: "Mehrere Linien" },
      { type: "Touristenbus", line: "Hop-on Hop-off", stop: "Spanische Treppe", detail: "Haltestelle in der Via Ludovisi" },
    ],
    parking: "Kostenpflichtige Parkplätze an der Straße oder überdachte Parkhäuser in der Umgebung verfügbar.",
    openMaps: "In Google Maps öffnen",
    transportLabel: "Verkehrsmittel",
    parkingLabel: "Parken",
  },

  whyDirect: {
    tagline: "Vorteile",
    headline: "Warum über die offizielle Website buchen",
    intro: "Auf der offiziellen Website können Sie Daten wählen, den Direktpreis sehen und mit der Online-Zahlung fortfahren, wenn der Kalender frei ist.",
    items: [
      {
        title: "Direkter Kontakt zum Gastgeber",
        description: "Sprechen Sie bei Fragen oder besonderen Anforderungen direkt mit Demo host.",
      },
      {
        title: "Daten und Preis sofort",
        description: "Wählen Sie Check-in, Check-out und Gäste, um den vom System berechneten Gesamtpreis zu sehen.",
      },
      {
        title: "Online-Zahlung",
        description: "Wenn die Daten frei sind, können Sie direkt mit der Online-Zahlung fortfahren.",
      },
      {
        title: "Direktpreis und Online-Zahlung",
        description: "Wählen Sie die Daten, prüfen Sie den vom System berechneten Gesamtpreis und fahren Sie mit der Zahlung fort, wenn der Kalender frei ist.",
      },
      {
        title: "Kalenderprüfung",
        description: "Die Website prüft interne Sperren und importierte iCal-Kalender vor der Zahlung.",
      },
      {
        title: "Weniger Schritte",
        description: "Kein verpflichtendes manuelles Angebot, wenn Preis und Verfügbarkeit klar sind.",
      },
    ],
  },

  booking: {
    tagline: "Direktbuchung",
    headline: "Daten wählen und online bezahlen",
    intro:
      "Prüfen Sie Verfügbarkeit und Preis im Kalender, geben Sie die wichtigsten Daten ein und fahren Sie mit der Online-Zahlung über Stripe Checkout fort.",
    steps: [
      { title: "Daten und Gäste", description: "Wählen Sie Check-in, Check-out und Anzahl der Gäste." },
      { title: "Preis und Verfügbarkeit", description: "Die Website berechnet den Gesamtpreis und prüft interne sowie iCal-Kalender." },
      { title: "Zahlung", description: "Wenn die Daten frei sind, fahren Sie direkt mit Stripe Checkout fort." },
      { title: "Daten blockiert", description: "Nach der Zahlung werden die Daten registriert und im internen Kalender blockiert." },
    ],
    form: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "Ihre E-Mail",
      phone: "Telefon",
      phonePlaceholder: "Ihre WhatsApp-Nummer",
      guests: "Gäste",
      guestSingular: "Gast",
      guestPlural: "Gäste",
      checkIn: "Check-In",
      checkOut: "Check-Out",
      message: "Nachricht (optional)",
      messagePlaceholder: "Besondere Anfragen, Fragen...",
    },
    submit: {
      button: "Anfrage senden",
      loading: "Wird gesendet...",
      success: "Zahlung gestartet. Folgen Sie Stripe Checkout, um die Buchung abzuschliessen.",
      validationError: "Bitte prufen Sie die Felder: Name, gultige Daten und mindestens E-Mail oder Telefon.",
      backendUnavailable: "Das automatische System ist nicht verfugbar. Sie konnen die Anfrage per WhatsApp oder E-Mail senden.",
      genericError: "Die Anfrage konnte nicht gesendet werden. Sie konnen WhatsApp oder E-Mail als Alternative nutzen.",
      emailPartial: "Anfrage gespeichert, aber der E-Mail-Versand ist nicht vollstandig. Sie konnen unten WhatsApp oder E-Mail nutzen.",
      fallbackIntro: "Alternativ konnen Sie die direkten Kontaktmoglichkeiten nutzen.",
      notConfirmed: "Die Buchung wird nach abgeschlossener Zahlung registriert.",
      noPayment: "Kartendaten werden von Stripe Checkout verarbeitet, nicht von dieser Website.",
    },
    emailButton: "Anfrage per E-Mail senden",
    whatsappButton: "Nachricht über WhatsApp",
    fallback: "Die Kontaktdaten werden konfiguriert. Bitte schauen Sie bald wieder vorbei.",
    microtrust: ["Direktpreis", "Daten geprüft", "Online-Zahlung"],
    infoTitle: "So funktioniert die Buchung",
    infoText:
      "Die Website nutzt interne Preise und verbundene Kalender für eine schnelle Direktbuchung. Bei einem klaren Konflikt wird die Zahlung blockiert.",
    infoBullets: [
      "Die Website verarbeitet niemals Kartendaten",
      "Nach der Zahlung werden die Daten im internen Kalender blockiert",
      "Demo host wird benachrichtigt und prüft auch Airbnb/Booking",
      "Bei Fragen können Sie weiterhin E-Mail oder WhatsApp nutzen",
    ],
    confirmLabel: "Sichere Online-Zahlung",
    capacityLabel: "Gäste",
    whatsappBase: "Hallo, ich möchte die Verfügbarkeit von Domus Juliae prüfen",
    whatsappDates: " vom {checkIn} bis {checkOut}",
    whatsappGuests: " für {guests} Gäste",
    emailSubject: "Verfügbarkeitsanfrage – Domus Juliae",
    emailTemplate: {
      name: "Name:",
      checkIn: "Check-In:",
      checkOut: "Check-Out:",
      guests: "Gäste:",
      body: "Ich möchte die Verfügbarkeit von Domus Juliae für die oben genannten Daten überprüfen.\nVielen Dank."
    },
  },

  testimonials: {
    tagline: "Verifizierte Bewertungen",
    headline: "Von Gästen auf Airbnb geliebt",
    intro:
      `Bewertung ${property.rating.score.toLocaleString("de-DE")}/5 aus ${property.rating.reviewCount} Airbnb-Bewertungen, geprüft am 4. Oktober 2026. Erfahrungen der Gäste und aktuelle Angaben finden Sie im Originalinserat.`,
    cards: [
      { value: `${property.rating.score.toLocaleString("de-DE")}/5`, label: "Airbnb-Bewertung", sublabel: `aus ${property.rating.reviewCount} Bewertungen` },
      { value: "Superhost", label: "Airbnb-Status", sublabel: "Ausgezeichnet für herausragende Gastfreundschaft" },
      { value: "5 Sterne", label: "Herausragender Check-In", sublabel: "Bewertet von Gästen auf Airbnb" },
      { value: "Tolle Lage", label: "Zu Fuß erreichbar & gut angebunden", sublabel: "Ideal, um alles zu Fuß zu erledigen" },
      { value: "181 Mbit/s", label: "Schnelles WLAN", sublabel: "Auch ideal für Remote-Arbeit" },
      { value: "Persönlicher Empfang", label: "Gastgeber: Demo host", sublabel: "Begrüßt Sie persönlich bei der Ankunft" },
    ],
  },

  faq: {
    tagline: "Nützliche Informationen",
    headline: "Häufig gestellte Fragen",
    intro: "Alles, was Sie über Domus Juliae und die Direktbuchung wissen müssen.",
    items: [
      { question: "Wie viele Gäste können im Domus Juliae übernachten?", answer: "Das Apartment bietet Platz für bis zu 4 Gäste, mit 3 Schlafzimmern, 1 Doppelbett, 2 Einzelbetten und 1 Badezimmer." },
      { question: "Wo befindet sich das Apartment?", answer: "Domus Juliae liegt im Viertel Rione Ludovisi, nur wenige Schritte von der Via Veneto entfernt. Die Villa Borghese ist in 5 Gehminuten zu erreichen, die Piazza Barberini und die Spanische Treppe in 10 Minuten und der Trevi-Brunnen in weniger als 15 Minuten. Die nächste U-Bahn-Station ist Barberini (Linie A)." },
      { question: "Wird die Verfügbarkeit sofort geprüft?", answer: "Ja. Die Website prüft die Daten mit internen Sperren und importierten iCal-Kalendern. Wenn ein klarer Konflikt gefunden wird, wird die Zahlung blockiert." },
      { question: "Muss ich sofort bezahlen?", answer: "Sie zahlen online erst, nachdem Sie gültige Daten gewählt, den berechneten Preis gesehen und die Kalenderprüfung bestanden haben. Die Zahlung erfolgt über Stripe Checkout." },
      { question: "Wie funktioniert der Check-In?", answer: "Der Check-In wird auf Airbnb mit 5 Sternen bewertet. Gastgeber Demo host empfängt die Gäste persönlich. Genaue Zeiten und Details werden bei der Bestätigung mitgeteilt." },
      { question: "Gibt es einen Aufzug?", answer: "Ja, das Gebäude verfügt über einen Aufzug. Der Zugang zum Apartment erfolgt jedoch über den Innenhof des Gebäudes und vor dem Aufzug gibt es 5 Stufen." },
      { question: "Ist das WLAN schnell?", answer: "Ja. Das Apartment verfügt über WLAN mit 181 Mbit/s, ideal für Remote-Arbeit. Ein eigener Arbeitsbereich ist ebenfalls vorhanden." },
      { question: "Ist die Kurtaxe inbegriffen?", answer: "Ja. Der Gesamtpreis enthält 0 € Kurtaxe pro Gast und Nacht sowie einmalig 50 € Reinigungskosten für den gesamten Aufenthalt." },
      { question: "Gibt es eine Waschmaschine oder einen Trockner?", answer: "Nein, das Apartment verfügt weder über eine Waschmaschine noch über einen Trockner. In der Nähe gibt es Waschsalons." },
      { question: "Wie kann ich direkt buchen?", answer: "Gehen Sie zum Buchungsbereich, wählen Sie Daten und Gäste, prüfen Sie Preis und Verfügbarkeit und fahren Sie mit der Online-Zahlung fort. Bei Fragen können Sie Demo host per E-Mail oder WhatsApp kontaktieren." },
    ],
  },

  footer: {
    navigationLabel: "Navigation",
    contactLabel: "Kontakt",
    quickLinks: [
      { label: "Startseite", page: "home" },
      { label: "Apartment", page: "home", anchor: "apartment" },
      { label: "Lage", page: "home", anchor: "location" },
      { label: "Galerie", page: "gallery" },
      { label: "Wichtige Informationen", page: "facts" },
      { label: "FAQ", page: "home", anchor: "faq" },
      { label: "Daten und Preis prüfen", page: "home", anchor: "booking" },
    ],
    legalLinks: {
      privacy: "Datenschutzerklärung",
      cookie: "Cookie-Richtlinie",
      terms: "Allgemeine Geschäftsbedingungen",
    },
    copyright: "Alle Rechte vorbehalten.",
  },

  galleryPage: {
    tagline: "Galerie",
    headline: "Die Zimmer und Räume",
    intro: "Eine kuratierte Sammlung der Räume des Apartments, nach Bereichen gegliedert, die die unaufdringliche Eleganz widerspiegelt, die einen Aufenthalt im Domus Juliae ausmacht.",
    ctaTagline: "Nächster Schritt",
    ctaHeadline: "Verfügbarkeit und Informationen",
    ctaText: "Wenn Sie Reisedaten prüfen oder mehr über das Apartment erfahren möchten, können Sie direkt mit der Buchung fortfahren.",
    ctaPrimary: "Daten und Preis prüfen",
    ctaSecondary: "Informationen anfordern",
    sections: [
      { id: "soggiorno", label: "Wohnzimmer", title: "Wohnzimmer" },
      { id: "camera-matrimoniale", label: "Doppelzimmer", title: "Doppelzimmer" },
      { id: "camere-singole", label: "Einzelzimmer", title: "Einzelzimmer" },
      { id: "cucina", label: "Küche", title: "Küche" },
      { id: "bagno", label: "Badezimmer", title: "Badezimmer" },
    ],
  },

  legal: {
    privacy: { title: "Datenschutzerklärung", subtitle: "Datenschutzhinweis", lastUpdated: "5. Juli 2026" },
    cookie: { title: "Cookie-Richtlinie", subtitle: "Cookie-Hinweis", lastUpdated: "5. Juli 2026" },
    terms: { title: "Allgemeine Geschäftsbedingungen", subtitle: "Nutzungsbedingungen", lastUpdated: "11. Oktober 2026" },
    backHome: "Zurück zur Startseite",
  },

  stickyCta: {
    label: "Daten und Preis prüfen",
    ariaLabel: "Daten und Preis prüfen",
  },

  amenities: {
    tagline: "Ausstattung",
    headline: "Alles, was Sie für Ihren Aufenthalt brauchen",
    included: [
      "Schnelles WLAN 181 Mbit/s", "Klimaanlage", "Zentralheizung",
      "Nespresso-Maschine", "Moka-Kanne", "TV", "Voll ausgestattete Küche", "Gasherd",
      "Backofen", "Kühlschrank und Gefrierschrank", "Wasserkocher", "Haartrockner", "Bidet",
      "Aufzug", "Eigener Arbeitsbereich", "Privater Eingang",
      "Rauchmelder", "Kohlenmonoxid-Detektor", "Feuerlöscher",
    ],
    notAvailable: ["Waschmaschine", "Trockner", "Außenüberwachungskameras"],
    notAvailableLabel: "Nicht verfügbar",
  },
};

export default de;
