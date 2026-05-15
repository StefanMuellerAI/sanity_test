import { defineField, defineType } from "sanity";

export const schulung = defineType({
  name: "schulung",
  title: "Schulung",
  type: "document",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "URL-Slug",
      type: "slug",
      options: { source: "titel", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "untertitel",
      title: "Untertitel",
      type: "string",
    }),
    defineField({
      name: "kurzbeschreibung",
      title: "Kurzbeschreibung",
      type: "text",
      rows: 3,
      description: "Wird in der Listenansicht und als Teaser verwendet.",
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: "beschreibung",
      title: "Ausfuehrliche Beschreibung",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "agenda",
      title: "Agenda",
      type: "array",
      of: [
        {
          type: "object",
          name: "agendapunkt",
          fields: [
            { name: "titel", title: "Titel", type: "string" },
            { name: "beschreibung", title: "Beschreibung", type: "text", rows: 2 },
          ],
          preview: {
            select: { title: "titel", subtitle: "beschreibung" },
          },
        },
      ],
    }),
    defineField({
      name: "dauer",
      title: "Dauer",
      type: "string",
      description: "z.B. 1 Tag, 2 Tage, 4 Stunden",
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Online", value: "Online" },
          { title: "Praesenz", value: "Praesenz" },
          { title: "Hybrid", value: "Hybrid" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Einsteiger", value: "Einsteiger" },
          { title: "Fortgeschritten", value: "Fortgeschritten" },
          { title: "Experte", value: "Experte" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "preis",
      title: "Preis",
      type: "string",
      description: "z.B. ab 1.490 EUR / Person",
    }),
    defineField({
      name: "zielgruppe",
      title: "Zielgruppe",
      type: "string",
    }),
    defineField({
      name: "voraussetzungen",
      title: "Voraussetzungen",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "bild",
      title: "Headerbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "highlight",
      title: "Als Highlight markieren",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reihenfolge",
      title: "Reihenfolge",
      type: "number",
      description: "Kleinere Werte erscheinen zuerst.",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "untertitel",
      media: "bild",
    },
  },
});
