<script setup lang="ts">
import type { ColorCard } from '~/types';

const props = defineProps<{
	card: ColorCard;
}>();

const emit = defineEmits<{
	(event: 'click-card', cardId: number): void;
}>();

function onClickCard() {
	emit('click-card', props.card.id);
}
</script>

<template>
	<PlayingCard :card="card" @click-card="onClickCard">
		<div class="card-color-indicator" :style="{ backgroundColor: card.color }" />
	</PlayingCard>
</template>

<style scoped>
.card-color-indicator {
	width: 100%;
	height: 100%;
}
</style>

