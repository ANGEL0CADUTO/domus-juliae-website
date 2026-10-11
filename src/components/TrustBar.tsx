"use client";

import { Star, Award, Wifi, MapPin, ShieldCheck, Users } from "lucide-react";
import { property } from "../config/site";
import type { SiteContent } from "../content/types";

type Props = {
  content: SiteContent;
};

export default function TrustBar({ content }: Props) {
  const c = content.trust;
  const tLoc = content.location;

  const trustItems = [
    {
      icon: <Star size={18} fill="currentColor" />,
      label: `${property.rating.score.toLocaleString(content.locale === "it" ? "it-IT" : "en-GB")}/5`,
      sublabel: property.rating.platform,
    },
    {
      icon: <Users size={18} />,
      label: `${property.rating.reviewCount} ${c.reviews}`,
      sublabel: "",
    },
    {
      icon: <Award size={18} />,
      label: c.superhost,
      sublabel: "",
    },
    {
      icon: <Wifi size={18} />,
      label: "Wi-Fi 181 Mbps",
      sublabel: "",
    },
    {
      icon: <MapPin size={18} />,
      label: tLoc.distances[0]?.name + " (" + tLoc.distances[0]?.time + ")",
      sublabel: "",
    },
    {
      icon: <MapPin size={18} />,
      label: tLoc.distances[1]?.name + " (" + tLoc.distances[1]?.time + ")",
      sublabel: "",
    },
  ];

  return (
    <section
      aria-label="Dati verificati della struttura"
      className="reveal bg-brand-slate text-white border-t border-white/5 py-5 overflow-hidden"
    >
      <div className="w-full relative flex overflow-x-hidden">
        {/* Ticker track */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {/* First set */}
          <div className="flex items-center gap-12 shrink-0">
            {trustItems.map((item, index) => (
              <div
                key={`item-1-${index}`}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span className="text-brand-gold">{item.icon}</span>
                <span className={`text-sm uppercase tracking-wider ${
                  index === 0 || index === 1 ? "font-black text-brand-gold" : "font-semibold text-white/90"
                }`}>
                  {item.label}
                </span>
                {item.sublabel ? (
                  <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                    {item.sublabel}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-12 shrink-0" aria-hidden="true">
            {trustItems.map((item, index) => (
              <div
                key={`item-2-${index}`}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span className="text-brand-gold">{item.icon}</span>
                <span className={`text-sm uppercase tracking-wider ${
                  index === 0 || index === 1 ? "font-black text-brand-gold" : "font-semibold text-white/90"
                }`}>
                  {item.label}
                </span>
                {item.sublabel ? (
                  <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                    {item.sublabel}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
