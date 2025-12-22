<script setup>
useHead({
	meta: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
	],
	link: [
		{ rel: 'icon', href: '/favicon.ico' }
	],
	htmlAttrs: {
		lang: 'en'
	}
});

const title = 'Nuxt Memory Game';
const description = 'A memory game built using Nuxt and NuxtUI';
const currentYear = new Date().getFullYear();

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});
</script>

<template>
	<UApp>
		<UMain>
			<NuxtPage />
		</UMain>

		<USeparator />

		<UFooter>
			<template #left>
				<p class="text-sm text-muted">
					Daniel Talhaug © {{ currentYear }}
				</p>
			</template>
			<template #right>
				<UColorModeButton />
			</template>
		</UFooter>
	</UApp>
</template>
