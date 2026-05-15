import { BlogCard } from "@/components/blog-card";
import { getAllBlogPosts } from "@/sanity/lib/fetch";

export const revalidate = 60;

export const metadata = {
  title: "KI-Blog: Artikel, Checklisten & Argumentationshilfen",
  description:
    "Aktuelle Artikel rund um Kuenstliche Intelligenz im Unternehmen - mit kostenlosen Checklisten, Argumentationshilfen und Vorlagen als PDF.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-12 max-w-3xl">
        <p className="ki-highlight text-cyber-tuerkis text-xs mb-2">Blog</p>
        <h1 className="heading-caps text-5xl mb-4">
          <span className="text-cyber-sunrise">Insights</span> aus der Praxis
        </h1>
        <p className="text-white/75 leading-relaxed">
          Artikel mit Begleitvideos und PDF-Downloads - Checklisten,
          Argumentationshilfen und Vorlagen zum direkten Verwenden in eurem
          Unternehmen.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-white/60">Noch keine Beitraege vorhanden.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p._id} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}
