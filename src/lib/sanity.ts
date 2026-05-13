import { createClient } from "next-sanity"

export const sanityClient = createClient({
  projectId: "ver0ns79",
  dataset: "production",
  apiVersion: "2026-05-14",
  useCdn: true,
})