import { groq } from "next-sanity";

export const allSchulungenQuery = groq`
*[_type == "schulung"] | order(reihenfolge asc, titel asc) {
  _id,
  titel,
  "slug": slug.current,
  untertitel,
  kurzbeschreibung,
  dauer,
  format,
  level,
  preis,
  zielgruppe,
  bild,
  highlight
}
`;

export const schulungBySlugQuery = groq`
*[_type == "schulung" && slug.current == $slug][0] {
  _id,
  titel,
  "slug": slug.current,
  untertitel,
  kurzbeschreibung,
  beschreibung,
  agenda,
  dauer,
  format,
  level,
  preis,
  zielgruppe,
  voraussetzungen,
  bild,
  highlight
}
`;

export const allSlugsQuery = groq`
*[_type == "schulung" && defined(slug.current)][].slug.current
`;

export const allBlogPostsQuery = groq`
*[_type == "blogPost"] | order(veroeffentlichtAm desc) {
  _id,
  titel,
  "slug": slug.current,
  untertitel,
  veroeffentlichtAm,
  autor,
  headerbild,
  tags,
  "downloadAnzahl": count(downloads),
  "hatVideo": defined(video.url) || defined(video.datei)
}
`;

export const blogPostBySlugQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  titel,
  "slug": slug.current,
  untertitel,
  veroeffentlichtAm,
  autor,
  headerbild,
  text,
  tags,
  video {
    url,
    beschriftung,
    "dateiUrl": datei.asset->url,
    poster
  },
  downloads[] {
    _key,
    titel,
    beschreibung,
    kategorie,
    "url": datei.asset->url,
    "groesse": datei.asset->size,
    "dateiname": datei.asset->originalFilename
  }
}
`;

export const allBlogSlugsQuery = groq`
*[_type == "blogPost" && defined(slug.current)][].slug.current
`;
