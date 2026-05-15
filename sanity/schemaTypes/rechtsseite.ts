import { defineField, defineType } from "sanity";

export const rechtsseite = defineType({
  name: "rechtsseite",
  title: "Rechtsseite",
  type: "document",
  description:
    "Statische Seiten wie Impressum oder Datenschutz. Der Slug entscheidet ueber die URL (/impressum, /datenschutz).",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-Slug",
      type: "slug",
      options: {
        source: "titel",
        maxLength: 60,
      },
      description: "Bevorzugt 'impressum' oder 'datenschutz'.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "untertitel",
      title: "Untertitel",
      type: "string",
    }),
    defineField({
      name: "inhalt",
      title: "Inhalt",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Absatz", value: "normal" },
            { title: "Ueberschrift 2", value: "h2" },
            { title: "Ueberschrift 3", value: "h3" },
          ],
          lists: [
            { title: "Aufzaehlung", value: "bullet" },
            { title: "Nummeriert", value: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "aktualisiertAm",
      title: "Zuletzt aktualisiert",
      type: "date",
    }),
  ],
  preview: {
    select: { title: "titel", subtitle: "slug.current" },
  },
});
