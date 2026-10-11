// ────────────────────────────────────────────────────────────
// Domus Juliae — Content Types
// Tipi condivisi tra it.ts e en.ts per garantire coerenza.
// ────────────────────────────────────────────────────────────

import type { Locale } from "../i18n/config";

export type NavLink = {
  name: string;
  page?: string;   // PageKey for localized routes
  anchor?: string;  // Anchor on same page
};

export type FooterLink = {
  label: string;
  page?: "home" | "gallery" | "facts" | "privacy" | "cookie" | "terms";
  anchor?: string;
};

export type SiteContent = {
  locale: Locale;

  seo: {
    home: { title: string; description: string; keywords: string[] };
    gallery: { title: string; description: string };
    facts: { title: string; description: string };
    privacy: { title: string; description: string };
    cookie: { title: string; description: string };
    terms: { title: string; description: string };
  };

  nav: {
    links: NavLink[];
    ctaLabel: string;
    brandSub: string;
    mobileMenuOpen: string;
    mobileMenuClose: string;
  };

  hero: {
    ratingLabel: string;
    headline: string;
    headlineAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsGuests: string;
    statsBedrooms: string;
    statsBeds: string;
    statsBathroom: string;
  };

  trust: {
    rating: string;
    reviews: string;
    superhost: string;
    wifi: string;
    cin: string;
    walkable: string;
  };

  homeGallery: {
    tagline: string;
    headline: string;
    ctaLabel: string;
  };

  features: {
    tagline: string;
    headline: string;
    headlineAccent: string;
    intro: string;
    quote: string;
    items: { title: string; description: string }[];
  };

  apartment: {
    tagline: string;
    headline: string;
    headlineAccent: string;
    fullDescription: string;
    accessNote: string;
    galleryLink: string;
    amenityLabels: {
      guests: string;
      bedrooms: string;
      beds: string;
      bathroom: string;
      kitchen: string;
      ac: string;
      wifi: string;
      elevator: string;
      elevatorNote: string;
      host: string;
    };
  };

  location: {
    tagline: string;
    headline: string;
    headlineAccent: string;
    intro: string;
    distances: { name: string; time: string }[];
    transport: { type: string; line: string; stop: string; detail: string }[];
    parking: string;
    openMaps: string;
    transportLabel: string;
    parkingLabel: string;
  };

  whyDirect: {
    tagline: string;
    headline: string;
    intro: string;
    items: { title: string; description: string }[];
  };

  booking: {
    tagline: string;
    headline: string;
    intro: string;
    steps: { title: string; description: string }[];
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      guests: string;
      guestSingular: string;
      guestPlural: string;
      checkIn: string;
      checkOut: string;
      message: string;
      messagePlaceholder: string;
    };
    submit: {
      button: string;
      loading: string;
      success: string;
      validationError: string;
      backendUnavailable: string;
      genericError: string;
      emailPartial: string;
      fallbackIntro: string;
      notConfirmed: string;
      noPayment: string;
    };
    emailButton: string;
    whatsappButton: string;
    fallback: string;
    microtrust: string[];
    infoTitle: string;
    infoText: string;
    infoBullets: string[];
    confirmLabel: string;
    capacityLabel: string;
    whatsappBase: string;
    whatsappDates: string;
    whatsappGuests: string;
    emailSubject: string;
    emailTemplate: {
      name: string;
      checkIn: string;
      checkOut: string;
      guests: string;
      body: string;
    };
  };

  testimonials: {
    tagline: string;
    headline: string;
    intro: string;
    cards: { value: string; label: string; sublabel: string }[];
  };

  faq: {
    tagline: string;
    headline: string;
    intro: string;
    items: { question: string; answer: string }[];
  };

  footer: {
    navigationLabel: string;
    contactLabel: string;
    quickLinks: FooterLink[];
    legalLinks: { privacy: string; cookie: string; terms: string };
    copyright: string;
  };

  galleryPage: {
    tagline: string;
    headline: string;
    intro: string;
    ctaTagline: string;
    ctaHeadline: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sections: { id: string; label: string; title: string }[];
  };

  legal: {
    privacy: { title: string; subtitle: string; lastUpdated: string };
    cookie: { title: string; subtitle: string; lastUpdated: string };
    terms: { title: string; subtitle: string; lastUpdated: string };
    backHome: string;
  };

  stickyCta: {
    label: string;
    ariaLabel: string;
  };

  amenities: {
    tagline: string;
    headline: string;
    included: string[];
    notAvailable: string[];
    notAvailableLabel: string;
  };
};
