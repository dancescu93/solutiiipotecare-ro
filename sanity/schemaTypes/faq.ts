import { defineField, defineType } from "sanity"

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Întrebare",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Răspuns",
      type: "text",
    }),
  ],
})