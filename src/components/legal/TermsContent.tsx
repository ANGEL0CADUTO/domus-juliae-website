import { cancellationCopy } from "../../content/cancellationPolicy";
import { contact } from "../../config/site";
import type { Locale } from "../../i18n/config";
import type { SiteContent } from "../../content/types";
import LegalPageLayout from "../LegalPageLayout";

type Props = { locale: Locale; content: SiteContent };
type Section = { title: string; paragraphs?: string[]; items?: string[] };

const propertyCopy: Record<Locale, [string, string, string]> = {
  "it": [
    "La struttura",
    "Via Veneto - Domus Juliae, Demo address, 00187 Roma, Italia. CIN: DEMO-PROPERTY.",
    "Il riepilogo prima del pagamento indica il totale del soggiorno, la pulizia, la tassa di soggiorno e gli eventuali sconti. L’orario di arrivo si concorda con Demo host; la scadenza di cancellazione è sempre calcolata alle 16:00, ora di Roma."
  ],
  "en": [
    "The property",
    "Via Veneto - Domus Juliae, Demo address, 00187 Rome, Italy. CIN: DEMO-PROPERTY.",
    "The summary before payment shows the stay total, cleaning, tourist tax and any discounts. Arrange your arrival time with Demo host; the cancellation deadline is always calculated at 16:00 Rome time."
  ],
  "fr": [
    "L’établissement",
    "Via Veneto - Domus Juliae, Demo address, 00187 Rome, Italie. CIN : DEMO-PROPERTY.",
    "Le récapitulatif avant paiement indique le total, le ménage, la taxe de séjour et les éventuelles réductions. Convenez de votre heure d’arrivée avec Demo host ; l’échéance d’annulation est toujours calculée à 16 h, heure de Rome."
  ],
  "es": [
    "El alojamiento",
    "Via Veneto - Domus Juliae, Demo address, 00187 Roma, Italia. CIN: DEMO-PROPERTY.",
    "El resumen previo al pago indica el total, la limpieza, la tasa turística y los posibles descuentos. Acuerda la hora de llegada con Demo host; el plazo de cancelación siempre se calcula a las 16:00, hora de Roma."
  ],
  "de": [
    "Die Unterkunft",
    "Via Veneto - Domus Juliae, Demo address, 00187 Rom, Italien. CIN: DEMO-PROPERTY.",
    "Die Übersicht vor der Zahlung zeigt Gesamtpreis, Reinigung, Kurtaxe und mögliche Rabatte. Vereinbaren Sie Ihre Ankunftszeit mit Demo host; die Stornierungsfrist wird stets für 16:00 Uhr Ortszeit Rom berechnet."
  ]
};

function renderSections(sections: Section[]) {
  return sections.map((section) => (
    <section key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.items ? (
        <ul>
          {section.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}
    </section>
  ));
}

export default function TermsContent({ locale, content }: Props) {
  const l = content.legal.terms;
  const c = cancellationCopy[locale];
  const identity = propertyCopy[locale];
  const sections: Section[] = [
    { title: identity[0], paragraphs: [identity[1]] },
    { title: c.paymentTitle, paragraphs: [identity[2], c.payment] },
    { title: c.title, paragraphs: [c.freeRule, c.lateRule, c.hostRule, c.taxRule, c.scope] },
    { title: c.contactTitle, paragraphs: [c.request.replace("{email}", contact.email), c.refund] },
  ];

  return (
    <LegalPageLayout title={l.title} subtitle={l.subtitle} lastUpdated={l.lastUpdated} locale={locale} content={content}>
      {renderSections(sections)}
    </LegalPageLayout>
  );
}
