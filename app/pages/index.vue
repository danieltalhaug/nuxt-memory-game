<script setup lang="ts">
import type { MemoryGameFormData } from '~/types';

function onStartGame(formData: MemoryGameFormData) {
	console.log(formData);
}
</script>

<template>
	<div>
		<UPageHero
			title="Memory Game"
			description="A memory game built using Nuxt and NuxtUI"
		/>
		<MemoryGameForm class="max-w-md mx-auto" @start-game="onStartGame" />
	</div>
</template>
