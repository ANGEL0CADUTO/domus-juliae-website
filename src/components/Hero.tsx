import { ChevronDown, Star, Users, BedDouble, Bath } from "lucide-react";
import { property } from "../config/site";
import type { SiteContent } from "../content/types";
import type { Locale } from "../i18n/config";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export default function Hero({ locale, content }: Props) {
  const c = content.hero;
  return (
    <section
      id="home"
      className="relative flex min-h-[88svh] w-full items-center justify-center overflow-hidden py-20 md:h-screen md:py-0"
    >
      {/* Background Video with Overlay */}
      <div className="hero-media absolute inset-0 z-0">
        <img src="/demo/scene-1.svg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-black/46" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 pt-16 text-center md:pt-0">
        {/* Rating badge */}
        <div className="hero-enter hero-delay-1 mb-6 inline-flex items-center gap-2 border border-brand-gold/35 bg-brand-slate/55 px-4 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02] sm:mb-8 sm:gap-3 sm:px-6 sm:py-3">
          <div className="flex items-center gap-1.5">
            <Star size={20} fill="#C5A059" stroke="#C5A059" />
            <span className="text-base font-black tracking-wider text-white md:text-lg">
              {property.rating.score.toLocaleString(locale === "it" ? "it-IT" : "en-GB")}/5
            </span>
          </div>
          <span className="hidden text-brand-gold/60 text-lg sm:inline">·</span>
          <span className="hidden text-sm font-bold uppercase tracking-widest text-white/90 md:text-base sm:inline">
            {property.rating.reviewCount} {content.trust.reviews} {property.rating.platform}
          </span>
          <span className="hidden text-brand-gold/60 text-lg sm:inline">·</span>
          <span className="hidden text-sm font-bold uppercase tracking-widest text-brand-gold md:text-base sm:inline">
            {content.trust.superhost}
          </span>
        </div>

        <h1 className="hero-enter hero-delay-2 mb-5 text-[2.55rem] leading-[1.04] text-white sm:text-5xl md:mb-6 md:text-6xl md:leading-[1.1] lg:text-7xl">
          {c.headline}{" "}
          <br className="hidden sm:inline" />
          <span className="italic font-light">{c.headlineAccent}</span>
        </h1>

        <p className="hero-enter hero-delay-3 hidden md:block text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8 leading-relaxed">
          {highlightSubtitle(c.subtitle)}
        </p>

        {/* Quick stats */}
        <div className="hero-enter hero-delay-3 hidden md:flex items-center justify-center gap-6 md:gap-8 mb-10 flex-wrap">
          <div className="flex items-center gap-2 text-white/80">
            <Users size={18} className="text-brand-gold" />
            <span className="text-base md:text-lg font-medium">{property.capacity.guests} {c.statsGuests}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <BedDouble size={18} className="text-brand-gold" />
            <span className="text-base md:text-lg font-medium">
              {property.capacity.bedrooms} {c.statsBedrooms} · {property.capacity.beds}{" "}
              {c.statsBeds}
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Bath size={18} className="text-brand-gold" />
            <span className="text-base md:text-lg font-medium">
              {property.capacity.bathrooms} {c.statsBathroom}
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-enter hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#booking"
            aria-label={c.ctaPrimary}
            className="w-full bg-brand-gold px-8 py-3.5 text-center font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-brand-slate sm:w-auto sm:px-10 sm:py-4"
          >
            {c.ctaPrimary}
          </a>
          <a
            href="#apartment"
            aria-label={c.ctaSecondary}
            className="hidden w-full border border-white/30 px-8 py-3.5 text-center font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:inline-flex sm:w-auto sm:px-10 sm:py-4"
          >
            {c.ctaSecondary}
          </a>
        </div>

        {/* Save money direct banner */}
        <div className="hero-enter hero-delay-5 mx-auto mt-5 inline-flex max-w-fit items-center border border-brand-gold/35 bg-brand-slate/55 px-4 py-2 text-center shadow-lg backdrop-blur-md md:mt-7">
          <p className="text-[11px] font-bold uppercase leading-snug tracking-[0.18em] text-white/90 md:text-xs">
            {locale === "it" ? (
              <>
                Prezzo diretto: <strong className="text-brand-gold">zero commissioni portale</strong>
              </>
            ) : locale === "fr" ? (
              <>
                Prix direct: <strong className="text-brand-gold">sans frais de plateforme</strong>
              </>
            ) : locale === "es" ? (
              <>
                Precio directo: <strong className="text-brand-gold">sin comisiones de portal</strong>
              </>
            ) : locale === "de" ? (
              <>
                Direktpreis: <strong className="text-brand-gold">keine Portalgebuehren</strong>
              </>
            ) : (
              <>
                Direct price: <strong className="text-brand-gold">no platform fees</strong>
              </>
            )}
          </p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
}

function highlightSubtitle(text: string) {
  const terms = [
    "Domus Juliae",
    "3 camere da letto",
    "3 camere",
    "3 bedrooms",
    "3-bedroom",
    "3 Zimmern",
    "3 chambres",
    "3 dormitorios",
    "4 ospiti",
    "4 guests",
    "4 personnes",
    "4 Gäste",
    "4 huéspedes",
    "Villa Borghese",
    "Piazza Barberini",
    "Piazza di Spagna",
    "Spanish Steps",
    "Place d'Espagne",
    "Plaza de España",
    "Spanische Treppe",
    "Fontana di Trevi",
    "Trevi Fountain",
    "Fontaine de Trevi",
    "Trevi-Brunnen",
    "Fontana de Trevi"
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
          newParts.push(<strong key={subpart + Math.random()} className="font-semibold text-white">{subpart}</strong>);
        } else if (subpart) {
          newParts.push(subpart);
        }
      }
    }
    parts = newParts;
  }
  return parts;
}
