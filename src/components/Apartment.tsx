import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Users,
  Utensils,
  Wind,
  Wifi,
  ArrowUpFromLine,
  UserCheck,
} from "lucide-react";
import { property } from "../config/site";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";
import { getLocalizedPath } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export default function Apartment({ locale, content }: Props) {
  const c = content.apartment;
  const l = c.amenityLabels;
  const capacityPrefix: Record<Locale, string> = { it: "Fino a", en: "Up to", fr: "Jusqu'à", es: "Hasta", de: "Bis zu" };
  const roomAlt = (id: string) => `${content.galleryPage.sections.find((section) => section.id === id)?.label ?? c.tagline} — Domus Juliae`;

  const rooms = [
    {
      icon: <Users size={22} />,
      label: `${capacityPrefix[locale]} ${property.capacity.guests} ${l.guests}`,
    },
    {
      icon: <Bed size={22} />,
      label: `${property.capacity.bedrooms} ${l.bedrooms}`,
    },
    { icon: <Bed size={22} />, label: `${property.capacity.beds} ${l.beds}` },
    {
      icon: <Bath size={22} />,
      label: `${property.capacity.bathrooms} ${l.bathroom}`,
    },
    { icon: <Utensils size={22} />, label: l.kitchen },
    { icon: <Wind size={22} />, label: l.ac },
    { icon: <Wifi size={22} />, label: l.wifi },
    {
      icon: <ArrowUpFromLine size={22} />,
      label: l.elevator,
      note: l.elevatorNote,
    },
    {
      icon: <UserCheck size={22} />,
      label: l.host,
    },
  ];

  return (
    <section
      id="apartment"
      className="section-padding deferred-section bg-brand-warm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src="/demo/scene-1.svg"
              alt={roomAlt("camera-matrimoniale")}
              width={800}
              height={800}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="reveal reveal-scale w-full h-64 object-cover shadow-lg"
            />
            <Image
              src="/demo/scene-2.svg"
              alt={roomAlt("cucina")}
              width={800}
              height={800}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="reveal reveal-scale reveal-delay-1 w-full h-64 object-cover shadow-lg mt-8"
            />
            <Image
              src="/demo/scene-3.svg"
              alt={roomAlt("soggiorno")}
              width={800}
              height={800}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="reveal reveal-scale reveal-delay-2 w-full h-64 object-cover shadow-lg -mt-8"
            />
            <Image
              src="/demo/scene-3.svg"
              alt={roomAlt("bagno")}
              width={800}
              height={800}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="reveal reveal-scale reveal-delay-3 w-full h-64 object-cover shadow-lg"
            />
          </div>

          <div className="reveal reveal-delay-1 w-full lg:w-1/2">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
              {c.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              {c.headline}
              <br />{c.headlineAccent}
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              {highlightApartmentText(c.fullDescription)}
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              {highlightApartmentText(c.accessNote)}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
              {rooms.map((room, index) => (
                <div
                  key={room.label}
                  className={`reveal reveal-delay-${(index % 4) + 1} flex items-start gap-3 text-brand-slate`}
                >
                  <div className="text-brand-gold shrink-0 mt-0.5">
                    {room.icon}
                  </div>
                  <div>
                    <span className="text-base font-semibold block md:text-lg">
                      {room.label}
                    </span>
                    {"note" in room && room.note ? (
                      <span className="text-sm text-gray-500 block">
                        {room.note}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-white uppercase tracking-widest font-semibold hover:bg-brand-slate transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {locale === "it"
                  ? "Controlla date"
                  : locale === "fr"
                    ? "Voir les dates"
                    : locale === "es"
                      ? "Ver fechas"
                      : locale === "de"
                        ? "Daten pruefen"
                        : "Check dates"}
              </a>
              <Link
                href={getLocalizedPath(locale, "gallery")}
                className="inline-flex items-center justify-center px-10 py-4 bg-brand-slate text-white uppercase tracking-widest font-semibold hover:bg-brand-gold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {c.galleryLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlightApartmentText(text: string) {
  const terms = [
    "Via Veneto",
    "tre camere da letto",
    "three bedrooms",
    "Villa Borghese",
    "Piazza Barberini",
    "Piazza di Spagna",
    "Spanish Steps",
    "Fontana di Trevi",
    "Trevi Fountain",
    "3 camere",
    "3 bedrooms",
    "4 ospiti",
    "4 guests",
    "chiostro dello stabile",
    "building's courtyard",
    "5 gradini",
    "5 steps"
  ];

  let parts: (string | React.ReactNode)[] = [text];
  for (const term of terms) {
    const newParts: (string | React.ReactNode)[] = [];
    for (const part of parts) {
      if (typeof part !== "string") {
        newParts.push(part);
        continue;
      }

      const regex = new RegExp(`(${term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, "gi");
      const subparts = part.split(regex);
      for (const subpart of subparts) {
        if (subpart.toLowerCase() === term.toLowerCase()) {
          newParts.push(<strong key={subpart + Math.random()} className="font-bold text-brand-slate">{subpart}</strong>);
        } else if (subpart) {
          newParts.push(subpart);
        }
      }
    }
    parts = newParts;
  }
  return parts;
}
