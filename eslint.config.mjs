// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'@stylistic/indent': ['error', 'tab', { tabWidth: 4 }],
		'@stylistic/semi': ['error', 'always'],
		'no-tabs': 'off'
	}
});
