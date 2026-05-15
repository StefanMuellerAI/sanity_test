import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalContent } from "@/components/legal-content";
import { getRechtsseite } from "@/sanity/lib/fetch";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Impressum - StefanAI",
  description: "Impressum und Anbieterkennzeichnung gemaess Paragraph 5 DDG.",
};

export default async function ImpressumPage() {
  const seite = await getRechtsseite("impressum");
  if (!seite) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Rechtliches</p>
        <h1 className="heading-caps text-4xl sm:text-5xl">
          <span className="text-cyber-sunrise">{seite.titel}</span>
        </h1>
        {seite.untertitel && (
          <p className="mt-4 text-sm text-white/60">{seite.untertitel}</p>
        )}
        {seite.aktualisiertAm && (
          <p className="mt-2 text-xs text-white/40">
            Zuletzt aktualisiert:{" "}
            {new Date(seite.aktualisiertAm).toLocaleDateString("de-DE")}
          </p>
        )}
      </header>

      {seite.istFallback && (
        <div className="rounded-soft border border-cyber-gelb/40 bg-cyber-gelb/10 p-4 text-xs text-cyber-gelb mb-10">
          Demo-Inhalt - bitte in Sanity unter Rechtsseite (Slug: impressum)
          mit den finalen Angaben pflegen.
        </div>
      )}

      <LegalContent inhalt={seite.inhalt} fallback={seite.inhaltFallback} />
    </article>
  );
}
