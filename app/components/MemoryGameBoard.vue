<script setup lang="ts">
import type { ColorCard } from '~/types';

const props = defineProps<{
	cards: ColorCard[];
}>();

const emit = defineEmits<{
	(event: 'click-card', cardId: number): void;
}>();

function handleCardClick(cardId: number) {
	emit('click-card', cardId);
}
</script>

<template>
	<main class="grid grid-cols-8 gap-8">
		<PlayingCardColor
			v-for="card in cards"
			:key="card.id"
			:card
			@click-card="handleCardClick"
		/>
	</main>
</template>
