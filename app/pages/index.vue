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
	<div class="flex justify-center items-center h-screen">
		<MemoryGameForm
			v-if="!isGameStarted"
			class="w-full max-w-md mx-auto"
			@start-game="onStartGame"
		/>
		<MemoryGameBoard
			v-else-if="cards.length > 0"
			:cards
			@click-card="onCardClick"
		/>
	</div>
</template>
