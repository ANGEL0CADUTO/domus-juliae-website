import type { Locale } from "../i18n/config";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GallerySection = {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

const gallerySectionsByLocale: Record<Locale, GallerySection[]> = {
  it: [
    {
      id: "soggiorno",
      title: "Il Soggiorno",
      description:
        "Un ambiente ampio e luminoso, pensato per il riposo, la lettura e i momenti condivisi con naturale continuita tra interno e luce.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Soggiorno principale di Domus Juliae con area conversazione a Via Veneto" },
        { src: "/demo/scene-3.svg", alt: "Seconda vista del soggiorno con arredi classici e luce naturale" },
      ],
    },
    {
      id: "camera-matrimoniale",
      title: "Camera matrimoniale",
      description:
        "La camera principale conserva un tono sobrio e rilassato, con proporzioni generose e una presenza discreta dei materiali originali.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Camera matrimoniale della casa vacanze Domus Juliae a Roma centro" },
        { src: "/demo/scene-3.svg", alt: "Dettaglio della camera matrimoniale con punto luce laterale" },
        { src: "/demo/scene-3.svg", alt: "Vista della camera matrimoniale con arredi e pareti decorate" },
        { src: "/demo/scene-4.svg", alt: "Ulteriore prospettiva della camera matrimoniale" },
      ],
    },
    {
      id: "camere-singole",
      title: "Camere singole",
      description:
        "Le camere singole mantengono lo stesso linguaggio della casa: linee essenziali, comfort quotidiano e una presenza misurata della luce.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Prima camera singola di Domus Juliae con letto e arredi essenziali" },
        { src: "/demo/scene-2.svg", alt: "Seconda vista di una camera singola con luce naturale" },
        { src: "/demo/scene-3.svg", alt: "Dettaglio di una camera singola con letto e comodino" },
        { src: "/demo/scene-4.svg", alt: "Ulteriore immagine delle camere singole della casa" },
      ],
    },
    {
      id: "cucina",
      title: "La Cucina",
      description:
        "Uno spazio funzionale e ordinato, attrezzato per una permanenza comoda e pensato per accompagnare il soggiorno con semplicita.",
      images: [
        { src: "/demo/scene-2.svg", alt: "Cucina attrezzata dell'appartamento Domus Juliae" },
        { src: "/demo/scene-1.svg", alt: "Seconda vista della cucina con tavolo e dettagli funzionali" },
      ],
    },
    {
      id: "bagno",
      title: "Il Bagno",
      description:
        "Il bagno segue la stessa impostazione della casa, con finiture pulite e un'impronta discreta, pensata per un uso pratico e confortevole.",
      images: [
        { src: "/demo/scene-3.svg", alt: "Bagno di Domus Juliae con lavabo e finiture chiare" },
        { src: "/demo/scene-4.svg", alt: "Seconda vista del bagno con doccia e dettagli essenziali" },
      ],
    },
  ],
  en: [
    {
      id: "soggiorno",
      title: "Living Room",
      description:
        "A spacious, bright room for relaxing, reading and spending time together, with the quiet Roman character of the apartment.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Main living room at Domus Juliae holiday apartment near Via Veneto" },
        { src: "/demo/scene-3.svg", alt: "Second view of the living room with natural light and classic furnishings" },
      ],
    },
    {
      id: "camera-matrimoniale",
      title: "Double Bedroom",
      description:
        "The main bedroom has a calm, understated atmosphere, generous proportions and the discreet presence of original details.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Double bedroom at Domus Juliae holiday apartment in central Rome" },
        { src: "/demo/scene-3.svg", alt: "Double bedroom detail with bedside light" },
        { src: "/demo/scene-3.svg", alt: "Double bedroom with classic furniture and decorated walls" },
        { src: "/demo/scene-4.svg", alt: "Additional view of the double bedroom at Domus Juliae" },
      ],
    },
    {
      id: "camere-singole",
      title: "Single Bedrooms",
      description:
        "The single bedrooms follow the same language as the apartment: essential lines, everyday comfort and balanced natural light.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Single bedroom at Domus Juliae with bed and essential furniture" },
        { src: "/demo/scene-2.svg", alt: "Second view of a single bedroom with natural light" },
        { src: "/demo/scene-3.svg", alt: "Single bedroom detail with bed and bedside table" },
        { src: "/demo/scene-4.svg", alt: "Additional view of the single bedrooms at the apartment" },
      ],
    },
    {
      id: "cucina",
      title: "Kitchen",
      description:
        "A practical, orderly kitchen equipped for a comfortable stay and designed to support everyday routines during the trip.",
      images: [
        { src: "/demo/scene-2.svg", alt: "Equipped kitchen at Domus Juliae apartment in Rome" },
        { src: "/demo/scene-1.svg", alt: "Second view of the kitchen with table and functional details" },
      ],
    },
    {
      id: "bagno",
      title: "Bathroom",
      description:
        "The bathroom keeps the apartment's clean, discreet tone, with practical finishes for a comfortable stay.",
      images: [
        { src: "/demo/scene-3.svg", alt: "Bathroom at Domus Juliae with sink and light finishes" },
        { src: "/demo/scene-4.svg", alt: "Second view of the bathroom with shower and essential details" },
      ],
    },
  ],
  fr: [
    {
      id: "soggiorno",
      title: "Salon",
      description:
        "Une piece spacieuse et lumineuse, pensee pour se detendre, lire et partager des moments ensemble dans une atmosphere romaine discrete.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Salon principal de l'appartement Domus Juliae pres de Via Veneto" },
        { src: "/demo/scene-3.svg", alt: "Deuxieme vue du salon avec lumiere naturelle et mobilier classique" },
      ],
    },
    {
      id: "camera-matrimoniale",
      title: "Chambre double",
      description:
        "La chambre principale offre une atmosphere calme, des proportions genereuses et des details originaux presents avec discretion.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Chambre double de l'appartement Domus Juliae au centre de Rome" },
        { src: "/demo/scene-3.svg", alt: "Detail de la chambre double avec lampe de chevet" },
        { src: "/demo/scene-3.svg", alt: "Chambre double avec mobilier classique et murs decores" },
        { src: "/demo/scene-4.svg", alt: "Vue supplementaire de la chambre double de Domus Juliae" },
      ],
    },
    {
      id: "camere-singole",
      title: "Chambres simples",
      description:
        "Les chambres simples reprennent le meme esprit que l'appartement: lignes essentielles, confort quotidien et lumiere naturelle equilibree.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Chambre simple de Domus Juliae avec lit et mobilier essentiel" },
        { src: "/demo/scene-2.svg", alt: "Deuxieme vue d'une chambre simple avec lumiere naturelle" },
        { src: "/demo/scene-3.svg", alt: "Detail d'une chambre simple avec lit et table de chevet" },
        { src: "/demo/scene-4.svg", alt: "Vue supplementaire des chambres simples de l'appartement" },
      ],
    },
    {
      id: "cucina",
      title: "Cuisine",
      description:
        "Une cuisine pratique et ordonnee, equipee pour un sejour confortable et adaptee aux routines quotidiennes du voyage.",
      images: [
        { src: "/demo/scene-2.svg", alt: "Cuisine equipee de l'appartement Domus Juliae a Rome" },
        { src: "/demo/scene-1.svg", alt: "Deuxieme vue de la cuisine avec table et details fonctionnels" },
      ],
    },
    {
      id: "bagno",
      title: "Salle de bain",
      description:
        "La salle de bain conserve le ton clair et discret de l'appartement, avec des finitions pratiques pour un sejour confortable.",
      images: [
        { src: "/demo/scene-3.svg", alt: "Salle de bain de Domus Juliae avec lavabo et finitions claires" },
        { src: "/demo/scene-4.svg", alt: "Deuxieme vue de la salle de bain avec douche et details essentiels" },
      ],
    },
  ],
  es: [
    {
      id: "soggiorno",
      title: "Salon",
      description:
        "Un espacio amplio y luminoso para descansar, leer y compartir momentos, con el caracter romano y tranquilo del apartamento.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Salon principal del apartamento Domus Juliae cerca de Via Veneto" },
        { src: "/demo/scene-3.svg", alt: "Segunda vista del salon con luz natural y mobiliario clasico" },
      ],
    },
    {
      id: "camera-matrimoniale",
      title: "Habitacion doble",
      description:
        "La habitacion principal mantiene una atmosfera sobria y relajada, con proporciones generosas y detalles originales discretos.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Habitacion doble del apartamento Domus Juliae en el centro de Roma" },
        { src: "/demo/scene-3.svg", alt: "Detalle de la habitacion doble con luz lateral" },
        { src: "/demo/scene-3.svg", alt: "Habitacion doble con muebles clasicos y paredes decoradas" },
        { src: "/demo/scene-4.svg", alt: "Vista adicional de la habitacion doble de Domus Juliae" },
      ],
    },
    {
      id: "camere-singole",
      title: "Habitaciones individuales",
      description:
        "Las habitaciones individuales mantienen el mismo lenguaje de la casa: lineas esenciales, comodidad diaria y luz natural equilibrada.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Habitacion individual de Domus Juliae con cama y mobiliario esencial" },
        { src: "/demo/scene-2.svg", alt: "Segunda vista de una habitacion individual con luz natural" },
        { src: "/demo/scene-3.svg", alt: "Detalle de una habitacion individual con cama y mesita" },
        { src: "/demo/scene-4.svg", alt: "Vista adicional de las habitaciones individuales del apartamento" },
      ],
    },
    {
      id: "cucina",
      title: "Cocina",
      description:
        "Una cocina practica y ordenada, equipada para una estancia comoda y pensada para acompanar las rutinas del viaje.",
      images: [
        { src: "/demo/scene-2.svg", alt: "Cocina equipada del apartamento Domus Juliae en Roma" },
        { src: "/demo/scene-1.svg", alt: "Segunda vista de la cocina con mesa y detalles funcionales" },
      ],
    },
    {
      id: "bagno",
      title: "Bano",
      description:
        "El bano sigue el tono limpio y discreto del apartamento, con acabados practicos para una estancia confortable.",
      images: [
        { src: "/demo/scene-3.svg", alt: "Bano de Domus Juliae con lavabo y acabados claros" },
        { src: "/demo/scene-4.svg", alt: "Segunda vista del bano con ducha y detalles esenciales" },
      ],
    },
  ],
  de: [
    {
      id: "soggiorno",
      title: "Wohnzimmer",
      description:
        "Ein heller, grosszuegiger Raum zum Entspannen, Lesen und Zusammensein, mit dem ruhigen roemischen Charakter der Wohnung.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Wohnzimmer der Ferienwohnung Domus Juliae nahe Via Veneto" },
        { src: "/demo/scene-3.svg", alt: "Zweite Ansicht des Wohnzimmers mit Tageslicht und klassischer Einrichtung" },
      ],
    },
    {
      id: "camera-matrimoniale",
      title: "Doppelzimmer",
      description:
        "Das Hauptschlafzimmer wirkt ruhig und zurueckhaltend, mit grosszuegigen Proportionen und dezenten originalen Details.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Doppelzimmer der Ferienwohnung Domus Juliae im Zentrum von Rom" },
        { src: "/demo/scene-3.svg", alt: "Detail des Doppelzimmers mit seitlicher Leuchte" },
        { src: "/demo/scene-3.svg", alt: "Doppelzimmer mit klassischer Einrichtung und dekorierten Waenden" },
        { src: "/demo/scene-4.svg", alt: "Weitere Ansicht des Doppelzimmers von Domus Juliae" },
      ],
    },
    {
      id: "camere-singole",
      title: "Einzelzimmer",
      description:
        "Die Einzelzimmer folgen derselben Sprache der Wohnung: klare Linien, alltaeglicher Komfort und ausgewogenes Tageslicht.",
      images: [
        { src: "/demo/scene-1.svg", alt: "Einzelzimmer von Domus Juliae mit Bett und schlichter Einrichtung" },
        { src: "/demo/scene-2.svg", alt: "Zweite Ansicht eines Einzelzimmers mit Tageslicht" },
        { src: "/demo/scene-3.svg", alt: "Detail eines Einzelzimmers mit Bett und Nachttisch" },
        { src: "/demo/scene-4.svg", alt: "Weitere Ansicht der Einzelzimmer der Ferienwohnung" },
      ],
    },
    {
      id: "cucina",
      title: "Kueche",
      description:
        "Eine praktische, geordnete Kueche, ausgestattet fuer einen komfortablen Aufenthalt und den Alltag waehrend der Reise.",
      images: [
        { src: "/demo/scene-2.svg", alt: "Ausgestattete Kueche der Ferienwohnung Domus Juliae in Rom" },
        { src: "/demo/scene-1.svg", alt: "Zweite Ansicht der Kueche mit Tisch und funktionalen Details" },
      ],
    },
    {
      id: "bagno",
      title: "Badezimmer",
      description:
        "Das Badezimmer bleibt klar und dezent, mit praktischen Ausstattungen fuer einen komfortablen Aufenthalt.",
      images: [
        { src: "/demo/scene-3.svg", alt: "Badezimmer von Domus Juliae mit Waschbecken und hellen Oberflaechen" },
        { src: "/demo/scene-4.svg", alt: "Zweite Ansicht des Badezimmers mit Dusche und wesentlichen Details" },
      ],
    },
  ],
};

