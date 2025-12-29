<script setup lang="ts">
import type { ColorCard, MemoryGameFormData } from '~/types';
import { generateColorCardPairs } from '~/utils/cards';

function onStartGame(formData: MemoryGameFormData) {
	console.log(formData);
}

const cards = ref<ColorCard[]>(generateColorCardPairs(8));

function onCardClick(cardId: number) {
	const card = cards.value.find(card => card.id === cardId);
	card!.isFlipped = !card?.isFlipped;
}
</script>

<template>
	<div>
		<UPageHero
			title="Memory Game"
			description="A memory game built using Nuxt and NuxtUI"
		/>
		<MemoryGameForm class="max-w-md mx-auto" @start-game="onStartGame" />
		<MemoryGameBoard v-if="cards" :cards @click-card="onCardClick" />
	</div>
</template>
