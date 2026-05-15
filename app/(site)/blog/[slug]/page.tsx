import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { DownloadList } from "@/components/download-list";
import { VideoEmbed } from "@/components/video-embed";
import { BlogPostingJsonLd } from "@/components/structured-data";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/sanity/lib/fetch";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await getBlogPostBySlug(slug);
  if (!p) return { title: "Beitrag nicht gefunden" };
  return {
    title: p.titel,
    description: p.untertitel,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.titel,
      description: p.untertitel,
      url: `/blog/${p.slug}`,
      publishedTime: p.veroeffentlichtAm,
      authors: p.autor ? [p.autor] : undefined,
    },
  };
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await getBlogPostBySlug(slug);
  if (!p) notFound();

  const datum = formatDate(p.veroeffentlichtAm);
  const textBlocks = Array.isArray(p.text) ? p.text : [];
  const isPlainStrings =
    textBlocks.length > 0 && textBlocks.every((b) => typeof b === "string");

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <BlogPostingJsonLd
        titel={p.titel}
        beschreibung={p.untertitel}
        slug={p.slug}
        datum={p.veroeffentlichtAm}
        autor={p.autor}
      />
      <Link href="/blog" className="text-sm text-cyber-tuerkis hover:text-cyber-pink">
        &larr; Zurueck zum Blog
      </Link>

      <header className="mt-8 mb-10">
        <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
          {datum && <span>{datum}</span>}
          {p.autor && (
            <>
              <span className="text-white/30">&middot;</span>
              <span>{p.autor}</span>
            </>
          )}
        </div>
        <h1 className="heading-caps text-4xl sm:text-5xl">
          <span className="text-cyber-sunrise">{p.titel}</span>
        </h1>
        {p.untertitel && (
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            {p.untertitel}
          </p>
        )}
        {p.tags && p.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="tag bg-white/8 text-white/70 border border-white/15"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {p.video && (p.video.url || p.video.dateiUrl) && (
        <VideoEmbed
          url={p.video.url}
          dateiUrl={p.video.dateiUrl}
          beschriftung={p.video.beschriftung}
        />
      )}

      <div className="prose prose-invert max-w-none text-white/85 space-y-5 leading-relaxed">
        {isPlainStrings
          ? (textBlocks as unknown as string[]).map((para, i) => (
              <p key={i}>{para}</p>
            ))
          : textBlocks.length > 0 && (
              <PortableText value={textBlocks as PortableTextBlock[]} />
            )}
      </div>

      {p.downloads && p.downloads.length > 0 && (
        <DownloadList downloads={p.downloads} />
      )}
    </article>
  );
}
