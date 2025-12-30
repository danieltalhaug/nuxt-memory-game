import type { Config } from 'tailwindcss';

export default {
	safelist: [
		{
			pattern: /^text-(xs|sm|base|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
		},
		'font-bold',
	],
} satisfies Config;

