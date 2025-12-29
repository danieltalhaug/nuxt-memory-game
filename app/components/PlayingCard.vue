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
	<article
		:class="['card-container', 'aspect-2/3', 'cursor-pointer', 'perspective-distant', { 'is-flipped': card.isFlipped }]"
		@click="onClickCard"
	>
		<section class="card-face card-back transition-transform duration-500 ease-in-out motion-reduce:transition-none">
			<PlayingCardFaceWrapper>
				<PlayingCardBack />
			</PlayingCardFaceWrapper>
		</section>
		<section class="card-face card-front transition-transform duration-500 ease-in-out motion-reduce:transition-none">
			<PlayingCardFaceWrapper>
				<slot />
			</PlayingCardFaceWrapper>
		</section>
	</article>
</template>

<style scoped>
.card-container {
	position: relative;
}

.card-face {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	transform-style: preserve-3d;
}

.card-back {
	transform: rotateY(0deg);
}

.card-front {
	transform: rotateY(180deg);
}

.card-container.is-flipped .card-back {
	transform: rotateY(180deg);
}

.card-container.is-flipped .card-front {
	transform: rotateY(0deg);
}
</style>

