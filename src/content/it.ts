// ────────────────────────────────────────────────────────────
// Domus Juliae — Contenuti Italiano
// ────────────────────────────────────────────────────────────

import type { SiteContent } from "./types";
import { property } from "../config/site";

const it: SiteContent = {
  locale: "it",

  // ── SEO ──────────────────────────────────────────────────
  seo: {
    home: {
      title: "Casa Vacanze Via Veneto Roma | Domus Juliae",
      description:
        "Domus Juliae è un appartamento turistico a Roma centro vicino Via Veneto e Villa Borghese: 3 camere, 4 ospiti, Wi-Fi veloce e prenotazione diretta online.",
      keywords: [
        "casa vacanze Via Veneto Roma",
        "appartamento vacanze Roma centro",
        "appartamento vicino Villa Borghese",
        "casa vacanze Rione Ludovisi",
        "appartamento 3 camere Roma",
        "holiday apartment Via Veneto Rome",
      ],
    },
    gallery: {
      title: "Galleria Appartamento Via Veneto Roma",
      description:
        "Galleria fotografica degli ambienti di Domus Juliae: soggiorno, camere, cucina e bagno. Appartamento vacanze a Via Veneto, Roma.",
    },
    facts: {
      title: "Informazioni essenziali sull’appartamento a Roma",
      description:
        "Informazioni essenziali su Domus Juliae a Demo address, Roma: CIN, capienza, camere, dotazioni, contatti e prenotazione diretta.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Informativa sul trattamento dei dati personali di Domus Juliae, casa vacanze a Via Veneto, Roma.",
    },
    cookie: {
      title: "Cookie Policy",
      description:
        "Informativa sull'utilizzo dei cookie del sito Domus Juliae, casa vacanze a Via Veneto, Roma.",
    },
    terms: {
      title: "Termini e Condizioni",
      description:
        "Termini e condizioni d'uso del sito Domus Juliae, casa vacanze a Via Veneto, Roma.",
    },
  },

  // ── Navbar ───────────────────────────────────────────────
  nav: {
    links: [
      { name: "Home", page: "home" },
      { name: "Appartamento", anchor: "#apartment" },
      { name: "Posizione", anchor: "#location" },
      { name: "Galleria", page: "gallery" },
      { name: "FAQ", anchor: "#faq" },
    ],
    ctaLabel: "Verifica date e prezzo",
    brandSub: "Via Veneto • Roma",
    mobileMenuOpen: "Apri menu di navigazione",
    mobileMenuClose: "Chiudi menu di navigazione",
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    ratingLabel: "su",
    headline: "Casa vacanze a Via Veneto,",
    headlineAccent: "nel cuore di Roma",
    subtitle:
      "Domus Juliae è un appartamento con 3 camere per 4 ospiti, a pochi minuti da Villa Borghese, Piazza Barberini, Piazza di Spagna e Fontana di Trevi.",
    ctaPrimary: "Verifica date e prezzo",
    ctaSecondary: "Scopri l'appartamento",
    statsGuests: "ospiti",
    statsBedrooms: "camere",
    statsBeds: "letti",
    statsBathroom: "bagno",
  },

  // ── Trust Bar ────────────────────────────────────────────
  trust: {
    rating: "Valutazione",
    reviews: "recensioni",
    superhost: "Superhost",
    wifi: "Wi-Fi",
    cin: "CIN",
    walkable: "Pedonale",
  },

  // ── Home Gallery ─────────────────────────────────────────
  homeGallery: {
    tagline: "Galleria Fotografica",
    headline: "Uno sguardo all'interno",
    ctaLabel: "Vedi Galleria Completa",
  },

  // ── Features ─────────────────────────────────────────────
  features: {
    tagline: "Benvenuti a Casa",
    headline: "Appartamento vacanze",
    headlineAccent: "vicino Villa Borghese",
    intro:
      "Domus Juliae è una casa vacanze a Via Veneto, nel Rione Ludovisi. Un appartamento con 3 camere per 4 ospiti, dove l'eleganza degli spazi incontra la comodità di una posizione centrale e ben servita.",
    quote: "Un soggiorno autentico nel cuore di Roma.",
    items: [
      {
        title: "Posizione strategica",
        description:
          "A pochi passi da Via Veneto, Villa Borghese, Piazza di Spagna e Fontana di Trevi. Tutto raggiungibile a piedi.",
      },
      {
        title: "Appartamento completo",
        description:
          "3 camere da letto, soggiorno con angolo cottura, cucina attrezzata e bagno completo per un soggiorno confortevole.",
      },
      {
        title: "Ospitalità riconosciuta",
        description: `Valutazione ${property.rating.score.toLocaleString("it-IT")}/5 su Airbnb con ${property.rating.reviewCount} recensioni. Consulta l'annuncio per i dati aggiornati.`,
      },
      {
        title: "Vivi come un locale",
        description:
          "Nel Rione Ludovisi, tra caffè storici, ristoranti e l'autentica atmosfera romana della Dolce Vita.",
      },
    ],
  },

  // ── Apartment ────────────────────────────────────────────
  apartment: {
    tagline: "L'Appartamento",
    headline: "Appartamento con 3 camere",
    headlineAccent: "a Roma centro",
    fullDescription:
      "A Demo address, nel Rione Ludovisi vicino a Via Veneto, Domus Juliae offre un intero appartamento per un massimo di 4 ospiti. Le tre camere separate comprendono una camera matrimoniale e due camere singole: una disposizione adatta a una famiglia o a chi desidera spazi distinti per dormire. Completano l'alloggio il soggiorno, la cucina attrezzata e un bagno condiviso. Wi-Fi, aria condizionata e uno spazio di lavoro permettono di alternare le visite a Roma a momenti di riposo. Villa Borghese è a circa 5 minuti a piedi; la fermata metro Barberini collega il quartiere al resto della città. Nella galleria puoi vedere ogni ambiente prima di scegliere le date.",
    accessNote:
      "L'appartamento è accessibile attraversando il chiostro dello stabile. Prima dell'ascensore è necessario salire 5 gradini.",
    galleryLink: "Guarda la Galleria",
    amenityLabels: {
      guests: "ospiti",
      bedrooms: "camere da letto",
      beds: "letti",
      bathroom: "bagno completo",
      kitchen: "Cucina attrezzata",
      ac: "Aria condizionata",
      wifi: "Wi-Fi 181 Mbps",
      elevator: "Ascensore",
      elevatorNote: "5 gradini prima dell'ascensore",
      host: "Host accoglie di persona",
    },
  },

  // ── Location ─────────────────────────────────────────────
  location: {
    tagline: "Posizione",
    headline: "Casa vacanze nel",
    headlineAccent: "Rione Ludovisi",
    intro:
      "Domus Juliae si trova a pochi passi dalla leggendaria Via Veneto, in una delle zone più prestigiose di Roma. Tutto ciò che rende la città unica è raggiungibile a piedi: musei, piazze storiche e ristoranti. L'appartamento è ottimamente collegato con la metropolitana (Linea A, fermata Barberini) e numerosi autobus, con parcheggi disponibili nelle vicinanze.",
    distances: [
      { name: "Villa Borghese", time: "5 min a piedi" },
      { name: "Piazza Barberini", time: "10 min a piedi" },
      { name: "Piazza di Spagna", time: "10 min a piedi" },
      { name: "Fontana di Trevi", time: "meno di 15 min a piedi" },
    ],
    transport: [
      { type: "Metro", line: "Linea A", stop: "Barberini", detail: "" },
      { type: "Bus", line: "", stop: "Via Veneto / Villa Borghese", detail: "Diverse linee" },
      { type: "Bus turistico", line: "Hop-on Hop-off", stop: "Spanish Steps", detail: "Fermata in Via Ludovisi" },
    ],
    parking: "Parcheggi auto a pagamento in strada o coperti nella zona.",
    openMaps: "Apri su Google Maps",
    transportLabel: "Trasporti",
    parkingLabel: "Parcheggio",
  },

  // ── Why Direct ───────────────────────────────────────────
  whyDirect: {
    tagline: "Vantaggi",
    headline: "Perché prenotare dal sito ufficiale",
    intro: "Dal sito ufficiale puoi scegliere le date, vedere il prezzo diretto e procedere al pagamento online quando il calendario risulta libero.",
    items: [
      {
        title: "Contatto diretto con l'host",
        description: "Parla direttamente con Demo host per qualsiasi domanda o esigenza.",
      },
      {
        title: "Date e prezzo subito",
        description: "Scegli check-in, check-out e ospiti per vedere il totale calcolato dal sito.",
      },
      {
        title: "Pagamento online",
        description: "Se le date sono libere puoi procedere direttamente al pagamento online.",
      },
      {
        title: "Prezzo diretto e pagamento online",
        description: "Scegli le date, controlla il totale calcolato dal sito e procedi al pagamento se il calendario risulta libero.",
      },
      {
        title: "Blocco interno",
        description: "Dopo il pagamento le date vengono salvate e bloccate nel calendario interno.",
      },
      {
        title: "Meno passaggi",
        description: "Niente preventivo manuale obbligatorio quando prezzo e disponibilità sono chiari.",
      },
    ],
  },

  // ── Booking / Request ────────────────────────────────────
  booking: {
    tagline: "Prenotazione Diretta",
    headline: "Scegli le date e paga online",
    intro:
      "Controlla disponibilità e prezzo dal calendario, inserisci i dati essenziali e procedi al pagamento online tramite Stripe Checkout.",
    steps: [
      { title: "Scegli date e ospiti", description: "Seleziona check-in, check-out e numero di ospiti." },
      { title: "Vedi prezzo e disponibilità", description: "Il sito calcola il totale e controlla calendario interno e iCal importati." },
      { title: "Procedi al pagamento", description: "Se le date sono libere, puoi continuare direttamente su Stripe Checkout." },
      { title: "Date bloccate", description: "Dopo il pagamento le date vengono registrate e bloccate nel calendario interno." },
    ],
    form: {
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "La tua email",
      phone: "Telefono",
      phonePlaceholder: "Il tuo numero WhatsApp",
      guests: "Ospiti",
      guestSingular: "ospite",
      guestPlural: "ospiti",
      checkIn: "Check-In",
      checkOut: "Check-Out",
      message: "Messaggio (opzionale)",
      messagePlaceholder: "Richieste particolari, domande...",
    },
    submit: {
      button: "Invia richiesta",
      loading: "Invio in corso...",
      success: "Pagamento avviato. Segui Stripe Checkout per completare la prenotazione.",
      validationError: "Controlla i campi: inserisci nome, date valide e almeno email o telefono.",
      backendUnavailable: "Il sistema automatico non e disponibile. Puoi inviare la richiesta via WhatsApp o email.",
      genericError: "Non siamo riusciti a inviare la richiesta. Puoi usare WhatsApp o email come fallback.",
      emailPartial: "Richiesta registrata, ma l'invio email non e completo. Puoi usare WhatsApp o email qui sotto.",
      fallbackIntro: "In alternativa puoi usare i contatti diretti.",
      notConfirmed: "La prenotazione viene registrata dopo pagamento completato.",
      noPayment: "I dati carta sono gestiti da Stripe Checkout, non dal sito.",
    },
    emailButton: "Invia richiesta via email",
    whatsappButton: "Scrivi su WhatsApp",
    fallback: "Contatti in fase di configurazione. Torna presto per inviare la tua richiesta.",
    microtrust: ["Prezzo diretto", "Date controllate", "Pagamento online"],
    infoTitle: "Come funziona la prenotazione",
    infoText:
      "Il sito usa prezzi interni e calendari collegati per permettere una prenotazione diretta rapida. Se trova un conflitto evidente, blocca il pagamento.",
    infoBullets: [
      "Nessun dato carta viene gestito dal sito",
      "Dopo il pagamento le date vengono bloccate nel calendario interno",
      "Demo host riceve una notifica e controlla anche Airbnb/Booking",
      "Per dubbi puoi usare email o WhatsApp come contatto diretto",
    ],
    confirmLabel: "Pagamento online sicuro",
    capacityLabel: "ospiti",
    whatsappBase: "Ciao, vorrei verificare la disponibilità di Domus Juliae",
    whatsappDates: " dal {checkIn} al {checkOut}",
    whatsappGuests: " per {guests} ospiti",
    emailSubject: "Richiesta disponibilità Domus Juliae",
    emailTemplate: {
      name: "Nome:",
      checkIn: "Check-in:",
      checkOut: "Check-out:",
      guests: "Ospiti:",
      body: "Vorrei verificare la disponibilità di Domus Juliae per le date indicate.\nGrazie."
    },
  },

  // ── Testimonials ─────────────────────────────────────────
  testimonials: {
    tagline: "Recensioni Verificate",
    headline: "Amato dagli ospiti su Airbnb",
    intro:
      `Valutazione ${property.rating.score.toLocaleString("it-IT")}/5 su ${property.rating.reviewCount} recensioni Airbnb, verificata il 4 ottobre 2026. Leggi le esperienze degli ospiti e i dati aggiornati sull'annuncio originale.`,
    cards: [
      { value: `${property.rating.score.toLocaleString("it-IT")}/5`, label: "Valutazione Airbnb", sublabel: `su ${property.rating.reviewCount} recensioni` },
      { value: "Superhost", label: "Status Airbnb", sublabel: "Riconoscimento per ospitalità eccellente" },
      { value: "5 stelle", label: "Check-in eccezionale", sublabel: "Valutato dagli ospiti su Airbnb" },
      { value: "Area comoda", label: "Zona pedonale e ben servita", sublabel: "Ideale per spostarsi a piedi" },
      { value: "181 Mbps", label: "Wi-Fi veloce", sublabel: "Ideale anche per lavoro da remoto" },
      { value: "Accoglienza personale", label: "Host: Demo host", sublabel: "Ti accoglie di persona all'arrivo" },
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────
  faq: {
    tagline: "Informazioni Utili",
    headline: "Domande frequenti",
    intro: "Tutto quello che devi sapere su Domus Juliae e sulla prenotazione diretta.",
    items: [
      { question: "Quanti ospiti può ospitare Domus Juliae?", answer: "L'appartamento può ospitare fino a 4 persone, con 3 camere da letto, 1 letto matrimoniale, 2 letti singoli e 1 bagno." },
      { question: "Dove si trova l'appartamento?", answer: "Domus Juliae si trova nel Rione Ludovisi, a pochi passi da Via Veneto. Villa Borghese è a 5 minuti a piedi, Piazza Barberini e Piazza di Spagna a 10 minuti, Fontana di Trevi a meno di 15 minuti. La fermata metro più vicina è Barberini (Linea A)." },
      { question: "La disponibilità è controllata subito?", answer: "Sì. Il sito controlla le date usando blocchi interni e calendari iCal importati. Se trova un conflitto evidente, il pagamento viene bloccato." },
      { question: "Devo pagare subito?", answer: "Paghi online solo se scegli date valide, il prezzo viene calcolato e il calendario risulta libero. Il pagamento è gestito da Stripe Checkout." },
      { question: "Come avviene il check-in?", answer: "Il check-in è valutato 5 stelle su Airbnb. L'host Demo host accoglie gli ospiti di persona. Orari e dettagli specifici vengono comunicati in fase di conferma." },
      { question: "C'è l'ascensore?", answer: "Sì, l'edificio è dotato di ascensore. Tuttavia, l'appartamento è accessibile attraversando il chiostro dello stabile ed è necessario salire 5 gradini prima di raggiungere l'ascensore." },
      { question: "Il Wi-Fi è veloce?", answer: "Sì. L'appartamento dispone di Wi-Fi con velocità di 181 Mbps, ideale anche per chi ha necessità di lavoro da remoto. È presente anche uno spazio di lavoro dedicato." },
      { question: "La tassa di soggiorno è inclusa?", answer: "Sì. Il totale include €0 di tassa di soggiorno per ogni ospite e per ogni notte, oltre a €50 fissi di pulizia per l'intero soggiorno." },
      { question: "Sono presenti lavatrice o asciugatrice?", answer: "No, l'appartamento non dispone di lavatrice né asciugatrice. Sono disponibili lavanderie nelle vicinanze." },
      { question: "Come posso prenotare direttamente?", answer: "Vai alla sezione prenotazione, scegli date e ospiti, controlla prezzo e disponibilità e procedi al pagamento online. Per dubbi puoi contattare Demo host via email o WhatsApp." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    navigationLabel: "Navigazione",
    contactLabel: "Contatti",
    quickLinks: [
      { label: "Home", page: "home" },
      { label: "Appartamento", page: "home", anchor: "apartment" },
      { label: "Posizione", page: "home", anchor: "location" },
      { label: "Galleria", page: "gallery" },
      { label: "Informazioni essenziali", page: "facts" },
      { label: "FAQ", page: "home", anchor: "faq" },
      { label: "Verifica date e prezzo", page: "home", anchor: "booking" },
    ],
    legalLinks: {
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      terms: "Termini e Condizioni",
    },
    copyright: "Tutti i diritti riservati.",
  },

  // ── Gallery Page ─────────────────────────────────────────
  galleryPage: {
    tagline: "Galleria",
    headline: "Gli ambienti della casa",
    intro: "Una raccolta ordinata degli spazi, per ambiente, con lo stesso tono sobrio e misurato che definisce il soggiorno in Domus Juliae.",
    ctaTagline: "Prossimo Passo",
    ctaHeadline: "Per disponibilità o informazioni",
    ctaText: "Se desideri verificare le date o ricevere qualche dettaglio in più sulla casa, puoi proseguire con la prenotazione diretta.",
    ctaPrimary: "Verifica date e prezzo",
    ctaSecondary: "Richiedi informazioni",
    sections: [
      { id: "soggiorno", label: "Soggiorno", title: "Soggiorno" },
      { id: "camera-matrimoniale", label: "Camera matrimoniale", title: "Camera matrimoniale" },
      { id: "camere-singole", label: "Camere singole", title: "Camere singole" },
      { id: "cucina", label: "Cucina", title: "Cucina" },
      { id: "bagno", label: "Bagno", title: "Bagno" },
    ],
  },

  // ── Legal Page Labels ────────────────────────────────────
  legal: {
    privacy: { title: "Privacy Policy", subtitle: "Informativa Privacy", lastUpdated: "5 luglio 2026" },
    cookie: { title: "Cookie Policy", subtitle: "Informativa Cookie", lastUpdated: "5 luglio 2026" },
    terms: { title: "Termini e Condizioni", subtitle: "Condizioni d'Uso", lastUpdated: "11 ottobre 2026" },
    backHome: "Torna alla Home",
  },

  // ── Sticky CTA ───────────────────────────────────────────
  stickyCta: {
    label: "Verifica date e prezzo",
    ariaLabel: "Verifica date e prezzo",
  },

  // ── Amenities ────────────────────────────────────────────
  amenities: {
    tagline: "Dotazioni",
    headline: "Tutto il necessario per il soggiorno",
    included: [
      "Wi-Fi veloce 181 Mbps", "Aria condizionata", "Riscaldamento centralizzato",
      "Macchina Nespresso", "Moka", "TV", "Cucina attrezzata", "Piano cottura a gas",
      "Forno", "Frigorifero e freezer", "Bollitore", "Asciugacapelli", "Bidet",
      "Ascensore", "Spazio di lavoro dedicato", "Ingresso privato",
      "Allarme antincendio", "Rilevatore monossido", "Estintore",
    ],
    notAvailable: ["Lavatrice", "Asciugatrice", "Telecamere esterne"],
    notAvailableLabel: "Non disponibile",
  },
};

export default it;
