// ────────────────────────────────────────────────────────────
// Domus Juliae — French Content
// Natural tourism-grade copy, no machine translation.
// ────────────────────────────────────────────────────────────

import type { SiteContent } from "./types";
import { property } from "../config/site";

const fr: SiteContent = {
  locale: "fr",

  seo: {
    home: {
      title: "Appartement de vacances près de Via Veneto Rome | Domus Juliae",
      description:
        "Domus Juliae est un appartement de vacances de 3 chambres au centre de Rome, près de Via Veneto et Villa Borghese, pour 4 voyageurs, avec Wi-Fi rapide et réservation directe en ligne.",
      keywords: [
        "appartement de vacances près de Via Veneto à Rome",
        "location de vacances près de Villa Borghese",
        "appartement 3 chambres centre de Rome",
        "appartement pour familles à Rome",
        "hébergement près de la Place d’Espagne",
      ],
    },
    gallery: {
      title: "Galerie de photos | Appartement près de Via Veneto Rome",
      description:
        "Galerie de photos de Domus Juliae: salon, chambres, cuisine et salle de bain. Appartement de vacances près de Via Veneto, au centre de Rome.",
    },
    facts: {
      title: "Informations essentielles sur l’appartement à Rome",
      description:
        "Informations essentielles sur Domus Juliae, Demo address à Rome : CIN, capacité, chambres, équipements, contacts et réservation directe.",
    },
    privacy: {
      title: "Politique de confidentialité",
      description:
        "Politique de confidentialité pour Domus Juliae, appartement de vacances près de Via Veneto, Rome.",
    },
    cookie: {
      title: "Politique relative aux cookies",
      description:
        "Politique relative aux cookies pour Domus Juliae, appartement de vacances près de Via Veneto, Rome.",
    },
    terms: {
      title: "Conditions Générales",
      description:
        "Conditions générales d'utilisation de Domus Juliae, appartement de vacances près de Via Veneto, Rome.",
    },
  },

  nav: {
    links: [
      { name: "Accueil", page: "home" },
      { name: "Appartement", anchor: "#apartment" },
      { name: "Emplacement", anchor: "#location" },
      { name: "Galerie", page: "gallery" },
      { name: "FAQ", anchor: "#faq" },
    ],
    ctaLabel: "Vérifier dates et prix",
    brandSub: "Via Veneto • Rome",
    mobileMenuOpen: "Ouvrir le menu de navigation",
    mobileMenuClose: "Fermer le menu de navigation",
  },

  hero: {
    ratingLabel: "sur",
    headline: "Appartement de vacances près de Via Veneto,",
    headlineAccent: "au cœur de Rome",
    subtitle:
      "Domus Juliae est un appartement de 3 chambres pouvant accueillir jusqu'à 4 personnes, à quelques minutes de la Villa Borghese, de la Piazza Barberini, de la Place d'Espagne et de la Fontaine de Trevi.",
    ctaPrimary: "Vérifier dates et prix",
    ctaSecondary: "Découvrir l'appartement",
    statsGuests: "voyageurs",
    statsBedrooms: "chambres",
    statsBeds: "lits",
    statsBathroom: "salle de bain",
  },

  trust: {
    rating: "Évaluation",
    reviews: "commentaires",
    superhost: "Superhost",
    wifi: "Wi-Fi",
    cin: "CIN",
    walkable: "Accessible à pied",
  },

  homeGallery: {
    tagline: "Galerie de Photos",
    headline: "Un coup d'œil à l'intérieur",
    ctaLabel: "Voir la galerie complète",
  },

  features: {
    tagline: "Bienvenue chez vous",
    headline: "Appartement de vacances",
    headlineAccent: "près de la Villa Borghese",
    intro:
      "Domus Juliae est une location de vacances sur la Via Veneto, dans le quartier Rione Ludovisi. Un appartement de 3 chambres pour 4 personnes où l'élégance intérieure rencontre la commodité d'un emplacement central de premier choix.",
    quote: "Un séjour romain authentique au cœur de la ville.",
    items: [
      {
        title: "Emplacement privilégié",
        description:
          "À quelques pas de la Via Veneto, de la Villa Borghese, de la Place d'Espagne et de la Fontaine de Trevi. Tout est accessible à pied.",
      },
      {
        title: "Appartement complet",
        description:
          "3 chambres, salon avec kitchenette, cuisine entièrement équipée et salle de bain complète pour un séjour confortable.",
      },
      {
        title: "Hospitalité reconnue",
        description: `Noté ${property.rating.score.toLocaleString("fr-FR")}/5 sur Airbnb avec ${property.rating.reviewCount} avis. Consultez l'annonce pour les données à jour.`,
      },
      {
        title: "Vivez comme un local",
        description:
          "Dans le quartier de Ludovisi, entouré de cafés historiques, de restaurants et de l'atmosphère authentique de la Dolce Vita.",
      },
    ],
  },

  apartment: {
    tagline: "L'Appartement",
    headline: "Appartement de 3 chambres",
    headlineAccent: "au centre de Rome",
    fullDescription:
      "Domus Juliae est un appartement entier situé Demo address, dans le quartier Ludovisi de Rome, près de la Via Veneto. Il accueille jusqu'à 4 voyageurs dans trois chambres séparées : une chambre avec un lit double et deux chambres avec un lit simple. Cette disposition permet aux familles et aux amis de disposer d'espaces de sommeil distincts. Le logement comprend un salon, une cuisine équipée et une salle de bain partagée. Le Wi-Fi, la climatisation et un espace de travail facilitent les moments de repos entre les visites. La Villa Borghese se trouve à environ cinq minutes à pied ; la station de métro Barberini relie le quartier au reste de Rome. Découvrez chaque pièce dans la galerie avant de choisir vos dates.",
    accessNote:
      "L'accès à l'appartement se fait par la cour de l'immeuble. Il y a 5 marches avant l'ascenseur.",
    galleryLink: "Voir la galerie",
    amenityLabels: {
      guests: "voyageurs",
      bedrooms: "chambres",
      beds: "lits",
      bathroom: "salle de bain complète",
      kitchen: "Cuisine équipée",
      ac: "Climatisation",
      wifi: "Wi-Fi 181 Mbps",
      elevator: "Ascenseur",
      elevatorNote: "5 marches avant l'ascenseur",
      host: "Accueil personnalisé par l'hôte",
    },
  },

  location: {
    tagline: "Emplacement",
    headline: "Appartement de vacances",
    headlineAccent: "à Ludovisi",
    intro:
      "Domus Juliae se trouve à quelques pas de la légendaire Via Veneto, dans l'un des quartiers les plus prestigieux de Rome. Tout ce qui rend la ville unique est accessible à pied : musées, places historiques et restaurants. L'appartement est excellemment desservi par le métro (Ligne A, arrêt Barberini) et de nombreux bus, avec des parkings disponibles à proximité.",
    distances: [
      { name: "Villa Borghese", time: "5 min à pied" },
      { name: "Piazza Barberini", time: "10 min à pied" },
      { name: "Place d'Espagne", time: "10 min à pied" },
      { name: "Fontaine de Trevi", time: "moins de 15 min à pied" },
    ],
    transport: [
      { type: "Métro", line: "Ligne A", stop: "Barberini", detail: "" },
      { type: "Bus", line: "", stop: "Via Veneto / Villa Borghese", detail: "Plusieurs lignes" },
      { type: "Bus touristique", line: "Hop-on Hop-off", stop: "Place d'Espagne", detail: "Arrêt sur la Via Ludovisi" },
    ],
    parking: "Parking payant dans la rue ou couvert disponible dans le quartier.",
    openMaps: "Ouvrir sur Google Maps",
    transportLabel: "Transports",
    parkingLabel: "Stationnement",
  },

  whyDirect: {
    tagline: "Avantages",
    headline: "Pourquoi réserver sur le site officiel",
    intro: "Sur le site officiel, vous pouvez choisir les dates, voir le prix direct et continuer au paiement en ligne lorsque le calendrier est libre.",
    items: [
      {
        title: "Contact direct avec l'hôte",
        description: "Parlez directement avec Demo host pour toute question ou besoin particulier.",
      },
      {
        title: "Dates et prix immédiats",
        description: "Choisissez arrivée, départ et voyageurs pour voir le total calculé par le site.",
      },
      {
        title: "Paiement en ligne",
        description: "Si les dates sont libres, vous pouvez continuer directement au paiement en ligne.",
      },
      {
        title: "Prix direct et paiement en ligne",
        description: "Choisissez les dates, vérifiez le total calculé par le site et continuez au paiement si le calendrier est libre.",
      },
      {
        title: "Calendriers contrôlés",
        description: "Le site contrôle les blocages internes et les calendriers iCal importés avant le paiement.",
      },
      {
        title: "Moins d'étapes",
        description: "Pas de devis manuel obligatoire lorsque prix et disponibilité sont clairs.",
      },
    ],
  },

  booking: {
    tagline: "Réservation Directe",
    headline: "Choisissez les dates et payez en ligne",
    intro:
      "Vérifiez disponibilité et prix depuis le calendrier, saisissez les informations essentielles et continuez vers le paiement en ligne avec Stripe Checkout.",
    steps: [
      { title: "Dates et voyageurs", description: "Sélectionnez arrivée, départ et nombre de voyageurs." },
      { title: "Prix et disponibilité", description: "Le site calcule le total et contrôle les calendriers internes et iCal." },
      { title: "Paiement", description: "Si les dates sont libres, continuez directement vers Stripe Checkout." },
      { title: "Dates bloquées", description: "Après le paiement, les dates sont enregistrées et bloquées dans le calendrier interne." },
    ],
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "Votre e-mail",
      phone: "Telephone",
      phonePlaceholder: "Votre numero WhatsApp",
      guests: "Voyageurs",
      guestSingular: "voyageur",
      guestPlural: "voyageurs",
      checkIn: "Arrivée",
      checkOut: "Départ",
      message: "Message (optionnel)",
      messagePlaceholder: "Demandes spéciales, questions...",
    },
    submit: {
      button: "Envoyer la demande",
      loading: "Envoi...",
      success: "Paiement demarre. Suivez Stripe Checkout pour finaliser la reservation.",
      validationError: "Verifiez les champs: nom, dates valides et au moins e-mail ou telephone.",
      backendUnavailable: "Le systeme automatique n'est pas disponible. Vous pouvez envoyer la demande par WhatsApp ou e-mail.",
      genericError: "Nous n'avons pas pu envoyer la demande. Vous pouvez utiliser WhatsApp ou l'e-mail comme solution de secours.",
      emailPartial: "Demande enregistree, mais l'envoi e-mail n'est pas complet. Vous pouvez utiliser WhatsApp ou l'e-mail ci-dessous.",
      fallbackIntro: "Vous pouvez aussi utiliser les contacts directs.",
      notConfirmed: "La reservation est enregistree apres paiement complet.",
      noPayment: "Les donnees de carte sont gerees par Stripe Checkout, pas par ce site.",
    },
    emailButton: "Envoyer la demande par email",
    whatsappButton: "Message sur WhatsApp",
    fallback: "Les détails de contact sont en cours de configuration. Veuillez revenir bientôt.",
    microtrust: ["Prix direct", "Dates controlees", "Paiement en ligne"],
    infoTitle: "Comment fonctionne la réservation",
    infoText:
      "Le site utilise les prix internes et les calendriers connectés pour permettre une réservation directe rapide. En cas de conflit évident, le paiement est bloqué.",
    infoBullets: [
      "Le site ne gère jamais les données de carte",
      "Après le paiement, les dates sont bloquées dans le calendrier interne",
      "Demo host reçoit une notification et contrôle aussi Airbnb/Booking",
      "Pour toute question, vous pouvez utiliser e-mail ou WhatsApp",
    ],
    confirmLabel: "Paiement en ligne sécurisé",
    capacityLabel: "voyageurs",
    whatsappBase: "Bonjour, j'aimerais vérifier la disponibilité de Domus Juliae",
    whatsappDates: " du {checkIn} au {checkOut}",
    whatsappGuests: " pour {guests} voyageurs",
    emailSubject: "Demande de disponibilité – Domus Juliae",
    emailTemplate: {
      name: "Nom:",
      checkIn: "Arrivée:",
      checkOut: "Départ:",
      guests: "Voyageurs:",
      body: "Je souhaite vérifier la disponibilité de Domus Juliae pour les dates ci-dessus.\nMerci."
    },
  },

  testimonials: {
    tagline: "Avis Vérifiés",
    headline: "Apprécié par les voyageurs sur Airbnb",
    intro:
      `Note de ${property.rating.score.toLocaleString("fr-FR")}/5 sur ${property.rating.reviewCount} avis Airbnb, vérifiée le 4 octobre 2026. Consultez les expériences des voyageurs et les données à jour sur l'annonce originale.`,
    cards: [
      { value: `${property.rating.score.toLocaleString("fr-FR")}/5`, label: "Note Airbnb", sublabel: `sur ${property.rating.reviewCount} avis` },
      { value: "Superhost", label: "Statut Airbnb", sublabel: "Reconnu pour une hospitalité exceptionnelle" },
      { value: "5 étoiles", label: "Arrivée exceptionnelle", sublabel: "Évalué par les voyageurs sur Airbnb" },
      { value: "Super emplacement", label: "Accessible à pied et bien desservi", sublabel: "Idéal pour se déplacer à pied" },
      { value: "181 Mbps", label: "Wi-Fi rapide", sublabel: "Idéal pour le télétravail" },
      { value: "Accueil personnalisé", label: "Hôte: Demo host", sublabel: "Vous accueille en personne à l'arrivée" },
    ],
  },

  faq: {
    tagline: "Informations Utiles",
    headline: "Questions Fréquentes",
    intro: "Tout ce que vous devez savoir sur Domus Juliae et comment demander la disponibilité.",
    items: [
      { question: "Combien de voyageurs Domus Juliae peut-il accueillir?", answer: "L'appartement peut accueillir jusqu'à 4 voyageurs, avec 3 chambres, 1 lit double, 2 lits simples et 1 salle de bain." },
      { question: "Où se trouve l'appartement?", answer: "Domus Juliae se trouve dans le quartier de Ludovisi, à quelques pas de la Via Veneto. La Villa Borghese est à 5 minutes à pied, la Piazza Barberini et la Place d'Espagne à 10 minutes, et la Fontaine de Trevi à moins de 15 minutes. La station de métro la plus proche est Barberini (Ligne A)." },
      { question: "La disponibilité est-elle contrôlée instantanément?", answer: "Oui. Le site contrôle les dates avec les blocages internes et les calendriers iCal importés. S'il trouve un conflit évident, le paiement est bloqué." },
      { question: "Dois-je payer tout de suite?", answer: "Vous payez en ligne uniquement après avoir choisi des dates valides, vu le prix calculé et passé le contrôle du calendrier. Le paiement est géré par Stripe Checkout." },
      { question: "Comment se déroule l'arrivée?", answer: "L'arrivée est notée 5 étoiles sur Airbnb. L'hôte Demo host accueille les voyageurs en personne. Les horaires précis et les détails sont partagés lors de la confirmation." },
      { question: "Y a-t-il un ascenseur?", answer: "Oui, l'immeuble dispose d'un ascenseur. Cependant, l'accès à l'appartement se fait par la cour de l'immeuble et il y a 5 marches avant d'atteindre l'ascenseur." },
      { question: "Le Wi-Fi est-il rapide?", answer: "Oui. L'appartement dispose d'une connexion Wi-Fi de 181 Mbps, idéale pour le télétravail. Un espace de travail dédié est également disponible." },
      { question: "La taxe de séjour est-elle incluse?", answer: "Oui. Le total comprend 0 € de taxe de séjour par voyageur et par nuit, plus 50 € de frais de ménage fixes pour l'ensemble du séjour." },
      { question: "Y a-t-il une machine à laver ou un sèche-linge?", answer: "Non, l'appartement ne dispose pas de machine à laver ni de sèche-linge. Des laveries sont disponibles à proximité." },
      { question: "Comment puis-je réserver directement?", answer: "Allez à la section réservation, choisissez les dates et le nombre de voyageurs, vérifiez prix et disponibilité, puis continuez au paiement en ligne. Pour toute question, vous pouvez contacter Demo host par e-mail ou WhatsApp." },
    ],
  },

  footer: {
    navigationLabel: "Navigation",
    contactLabel: "Contact",
    quickLinks: [
      { label: "Accueil", page: "home" },
      { label: "Appartement", page: "home", anchor: "apartment" },
      { label: "Emplacement", page: "home", anchor: "location" },
      { label: "Galerie", page: "gallery" },
      { label: "Informations essentielles", page: "facts" },
      { label: "FAQ", page: "home", anchor: "faq" },
      { label: "Vérifier dates et prix", page: "home", anchor: "booking" },
    ],
    legalLinks: {
      privacy: "Politique de confidentialité",
      cookie: "Politique relative aux cookies",
      terms: "Conditions Générales",
    },
    copyright: "Tous droits réservés.",
  },

  galleryPage: {
    tagline: "Galerie",
    headline: "Les pièces et espaces",
    intro: "Une collection soigneusement sélectionnée des pièces de l'appartement, organisée par zone, reflétant l'élégance discrète qui définit un séjour à Domus Juliae.",
    ctaTagline: "Prochaine Étape",
    ctaHeadline: "Disponibilité et informations",
    ctaText: "Si vous souhaitez vérifier les dates ou en savoir plus sur l'appartement, vous pouvez procéder à la réservation directe.",
    ctaPrimary: "Vérifier dates et prix",
    ctaSecondary: "Demander des informations",
    sections: [
      { id: "soggiorno", label: "Salon", title: "Salon" },
      { id: "camera-matrimoniale", label: "Chambre double", title: "Chambre double" },
      { id: "camere-singole", label: "Chambres simples", title: "Chambres simples" },
      { id: "cucina", label: "Cuisine", title: "Cuisine" },
      { id: "bagno", label: "Salle de bain", title: "Salle de bain" },
    ],
  },

  legal: {
    privacy: { title: "Politique de confidentialité", subtitle: "Avis de confidentialité", lastUpdated: "5 juillet 2026" },
    cookie: { title: "Politique relative aux cookies", subtitle: "Avis sur les cookies", lastUpdated: "5 juillet 2026" },
    terms: { title: "Conditions Générales", subtitle: "Conditions d'utilisation", lastUpdated: "11 octobre 2026" },
    backHome: "Retour à l'accueil",
  },

  stickyCta: {
    label: "Vérifier dates et prix",
    ariaLabel: "Vérifier dates et prix",
  },

  amenities: {
    tagline: "Équipements",
    headline: "Tout ce dont vous avez besoin pour votre séjour",
    included: [
      "Wi-Fi rapide 181 Mbps", "Climatisation", "Chauffage central",
      "Machine Nespresso", "Cafetière Moka", "TV", "Cuisine entièrement équipée", "Plaque de cuisson au gaz",
      "Four", "Réfrigérateur et congélateur", "Bouilloire", "Sèche-cheveux", "Bidet",
      "Ascenseur", "Espace de travail dédié", "Entrée privée",
      "Détecteur de fumée", "Détecteur de monoxyde de carbone", "Extincteur",
    ],
    notAvailable: ["Machine à laver", "Sèche-linge", "Caméras de sécurité extérieures"],
    notAvailableLabel: "Non disponible",
  },
};

export default fr;
