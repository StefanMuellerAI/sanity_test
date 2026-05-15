// Server-Komponenten fuer JSON-LD (schema.org) - hilft Suchmaschinen,
// Inhalte zu verstehen. Wichtige Typen: Organization, WebSite, Course,
// BlogPosting.

import { absoluteUrl, siteName, siteUrl } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        logo: absoluteUrl("/icon.svg"),
        description:
          "Schulungen, Beratung und Software-Entwicklung rund um Kuenstliche Intelligenz.",
        areaServed: "DE",
        knowsAbout: [
          "Kuenstliche Intelligenz",
          "Generative KI",
          "Machine Learning",
          "Prompt Engineering",
          "Retrieval Augmented Generation",
          "AI Agents",
          "EU AI Act",
        ],
        sameAs: [],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        inLanguage: "de-DE",
        publisher: { "@type": "Organization", name: siteName },
      }}
    />
  );
}

export function CourseJsonLd({
  titel,
  beschreibung,
  slug,
  format,
}: {
  titel: string;
  beschreibung?: string;
  slug: string;
  format?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name: titel,
        description: beschreibung,
        url: absoluteUrl(`/schulungen/${slug}`),
        provider: {
          "@type": "Organization",
          name: siteName,
          sameAs: siteUrl,
        },
        inLanguage: "de-DE",
        ...(format
          ? {
              hasCourseInstance: [
                {
                  "@type": "CourseInstance",
                  courseMode:
                    format === "Online"
                      ? "Online"
                      : format === "Praesenz"
                        ? "Onsite"
                        : "Blended",
                },
              ],
            }
          : {}),
      }}
    />
  );
}

export function BlogPostingJsonLd({
  titel,
  beschreibung,
  slug,
  datum,
  autor,
}: {
  titel: string;
  beschreibung?: string;
  slug: string;
  datum?: string;
  autor?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: titel,
        description: beschreibung,
        url: absoluteUrl(`/blog/${slug}`),
        datePublished: datum,
        inLanguage: "de-DE",
        author: autor
          ? { "@type": "Person", name: autor }
          : { "@type": "Organization", name: siteName },
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}
