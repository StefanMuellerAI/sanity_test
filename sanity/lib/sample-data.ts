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

// --- Team ---

export type SampleTeamMitglied = {
  _id: string;
  name: string;
  rolle?: string;
  kurztext?: string;
  bio?: string[];
  email?: string;
  linkedin?: string;
  website?: string;
};

export const sampleTeam: SampleTeamMitglied[] = [
  {
    _id: "team-1",
    name: "Stefan Mueller",
    rolle: "Gruender & Lead Trainer",
    kurztext:
      "Begleitet seit ueber 15 Jahren Unternehmen bei Digitalisierungs- und KI-Projekten. Schwerpunkte: Strategie, Architektur, GenAI.",
    bio: [
      "Stefan ist Diplom-Informatiker und arbeitet seit ueber 15 Jahren an der Schnittstelle von Software, Daten und Strategie.",
      "Vor StefanAI war er als Softwarearchitekt und Berater fuer Mittelstand und Konzerne taetig. Seine Schulungen sind bekannt fuer pragmatische Beispiele und ehrliche Einordnung.",
    ],
    email: "stefan@stefanai.example",
    linkedin: "https://www.linkedin.com/in/example",
  },
  {
    _id: "team-2",
    name: "Lena Hofmann",
    rolle: "Senior AI Engineer",
    kurztext:
      "Baut RAG- und Agenten-Systeme fuer Kunden aus Industrie und Finance. Bringt die Welt der Forschung in den Workshop.",
    bio: [
      "Lena hat in Tuebingen Machine Learning studiert und arbeitet seit ueber sechs Jahren produktiv mit grossen Sprachmodellen.",
      "Im Workshop ist sie diejenige, die unbequeme Fragen liebt - und meistens beantworten kann.",
    ],
    email: "lena@stefanai.example",
  },
  {
    _id: "team-3",
    name: "Jonas Becker",
    rolle: "AI Strategy Consultant",
    kurztext:
      "Uebersetzt zwischen Geschaeftsfuehrung und IT. Spezialgebiet: Use-Case-Portfolio und Governance.",
    bio: [
      "Jonas kommt aus dem Management Consulting und hat in den letzten drei Jahren ueber 40 KI-Roadmaps mit Kunden erarbeitet.",
    ],
    email: "jonas@stefanai.example",
  },
  {
    _id: "team-4",
    name: "Mira Sandberg",
    rolle: "Pressereferentin & Communications",
    kurztext:
      "Erste Anlaufstelle fuer Journalist:innen. Koordiniert Interviews, Statements und Pressemitteilungen.",
    bio: [
      "Mira hat in Berlin Kommunikationswissenschaft studiert und ist seit vier Jahren bei StefanAI fuer Presse und Oeffentlichkeitsarbeit verantwortlich.",
    ],
    email: "presse@stefanai.example",
  },
];

// --- Pressekontakt ---

export type SamplePressekontakt = {
  name: string;
  rolle?: string;
  email?: string;
  telefon?: string;
  linkedin?: string;
  kurztext?: string;
};

export const samplePressekontakt: SamplePressekontakt = {
  name: "Mira Sandberg",
  rolle: "Pressereferentin",
  email: "presse@stefanai.example",
  telefon: "+49 (0) 000 000000",
  linkedin: "https://www.linkedin.com/in/example",
  kurztext:
    "Anfragen zu Interviews, Statements und O-Toenen bitte direkt an Mira. Antwort in der Regel innerhalb eines Werktages.",
};

// --- Presseveroeffentlichungen ---

export type SamplePresseveroeffentlichung = {
  _id: string;
  titel: string;
  url: string;
  medium?: string;
  datum?: string;
  kurzbeschreibung?: string;
  art?: string;
};

export const samplePressestimmen: SamplePresseveroeffentlichung[] = [
  {
    _id: "presse-1",
    titel: "Wie KI den Mittelstand veraendert - Stefan Mueller im Interview",
    url: "https://example.com/artikel-1",
    medium: "Wirtschaftswoche",
    datum: "2026-04-08",
    kurzbeschreibung:
      "Ueber Use Cases jenseits des Hypes und die Frage, was Geschaeftsfuehrungen jetzt wirklich tun sollten.",
    art: "Interview",
  },
  {
    _id: "presse-2",
    titel: "RAG in Production: Pragmatischer Leitfaden fuer Teams",
    url: "https://example.com/artikel-2",
    medium: "heise online",
    datum: "2026-02-21",
    kurzbeschreibung:
      "Gastbeitrag mit Architektur-Empfehlungen, der seither hundertfach in Tech-Newslettern zitiert wird.",
    art: "Artikel",
  },
  {
    _id: "presse-3",
    titel: "Folge 42: Was der EU AI Act fuer Entwickler bedeutet",
    url: "https://example.com/podcast-3",
    medium: "Programmier Bar Podcast",
    datum: "2026-01-15",
    kurzbeschreibung:
      "90 Minuten Tiefgang zu Risikoklassen, Fristen und konkreten Umsetzungsschritten.",
    art: "Podcast",
  },
  {
    _id: "presse-4",
    titel: "Die 50 wichtigsten KI-Experten in DACH 2026",
    url: "https://example.com/ranking-4",
    medium: "t3n",
    datum: "2025-11-30",
    kurzbeschreibung:
      "StefanAI im jaehrlichen Ranking der einflussreichsten KI-Stimmen im deutschsprachigen Raum.",
    art: "Artikel",
  },
];

