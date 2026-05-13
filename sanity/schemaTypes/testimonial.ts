import { defineField, defineType } from "sanity"

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nume client",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text testimonial",
      type: "text",
    }),
  ],
})