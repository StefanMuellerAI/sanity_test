import type { BlogPostDownload } from "@/sanity/lib/fetch";

const kategorieColors: Record<string, string> = {
  Checkliste: "bg-cyber-tuerkis/15 text-cyber-tuerkis border-cyber-tuerkis/40",
  Argumentation: "bg-cyber-pink/15 text-cyber-pink border-cyber-pink/40",
  Vorlage: "bg-cyber-gelb/15 text-cyber-gelb border-cyber-gelb/40",
  Whitepaper: "bg-cyber-violett/20 text-holo-violett border-cyber-violett/40",
  Sonstiges: "bg-white/10 text-white/80 border-white/20",
};

function formatBytes(bytes?: number) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  const kb = bytes / 1024;
  return `${kb.toFixed(0)} KB`;
}

export function DownloadList({
  downloads,
}: {
  downloads: BlogPostDownload[];
}) {
  if (!downloads || downloads.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-white/10">
      <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">
        Zum Mitnehmen
      </p>
      <h2 className="heading text-3xl mb-2">Weiterfuehrende Downloads</h2>
      <p className="text-sm text-white/60 mb-8">
        Checklisten, Argumentationshilfen und Vorlagen als PDF.
      </p>

      <ul className="grid sm:grid-cols-2 gap-4">
        {downloads.map((d, i) => {
          const groesse = formatBytes(d.groesse);
          const farben =
            kategorieColors[d.kategorie ?? "Sonstiges"] ??
            kategorieColors.Sonstiges;
          const verfuegbar = Boolean(d.url);
          const Tag = verfuegbar ? "a" : "div";
          const linkProps = verfuegbar
            ? { href: d.url, download: d.dateiname, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <li key={d._key ?? i}>
              <Tag
                {...linkProps}
                className={`block rounded-soft border bg-white/5 p-5 transition ${
                  verfuegbar
                    ? "border-white/10 hover:border-cyber-pink/60 hover:bg-white/8"
                    : "border-white/5 opacity-70 cursor-not-allowed"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  {d.kategorie && (
                    <span className={`tag border ${farben}`}>{d.kategorie}</span>
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
                <h3 className="heading text-lg text-white">{d.titel}</h3>
                {d.beschreibung && (
                  <p className="mt-1 text-sm text-white/70">{d.beschreibung}</p>
                )}
                <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
                  <span className="font-semibold uppercase tracking-wider text-white/70">
                    PDF
                  </span>
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
  );
}
