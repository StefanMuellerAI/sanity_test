import Link from "next/link";
import type { SchulungListItem } from "@/sanity/lib/fetch";

const formatColors: Record<string, string> = {
  Online: "bg-cyber-tuerkis/15 text-cyber-tuerkis border border-cyber-tuerkis/40",
  Praesenz: "bg-cyber-pink/15 text-cyber-pink border border-cyber-pink/40",
  Hybrid: "bg-cyber-gelb/15 text-cyber-gelb border border-cyber-gelb/40",
};

const levelColors: Record<string, string> = {
  Einsteiger: "bg-white/8 text-white/80 border border-white/20",
  Fortgeschritten: "bg-cyber-violett/20 text-holo-violett border border-cyber-violett/40",
  Experte: "bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40",
};

export function SchulungCard({ s }: { s: SchulungListItem }) {
  return (
    <Link
      href={`/schulungen/${s.slug}`}
      className="card p-6 flex flex-col gap-4 group relative overflow-hidden"
    >
      {s.highlight && (
        <span className="absolute top-4 right-4 ki-highlight text-[10px] px-2 py-1 rounded-full bg-holo-dream text-weltraum-blau">
          Highlight
        </span>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        {s.format && (
          <span className={`tag ${formatColors[s.format] ?? "bg-white/10"}`}>
            {s.format}
          </span>
        )}
        {s.level && (
          <span className={`tag ${levelColors[s.level] ?? "bg-white/10"}`}>
            {s.level}
          </span>
        )}
        {s.dauer && (
          <span className="tag bg-white/8 text-white/70 border border-white/15">
            {s.dauer}
          </span>
        )}
      </div>

      <div>
        <h3 className="heading text-2xl text-white group-hover:text-cyber-sunrise transition">
          {s.titel}
        </h3>
        {s.untertitel && (
          <p className="ki-highlight text-xs mt-1 text-cyber-tuerkis">
            {s.untertitel}
          </p>
        )}
      </div>

      {s.kurzbeschreibung && (
        <p className="text-sm text-white/75 leading-relaxed line-clamp-4">
          {s.kurzbeschreibung}
        </p>
      )}

      <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
        <span className="text-sm text-white/80 font-semibold">
          {s.preis ?? "Preis auf Anfrage"}
        </span>
        <span className="text-cyber-pink text-sm font-semibold group-hover:translate-x-0.5 transition">
          Details &rarr;
        </span>
      </div>
    </Link>
  );
}
