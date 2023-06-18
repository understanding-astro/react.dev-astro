// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// define type and schema for collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.string(),
    month: z.string(),
    day: z.string(),
    intro: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
