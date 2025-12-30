// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="nuxt" />
export default defineNuxtConfig({
	ssr: false,
	modules: [
		'@nuxt/eslint',
		'@nuxt/ui',
		'@vueuse/nuxt'
	],

	devtools: {
		enabled: true
	},

	css: ['~/assets/css/main.css'],

	routeRules: {
		'/': { prerender: true }
	},

	compatibilityDate: '2025-01-15'
});
