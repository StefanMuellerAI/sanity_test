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
