import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "solutiiipotecare-ro",
  title: "solutiiipotecare.ro",

  projectId: "ver0ns79",
  dataset: "production",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})