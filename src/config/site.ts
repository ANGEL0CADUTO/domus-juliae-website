// ────────────────────────────────────────────────────────────
// Domus Juliae — Configurazione centrale del sito
// Tutti i dati della struttura, contatti, copy CTA e SEO
// sono centralizzati qui per manutenibilità e futuro multilingua.
// ────────────────────────────────────────────────────────────

// ── Placeholder convention ──────────────────────────────────
// Valori che iniziano con "TODO_" sono placeholder.
// I componenti devono usare isConfigured() per nascondere
// blocchi con dati mancanti, così l'utente finale non li vede.

const TODO_PREFIX = "TODO_";

/** Restituisce true se il valore non è un placeholder TODO_ */
export function isConfigured(value: string): boolean {
  return !value.startsWith(TODO_PREFIX) && value.length > 0;
}

/** Restituisce l'URL base del sito. Usa dominio configurato o fallback Vercel. */
export function getBaseUrl(): string {
  if (isConfigured(contact.domain)) {
    return `https://${contact.domain}`;
  }
  return "https://example.com";
}

// ── Struttura ───────────────────────────────────────────────

export const property = {
  name: "Domus Juliae",
  fullName: "Via Veneto - Domus Juliae",
  type: "Casa vacanze",
  typeFull: "Appartamento turistico / Casa vacanze",
  host: "Demo host",
  cin: "DEMO-PROPERTY",

  capacity: {
    guests: 4,
    bedrooms: 3,
    beds: 3,
    bedConfiguration: "1 letto matrimoniale e 2 letti singoli",
    bathrooms: 1,
  },

  rating: {
    score: 4.93,
    maxScore: 5,
    reviewCount: 29,
    platform: "Airbnb",
    status: "Superhost",
    verifiedOn: "2026-10-04",
  },

  highlights: [
    { label: "Check-in eccezionale", detail: "5 stelle" },
    { label: "Area comoda", detail: "Zona pedonale" },
    { label: "Wi-Fi veloce", detail: "181 Mbps" },
    { label: "Posizione centrale", detail: "Via Veneto / Rione Ludovisi" },
    { label: "Ascensore", detail: "5 gradini prima dell'ascensore" },
    { label: "Accoglienza personale", detail: "L'host accoglie di persona" },
  ],

  description: {
    short:
      "Domus Juliae è un appartamento con 3 camere per 4 ospiti, a pochi minuti da Villa Borghese, Piazza Barberini, Piazza di Spagna e Fontana di Trevi.",
    full: "La Dolce Vita di Via Veneto: appartamento con tre camere da letto, soggiorno con angolo cottura, bagno e cucina. A pochi minuti a piedi da Villa Borghese, Piazza Barberini, Piazza di Spagna e Fontana di Trevi. Servito da trasporti pubblici, bar e ristoranti.",
    access:
      "L'appartamento è accessibile attraversando il chiostro dello stabile. Prima dell'ascensore è necessario salire 5 gradini.",
  },
} as const;

// ── Contatti ────────────────────────────────────────────────

export const contact = {
  phone: "TODO_DEMO",
  email: "hello@example.com",
  whatsapp:"0000000000",
  domain: "example.com",
  googleMapsUrl: "TODO_DEMO",
  airbnbUrl: "TODO_DEMO",
} as const;

// ── Posizione ───────────────────────────────────────────────

export const location = {
  address: "Demo address",
  cap: "00187",
  city: "Roma",
  province: "RM",
  country: "Italia",
  zone: "Rione Ludovisi",
  neighborhood: "Via Veneto",

  distances: [
    { name: "Villa Borghese", time: "5 min a piedi", icon: "tree" as const },
    { name: "Piazza Barberini", time: "10 min a piedi", icon: "map-pin" as const },
    { name: "Piazza di Spagna", time: "10 min a piedi", icon: "map-pin" as const },
    { name: "Fontana di Trevi", time: "meno di 15 min a piedi", icon: "map-pin" as const },
  ],

  transport: [
    { type: "Metro", line: "Linea A", stop: "Barberini", detail: "" },
    { type: "Bus", line: "", stop: "Via Veneto / Villa Borghese", detail: "Diverse linee" },
    {
      type: "Bus turistico",
      line: "Hop-on Hop-off",
      stop: "Spanish Steps",
      detail: "Fermata in Via Ludovisi",
    },
  ],

  parking:
    "Parcheggi auto a pagamento in strada o coperti nella zona.",
} as const;

