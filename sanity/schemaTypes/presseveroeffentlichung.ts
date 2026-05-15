import { defineField, defineType } from "sanity";

export const presseveroeffentlichung = defineType({
  name: "presseveroeffentlichung",
  title: "Presseveroeffentlichung",
  type: "document",
  description:
    "Externe Presse-Artikel und -Beitraege ueber StefanAI - werden auf /presse als Linkliste angezeigt.",
  fields: [
    defineField({
      name: "titel",
      title: "Titel des Beitrags",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "medium",
      title: "Medium / Publikation",
      type: "string",
      description: "z.B. Heise online, t3n, Wirtschaftswoche",
    }),
    defineField({
      name: "datum",
      title: "Datum",
      type: "date",
    }),
    defineField({
      name: "kurzbeschreibung",
      title: "Kurzbeschreibung",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo der Publikation",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "art",
      title: "Art",
      type: "string",
      options: {
        list: [
          { title: "Artikel", value: "Artikel" },
          { title: "Interview", value: "Interview" },
          { title: "Podcast", value: "Podcast" },
          { title: "Video", value: "Video" },
          { title: "Pressemitteilung", value: "Pressemitteilung" },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: "Datum, neueste zuerst",
      name: "datumDesc",
      by: [{ field: "datum", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "medium",
      media: "logo",
    },
  },
});
