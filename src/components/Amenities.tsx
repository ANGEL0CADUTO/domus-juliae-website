import { Check, X } from "lucide-react";
import type { SiteContent } from "../content/types";

type Props = {
  content: SiteContent;
};

export default function Amenities({ content }: Props) {
  const c = content.amenities;

  return (
    <section id="amenities" className="section-padding deferred-section bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            {c.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl">{c.headline}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {c.included.map((item, index) => (
            <div key={index} className={`reveal reveal-delay-${(index % 4) + 1} flex items-center gap-3`}>
              <Check size={20} className="text-brand-gold shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}

          {/* Not available */}
          {c.notAvailable.map((item, index) => (
            <div key={`not-${index}`} className={`reveal reveal-delay-${(index % 4) + 1} flex items-center gap-3`}>
              <X size={20} className="text-gray-400 shrink-0" />
              <span className="text-gray-500 line-through">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
