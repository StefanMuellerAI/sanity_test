import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { CourseJsonLd } from "@/components/structured-data";
import { getAllSlugs, getSchulungBySlug } from "@/sanity/lib/fetch";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await getSchulungBySlug(slug);
  if (!s) return { title: "Schulung nicht gefunden" };
  return {
    title: `${s.titel} - KI-Schulung`,
    description:
      s.kurzbeschreibung ||
      `Kuenstliche Intelligenz Schulung: ${s.titel}. Praxisnaher KI-Workshop von StefanAI.`,
    alternates: { canonical: `/schulungen/${s.slug}` },
    openGraph: {
      type: "article",
      title: `${s.titel} - KI-Schulung`,
      description: s.kurzbeschreibung,
      url: `/schulungen/${s.slug}`,
    },
  };
}

export default async function SchulungPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await getSchulungBySlug(slug);
  if (!s) notFound();

  // beschreibung kann entweder ein Portable-Text-Array (aus Sanity) oder ein
  // string[] (aus Sample-Daten) sein.
  const beschreibungBlocks = Array.isArray(s.beschreibung) ? s.beschreibung : [];
  const isPlainStrings =
    beschreibungBlocks.length > 0 &&
    beschreibungBlocks.every((b) => typeof b === "string");

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <CourseJsonLd
        titel={s.titel}
        beschreibung={s.kurzbeschreibung}
        slug={s.slug}
        format={s.format}
      />
      <Link
        href="/#schulungen"
        className="text-sm text-cyber-tuerkis hover:text-cyber-pink"
      >
        &larr; Zurueck zum Portfolio
      </Link>

      <header className="mt-8 mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {s.format && (
            <span className="tag bg-cyber-tuerkis/15 text-cyber-tuerkis border border-cyber-tuerkis/40">
              {s.format}
            </span>
          )}
          {s.level && (
            <span className="tag bg-cyber-violett/20 text-holo-violett border border-cyber-violett/40">
              {s.level}
            </span>
          )}
          {s.dauer && (
            <span className="tag bg-white/8 text-white/70 border border-white/15">
              {s.dauer}
            </span>
          )}
        </div>

        {s.untertitel && (
          <p className="ki-highlight text-cyber-tuerkis text-sm mb-3">
            {s.untertitel}
          </p>
        )}
        <h1 className="heading-caps text-4xl sm:text-5xl">
          <span className="text-cyber-sunrise">{s.titel}</span>
        </h1>
        {s.kurzbeschreibung && (
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            {s.kurzbeschreibung}
          </p>
        )}
      </header>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {beschreibungBlocks.length > 0 && (
            <section>
              <h2 className="heading text-2xl mb-4">Beschreibung</h2>
              <div className="prose prose-invert max-w-none text-white/85 space-y-4">
                {isPlainStrings
                  ? (beschreibungBlocks as unknown as string[]).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))
                  : (
                      <PortableText
                        value={beschreibungBlocks as PortableTextBlock[]}
                      />
                    )}
              </div>
            </section>
          )}

          {s.agenda && s.agenda.length > 0 && (
            <section>
              <h2 className="heading text-2xl mb-4">Agenda</h2>
              <ol className="space-y-4">
                {s.agenda.map((a, i) => (
                  <li
                    key={a._key ?? i}
                    className="rounded-soft border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="ki-highlight text-cyber-pink text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="heading text-lg">{a.titel}</h3>
                    </div>
                    {a.beschreibung && (
                      <p className="mt-2 text-sm text-white/70">{a.beschreibung}</p>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-soft border border-white/10 bg-white/5 p-6 sticky top-24">
            <h3 className="heading text-xl mb-4">Auf einen Blick</h3>
            <dl className="space-y-3 text-sm">
              {s.preis && (
                <div>
                  <dt className="text-white/50 uppercase text-xs tracking-wider">Preis</dt>
                  <dd className="text-white">{s.preis}</dd>
                </div>
              )}
              {s.dauer && (
                <div>
                  <dt className="text-white/50 uppercase text-xs tracking-wider">Dauer</dt>
                  <dd className="text-white">{s.dauer}</dd>
                </div>
              )}
              {s.format && (
                <div>
                  <dt className="text-white/50 uppercase text-xs tracking-wider">Format</dt>
                  <dd className="text-white">{s.format}</dd>
                </div>
              )}
              {s.level && (
                <div>
                  <dt className="text-white/50 uppercase text-xs tracking-wider">Level</dt>
                  <dd className="text-white">{s.level}</dd>
                </div>
              )}
              {s.zielgruppe && (
                <div>
                  <dt className="text-white/50 uppercase text-xs tracking-wider">Zielgruppe</dt>
                  <dd className="text-white">{s.zielgruppe}</dd>
                </div>
              )}
              {s.voraussetzungen && (
                <div>
                  <dt className="text-white/50 uppercase text-xs tracking-wider">Voraussetzungen</dt>
                  <dd className="text-white">{s.voraussetzungen}</dd>
                </div>
              )}
            </dl>

            <a
              href={`mailto:hallo@stefanai.example?subject=Anfrage%20${encodeURIComponent(
                s.titel
              )}`}
              className="btn-primary w-full mt-6"
            >
              Anfragen
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}
