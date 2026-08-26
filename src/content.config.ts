import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    popular: z.boolean().optional(),
  }),
});

const product = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    oldPrice: z.string().optional(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    category: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  product,
};
