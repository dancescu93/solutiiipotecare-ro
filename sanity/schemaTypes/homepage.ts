import { defineField, defineType } from "sanity"

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Titlu hero",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtitlu hero",
      type: "text",
    }),
    defineField({
      name: "ctaPrimary",
      title: "Buton principal",
      type: "string",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Buton secundar",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
  ],
})