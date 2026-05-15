// Fallback-Inhalte, damit die Seite auch ohne konfiguriertes Sanity-Projekt
// (z.B. direkt nach dem Vercel-Import) sofort lauffaehig ist. Sobald
// NEXT_PUBLIC_SANITY_PROJECT_ID gesetzt ist, werden die Inhalte aus Sanity
// geladen.

export type SampleSchulung = {
  _id: string;
  titel: string;
  slug: string;
  untertitel: string;
  kurzbeschreibung: string;
  beschreibung?: string[];
  agenda?: { titel: string; beschreibung: string }[];
  dauer: string;
  format: "Online" | "Praesenz" | "Hybrid";
  level: "Einsteiger" | "Fortgeschritten" | "Experte";
  preis: string;
  zielgruppe: string;
  voraussetzungen?: string;
  highlight?: boolean;
};

export const sampleSchulungen: SampleSchulung[] = [
  {
    _id: "sample-1",
    titel: "KI-Grundlagen fuer Entscheider",
    slug: "ki-grundlagen-entscheider",
    untertitel: "Strategie statt Bauchgefuehl",
    kurzbeschreibung:
      "Verstehe in einem Tag, wie generative KI funktioniert, welche Einsatzfelder es im Unternehmen gibt und wie du Projekte sauber priorisierst.",
    beschreibung: [
      "Diese Schulung richtet sich an Geschaeftsfuehrung, Bereichsleitung und Produktverantwortliche, die KI nicht nur als Buzzword, sondern als Werkzeug verstehen wollen.",
      "Wir kombinieren Live-Demos mit Hands-on-Uebungen und einem strukturierten Bewertungsraster fuer eigene Use Cases.",
    ],
    agenda: [
      { titel: "Was ist generative KI wirklich?", beschreibung: "Modelle, Prompts, Tokens, Limits." },
      { titel: "Use-Case Mapping", beschreibung: "Vom Brainstorming zur priorisierten Roadmap." },
      { titel: "Risiken & Compliance", beschreibung: "EU AI Act, DSGVO, Datenklassifizierung." },
      { titel: "Make-or-Buy", beschreibung: "Eigenentwicklung vs. SaaS vs. Plattform." },
    ],
    dauer: "1 Tag",
    format: "Hybrid",
    level: "Einsteiger",
    preis: "ab 1.490 EUR / Person",
    zielgruppe: "Fuehrungskraefte, Produktmanagement, Strategie",
    voraussetzungen: "Keine technischen Vorkenntnisse erforderlich.",
    highlight: true,
  },
  {
    _id: "sample-2",
    titel: "Prompt Engineering Intensiv",
    slug: "prompt-engineering-intensiv",
    untertitel: "Vom Spielen zum Produzieren",
    kurzbeschreibung:
      "Praxisworkshop fuer alle, die taeglich mit ChatGPT, Claude oder Gemini arbeiten und reproduzierbare Ergebnisse erzielen wollen.",
    beschreibung: [
      "An zwei Tagen erarbeiten wir gemeinsam wiederverwendbare Prompt-Bausteine, Pattern-Bibliotheken und Evaluations-Methoden.",
    ],
    agenda: [
      { titel: "Anatomie eines guten Prompts", beschreibung: "Rolle, Kontext, Format, Constraints." },
      { titel: "Pattern-Bibliothek", beschreibung: "Chain-of-Thought, ReAct, Few-Shot, Self-Critique." },
      { titel: "Tooling", beschreibung: "Sammeln, Testen, Versionieren von Prompts." },
      { titel: "Evaluation", beschreibung: "Wie bewertet man Output-Qualitaet objektiv?" },
    ],
    dauer: "2 Tage",
    format: "Online",
    level: "Fortgeschritten",
    preis: "ab 1.890 EUR / Person",
    zielgruppe: "Knowledge Worker, Marketing, Redaktion, Support",
    voraussetzungen: "Erste Erfahrung mit einem KI-Chatbot.",
  },
  {
    _id: "sample-3",
    titel: "Retrieval Augmented Generation in Production",
    slug: "rag-in-production",
    untertitel: "Eigene Daten, eigene Antworten",
    kurzbeschreibung:
      "Architektur, Werkzeuge und Fallstricke beim Bau eines produktiven RAG-Systems mit Vektor-Datenbank, Embeddings und LLM.",
    beschreibung: [
      "Hands-on Workshop fuer Entwickler:innen und Data Engineers, die ein eigenes Wissens-Backend bauen wollen.",
      "Wir gehen den kompletten Weg von der Datenaufbereitung ueber Chunking-Strategien bis zum Monitoring im Live-Betrieb.",
    ],
    agenda: [
      { titel: "Architekturpatterns", beschreibung: "Naive RAG, Hybrid Search, Re-Ranker, Agents." },
      { titel: "Embeddings & Vektor-DBs", beschreibung: "OpenAI, Voyage, pgvector, Pinecone, Qdrant." },
      { titel: "Quality Gates", beschreibung: "Eval-Sets, Guardrails, Halluzinationskontrolle." },
      { titel: "Operations", beschreibung: "Caching, Kostenkontrolle, Observability." },
    ],
    dauer: "3 Tage",
    format: "Praesenz",
    level: "Experte",
    preis: "ab 2.890 EUR / Person",
    zielgruppe: "Entwickler:innen, Data Engineers, ML Engineers",
    voraussetzungen: "Sicherer Umgang mit Python und REST-APIs.",
    highlight: true,
  },
  {
    _id: "sample-4",
    titel: "KI fuer Marketing & Content",
    slug: "ki-marketing-content",
    untertitel: "Vom Briefing zum Kanal",
    kurzbeschreibung:
      "Wie Marketing-Teams KI nutzen, um Recherche, Konzeption, Texterstellung und Bildproduktion deutlich zu beschleunigen.",
    dauer: "1 Tag",
    format: "Online",
    level: "Einsteiger",
    preis: "ab 990 EUR / Person",
    zielgruppe: "Marketing, PR, Content, Social Media",
    agenda: [
      { titel: "Recherche & Briefings mit KI", beschreibung: "Schneller verstehen, was Zielgruppen wollen." },
      { titel: "Texten mit System", beschreibung: "Brand Voice, Tonality, Templates." },
      { titel: "Bildgenerierung", beschreibung: "Midjourney, DALL-E, Adobe Firefly im Vergleich." },
    ],
  },
  {
    _id: "sample-5",
    titel: "AI Agents & Automatisierung",
    slug: "ai-agents-automatisierung",
    untertitel: "Wenn KI eigenstaendig arbeitet",
    kurzbeschreibung:
      "Konzepte, Frameworks und Risiken beim Bau autonomer Agenten, die ueber Tools mit der echten Welt interagieren.",
    dauer: "2 Tage",
    format: "Hybrid",
    level: "Fortgeschritten",
    preis: "ab 2.190 EUR / Person",
    zielgruppe: "Entwickler:innen, IT-Architekt:innen, Innovationsteams",
    agenda: [
      { titel: "Agent-Patterns", beschreibung: "ReAct, Plan-and-Execute, Multi-Agent." },
      { titel: "Tool Use", beschreibung: "Function Calling, MCP, sichere Tool-Belegung." },
      { titel: "Sicherheit & Kontrolle", beschreibung: "Sandboxing, Human-in-the-Loop, Audit Trails." },
    ],
  },
  {
    _id: "sample-6",
    titel: "KI & Datenschutz im Unternehmen",
    slug: "ki-datenschutz-unternehmen",
    untertitel: "DSGVO und EU AI Act in der Praxis",
    kurzbeschreibung:
      "Rechtssichere Einfuehrung von KI-Tools: Vertraege, Rollen, Datenklassifizierung und technische Schutzmassnahmen.",
    dauer: "1 Tag",
    format: "Online",
    level: "Fortgeschritten",
    preis: "ab 1.290 EUR / Person",
    zielgruppe: "Datenschutz, Compliance, IT-Security, Betriebsrat",
    agenda: [
      { titel: "Rechtsrahmen", beschreibung: "DSGVO, EU AI Act, Urheberrecht." },
      { titel: "Risiko-Assessment", beschreibung: "Klassifizierung von Use Cases und Daten." },
      { titel: "Technische Massnahmen", beschreibung: "Pseudonymisierung, Filter, Logging." },
    ],
  },
];

