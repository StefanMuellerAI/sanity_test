import { defineField, defineType } from "sanity";

export const pressekit = defineType({
  name: "pressekit",
  title: "Pressekit",
  type: "document",
  description:
    "Downloadbare Pressekits (PDF, ZIP, Bildpakete) fuer Journalist:innen.",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "datei",
      title: "Datei",
      type: "file",
      options: { accept: "application/pdf,application/zip,image/*" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Pressemappe", value: "Pressemappe" },
          { title: "Logo-Paket", value: "Logo-Paket" },
          { title: "Bilder", value: "Bilder" },
          { title: "Factsheet", value: "Factsheet" },
          { title: "Sonstiges", value: "Sonstiges" },
        ],
      },
    }),
    defineField({
      name: "reihenfolge",
      title: "Reihenfolge",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "reihenfolge",
      by: [{ field: "reihenfolge", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "kategorie",
    },
  },
});
