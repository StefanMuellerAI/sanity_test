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

export const rechtsseiteBySlugQuery = groq`
*[_type == "rechtsseite" && slug.current == $slug][0] {
  _id,
  titel,
  "slug": slug.current,
  untertitel,
  inhalt,
  aktualisiertAm
}
`;

export const allTeamMitgliederQuery = groq`
*[_type == "teamMitglied"] | order(reihenfolge asc, name asc) {
  _id,
  name,
  rolle,
  kurztext,
  bio,
  foto,
  email,
  linkedin,
  website
}
`;

export const pressekontaktQuery = groq`
*[_type == "pressekontakt"] | order(_updatedAt desc)[0] {
  _id,
  name,
  rolle,
  foto,
  email,
  telefon,
  linkedin,
  kurztext
}
`;

export const allPresseveroeffentlichungenQuery = groq`
*[_type == "presseveroeffentlichung"] | order(datum desc) {
  _id,
  titel,
  url,
  medium,
  datum,
  kurzbeschreibung,
  logo,
  art
}
`;

export const allPressekitsQuery = groq`
*[_type == "pressekit"] | order(reihenfolge asc, titel asc) {
  _id,
  titel,
  beschreibung,
  kategorie,
  "url": datei.asset->url,
  "groesse": datei.asset->size,
  "dateiname": datei.asset->originalFilename,
  "mime": datei.asset->mimeType
}
`;