// --- Pressekits ---

export type SamplePressekit = {
  _id: string;
  titel: string;
  beschreibung?: string;
  kategorie?: string;
  url?: string;
  groesse?: number;
  dateiname?: string;
  mime?: string;
};

export const samplePressekits: SamplePressekit[] = [
  {
    _id: "kit-1",
    titel: "Pressemappe 2026",
    beschreibung:
      "Unternehmens-Factsheet, Kurzbiografien und aktuelle Pressefotos als kompaktes PDF.",
    kategorie: "Pressemappe",
    dateiname: "stefanai-pressemappe-2026.pdf",
    mime: "application/pdf",
  },
  {
    _id: "kit-2",
    titel: "Logo-Paket",
    beschreibung:
      "StefanAI Logo in SVG, PNG und EPS - hell und dunkel, mit Schutzraum-Hinweisen.",
    kategorie: "Logo-Paket",
    dateiname: "stefanai-logos.zip",
    mime: "application/zip",
  },
  {
    _id: "kit-3",
    titel: "Bildpaket Team",
    beschreibung:
      "Hochaufloesende Portraitfotos des StefanAI-Teams zur honorarfreien Veroeffentlichung.",
    kategorie: "Bilder",
    dateiname: "stefanai-team-bilder.zip",
    mime: "application/zip",
  },
  {
    _id: "kit-4",
    titel: "Factsheet KI-Schulungen",
    beschreibung:
      "Einseitige Uebersicht ueber das Schulungsportfolio mit Zielgruppen und Formaten.",
    kategorie: "Factsheet",
    dateiname: "stefanai-factsheet.pdf",
    mime: "application/pdf",
  },
];

// --- Rechtsseiten ---

export type SampleRechtsseite = {
  _id: string;
  titel: string;
  slug: string;
  untertitel?: string;
  inhalt: { _key: string; ueberschrift?: string; absaetze: string[] }[];
  aktualisiertAm?: string;
};

