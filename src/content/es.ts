// ────────────────────────────────────────────────────────────
// Domus Juliae — Spanish Content
// Natural tourism-grade copy, no machine translation.
// ────────────────────────────────────────────────────────────

import type { SiteContent } from "./types";
import { property } from "../config/site";

const es: SiteContent = {
  locale: "es",

  seo: {
    home: {
      title: "Apartamento vacacional cerca de Via Veneto Roma | Domus Juliae",
      description:
        "Domus Juliae es un apartamento turístico de 3 habitaciones en el centro de Roma, cerca de Via Veneto y Villa Borghese, para 4 huéspedes, con Wi-Fi rápido y reserva directa online.",
      keywords: [
        "apartamento vacacional cerca de Via Veneto Roma",
        "alojamiento turístico cerca de Villa Borghese",
        "apartamento de 3 habitaciones en el centro de Roma",
        "apartamento para familias en Roma",
        "alojamiento cerca de Plaza de España",
      ],
    },
    gallery: {
      title: "Galería de fotos | Apartamento cerca de Via Veneto Roma",
      description:
        "Galería de fotos de Domus Juliae: salón, habitaciones, cocina y baño. Apartamento vacacional cerca de Via Veneto, en el centro de Roma.",
    },
    facts: {
      title: "Información esencial sobre el apartamento en Roma",
      description:
        "Información esencial sobre Domus Juliae en Demo address, Roma: CIN, capacidad, dormitorios, equipamiento, contactos y reserva directa.",
    },
    privacy: {
      title: "Política de privacidad",
      description:
        "Política de privacidad para Domus Juliae, apartamento vacacional cerca de Via Veneto, Roma.",
    },
    cookie: {
      title: "Política de cookies",
      description:
        "Política de cookies para Domus Juliae, apartamento vacacional cerca de Via Veneto, Roma.",
    },
    terms: {
      title: "Términos y Condiciones",
      description:
        "Términos y condiciones de uso para Domus Juliae, apartamento vacacional cerca de Via Veneto, Roma.",
    },
  },

  nav: {
    links: [
      { name: "Inicio", page: "home" },
      { name: "Apartamento", anchor: "#apartment" },
      { name: "Ubicación", anchor: "#location" },
      { name: "Galería", page: "gallery" },
      { name: "FAQ", anchor: "#faq" },
    ],
    ctaLabel: "Ver fechas y precio",
    brandSub: "Via Veneto • Roma",
    mobileMenuOpen: "Abrir menú de navegación",
    mobileMenuClose: "Cerrar menú de navegación",
  },

  hero: {
    ratingLabel: "en",
    headline: "Apartamento vacacional cerca de Via Veneto,",
    headlineAccent: "en el corazón de Roma",
    subtitle:
      "Domus Juliae es un apartamento de 3 habitaciones para hasta 4 huéspedes, a solo unos minutos de Villa Borghese, Piazza Barberini, la Plaza de España y la Fontana de Trevi.",
    ctaPrimary: "Ver fechas y precio",
    ctaSecondary: "Explorar el apartamento",
    statsGuests: "huéspedes",
    statsBedrooms: "habitaciones",
    statsBeds: "camas",
    statsBathroom: "baño",
  },

  trust: {
    rating: "Valoración",
    reviews: "evaluaciones",
    superhost: "Superhost",
    wifi: "Wi-Fi",
    cin: "CIN",
    walkable: "Accesible a pie",
  },

  homeGallery: {
    tagline: "Galería de Fotos",
    headline: "Un vistazo al interior",
    ctaLabel: "Ver galería completa",
  },

  features: {
    tagline: "Bienvenido a casa",
    headline: "Apartamento vacacional",
    headlineAccent: "cerca de Villa Borghese",
    intro:
      "Domus Juliae es un alojamiento turístico en Via Veneto, en el barrio Rione Ludovisi. Un apartamento de 3 habitaciones para 4 huéspedes donde la elegancia interior se encuentra con la comodidad de una ubicación central inmejorable.",
    quote: "Una estancia romana auténtica en el corazón de la ciudad.",
    items: [
      {
        title: "Ubicación privilegiada",
        description:
          "A pocos pasos de Via Veneto, Villa Borghese, la Plaza de España y la Fontana de Trevi. Todo está a poca distancia a pie.",
      },
      {
        title: "Apartamento completo",
        description:
          "3 habitaciones, salón con cocina americana, cocina totalmente equipada y baño completo para una estancia confortable.",
      },
      {
        title: "Hospitalidad reconocida",
        description: `Valoración de ${property.rating.score.toLocaleString("es-ES")}/5 en Airbnb con ${property.rating.reviewCount} reseñas. Consulta el anuncio para ver los datos actualizados.`,
      },
      {
        title: "Vive como un local",
        description:
          "En el barrio Rione Ludovisi, rodeado de cafés históricos, restaurantes y la auténtica atmósfera de la Dolce Vita.",
      },
    ],
  },

  apartment: {
    tagline: "El Apartamento",
    headline: "Apartamento de 3 habitaciones",
    headlineAccent: "en el centro de Roma",
    fullDescription:
      "Domus Juliae es un apartamento completo en Demo address, en el barrio Rione Ludovisi de Roma, cerca de Via Veneto. Aloja a un máximo de 4 huéspedes en tres dormitorios independientes: uno con cama doble y dos con una cama individual cada uno. La distribución permite a familias y amigos tener espacios separados para dormir, además de un salón, una cocina equipada y un baño compartido. El Wi-Fi, el aire acondicionado y un espacio de trabajo ayudan a descansar o trabajar entre las visitas. Villa Borghese está a unos cinco minutos a pie y la estación de metro Barberini conecta el barrio con el resto de Roma. Consulta las fotos de cada estancia en la galería antes de elegir las fechas.",
    accessNote:
      "Se accede al apartamento a través del patio del edificio. Hay 5 escalones antes del ascensor.",
    galleryLink: "Ver la Galería",
    amenityLabels: {
      guests: "huéspedes",
      bedrooms: "habitaciones",
      beds: "camas",
      bathroom: "baño completo",
      kitchen: "Cocina equipada",
      ac: "Aire acondicionado",
      wifi: "Wi-Fi 181 Mbps",
      elevator: "Ascensor",
      elevatorNote: "5 escalones antes del ascensor",
      host: "Bienvenida personal por parte del anfitrión",
    },
  },

  location: {
    tagline: "Ubicación",
    headline: "Apartamento vacacional en",
    headlineAccent: "Rione Ludovisi",
    intro:
      "Domus Juliae se encuentra a pocos pasos de la legendaria Via Veneto, en uno de los barrios más prestigiosos de Roma. Todo lo que hace única a la ciudad está a poca distancia a pie: museos, plazas históricas y restaurantes. El apartamento está excelentemente conectado por metro (Línea A, parada Barberini) y numerosos autobuses, con opciones de aparcamiento disponibles en las inmediaciones.",
    distances: [
      { name: "Villa Borghese", time: "5 min a pie" },
      { name: "Piazza Barberini", time: "10 min a pie" },
      { name: "Plaza de España", time: "10 min a pie" },
      { name: "Fontana de Trevi", time: "menos de 15 min a pie" },
    ],
    transport: [
      { type: "Metro", line: "Línea A", stop: "Barberini", detail: "" },
      { type: "Autobús", line: "", stop: "Via Veneto / Villa Borghese", detail: "Varias líneas" },
      { type: "Bus turístico", line: "Hop-on Hop-off", stop: "Plaza de España", detail: "Parada en Via Ludovisi" },
    ],
    parking: "Aparcamiento de pago en la calle o cubierto disponible en la zona.",
    openMaps: "Abrir en Google Maps",
    transportLabel: "Transporte",
    parkingLabel: "Aparcamiento",
  },

  whyDirect: {
    tagline: "Ventajas",
    headline: "Por qué reservar desde el sitio web oficial",
    intro: "En el sitio oficial puedes elegir fechas, ver el precio directo y continuar al pago online cuando el calendario está libre.",
    items: [
      {
        title: "Contacto directo con el anfitrión",
        description: "Habla directamente con Demo host para cualquier pregunta o necesidad especial.",
      },
      {
        title: "Fechas y precio al momento",
        description: "Elige llegada, salida y huéspedes para ver el total calculado por el sitio.",
      },
      {
        title: "Pago online",
        description: "Si las fechas están libres, puedes continuar directamente al pago online.",
      },
      {
        title: "Precio directo y pago online",
        description: "Elige las fechas, comprueba el total calculado por el sitio y continúa al pago si el calendario está libre.",
      },
      {
        title: "Calendarios comprobados",
        description: "El sitio comprueba bloqueos internos y calendarios iCal importados antes del pago.",
      },
      {
        title: "Menos pasos",
        description: "Sin presupuesto manual obligatorio cuando precio y disponibilidad son claros.",
      },
    ],
  },

  booking: {
    tagline: "Reserva Directa",
    headline: "Elige fechas y paga online",
    intro:
      "Comprueba disponibilidad y precio desde el calendario, introduce los datos esenciales y continúa al pago online con Stripe Checkout.",
    steps: [
      { title: "Fechas y huéspedes", description: "Selecciona llegada, salida y número de huéspedes." },
      { title: "Precio y disponibilidad", description: "El sitio calcula el total y comprueba calendarios internos e iCal." },
      { title: "Pago", description: "Si las fechas están libres, continúa directamente a Stripe Checkout." },
      { title: "Fechas bloqueadas", description: "Después del pago, las fechas se registran y bloquean en el calendario interno." },
    ],
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "Tu email",
      phone: "Telefono",
      phonePlaceholder: "Tu numero de WhatsApp",
      guests: "Huéspedes",
      guestSingular: "huésped",
      guestPlural: "huéspedes",
      checkIn: "Llegada",
      checkOut: "Salida",
      message: "Mensaje (opcional)",
      messagePlaceholder: "Peticiones especiales, preguntas...",
    },
    submit: {
      button: "Enviar solicitud",
      loading: "Enviando...",
      success: "Pago iniciado. Sigue Stripe Checkout para completar la reserva.",
      validationError: "Revisa los campos: nombre, fechas validas y al menos email o telefono.",
      backendUnavailable: "El sistema automatico no esta disponible. Puedes enviar la solicitud por WhatsApp o email.",
      genericError: "No hemos podido enviar la solicitud. Puedes usar WhatsApp o email como fallback.",
      emailPartial: "Solicitud registrada, pero el envio de email no esta completo. Puedes usar WhatsApp o email abajo.",
      fallbackIntro: "Como alternativa, puedes usar los contactos directos.",
      notConfirmed: "La reserva se registra después del pago completado.",
      noPayment: "Los datos de tarjeta los gestiona Stripe Checkout, no este sitio.",
    },
    emailButton: "Enviar solicitud por email",
    whatsappButton: "Mensaje en WhatsApp",
    fallback: "Los datos de contacto se están configurando. Por favor, vuelve a consultar pronto.",
    microtrust: ["Precio directo", "Fechas comprobadas", "Pago online"],
    infoTitle: "Cómo funciona la reserva",
    infoText:
      "El sitio usa precios internos y calendarios conectados para permitir una reserva directa rápida. Si detecta un conflicto evidente, bloquea el pago.",
    infoBullets: [
      "El sitio nunca gestiona datos de tarjeta",
      "Después del pago, las fechas se bloquean en el calendario interno",
      "Demo host recibe una notificación y revisa también Airbnb/Booking",
      "Para cualquier duda puedes usar email o WhatsApp",
    ],
    confirmLabel: "Pago online seguro",
    capacityLabel: "huéspedes",
    whatsappBase: "Hola, me gustaría comprobar la disponibilidad de Domus Juliae",
    whatsappDates: " del {checkIn} al {checkOut}",
    whatsappGuests: " para {guests} huéspedes",
    emailSubject: "Solicitud de disponibilidad – Domus Juliae",
    emailTemplate: {
      name: "Nombre:",
      checkIn: "Llegada:",
      checkOut: "Salida:",
      guests: "Huéspedes:",
      body: "Me gustaría comprobar la disponibilidad de Domus Juliae para las fechas indicadas.\nGracias."
    },
  },

  testimonials: {
    tagline: "Evaluaciones Verificadas",
    headline: "Elogiado por los huéspedes en Airbnb",
    intro:
      `Valoración de ${property.rating.score.toLocaleString("es-ES")}/5 basada en ${property.rating.reviewCount} reseñas Airbnb, comprobada el 4 de octubre de 2026. Lee las experiencias y los datos actualizados en el anuncio original.`,
    cards: [
      { value: `${property.rating.score.toLocaleString("es-ES")}/5`, label: "Valoración Airbnb", sublabel: `de ${property.rating.reviewCount} reseñas` },
      { value: "Superhost", label: "Categoría Airbnb", sublabel: "Reconocido por una hospitalidad excepcional" },
      { value: "5 estrellas", label: "Llegada excepcional", sublabel: "Evaluado por los huéspedes en Airbnb" },
      { value: "Excelente ubicación", label: "Accesible a pie y bien comunicado", sublabel: "Ideal para moverse a pie" },
      { value: "181 Mbps", label: "Wi-Fi rápido", sublabel: "Ideal también para teletrabajar" },
      { value: "Bienvenida personal", label: "Anfitrión: Demo host", sublabel: "Te da la bienvenida en persona a tu llegada" },
    ],
  },

  faq: {
    tagline: "Información Útil",
    headline: "Preguntas Frecuentes",
    intro: "Todo lo que necesitas saber sobre Domus Juliae y la reserva directa.",
    items: [
      { question: "¿Cuántos huéspedes puede alojar Domus Juliae?", answer: "El apartamento puede alojar hasta 4 huéspedes, con 3 habitaciones, 1 cama doble, 2 camas individuales y 1 baño." },
      { question: "¿Dónde se encuentra el apartamento?", answer: "Domus Juliae se encuentra en el barrio Rione Ludovisi, a pocos pasos de Via Veneto. Villa Borghese está a 5 minutos a pie, Piazza Barberini y la Plaza de España a 10 minutos, y la Fontana de Trevi a menos de 15 minutos. La estación de metro más cercana es Barberini (Línea A)." },
      { question: "¿La disponibilidad se comprueba al instante?", answer: "Sí. El sitio comprueba las fechas usando bloqueos internos y calendarios iCal importados. Si encuentra un conflicto evidente, el pago se bloquea." },
      { question: "¿Tengo que pagar de inmediato?", answer: "Pagas online solo después de elegir fechas válidas, ver el precio calculado y pasar la comprobación del calendario. El pago se gestiona con Stripe Checkout." },
      { question: "¿Cómo funciona la llegada (check-in)?", answer: "La llegada está valorada con 5 estrellas en Airbnb. El anfitrión Demo host da la bienvenida a los huéspedes en persona. Los horarios específicos y los detalles se comparten al momento de la confirmación." },
      { question: "¿Hay ascensor?", answer: "Sí, el edificio dispone de ascensor. Sin embargo, se accede al apartamento a través del patio del edificio y hay 5 escalones antes de llegar al ascensor." },
      { question: "¿El Wi-Fi es rápido?", answer: "Sí. El apartamento cuenta con Wi-Fi a 181 Mbps, ideal para teletrabajar. También hay un espacio de trabajo dedicado." },
      { question: "¿El impuesto turístico está incluido?", answer: "Sí. El total incluye 0 € de tasa turística por huésped y noche, más 50 € fijos de limpieza para toda la estancia." },
      { question: "¿Hay lavadora o secadora?", answer: "No, el apartamento no dispone de lavadora ni secadora. Hay lavanderías disponibles en las cercanías." },
      { question: "¿Cómo puedo reservar directamente?", answer: "Ve a la sección de reserva, elige fechas y huéspedes, comprueba precio y disponibilidad, y continúa al pago online. Para dudas, puedes contactar con Demo host por email o WhatsApp." },
    ],
  },

  footer: {
    navigationLabel: "Navegación",
    contactLabel: "Contacto",
    quickLinks: [
      { label: "Inicio", page: "home" },
      { label: "Apartamento", page: "home", anchor: "apartment" },
      { label: "Ubicación", page: "home", anchor: "location" },
      { label: "Galería", page: "gallery" },
      { label: "Información esencial", page: "facts" },
      { label: "FAQ", page: "home", anchor: "faq" },
      { label: "Ver fechas y precio", page: "home", anchor: "booking" },
    ],
    legalLinks: {
      privacy: "Política de privacidad",
      cookie: "Política de cookies",
      terms: "Términos y Condiciones",
    },
    copyright: "Todos los derechos reservados.",
  },

  galleryPage: {
    tagline: "Galería",
    headline: "Las habitaciones y espacios",
    intro: "Una selección cuidada de las estancias del apartamento, organizadas por zonas, que refleja la discreta elegancia que define una estancia en Domus Juliae.",
    ctaTagline: "Siguiente Paso",
    ctaHeadline: "Disponibilidad e información",
    ctaText: "Si deseas comprobar las fechas u obtener más información sobre el apartamento, puedes continuar con la reserva directa.",
    ctaPrimary: "Ver fechas y precio",
    ctaSecondary: "Solicitar información",
    sections: [
      { id: "soggiorno", label: "Salón", title: "Salón" },
      { id: "camera-matrimoniale", label: "Habitación doble", title: "Habitación doble" },
      { id: "camere-singole", label: "Habitaciones individuales", title: "Habitaciones individuales" },
      { id: "cucina", label: "Cocina", title: "Cocina" },
      { id: "bagno", label: "Baño", title: "Baño" },
    ],
  },

  legal: {
    privacy: { title: "Política de privacidad", subtitle: "Aviso de privacidad", lastUpdated: "5 de julio de 2026" },
    cookie: { title: "Política de cookies", subtitle: "Aviso de cookies", lastUpdated: "5 de julio de 2026" },
    terms: { title: "Términos y Condiciones", subtitle: "Condiciones de uso", lastUpdated: "11 de octubre de 2026" },
    backHome: "Volver al inicio",
  },

  stickyCta: {
    label: "Ver fechas y precio",
    ariaLabel: "Ver fechas y precio",
  },

  amenities: {
    tagline: "Servicios",
    headline: "Todo lo que necesitas para tu estancia",
    included: [
      "Wi-Fi rápido 181 Mbps", "Aire acondicionado", "Calefacción central",
      "Máquina Nespresso", "Cafetera Moka", "TV", "Cocina totalmente equipada", "Placa de gas",
      "Horno", "Nevera y congelador", "Hervidor de agua", "Secador de pelo", "Bidé",
      "Ascensor", "Espacio de trabajo dedicado", "Entrada privada",
      "Detector de humo", "Detector de monóxido de carbono", "Extintor",
    ],
    notAvailable: ["Lavadora", "Secadora", "Cámaras de seguridad exteriores"],
    notAvailableLabel: "No disponible",
  },
};

export default es;
