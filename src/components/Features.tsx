import Image from "next/image";
import { MapPin, Home, Star, Coffee } from "lucide-react";
import { property } from "../config/site";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export default function Features({ locale, content }: Props) {
  const c = content.features;

  const featureIcons = [
    <MapPin key="1" className="text-brand-gold" size={32} strokeWidth={1.5} />,
    <Home key="2" className="text-brand-gold" size={32} strokeWidth={1.5} />,
    <Star key="3" className="text-brand-gold" size={32} strokeWidth={1.5} />,
    <Coffee key="4" className="text-brand-gold" size={32} strokeWidth={1.5} />,
  ];

  return (
    <section className="section-padding deferred-section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
              {c.tagline}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              {c.headline}
              <br />
              {c.headlineAccent}
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              {highlightFeatureText(c.intro)}
            </p>
            <div className="flex items-center gap-4 text-brand-slate font-serif italic text-xl">
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span>
                {c.quote}
              </span>
            </div>
          </div>

          <div className="reveal reveal-scale reveal-delay-1 relative">
            <Image
              src="/demo/scene-1.svg"
              alt={content.seo.home.title}
              width={1200}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-[500px] w-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 border border-brand-gold/35 bg-brand-slate/70 px-5 py-3 shadow-xl backdrop-blur-md md:inline-flex">
              <div className="flex items-center gap-1.5">
                <Star size={20} fill="#C5A059" stroke="#C5A059" />
                <span className="text-lg font-black tracking-wider text-white">
                  {property.rating.score.toLocaleString(locale === "it" ? "it-IT" : "en-GB")}/5
                </span>
              </div>
              <span className="text-brand-gold/60 text-lg">·</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                {property.rating.reviewCount} {content.trust.reviews} {property.rating.platform}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {c.items.map((feature, index) => (
            <div key={feature.title} className={`reveal reveal-delay-${(index % 4) + 1} group`}>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {featureIcons[index]}
              </div>
              <h3 className="text-xl mb-3 font-serif font-bold">{feature.title}</h3>
              <p className="text-gray-600 text-base md:text-[17px] leading-relaxed">
                {highlightFeatureText(feature.description)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="reveal mt-16 text-center">
          <a
            href="#booking"
            className="inline-flex px-10 py-4 bg-brand-gold text-white uppercase tracking-widest font-semibold hover:bg-brand-slate transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {locale === "it" ? "Controlla date e prezzo" : "Check dates and price"}
          </a>
        </div>
      </div>
    </section>
  );
}

function highlightFeatureText(text: string) {
  const terms = [
    "Via Veneto",
    "Villa Borghese",
    "Piazza di Spagna",
    "Spanish Steps",
    "Fontana di Trevi",
    "Trevi Fountain",
    "3 camere da letto",
    "3 camere",
    "3 bedrooms",
    "3-bedroom",
    "4 ospiti",
    "4 guests",
    "cucina attrezzata",
    "fully equipped kitchen",
    "4,94/5 su Airbnb",
    "4.94/5 on Airbnb",
    "100+ recensioni",
    "100+ reviews",
    "Superhost",
    "Rione Ludovisi",
    "Dolce Vita",
    "a piedi",
    "walking distance"
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
