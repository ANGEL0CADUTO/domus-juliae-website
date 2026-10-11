import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { location, contact, isConfigured } from "../config/site";
import type { SiteContent } from "../content/types";

type Props = {
  content: SiteContent;
};

export default function Location({ content }: Props) {
  const c = content.location;
  const googleMapsConfigured = isConfigured(contact.googleMapsUrl);

  const landmarks = [
    {
      name: c.distances[0]?.name || "Villa Borghese",
      time: c.distances[0]?.time || "5 min a piedi",
      image: "/demo/scene-4.svg",
      offsetClass: "",
    },
    {
      name: c.distances[1]?.name || "Piazza Barberini",
      time: c.distances[1]?.time || "10 min a piedi",
      image: "/demo/scene-1.svg",
      offsetClass: "mt-6 md:mt-8",
    },
    {
      name: c.distances[2]?.name || "Piazza di Spagna",
      time: c.distances[2]?.time || "10 min a piedi",
      image: "/demo/scene-2.svg",
      offsetClass: "-mt-6 md:-mt-8",
    },
    {
      name: c.distances[3]?.name || "Fontana di Trevi",
      time: c.distances[3]?.time || "meno di 15 min a piedi",
      image: "/demo/scene-3.svg",
      offsetClass: "",
    },
  ];

  return (
    <section
      id="location"
      className="section-padding deferred-section bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: texts & transport info */}
          <div className="reveal w-full lg:w-[42%] space-y-8">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                {c.tagline}
              </span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                {c.headline}
                <br />
                {c.headlineAccent}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {highlightLocationIntro(c.intro)}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                {googleMapsConfigured ? (
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={c.openMaps}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-brand-gold/30 text-brand-gold text-sm font-semibold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300"
                  >
                    <MapPin size={16} />
                    {c.openMaps}
                  </a>
                ) : null}
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-semibold uppercase tracking-widest hover:bg-brand-slate transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {content.locale === "it" ? "Controlla date" : "Check dates"}
                </a>
              </div>
            </div>
          </div>

          {/* Right: staggered 2x2 landmark grid */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 gap-6 md:gap-8 mt-8 lg:mt-0">
            {landmarks.map((loc, index) => (
              <div
                key={loc.name}
                className={`reveal reveal-scale reveal-delay-${(index % 4) + 1} relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 rounded-none h-64 md:h-80 lg:h-[350px] ${loc.offsetClass}`}
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(min-width: 1024px) 35vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Glassmorphic overlay */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-brand-slate/90 backdrop-blur-md border border-brand-gold/30 p-3 shadow-md rounded-none transition-all duration-300 group-hover:border-brand-gold/60">
                  <span className="text-white font-serif text-sm md:text-base tracking-wide font-medium block">
                    {loc.name}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-brand-gold text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    <Clock size={12} className="shrink-0" />
                    <span>{formatTimeLabel(loc.time)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatTimeLabel(time: string) {
  const walkRegex = /(walk|a piedi|zu Fuß|à pied|a pie)/i;
  const match = time.match(walkRegex);
  if (match) {
    const word = match[0];
    const parts = time.split(word);
    return (
      <>
        {parts[0]}
        <strong className="text-brand-gold font-black underline decoration-brand-gold decoration-2 underline-offset-4">
          {word.toUpperCase()}
        </strong>
        {parts[1]}
      </>
    );
  }
  return time;
}

function highlightLocationIntro(text: string) {
  const terms = [
    "Via Veneto",
    "Rione Ludovisi",
    "metropolitana",
    "metro",
    "Linea A",
    "Barberini",
    "Villa Borghese",
    "Spanish Steps",
    "Piazza di Spagna",
    "Trevi Fountain",
    "Fontana di Trevi"
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
