import type { Metadata } from "next";
import {
  getAllPressekits,
  getAllPresseveroeffentlichungen,
  getPressekontakt,
} from "@/sanity/lib/fetch";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Presse - Kontakt, Pressestimmen & Pressekits",
  description:
    "Pressekontakt, aktuelle Pressestimmen sowie Pressekits zum Download. StefanAI als Ansprechpartner fuer Themen rund um Kuenstliche Intelligenz, KI-Schulung und KI-Beratung.",
  alternates: { canonical: "/presse" },
};

const artColors: Record<string, string> = {
  Artikel: "bg-cyber-tuerkis/15 text-cyber-tuerkis border-cyber-tuerkis/40",
  Interview: "bg-cyber-pink/15 text-cyber-pink border-cyber-pink/40",
  Podcast: "bg-cyber-violett/20 text-holo-violett border-cyber-violett/40",
  Video: "bg-cyber-gelb/15 text-cyber-gelb border-cyber-gelb/40",
  Pressemitteilung: "bg-white/10 text-white/80 border-white/20",
};

const kitColors: Record<string, string> = {
  Pressemappe: "bg-cyber-pink/15 text-cyber-pink border-cyber-pink/40",
  "Logo-Paket": "bg-cyber-tuerkis/15 text-cyber-tuerkis border-cyber-tuerkis/40",
  Bilder: "bg-cyber-gelb/15 text-cyber-gelb border-cyber-gelb/40",
  Factsheet: "bg-cyber-violett/20 text-holo-violett border-cyber-violett/40",
  Sonstiges: "bg-white/10 text-white/80 border-white/20",
};

function formatBytes(bytes?: number) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  return `${(bytes / 1024).toFixed(0)} KB`;
}

function formatDate(iso?: string) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return null;
  }
}

export default async function PressePage() {
  const [kontakt, veroeffentlichungen, kits] = await Promise.all([
    getPressekontakt(),
    getAllPresseveroeffentlichungen(),
    getAllPressekits(),
  ]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      <header className="max-w-2xl">
        <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Presse</p>
        <h1 className="heading-caps text-5xl mb-4">
          Pressebereich
        </h1>
        <p className="text-white/75 leading-relaxed">
          Aktuelle Pressestimmen, Pressekontakt sowie Pressekits zum Download.
          Fuer O-Toene oder Interviews bitte direkt unsere Pressereferentin
          ansprechen.
        </p>
      </header>

      {/* Pressekontakt */}
      {kontakt && (
        <section>
          <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Kontakt</p>
          <h2 className="heading text-3xl mb-6">Pressekontakt</h2>
          <div className="rounded-soft border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-cyber-sunrise text-weltraum-blau flex items-center justify-center font-bold text-2xl heading shrink-0">
              {kontakt.name
                .split(/\s+/)
                .map((p) => p[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>
            <div className="flex-1">
              <h3 className="heading text-2xl text-white">{kontakt.name}</h3>
              {kontakt.rolle && (
                <p className="ki-highlight text-xs text-cyber-tuerkis mt-1">
                  {kontakt.rolle}
                </p>
              )}
              {kontakt.kurztext && (
                <p className="mt-3 text-white/85 leading-relaxed">
                  {kontakt.kurztext}
                </p>
              )}
              <dl className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {kontakt.email && (
                  <div>
                    <dt className="text-white/50 uppercase text-xs tracking-wider">
                      E-Mail
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${kontakt.email}`}
                        className="text-cyber-pink hover:underline underline-offset-4"
                      >
                        {kontakt.email}
                      </a>
                    </dd>
                  </div>
                )}
                {kontakt.telefon && (
                  <div>
                    <dt className="text-white/50 uppercase text-xs tracking-wider">
                      Telefon
                    </dt>
                    <dd className="text-white">{kontakt.telefon}</dd>
                  </div>
                )}
                {kontakt.linkedin && (
                  <div>
                    <dt className="text-white/50 uppercase text-xs tracking-wider">
                      LinkedIn
                    </dt>
                    <dd>
                      <a
                        href={kontakt.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyber-tuerkis hover:underline underline-offset-4"
                      >
                        Profil oeffnen
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Pressestimmen */}
      {veroeffentlichungen.length > 0 && (
        <section>
          <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
            Veroeffentlichungen
          </p>
          <h2 className="heading text-3xl mb-6">Pressestimmen</h2>
          <ul className="space-y-4">
            {veroeffentlichungen.map((v) => {
              const datum = formatDate(v.datum);
              const farben =
                artColors[v.art ?? "Pressemitteilung"] ?? artColors.Pressemitteilung;
              return (
                <li key={v._id}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card block p-6"
                  >
                    <div className="flex items-center gap-2 flex-wrap text-xs mb-3">
                      {v.art && (
                        <span className={`tag border ${farben}`}>{v.art}</span>
                      )}
                      {v.medium && (
                        <span className="text-white/80 font-semibold">
                          {v.medium}
                        </span>
                      )}
                      {datum && (
                        <>
                          <span className="text-white/30">&middot;</span>
                          <span className="text-white/60">{datum}</span>
                        </>
                      )}
                    </div>
                    <h3 className="heading text-xl text-white">{v.titel}</h3>
                    {v.kurzbeschreibung && (
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        {v.kurzbeschreibung}
                      </p>
                    )}
                    <span className="mt-3 inline-block text-cyber-pink text-sm font-semibold">
                      Beitrag oeffnen &rarr;
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Pressekits */}
      {kits.length > 0 && (
        <section>
          <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
            Zum Download
          </p>
          <h2 className="heading text-3xl mb-2">Pressekits</h2>
          <p className="text-sm text-white/60 mb-6">
            Logos, Fotos und Factsheets - honorarfrei zur redaktionellen
            Verwendung mit Quellenangabe StefanAI.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {kits.map((k) => {
              const farben =
                kitColors[k.kategorie ?? "Sonstiges"] ?? kitColors.Sonstiges;
              const groesse = formatBytes(k.groesse);
              const verfuegbar = Boolean(k.url);
              const Tag = verfuegbar ? "a" : "div";
              const linkProps = verfuegbar
                ? {
                    href: k.url,
                    download: k.dateiname,
                    target: "_blank",
                    rel: "noreferrer",
                  }
                : {};
              return (
                <li key={k._id}>
                  <Tag
                    {...linkProps}
                    className={`block rounded-soft border bg-white/5 p-5 transition ${
                      verfuegbar
                        ? "border-white/10 hover:border-cyber-pink/60 hover:bg-white/8"
                        : "border-white/5 opacity-70 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      {k.kategorie && (
                        <span className={`tag border ${farben}`}>
                          {k.kategorie}
                        </span>
                      )}
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-white/60 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                    <h3 className="heading text-lg text-white">{k.titel}</h3>
                    {k.beschreibung && (
                      <p className="mt-1 text-sm text-white/70">
                        {k.beschreibung}
                      </p>
                    )}
                    <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
                      {k.mime && (
                        <span className="font-semibold uppercase tracking-wider text-white/70">
                          {k.mime.includes("pdf")
                            ? "PDF"
                            : k.mime.includes("zip")
                              ? "ZIP"
                              : "Datei"}
                        </span>
                      )}
                      {groesse && <span>{groesse}</span>}
                      {!verfuegbar && (
                        <span className="text-cyber-gelb">
                          Demo - in Sanity Datei hinzufuegen
                        </span>
                      )}
                    </div>
                  </Tag>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </section>
  );
}
