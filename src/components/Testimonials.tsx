import { Star, Award, Wifi, CheckCircle, MapPin, UserCheck } from "lucide-react";
import { property, contact, isConfigured } from "../config/site";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

const sourceLabels: Record<Locale, string> = {
  it: "Leggi le recensioni aggiornate su Airbnb", en: "Read the latest reviews on Airbnb",
  fr: "Lire les avis à jour sur Airbnb", es: "Lee las reseñas actualizadas en Airbnb",
  de: "Aktuelle Bewertungen auf Airbnb lesen",
};

export default function Testimonials({ locale, content }: Props) {
  const c = content.testimonials;

  const trustIcons = [
    <Star key="1" size={28} fill="currentColor" strokeWidth={0} />,
    <Award key="2" size={28} strokeWidth={1.5} />,
    <CheckCircle key="3" size={28} strokeWidth={1.5} />,
    <MapPin key="4" size={28} strokeWidth={1.5} />,
    <Wifi key="5" size={28} strokeWidth={1.5} />,
    <UserCheck key="6" size={28} strokeWidth={1.5} />,
  ];

  return (
    <section className="section-padding deferred-section bg-brand-slate text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            {c.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            {c.headline}
          </h2>
          <p className="text-white/85 text-xl leading-relaxed max-w-3xl mx-auto">
            {c.intro}
          </p>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <span className="text-3xl font-serif italic">
              {property.rating.score.toLocaleString(locale === "it" ? "it-IT" : "en-GB")}
            </span>
            <span className="text-white/60 text-base">/ 5</span>
          </div>
          {isConfigured(contact.airbnbUrl) ? (
            <a href={contact.airbnbUrl} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center text-white underline underline-offset-4 hover:text-brand-gold">
              {sourceLabels[locale]}
            </a>
          ) : null}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.cards.map((card, index) => (
            <article
              key={card.label}
              className={`reveal reveal-delay-${(index % 4) + 1} bg-white/5 p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300`}
            >
              <div className="text-brand-gold mb-4">{trustIcons[index]}</div>
              <p className="text-2xl font-serif mb-2">{card.value}</p>
              <p className="text-white/95 text-base md:text-lg font-semibold mb-1">
                {card.label}
              </p>
              <p className="text-white/60 text-sm">{card.sublabel}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
