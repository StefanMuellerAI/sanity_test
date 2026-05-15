import { defineField, defineType } from "sanity";

export const pressekontakt = defineType({
  name: "pressekontakt",
  title: "Pressekontakt",
  type: "document",
  description:
    "Singleton-Dokument fuer den Pressekontakt. Nur ein Eintrag erforderlich.",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rolle",
      title: "Rolle",
      type: "string",
      initialValue: "Pressereferentin",
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
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "telefon",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn-URL",
      type: "url",
    }),
    defineField({
      name: "kurztext",
      title: "Kurztext",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "rolle", media: "foto" },
  },
});