export const sampleRechtsseiten: SampleRechtsseite[] = [
  {
    _id: "rs-impressum",
    titel: "Impressum",
    slug: "impressum",
    untertitel:
      "Angaben gemaess Paragraph 5 DDG (Digitale-Dienste-Gesetz, vormals TMG).",
    aktualisiertAm: "2026-05-01",
    inhalt: [
      {
        _key: "anbieter",
        ueberschrift: "Anbieter",
        absaetze: [
          "Stefan Mueller",
          "StefanAI",
          "Musterstrasse 1",
          "12345 Musterstadt",
          "Deutschland",
        ],
      },
      {
        _key: "kontakt",
        ueberschrift: "Kontakt",
        absaetze: [
          "Telefon: +49 (0) 000 000000",
          "E-Mail: hallo@stefanai.example",
          "Web: stefanai.de",
        ],
      },
      {
        _key: "ustid",
        ueberschrift: "Umsatzsteuer-ID",
        absaetze: [
          "Umsatzsteuer-Identifikationsnummer gemaess Paragraph 27a Umsatzsteuergesetz: DE000000000",
        ],
      },
      {
        _key: "verantwortlich",
        ueberschrift: "Redaktionell verantwortlich",
        absaetze: ["Stefan Mueller (Anschrift wie oben)"],
      },
      {
        _key: "eu",
        ueberschrift: "EU-Streitschlichtung",
        absaetze: [
          "Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse findest du oben.",
        ],
      },
      {
        _key: "verbraucher",
        ueberschrift: "Verbraucherstreitbeilegung",
        absaetze: [
          "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        _key: "haftung-inhalte",
        ueberschrift: "Haftung fuer Inhalte",
        absaetze: [
          "Als Diensteanbieter sind wir gemaess Paragraph 7 Absatz 1 DDG fuer eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach Paragraphen 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde Informationen zu ueberwachen.",
          "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuehrt. Bei Bekanntwerden von Rechtsverletzungen werden wir die entsprechenden Inhalte umgehend entfernen.",
        ],
      },
      {
        _key: "haftung-links",
        ueberschrift: "Haftung fuer Links",
        absaetze: [
          "Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
        ],
      },
      {
        _key: "urheber",
        ueberschrift: "Urheberrecht",
        absaetze: [
          "Die durch den Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur fuer den privaten, nicht kommerziellen Gebrauch gestattet.",
        ],
      },
    ],
  },
  {
    _id: "rs-datenschutz",
    titel: "Datenschutz",
    slug: "datenschutz",
    untertitel:
      "Informationen gemaess Artikel 13 und 14 DSGVO zur Verarbeitung personenbezogener Daten.",
    aktualisiertAm: "2026-05-01",
    inhalt: [
      {
        _key: "verantwortlicher",
        ueberschrift: "1. Verantwortlicher",
        absaetze: [
          "Verantwortlicher im Sinne der DSGVO ist:",
          "Stefan Mueller, StefanAI, Musterstrasse 1, 12345 Musterstadt, Deutschland",
          "E-Mail: hallo@stefanai.example",
        ],
      },
      {
        _key: "allgemein",
        ueberschrift: "2. Allgemeines zur Datenverarbeitung",
        absaetze: [
          "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfaehigen Website sowie unserer Inhalte erforderlich ist. Rechtsgrundlagen sind regelmaessig Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), Vertragserfuellung (lit. b) oder berechtigte Interessen (lit. f).",
        ],
      },
      {
        _key: "logs",
        ueberschrift: "3. Server-Logs",
        absaetze: [
          "Beim Aufruf der Website werden vom Hostinganbieter automatisch IP-Adresse, Datum, Uhrzeit, aufgerufene URL, Referrer und Browser uebermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
        ],
      },
      {
        _key: "vercel",
        ueberschrift: "4. Hosting bei Vercel",
        absaetze: [
          "Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel hat sich dem EU-US Data Privacy Framework unterworfen.",
          "Datenschutzerklaerung von Vercel: https://vercel.com/legal/privacy-policy",
        ],
      },
      {
        _key: "sanity",
        ueberschrift: "5. Content-Management mit Sanity",
        absaetze: [
          "Inhalte werden ueber das CMS Sanity (Sanity.io AS, Stranden 1A, 0250 Oslo, Norwegen) bereitgestellt. Beim Abruf von Inhalten wird die IP-Adresse zur Auslieferung verwendet (Art. 6 Abs. 1 lit. f DSGVO).",
          "Datenschutzerklaerung von Sanity: https://www.sanity.io/legal/privacy",
        ],
      },
      {
        _key: "fonts",
        ueberschrift: "6. Schriftarten",
        absaetze: [
          "Wir nutzen Bree Serif, Montserrat und Oxanium. Die Auslieferung erfolgt selbstgehostet ueber die Schriftoptimierung von Next.js - es findet kein direkter Aufruf der Google-Server statt.",
        ],
      },
      {
        _key: "video",
        ueberschrift: "7. Eingebettete Videos",
        absaetze: [
          "In Blog-Beitraegen koennen YouTube- oder Vimeo-Videos eingebettet sein. Erst beim Klick werden Daten an die Anbieter uebermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
        ],
      },
      {
        _key: "kontakt",
        ueberschrift: "8. Kontaktaufnahme",
        absaetze: [
          "Bei Kontaktaufnahme per E-Mail verarbeiten wir die uebermittelten Daten zur Bearbeitung der Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO.",
        ],
      },
      {
        _key: "downloads",
        ueberschrift: "9. PDF-Downloads",
        absaetze: [
          "PDF-Downloads im Blog und im Pressebereich sind ohne Registrierung und ohne Angabe personenbezogener Daten moeglich.",
        ],
      },
      {
        _key: "cookies",
        ueberschrift: "10. Cookies",
        absaetze: [
          "Diese Website setzt keine Cookies zu Tracking- oder Marketingzwecken ein. Technisch notwendige Cookies (z.B. fuer Studio-Sitzungen unter /studio) koennen lokal im Browser gespeichert werden.",
        ],
      },
      {
        _key: "rechte",
        ueberschrift: "11. Rechte der betroffenen Personen",
        absaetze: [
          "Du hast Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16), Loeschung (Art. 17), Einschraenkung (Art. 18), Datenuebertragbarkeit (Art. 20), Widerspruch (Art. 21) und Widerruf erteilter Einwilligungen (Art. 7 Abs. 3) sowie ein Beschwerderecht bei einer Aufsichtsbehoerde (Art. 77).",
          "Bitte richte entsprechende Anfragen an die oben genannte E-Mail-Adresse.",
        ],
      },
      {
        _key: "aenderung",
        ueberschrift: "12. Aenderung dieser Datenschutzerklaerung",
        absaetze: [
          "Wir behalten uns vor, diese Datenschutzerklaerung anzupassen. Es gilt jeweils die zum Zeitpunkt des Besuchs abrufbare Fassung.",
        ],
      },
    ],
  },
];
