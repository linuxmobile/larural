// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
// 2. Define your collection(s)
const blog = defineCollection({
	schema: z.object({
		title: z.string().max(60).min(10),
    description: z.string().max(160).min(110).optional(),
		tags: z.string(),
		publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
		updatedDate: z.string().optional().transform((
			str,
		) => (str ? new Date(str) : undefined)),
		isDraft: z.boolean().optional(),
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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { blog, events }
