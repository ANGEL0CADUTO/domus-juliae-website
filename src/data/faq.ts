// ────────────────────────────────────────────────────────────
// Domus Juliae — FAQ
// Domande frequenti con risposte prudenti e verificate.
// Non inventare dati: se manca un'informazione, indica che
// verrà comunicata in fase di richiesta/preventivo.
// ────────────────────────────────────────────────────────────

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "Quanti ospiti può ospitare Domus Juliae?",
    answer:
      "L'appartamento può ospitare fino a 4 persone, con 3 camere da letto, 1 letto matrimoniale, 2 letti singoli e 1 bagno.",
  },
  {
    question: "Dove si trova l'appartamento?",
    answer:
      "Domus Juliae si trova nel Rione Ludovisi, a pochi passi da Via Veneto. Villa Borghese è a 5 minuti a piedi, Piazza Barberini e Piazza di Spagna a 10 minuti, Fontana di Trevi a meno di 15 minuti. La fermata metro più vicina è Barberini (Linea A).",
  },
  {
    question: "La disponibilità è confermata subito?",
    answer:
      "No. La disponibilità non è confermata automaticamente. Dopo la tua richiesta, Demo host verifica manualmente le date e ti risponde direttamente con conferma o alternative disponibili.",
  },
  {
    question: "Devo pagare subito?",
    answer:
      "No. Nessun pagamento è richiesto al momento della richiesta. Le modalità e i tempi di pagamento vengono comunicati solo dopo la conferma della disponibilità.",
  },
  {
    question: "Come avviene il check-in?",
    answer:
      "Il check-in è valutato 5 stelle su Airbnb. L'host Demo host accoglie gli ospiti di persona. Orari e dettagli specifici vengono comunicati in fase di conferma.",
  },
  {
    question: "C'è l'ascensore?",
    answer:
      "Sì, l'edificio è dotato di ascensore. Tuttavia, l'appartamento è accessibile attraversando il chiostro dello stabile ed è necessario salire 5 gradini prima di raggiungere l'ascensore.",
  },
  {
    question: "Il Wi-Fi è veloce?",
    answer:
      "Sì. L'appartamento dispone di Wi-Fi con velocità di 181 Mbps, ideale anche per chi ha necessità di lavoro da remoto. È presente anche uno spazio di lavoro dedicato.",
  },
  {
    question: "La tassa di soggiorno è inclusa?",
    answer:
      "Sì. Il totale include €6 di tassa di soggiorno per ogni ospite e per ogni notte, oltre a €100 fissi di pulizia per l'intero soggiorno.",
  },
  {
    question: "Sono presenti lavatrice o asciugatrice?",
    answer:
      "No, l'appartamento non dispone di lavatrice né asciugatrice. Sono disponibili lavanderie nelle vicinanze.",
  },
  {
    question: "Come posso richiedere disponibilità?",
    answer:
      "Puoi inviare una richiesta direttamente dal sito tramite il modulo nella sezione 'Richiedi disponibilità', oppure contattarci via email (hello@example.com) o WhatsApp (0000000000). Indica le date desiderate e il numero di ospiti: riceverai una risposta personalizzata da Demo host.",
  },
];
