// Vier farbige Service-Karten im Stil der originalen "Dabei helfe ich
// weiter"-Sektion. Jede Karte verwendet einen eigenen Verlauf aus der
// StefanAI-Farbpalette und enthaelt Icon, Headline, Text und Link.

import Link from "next/link";
import type { ReactNode } from "react";

type Card = {
  titel: string;
  beschreibung: string;
  link: string;
  linkLabel: string;
  bg: string;
  textColor: "light" | "dark";
  icon: ReactNode;
};

const cards: Card[] = [
  {
    titel: "Schulungen & Workshops",
    beschreibung:
      "Praxisnahe KI-Schulungen fuer dein Team - vom Grundlagen-Tag fuer Entscheider bis zum mehrtaegigen Hands-on Workshop fuer Entwickler:innen.",
    link: "/#schulungen",
    linkLabel: "Zum Schulungsportfolio",
    bg: "bg-cyber-sunrise",
    textColor: "dark",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    titel: "Beratung",
    beschreibung:
      "Strategische Begleitung beim KI-Einsatz: Use-Case-Discovery, Roadmap, Governance, EU AI Act und Make-or-Buy.",
    link: "/#beratung",
    linkLabel: "Mehr zur Beratung",
    bg: "bg-[linear-gradient(135deg,#f35c31_0%,#e62e74_100%)]",
    textColor: "light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    titel: "Softwareentwicklung",
    beschreibung:
      "Massgeschneiderte KI-Anwendungen mit Generativer KI, RAG-Systemen und AI Agents - vom Prototyp bis zum produktiven Betrieb.",
    link: "/#software",
    linkLabel: "Projekt besprechen",
    bg: "bg-[linear-gradient(135deg,#2ee6d0_0%,#a1e6de_100%)]",
    textColor: "dark",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    titel: "KI Podcast: Was kann KI?",
    beschreibung:
      "Unser Podcast mit Co-Host Digit - jede Woche eine Folge zu konkreten KI-Anwendungen aus Praxis und Forschung.",
    link: "/blog",
    linkLabel: "Folgen anhoeren",
    bg: "bg-[linear-gradient(135deg,#4a2ee6_0%,#8893e6_100%)]",
    textColor: "light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
      </svg>
    ),
  },
];

export function ServiceCards() {
  return (
    <section
      id="leistungen"
      className="max-w-6xl mx-auto px-6 py-20"
      aria-labelledby="leistungen-headline"
    >
      <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
        Dabei helfe ich weiter
      </p>
      <h2
        id="leistungen-headline"
        className="heading text-4xl sm:text-5xl mb-10"
      >
        Vier Wege, mit{" "}
        <span className="text-cyber-sunrise">Kuenstlicher Intelligenz</span>{" "}
        zu arbeiten
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((c) => {
          const text = c.textColor === "dark" ? "text-weltraum-blau" : "text-white";
          const subText =
            c.textColor === "dark" ? "text-weltraum-blau/80" : "text-white/85";
          return (
            <Link
              key={c.titel}
              href={c.link}
              className={`${c.bg} ${text} rounded-soft p-8 lumin-frost flex flex-col gap-4 transition hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between">
                <span className={text}>{c.icon}</span>
              </div>
              <h3 className="heading-caps text-2xl sm:text-3xl">{c.titel}</h3>
              <p className={`${subText} leading-relaxed`}>{c.beschreibung}</p>
              <span className={`${text} mt-auto font-semibold inline-flex items-center gap-2`}>
                {c.linkLabel} &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
