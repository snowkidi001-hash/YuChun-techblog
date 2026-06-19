// 全站共用設定。任何頁面都可 import 使用。

// 站名（暫定，尚未最終決定）。要改站名只改這一行。
export const SITE_TITLE = '科技放大鏡';

// 站台定位（也用於 SEO 與社群分享）。
export const SITE_DESCRIPTION =
	'給專業工作者看的科技新知策展。幫你過濾雜訊，並講清楚「這跟你的工作有什麼關係」。';

// 四個分類：標籤文字 + 自動封面配色（深色塊底 + 淺色字）。
// AI=深墨綠、工具=深褐金、產業=深藍灰、技術解析=深莓。
export const CATEGORIES = {
	ai: {
		label: 'AI',
		cover: { bg: '#1f3d34', fg: '#e9f1ec' }, // 深墨綠
	},
	tools: {
		label: '工具',
		cover: { bg: '#473115', fg: '#f4ead4' }, // 深褐金
	},
	industry: {
		label: '產業',
		cover: { bg: '#2b3a46', fg: '#e6edf3' }, // 深藍灰
	},
	'deep-dive': {
		label: '技術解析',
		cover: { bg: '#4a1f2e', fg: '#f4dce5' }, // 深莓
	},
} as const;

export type Category = keyof typeof CATEGORIES;

export const CATEGORY_KEYS = Object.keys(CATEGORIES) as Category[];

// 社群連結（上線前填）。留空的不會顯示在 Header / Footer。
export const SOCIAL = {
	line: '', // 例：https://line.me/R/ti/p/@yourid
	threads: '', // 例：https://www.threads.net/@yourid
	github: '', // 例：https://github.com/snowkidi
};
