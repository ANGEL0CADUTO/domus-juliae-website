import {
  MessageCircle,
  CheckCircle,
  User,
  Shield,
  Search,
  Tag,
} from "lucide-react";
import { directAdvantages } from "../config/site";
import type { SiteContent } from "../content/types";

const iconMap: Record<string, React.ReactNode> = {
  "message-circle": <MessageCircle size={28} strokeWidth={1.5} />,
  "check-circle": <CheckCircle size={28} strokeWidth={1.5} />,
  user: <User size={28} strokeWidth={1.5} />,
  shield: <Shield size={28} strokeWidth={1.5} />,
  search: <Search size={28} strokeWidth={1.5} />,
  tag: <Tag size={28} strokeWidth={1.5} />,
};

type Props = {
  content: SiteContent;
};

export default function WhyDirect({ content }: Props) {
  const c = content.whyDirect;

  return (
    <section className="section-padding deferred-section bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            {c.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            {c.headline}
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            {c.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.items.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`reveal reveal-delay-${(index % 4) + 1} bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              <div className="text-brand-gold mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {iconMap[directAdvantages[index]?.icon] || null}
              </div>
              <h3 className="text-xl font-serif mb-3 font-semibold">{advantage.title}</h3>
              <p className="text-gray-600 text-base md:text-[17px] leading-relaxed">
                {highlightAdvantageText(advantage.description)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="reveal mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex px-10 py-4 bg-brand-gold text-white uppercase tracking-widest font-semibold hover:bg-brand-slate transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {content.nav.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function highlightAdvantageText(text: string) {
  const terms = [
    "Demo host",
    "nessun obbligo",
    "no commitment",
    "senza alcun obbligo",
    "senza impegno",
    "no-obligation",
    "date e necessità",
    "dates and needs",
    "nessun pagamento",
    "no payment",
    "controllata personalmente",
    "personally verified",
    "preventivo diretto",
    "direct quote",
    "condizioni dedicate",
    "up-to-date terms",
    "risparmi le commissioni",
    "risparmi commissioni",
    "avoid service fees",
    "avoid fees",
    "check-in",
    "check-out",
    "ospiti",
    "guests",
    "totale calcolato",
    "total calculated",
    "prezzo diretto",
    "direct price",
    "pagamento online",
    "online payment",
    "date sono libere",
    "dates are free",
    "calendario risulta libero",
    "calendar is free",
    "blocchi interni",
    "internal blocks",
    "calendari iCal",
    "iCal calendars",
    "Dopo il pagamento",
    "After payment",
    "date vengono salvate",
    "dates are saved",
    "bloccate",
    "blocked",
    "calendario interno",
    "internal calendar",
    "prezzo e disponibilità",
    "price and availability",
    "meno passaggi",
    "fewer steps",
    "sans engagement",
    "sin compromiso",
    "unverbindliche",
    "paiement en ligne",
    "pago online",
    "Online-Zahlung",
    "calendrier est libre",
    "calendario está libre",
    "Kalender frei ist"
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