// --- Blog ---

export type SampleBlogPost = {
  _id: string;
  titel: string;
  slug: string;
  untertitel?: string;
  veroeffentlichtAm?: string;
  autor?: string;
  tags?: string[];
  text?: string[];
  video?: {
    url?: string;
    beschriftung?: string;
    dateiUrl?: string;
  };
  downloads?: {
    _key?: string;
    titel: string;
    beschreibung?: string;
    kategorie?: string;
    url?: string;
    groesse?: number;
    dateiname?: string;
  }[];
};

export const sampleBlogPosts: SampleBlogPost[] = [
  {
    _id: "blog-1",
    titel: "Wie ihr ChatGPT sicher im Unternehmen einfuehrt",
    slug: "chatgpt-sicher-einfuehren",
    untertitel:
      "Ein pragmatischer Fahrplan in fuenf Schritten - von der Pilotgruppe bis zum Rollout.",
    veroeffentlichtAm: "2026-04-22T08:00:00.000Z",
    autor: "Stefan Mueller",
    tags: ["Strategie", "Governance", "ChatGPT"],
    text: [
      "Die Einfuehrung von ChatGPT scheitert in den meisten Unternehmen nicht an der Technik, sondern an Governance und Erwartungsmanagement. Wer ohne Leitplanken startet, produziert Schatten-IT - wer zu lange diskutiert, verliert den Anschluss.",
      "In diesem Beitrag zeigen wir den Weg, den wir mit ueber 30 mittelstaendischen Unternehmen erfolgreich gegangen sind: Pilotgruppe definieren, Use Cases sammeln, Datenklassifizierung schaerfen, Tooling auswaehlen, schrittweise ausrollen.",
      "Wichtig ist: Setze klare Regeln, bevor das erste Team produktiv geht. Eine kurze, verstaendliche Richtlinie ist mehr wert als ein 40-seitiges Compliance-Dokument, das niemand liest.",
    ],
    video: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      beschriftung: "10-Minuten-Zusammenfassung des Fahrplans (Demo-Video)",
    },
    downloads: [
      {
        _key: "d1",
        titel: "Checkliste: ChatGPT-Einfuehrung in 5 Schritten",
        beschreibung:
          "Druckfertige Checkliste mit allen kritischen Entscheidungen je Phase.",
        kategorie: "Checkliste",
        dateiname: "checkliste-chatgpt-einfuehrung.pdf",
      },
      {
        _key: "d2",
        titel: "Argumentationshilfe fuer den Betriebsrat",
        beschreibung:
          "Antworten auf die zehn haeufigsten Bedenken aus Mitbestimmungsgremien.",
        kategorie: "Argumentation",
        dateiname: "argumentation-betriebsrat.pdf",
      },
      {
        _key: "d3",
        titel: "Vorlage: KI-Nutzungsrichtlinie (2 Seiten)",
        beschreibung:
          "Schlanke Richtlinie als Word- bzw. PDF-Vorlage, anpassbar auf das eigene Unternehmen.",
        kategorie: "Vorlage",
        dateiname: "vorlage-ki-richtlinie.pdf",
      },
    ],
  },
  {
    _id: "blog-2",
    titel: "Halluzinationen reduzieren: 7 Hebel fuer RAG-Systeme",
    slug: "halluzinationen-reduzieren-rag",
    untertitel:
      "Warum dein Wissens-Bot trotzdem Bloedsinn erzaehlt - und welche Stellschrauben wirklich helfen.",
    veroeffentlichtAm: "2026-03-14T09:30:00.000Z",
    autor: "Stefan Mueller",
    tags: ["RAG", "Engineering", "Qualitaet"],
    text: [
      "RAG-Systeme versprechen, Halluzinationen zu reduzieren - in der Praxis erleben wir oft das Gegenteil: ein gut klingender, aber falscher Output. Die Ursachen liegen selten beim LLM, sondern fast immer im Retrieval und in der Prompt-Architektur.",
      "Wir gehen die sieben wirkungsvollsten Hebel durch: Chunking-Strategie, Embedding-Modell, Re-Ranker, Kontextlaenge, System-Prompt, Evaluation-Set und Monitoring im Live-Betrieb.",
    ],
    video: {
      url: "https://vimeo.com/76979871",
      beschriftung: "Workshop-Mitschnitt (gekuerzt, ~12 Min.)",
    },
    downloads: [
      {
        _key: "d1",
        titel: "Checkliste: RAG Quality Gates",
        beschreibung: "Pruefliste fuer den Go-Live deines RAG-Systems.",
        kategorie: "Checkliste",
        dateiname: "checkliste-rag-quality-gates.pdf",
      },
      {
        _key: "d2",
        titel: "Whitepaper: Halluzinationen messbar machen",
        beschreibung:
          "13-seitiges PDF mit konkreten Eval-Methoden und Beispieldaten.",
        kategorie: "Whitepaper",
        dateiname: "whitepaper-halluzinationen.pdf",
      },
    ],
  },
  {
    _id: "blog-3",
    titel: "EU AI Act: Was bis 2027 wirklich zu tun ist",
    slug: "eu-ai-act-bis-2027",
    untertitel:
      "Pflichten, Fristen und der pragmatische Pfad zur Umsetzung - ohne Panikmodus.",
    veroeffentlichtAm: "2026-02-02T07:15:00.000Z",
    autor: "Stefan Mueller",
    tags: ["Recht", "EU AI Act", "Compliance"],
    text: [
      "Der EU AI Act ist beschlossen, viele Pflichten greifen gestaffelt. Statt allgemeiner Panik braucht es eine nuechterne Bestandsaufnahme: Welche Systeme nutze ich? In welcher Risikoklasse liegen sie? Was muss bis wann nachgewiesen werden?",
      "Dieser Beitrag ordnet die Fristen ein und gibt eine Argumentationshilfe fuer die interne Kommunikation an Geschaeftsfuehrung, Recht und IT.",
    ],
    downloads: [
      {
        _key: "d1",
        titel: "Argumentation: EU AI Act fuer die Geschaeftsleitung",
        beschreibung:
          "Drei-Folien-Briefing mit den wichtigsten Botschaften und Fristen.",
        kategorie: "Argumentation",
        dateiname: "argumentation-eu-ai-act.pdf",
      },
      {
        _key: "d2",
        titel: "Checkliste: AI-System-Inventar",
        beschreibung:
          "Strukturierte Erfassung aller KI-Systeme im Unternehmen, inkl. Risikoklassifizierung.",
        kategorie: "Checkliste",
        dateiname: "checkliste-ai-system-inventar.pdf",
      },
    ],
  },
];
