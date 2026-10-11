"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { SiteContent } from "../content/types";
import { getLocalizedPath, type Locale } from "../i18n/config";

type Props = {
  content: SiteContent;
};

const factsLinkLabels: Record<Locale, string> = {
  it: "Vedi informazioni essenziali",
  en: "View essential facts",
  fr: "Voir les informations essentielles",
  es: "Ver información esencial",
  de: "Wichtige Informationen ansehen",
};

export default function FAQ({ content }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const c = content.faq;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding deferred-section scroll-mt-32 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            {c.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            {c.headline}
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            {c.intro}
          </p>
        </div>

        <div className="space-y-0">
          {c.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`reveal reveal-delay-${(index % 4) + 1} border-b border-brand-gold/10`}
              >
                <button
                  id={`faq-question-${index}`}
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 focus-visible:ring-offset-2"
                >
                  <span className="text-brand-slate font-serif text-xl md:text-[22px] pr-8 group-hover:text-brand-gold font-medium transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-brand-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed pr-12">
                    {highlightFaqAnswer(item.answer)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-10 text-center">
          <Link
            href={getLocalizedPath(content.locale, "facts")}
            className="inline-flex min-h-11 items-center justify-center border border-brand-slate px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-brand-slate transition-colors hover:bg-brand-slate hover:text-white"
          >
            {factsLinkLabels[content.locale]}
          </Link>
        </div>
      </div>
    </section>
  );
}

function highlightFaqAnswer(text: string) {
  const terms = [
    "Via Veneto",
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
    "Fontana de Trevi",
    "Barberini",
    "Linea A",
    "Demo host",
    "181 Mbps",
    "3 camere da letto",
    "3 camere",
    "3 bedrooms",
    "3 Zimmern",
    "3 chambres",
    "3 dormitorios",
    "3 letti",
    "3 beds",
    "3 lits",
    "3 camas",
    "3 Betten",
    "1 letto matrimoniale",
    "2 letti singoli",
    "1 double bed",
    "2 single beds",
    "1 lit double",
    "2 lits simples",
    "1 cama doble",
    "2 camas individuales",
    "1 Doppelbett",
    "2 Einzelbetten",
    "1 bagno",
    "1 bathroom",
    "1 salle de bain",
    "1 baño",
    "1 Badezimmer",
    "4 persone",
    "4 ospiti",
    "4 guests",
    "4 personnes",
    "4 Gäste",
    "4 huéspedes",
    "tassa di soggiorno",
    "tourist tax",
    "taxe de séjour",
    "tasa de turística",
    "Ortstaxe",
    "lavatrice",
    "washing machine",
    "lave-linge",
    "lavadora",
    "Waschmaschine",
    "asciugatrice",
    "tumble dryer",
    "dryer",
    "sèche-linge",
    "secadora",
    "Wäschetrockner",
    "lavanderie nelle vicinanze",
    "laundromats are available nearby",
    "laveries sont disponibles à proximité",
    "lavanderías disponibles en las cercanías",
    "in der Nähe gibt es Waschsalons",
    "ascensore",
    "lift",
    "elevator",
    "ascenseur",
    "ascensor",
    "Aufzug"
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
