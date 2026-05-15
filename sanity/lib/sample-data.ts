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
