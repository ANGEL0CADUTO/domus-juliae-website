// ────────────────────────────────────────────────────────────
// Domus Juliae — English Content
// Natural tourism-grade copy, no machine translation.
// ────────────────────────────────────────────────────────────

import type { SiteContent } from "./types";
import { property } from "../config/site";

const en: SiteContent = {
  locale: "en",

  seo: {
    home: {
      title: "Holiday Apartment near Via Veneto Rome | Domus Juliae",
      description:
        "Domus Juliae is a 3-bedroom holiday apartment in central Rome near Via Veneto and Villa Borghese, for up to 4 guests, with fast Wi-Fi and direct online booking.",
      keywords: [
        "holiday apartment near Via Veneto Rome",
        "vacation rental near Villa Borghese",
        "3-bedroom apartment in Rome city centre",
        "Rome apartment for families",
        "short-term rental in Rione Ludovisi",
        "apartment near Spanish Steps and Trevi Fountain",
      ],
    },
    gallery: {
      title: "Photo Gallery | Holiday Apartment near Via Veneto Rome",
      description:
        "Photo gallery of Domus Juliae: living room, bedrooms, kitchen and bathroom. Holiday apartment near Via Veneto, central Rome.",
    },
    facts: {
      title: "Essential information about the apartment in Rome",
      description:
        "Essential facts about Domus Juliae at Demo address, Rome: CIN, capacity, bedrooms, amenities, contacts and direct booking.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy policy for Domus Juliae, holiday apartment near Via Veneto, Rome.",
    },
    cookie: {
      title: "Cookie Policy",
      description:
        "Cookie policy for Domus Juliae, holiday apartment near Via Veneto, Rome.",
    },
    terms: {
      title: "Terms and Conditions",
      description:
        "Terms and conditions of use for Domus Juliae, holiday apartment near Via Veneto, Rome.",
    },
  },

  nav: {
    links: [
      { name: "Home", page: "home" },
      { name: "Apartment", anchor: "#apartment" },
      { name: "Location", anchor: "#location" },
      { name: "Gallery", page: "gallery" },
      { name: "FAQ", anchor: "#faq" },
    ],
    ctaLabel: "Check dates and price",
    brandSub: "Via Veneto • Rome",
    mobileMenuOpen: "Open navigation menu",
    mobileMenuClose: "Close navigation menu",
  },

  hero: {
    ratingLabel: "on",
    headline: "Holiday apartment near Via Veneto,",
    headlineAccent: "in the heart of Rome",
    subtitle:
      "Domus Juliae is a 3-bedroom apartment for up to 4 guests, just minutes from Villa Borghese, Piazza Barberini, the Spanish Steps and the Trevi Fountain.",
    ctaPrimary: "Check dates and price",
    ctaSecondary: "Explore the apartment",
    statsGuests: "guests",
    statsBedrooms: "bedrooms",
    statsBeds: "beds",
    statsBathroom: "bathroom",
  },

  trust: {
    rating: "Rating",
    reviews: "reviews",
    superhost: "Superhost",
    wifi: "Wi-Fi",
    cin: "CIN",
    walkable: "Walkable",
  },

  homeGallery: {
    tagline: "Photo Gallery",
    headline: "A look inside",
    ctaLabel: "View Full Gallery",
  },

  features: {
    tagline: "Welcome Home",
    headline: "Holiday apartment",
    headlineAccent: "near Villa Borghese",
    intro:
      "Domus Juliae is a vacation rental on Via Veneto, in the Rione Ludovisi district. A 3-bedroom apartment for 4 guests where elegant interiors meet the convenience of a prime central location.",
    quote: "An authentic Roman stay in the heart of the city.",
    items: [
      {
        title: "Prime location",
        description:
          "Steps away from Via Veneto, Villa Borghese, the Spanish Steps and the Trevi Fountain. Everything within walking distance.",
      },
      {
        title: "Complete apartment",
        description:
          "3 bedrooms, living room with kitchenette, fully equipped kitchen and full bathroom for a comfortable stay.",
      },
      {
        title: "Recognised hospitality",
        description: `Rated ${property.rating.score.toLocaleString("en-GB")}/5 on Airbnb from ${property.rating.reviewCount} reviews. See the listing for the latest figures.`,
      },
      {
        title: "Live like a local",
        description:
          "In the Rione Ludovisi district, surrounded by historic cafés, restaurants and the authentic Dolce Vita atmosphere.",
      },
    ],
  },

  apartment: {
    tagline: "The Apartment",
    headline: "3-bedroom apartment",
    headlineAccent: "in central Rome",
    fullDescription:
      "Domus Juliae is an entire holiday apartment at Demo address, in Rome's Rione Ludovisi neighbourhood near Via Veneto. It sleeps up to 4 guests across three separate bedrooms: one double bedroom and two single bedrooms. This layout gives families and travelling companions their own sleeping spaces, with a living room, equipped kitchen and one shared bathroom. Wi-Fi, air conditioning and a dedicated workspace make it practical to relax or work between sightseeing trips. Villa Borghese is around a five-minute walk away, while the Barberini metro station connects the neighbourhood to the rest of Rome. Explore the room-by-room photo gallery before choosing your stay dates.",
    accessNote:
      "The apartment is accessed through the building's courtyard. There are 5 steps before the lift.",
    galleryLink: "View the Gallery",
    amenityLabels: {
      guests: "guests",
      bedrooms: "bedrooms",
      beds: "beds",
      bathroom: "full bathroom",
      kitchen: "Fully equipped kitchen",
      ac: "Air conditioning",
      wifi: "Wi-Fi 181 Mbps",
      elevator: "Lift",
      elevatorNote: "5 steps before the lift",
      host: "Personal welcome by host",
    },
  },

  location: {
    tagline: "Location",
    headline: "Holiday apartment in",
    headlineAccent: "Rione Ludovisi",
    intro:
      "Domus Juliae is located just steps from the legendary Via Veneto, in one of Rome's most prestigious neighbourhoods. Everything that makes the city unique is within walking distance: museums, historic piazzas and restaurants. The apartment is exceptionally well-connected by metro (Line A, Barberini stop) and numerous buses, with convenient parking options available nearby.",
    distances: [
      { name: "Villa Borghese", time: "5 min walk" },
      { name: "Piazza Barberini", time: "10 min walk" },
      { name: "Spanish Steps", time: "10 min walk" },
      { name: "Trevi Fountain", time: "less than 15 min walk" },
    ],
    transport: [
      { type: "Metro", line: "Line A", stop: "Barberini", detail: "" },
      { type: "Bus", line: "", stop: "Via Veneto / Villa Borghese", detail: "Several lines" },
      { type: "Tourist bus", line: "Hop-on Hop-off", stop: "Spanish Steps", detail: "Stop on Via Ludovisi" },
    ],
    parking: "Paid street or covered parking available in the area.",
    openMaps: "Open on Google Maps",
    transportLabel: "Transport",
    parkingLabel: "Parking",
  },

  whyDirect: {
    tagline: "Advantages",
    headline: "Why book through the official website",
    intro: "On the official website you can choose dates, see the direct price and continue to online payment when the calendar is free.",
    items: [
      {
        title: "Direct contact with the host",
        description: "Speak directly with Demo host for any questions or special requirements.",
      },
      {
        title: "Dates and price first",
        description: "Choose check-in, check-out and guests to see the total calculated by the site.",
      },
      {
        title: "Online payment",
        description: "If the dates are free, you can continue directly to online payment.",
      },
      {
        title: "Direct price and online payment",
        description: "Choose dates, check the total calculated by the site and continue to payment if the calendar is free.",
      },
      {
        title: "Internal block",
        description: "After payment, the dates are saved and blocked in the internal calendar.",
      },
      {
        title: "Fewer steps",
        description: "No mandatory manual quote when price and availability are clear.",
      },
    ],
  },

  booking: {
    tagline: "Direct Booking",
    headline: "Pick dates and pay online",
    intro:
      "Check availability and price from the calendar, enter the essential details and continue to online payment through Stripe Checkout.",
    steps: [
      { title: "Choose dates and guests", description: "Select check-in, check-out and number of guests." },
      { title: "See price and availability", description: "The site calculates the total and checks internal and imported iCal calendars." },
      { title: "Continue to payment", description: "If the dates are free, you can continue directly to Stripe Checkout." },
      { title: "Dates blocked", description: "After payment, the dates are registered and blocked in the internal calendar." },
    ],
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "Your email",
      phone: "Phone",
      phonePlaceholder: "Your WhatsApp number",
      guests: "Guests",
      guestSingular: "guest",
      guestPlural: "guests",
      checkIn: "Check-In",
      checkOut: "Check-Out",
      message: "Message (optional)",
      messagePlaceholder: "Special requests, questions...",
    },
    submit: {
      button: "Send request",
      loading: "Sending...",
      success: "Payment started. Follow Stripe Checkout to complete the booking.",
      validationError: "Please check the fields: enter name, valid dates and at least email or phone.",
      backendUnavailable: "The automatic system is not available. You can send the request by WhatsApp or email.",
      genericError: "We could not send the request. You can use WhatsApp or email as fallback.",
      emailPartial: "Request saved, but email delivery is not complete. You can use WhatsApp or email below.",
      fallbackIntro: "Alternatively, you can use the direct contact options.",
      notConfirmed: "The booking is registered after completed payment.",
      noPayment: "Card data is handled by Stripe Checkout, not by this website.",
    },
    emailButton: "Send enquiry by email",
    whatsappButton: "Message on WhatsApp",
    fallback: "Contact details are being configured. Please check back soon.",
    microtrust: ["Direct price", "Dates checked", "Online payment"],
    infoTitle: "How direct booking works",
    infoText:
      "The site uses internal prices and connected calendars for a fast direct booking. If it finds a clear conflict, payment is blocked.",
    infoBullets: [
      "The site never handles card data",
      "After payment, dates are blocked in the internal calendar",
      "Demo host is notified and checks Airbnb/Booking as well",
      "For questions, you can still use email or WhatsApp",
    ],
    confirmLabel: "Secure online payment",
    capacityLabel: "guests",
    whatsappBase: "Hello, I'd like to check availability at Domus Juliae",
    whatsappDates: " from {checkIn} to {checkOut}",
    whatsappGuests: " for {guests} guests",
    emailSubject: "Availability enquiry – Domus Juliae",
    emailTemplate: {
      name: "Name:",
      checkIn: "Check-in:",
      checkOut: "Check-out:",
      guests: "Guests:",
      body: "I would like to check the availability of Domus Juliae for the dates above.\nThank you."
    },
  },

  testimonials: {
    tagline: "Verified Reviews",
    headline: "Loved by guests on Airbnb",
    intro:
      `Rated ${property.rating.score.toLocaleString("en-GB")}/5 from ${property.rating.reviewCount} Airbnb reviews, checked on 4 October 2026. Read guests' experiences and the latest figures on the original listing.`,
    cards: [
      { value: `${property.rating.score.toLocaleString("en-GB")}/5`, label: "Airbnb rating", sublabel: `from ${property.rating.reviewCount} reviews` },
      { value: "Superhost", label: "Airbnb status", sublabel: "Recognised for outstanding hospitality" },
      { value: "5 stars", label: "Exceptional check-in", sublabel: "Rated by guests on Airbnb" },
      { value: "Great location", label: "Walkable and well-connected", sublabel: "Ideal for getting around on foot" },
      { value: "181 Mbps", label: "Fast Wi-Fi", sublabel: "Ideal for remote working too" },
      { value: "Personal welcome", label: "Host: Demo host", sublabel: "Welcomes you in person on arrival" },
    ],
  },

  faq: {
    tagline: "Useful Information",
    headline: "Frequently Asked Questions",
    intro: "Everything you need to know about Domus Juliae and direct booking.",
    items: [
      { question: "How many guests can Domus Juliae accommodate?", answer: "The apartment accommodates up to 4 guests, with 3 bedrooms, 1 double bed, 2 single beds and 1 bathroom." },
      { question: "Where is the apartment located?", answer: "Domus Juliae is in the Rione Ludovisi district, just steps from Via Veneto. Villa Borghese is a 5-minute walk, Piazza Barberini and the Spanish Steps are 10 minutes away, and the Trevi Fountain is less than 15 minutes. The nearest metro station is Barberini (Line A)." },
      { question: "Is availability checked instantly?", answer: "Yes. The site checks dates using internal blocks and imported iCal calendars. If it finds a clear conflict, payment is blocked." },
      { question: "Do I need to pay straight away?", answer: "You pay online only after choosing valid dates, seeing the calculated price and passing the calendar check. Payment is handled by Stripe Checkout." },
      { question: "How does check-in work?", answer: "Check-in is rated 5 stars on Airbnb. Host Demo host welcomes guests in person. Specific times and details are shared upon confirmation." },
      { question: "Is there a lift?", answer: "Yes, the building has a lift. However, the apartment is accessed through the building's courtyard and there are 5 steps before reaching the lift." },
      { question: "Is the Wi-Fi fast?", answer: "Yes. The apartment has Wi-Fi at 181 Mbps, ideal for remote working. A dedicated workspace is also available." },
      { question: "Is the tourist tax included?", answer: "Yes. The total includes a €0 tourist tax for each guest and each night, plus a fixed €50 cleaning fee for the entire stay." },
      { question: "Is there a washing machine or dryer?", answer: "No, the apartment does not have a washing machine or dryer. Laundromats are available nearby." },
      { question: "How can I book direct?", answer: "Go to the booking section, choose dates and guests, check price and availability, then continue to online payment. For questions, you can contact Demo host by email or WhatsApp." },
    ],
  },

  footer: {
    navigationLabel: "Navigation",
    contactLabel: "Contact",
    quickLinks: [
      { label: "Home", page: "home" },
      { label: "Apartment", page: "home", anchor: "apartment" },
      { label: "Location", page: "home", anchor: "location" },
      { label: "Gallery", page: "gallery" },
      { label: "Facts", page: "facts" },
      { label: "FAQ", page: "home", anchor: "faq" },
      { label: "Check dates and price", page: "home", anchor: "booking" },
    ],
    legalLinks: {
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      terms: "Terms and Conditions",
    },
    copyright: "All rights reserved.",
  },

  galleryPage: {
    tagline: "Gallery",
    headline: "The rooms and spaces",
    intro: "A curated collection of the apartment's rooms, organised by area, reflecting the understated elegance that defines a stay at Domus Juliae.",
    ctaTagline: "Next Step",
    ctaHeadline: "Availability and information",
    ctaText: "If you'd like to check dates or learn more about the apartment, you can proceed with direct booking.",
    ctaPrimary: "Check dates and price",
    ctaSecondary: "Request information",
    sections: [
      { id: "soggiorno", label: "Living room", title: "Living room" },
      { id: "camera-matrimoniale", label: "Double bedroom", title: "Double bedroom" },
      { id: "camere-singole", label: "Single bedrooms", title: "Single bedrooms" },
      { id: "cucina", label: "Kitchen", title: "Kitchen" },
      { id: "bagno", label: "Bathroom", title: "Bathroom" },
    ],
  },

  legal: {
    privacy: { title: "Privacy Policy", subtitle: "Privacy Notice", lastUpdated: "5 July 2026" },
    cookie: { title: "Cookie Policy", subtitle: "Cookie Notice", lastUpdated: "5 July 2026" },
    terms: { title: "Terms and Conditions", subtitle: "Terms of Use", lastUpdated: "11 October 2026" },
    backHome: "Back to Home",
  },

  stickyCta: {
    label: "Check dates and price",
    ariaLabel: "Check dates and price",
  },

  amenities: {
    tagline: "Amenities",
    headline: "Everything you need for your stay",
    included: [
      "Fast Wi-Fi 181 Mbps", "Air conditioning", "Central heating",
      "Nespresso machine", "Moka pot", "TV", "Fully equipped kitchen", "Gas hob",
      "Oven", "Fridge and freezer", "Kettle", "Hairdryer", "Bidet",
      "Lift", "Dedicated workspace", "Private entrance",
      "Smoke alarm", "Carbon monoxide detector", "Fire extinguisher",
    ],
    notAvailable: ["Washing machine", "Tumble dryer", "Exterior security cameras"],
    notAvailableLabel: "Not available",
  },
};

export default en;
