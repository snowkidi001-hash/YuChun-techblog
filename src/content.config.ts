import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// 載入 src/content/blog/ 底下的 Markdown 與 MDX 檔
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// 擴充 frontmatter schema：這是未來「選題雷達」自動產文的接口
	schema: () =>
		z.object({
			title: z.string(),
			// 一句話描述（也用於 SEO 與社群分享）
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// 分類：決定自動封面配色與分類標籤
			category: z.enum(['ai', 'tools', 'industry', 'deep-dive']),
			// 標籤（選填）
			tags: z.array(z.string()).optional(),
			// 策展來源（選填）
			source: z
				.object({
					name: z.string(),
					url: z.string().url(),
				})
				.optional(),
			// true 時不出現在正式列表與 RSS
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
