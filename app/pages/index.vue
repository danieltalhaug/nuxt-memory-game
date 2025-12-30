<script setup lang="ts">
import type { MemoryGameFormData } from '~/types';

const { cards, isGameStarted, startGame, flipCard } = useMemoryGame();

const tabItems = [
	{
		label: 'Game',
		icon: 'i-lucide-shapes',
		slot: 'game'
	},
	{
		label: 'Settings',
		icon: 'i-lucide-settings',
		slot: 'settings'
	}
]

function onStartGame(formData: MemoryGameFormData) {
	startGame(formData);
}

function onCardClick(cardId: number) {
	flipCard(cardId);
}
</script>

<template>
	<div class="flex justify-center items-center h-screen">
		<UTabs
			v-if="!isGameStarted"
			:items="tabItems"
			class="w-full max-w-lg items-start gap-8 min-h-160"
			orientation="vertical"
			size="lg"
		>
			<template #game>
				<MemoryGameForm
					class="w-full"
					@start-game="onStartGame"
				/>
			</template>
			<template #settings>
				<MemoryGameSettingsForm />
			</template>
		</UTabs>

		<MemoryGameBoard
			v-if="isGameStarted"
			:cards
			@click-card="onCardClick"
		/>
	</div>
</template>
