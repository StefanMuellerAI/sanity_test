import Link from "next/link";
import type { BlogPostListItem } from "@/sanity/lib/fetch";

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

export function BlogCard({ p }: { p: BlogPostListItem }) {
  const datum = formatDate(p.veroeffentlichtAm);
  return (
    <Link
      href={`/blog/${p.slug}`}
      className="card p-6 flex flex-col gap-4 group"
    >
      <div className="flex items-center gap-2 flex-wrap text-xs text-white/60">
        {datum && <span>{datum}</span>}
        {p.autor && (
          <>
            <span className="text-white/30">&middot;</span>
            <span>{p.autor}</span>
          </>
        )}
      </div>

      <div>
        <h3 className="heading text-2xl text-white group-hover:text-cyber-sunrise transition">
          {p.titel}
        </h3>
        {p.untertitel && (
          <p className="mt-2 text-sm text-white/75 leading-relaxed line-clamp-3">
            {p.untertitel}
          </p>
        )}
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10 text-xs">
        <div className="flex items-center gap-3 text-white/70">
          {p.hatVideo && (
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyber-pink" />
              Video
            </span>
          )}
          {(p.downloadAnzahl ?? 0) > 0 && (
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyber-tuerkis" />
              {p.downloadAnzahl} Download{(p.downloadAnzahl ?? 0) === 1 ? "" : "s"}
            </span>
          )}
        </div>
        <span className="text-cyber-pink font-semibold group-hover:translate-x-0.5 transition">
          Lesen &rarr;
        </span>
      </div>
    </Link>
  );
}