export const gallerySections = gallerySectionsByLocale.it;

export const galleryUiLabels: Record<Locale, {
  openImage: string;
  close: string;
  previous: string;
  next: string;
}> = {
  it: { openImage: "Apri immagine", close: "Chiudi galleria", previous: "Immagine precedente", next: "Immagine successiva" },
  en: { openImage: "Open image", close: "Close gallery", previous: "Previous image", next: "Next image" },
  fr: { openImage: "Ouvrir l'image", close: "Fermer la galerie", previous: "Image precedente", next: "Image suivante" },
  es: { openImage: "Abrir imagen", close: "Cerrar galeria", previous: "Imagen anterior", next: "Imagen siguiente" },
  de: { openImage: "Bild oeffnen", close: "Galerie schliessen", previous: "Vorheriges Bild", next: "Naechstes Bild" },
};

export function getGallerySections(locale: Locale): GallerySection[] {
  return gallerySectionsByLocale[locale] ?? gallerySectionsByLocale.it;
}

export function getGalleryUiLabels(locale: Locale) {
  return galleryUiLabels[locale] ?? galleryUiLabels.it;
}

export function getHomeGalleryImages(locale: Locale): GalleryImage[] {
  const sections = getGallerySections(locale);
  return [
    sections[1].images[1],
    sections[2].images[0],
    sections[4].images[1],
    sections[3].images[1],
    sections[0].images[0],
    sections[1].images[2],
  ];
}

export const homeGalleryImages: GalleryImage[] = getHomeGalleryImages("it");
