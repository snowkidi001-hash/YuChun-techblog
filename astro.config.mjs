// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// ⚠️ 上線前要改：換成正式網址（初期可用 Netlify 的 xxx.netlify.app）
	site: 'https://example.netlify.app',
	integrations: [mdx(), sitemap()],
	// 方向A 字型：用 Astro 內建 Fonts API 自架 Google Fonts
	//   標題 = Noto Serif HK Black（900）— 氣勢
	//   內文 = Noto Sans TC Regular（400）— 長文好讀
	// 已設中文系統字型 fallback，首次載入標題若閃一下才變粗屬正常（之後快取）。
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Noto Serif HK',
			cssVariable: '--font-serif',
			weights: [900],
			styles: ['normal'],
			display: 'swap',
			fallbacks: ['Noto Serif TC', 'Source Han Serif TC', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Noto Sans TC',
			cssVariable: '--font-sans',
			weights: [400, 700],
			styles: ['normal'],
			display: 'swap',
			fallbacks: [
				'PingFang TC',
				'Microsoft JhengHei',
				'Heiti TC',
				'sans-serif',
			],
		},
	],
});
