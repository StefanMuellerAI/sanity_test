import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog-Beitrag",
  type: "document",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required().max(140),
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
      title: "Untertitel / Teaser",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: "veroeffentlichtAm",
      title: "Veroeffentlicht am",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "autor",
      title: "Autor:in",
      type: "string",
    }),
    defineField({
      name: "headerbild",
      title: "Headerbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt-Text", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "video",
      title: "Begleitvideo",
      type: "object",
      description:
        "Entweder eine externe URL (YouTube, Vimeo, MP4) ODER eine Datei direkt hochladen.",
      fields: [
        {
          name: "url",
          title: "Video-URL",
          type: "url",
          description: "z.B. https://www.youtube.com/watch?v=... oder https://...mp4",
        },
        {
          name: "datei",
          title: "Video-Datei (Upload)",
          type: "file",
          options: { accept: "video/*" },
        },
        {
          name: "poster",
          title: "Poster-Bild",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "beschriftung",
          title: "Beschriftung",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "downloads",
      title: "Weiterfuehrende Downloads",
      type: "array",
      description:
        "PDF-Dateien wie Checklisten, Argumentationshilfen etc.",
      of: [
        {
          type: "object",
          name: "download",
          fields: [
            {
              name: "titel",
              title: "Titel",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "beschreibung",
              title: "Beschreibung",
              type: "text",
              rows: 2,
            },
            {
              name: "kategorie",
              title: "Kategorie",
              type: "string",
              options: {
                list: [
                  { title: "Checkliste", value: "Checkliste" },
                  { title: "Argumentation", value: "Argumentation" },
                  { title: "Vorlage", value: "Vorlage" },
                  { title: "Whitepaper", value: "Whitepaper" },
                  { title: "Sonstiges", value: "Sonstiges" },
                ],
              },
            },
            {
              name: "datei",
              title: "PDF-Datei",
              type: "file",
              options: { accept: "application/pdf" },
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: { title: "titel", subtitle: "kategorie" },
          },
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
  orderings: [
    {
      title: "Datum, neueste zuerst",
      name: "datumDesc",
      by: [{ field: "veroeffentlichtAm", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "untertitel",
      media: "headerbild",
    },
  },
});
