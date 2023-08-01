// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
// 2. Define your collection(s)
const blog = defineCollection({
	schema: z.object({
		title: z.string(),
    description: z.string().optional(),
		date: z.string().or(z.date()).transform((val) => new Date(val)),
	}),
})
const events = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		image: image(),
		startDate: z.string().or(z.date()).transform((val) => new Date(val)),
    endDate: z.string().or(z.date()).transform((val) => new Date(val)),
    time: z.string().optional(),
    price: z.string().optional(),
    location: z.string().optional(),
    categories: z.array(z.string()).optional(),
	}),
})
const services = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { blog, events, services }
