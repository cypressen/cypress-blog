// 1. 从 `astro:content` 导入适当的工具。
import { z, defineCollection } from 'astro:content';

// 2. 定义要用 schema 验证的每个集合。
const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
        image: z.string().optional(),
        badge: z.string().optional(),
        categories: z
            .array(z.string())
            .refine((items) => new Set(items).size === items.length, {
                message: "categories must be unique",
            })
            .optional(),
        tags: z
            .array(z.string())
            .refine((items) => new Set(items).size === items.length, {
                message: "tags must be unique",
            })
            .optional(),
    }),
});

// 3. 导出一个 `collections` 对象来注册你的集合。
export const collections = { blog };