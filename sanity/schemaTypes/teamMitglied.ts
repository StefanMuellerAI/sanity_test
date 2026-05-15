import { defineField, defineType } from "sanity";

export const teamMitglied = defineType({
  name: "teamMitglied",
  title: "Team-Mitglied",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rolle",
      title: "Rolle / Position",
      type: "string",
    }),
    defineField({
      name: "kurztext",
      title: "Kurztext",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn-URL",
      type: "url",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "reihenfolge",
      title: "Reihenfolge",
      type: "number",
      initialValue: 100,
      description: "Kleinere Werte erscheinen zuerst.",
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
    select: { title: "name", subtitle: "rolle", media: "foto" },
  },
});
