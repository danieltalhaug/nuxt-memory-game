<script setup lang="ts">
import type { MemoryGameFormData } from '~/types';

const { cards, isGameStarted, startGame, flipCard } = useMemoryGame();

function onStartGame(formData: MemoryGameFormData) {
	startGame(formData);
}

function onCardClick(cardId: number) {
	flipCard(cardId);
}
</script>

<template>
	<div>
		<UPageHero
			title="Memory Game"
			description="A memory game built using Nuxt and NuxtUI"
		/>
		<MemoryGameForm v-if="!isGameStarted" class="max-w-md mx-auto" @start-game="onStartGame" />
		<MemoryGameBoard v-if="isGameStarted && cards.length > 0" :cards @click-card="onCardClick" />
	</div>
</template>