// ── Dotazioni ───────────────────────────────────────────────

export const amenities = {
  included: [
    { name: "Wi-Fi veloce 181 Mbps", category: "Connettività", icon: "wifi" },
    { name: "Aria condizionata", category: "Comfort", icon: "wind" },
    { name: "Riscaldamento centralizzato", category: "Comfort", icon: "thermometer" },
    { name: "Macchina Nespresso", category: "Cucina", icon: "coffee" },
    { name: "Moka", category: "Cucina", icon: "coffee" },
    { name: "TV", category: "Intrattenimento", icon: "tv" },
    { name: "Cucina attrezzata", category: "Cucina", icon: "utensils" },
    { name: "Piano cottura a gas", category: "Cucina", icon: "flame" },
    { name: "Forno", category: "Cucina", icon: "flame" },
    { name: "Frigorifero e freezer", category: "Cucina", icon: "snowflake" },
    { name: "Bollitore", category: "Cucina", icon: "coffee" },
    { name: "Asciugacapelli", category: "Bagno", icon: "wind" },
    { name: "Bidet", category: "Bagno", icon: "droplets" },
    { name: "Ascensore", category: "Accesso", icon: "arrow-up" },
    { name: "Spazio di lavoro dedicato", category: "Lavoro", icon: "monitor" },
    { name: "Ingresso privato", category: "Accesso", icon: "door-open" },
    { name: "Allarme antincendio", category: "Sicurezza", icon: "shield" },
    { name: "Rilevatore monossido", category: "Sicurezza", icon: "shield" },
    { name: "Estintore", category: "Sicurezza", icon: "shield" },
  ],

  notAvailable: [
    "Lavatrice",
    "Asciugatrice",
    "Telecamere esterne",
  ],

  cleaning: "Nell'appartamento non sono presenti lavatrice o asciugatrice; sono disponibili lavanderie nelle vicinanze.",
} as const;

// ── CTA e messaggi ──────────────────────────────────────────

export const cta = {
  primary: "Verifica date e prezzo",
  secondary: "Scopri l'appartamento",
  gallery: "Guarda la galleria",

  microtrust: [
    "Prezzo diretto",
    "Date controllate",
    "Pagamento online",
  ],
} as const;

// ── SEO ─────────────────────────────────────────────────────

export const seo = {
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
} as const;

// ── Vantaggi prenotazione diretta ───────────────────────────

export const directAdvantages = [
  {
    title: "Contatto diretto con l'host",
    description: "Parla direttamente con Demo host per qualsiasi domanda o esigenza.",
    icon: "message-circle",
  },
  {
    title: "Date e prezzo subito",
    description: "Scegli check-in, check-out e ospiti per vedere il totale calcolato dal sito.",
    icon: "check-circle",
  },
  {
    title: "Pagamento online",
    description: "Se le date sono libere puoi procedere direttamente al pagamento online.",
    icon: "user",
  },
  {
    title: "Prezzo diretto",
    description: "Prenotando dal sito ufficiale eviti passaggi e commissioni di portale.",
    icon: "tag",
  },
  {
    title: "Calendari controllati",
    description: "Il sito controlla blocchi interni e calendari iCal importati prima del pagamento.",
    icon: "search",
  },
  {
    title: "Conferma operativa",
    description:
      "Dopo il pagamento le date vengono bloccate e Demo host invia le informazioni pratiche di check-in.",
    icon: "tag",
  },
] as const;
