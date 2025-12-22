<script setup lang="ts">
import { Themes, NumberOfCards, type MemoryGameFormData } from '~/types';

const emit = defineEmits<{
	(event: 'start-game', payload: MemoryGameFormData): void;
}>();

const defaultPlayerName = 'Player';

const formData = ref<MemoryGameFormData>({
	playerName: defaultPlayerName,
	numberOfCards: NumberOfCards.Eight,
	theme: Themes.Colors,
});

const cardOptions = computed(() => {
	return Object.values(NumberOfCards)
		.filter((value): value is NumberOfCards => typeof value === 'number')
		.map(numberOfCards => ({
			label: String(numberOfCards),
			value: numberOfCards,
			description: `Grid of ${numberOfCards * 2} cards`,
		}));
});

const themeOptions = computed(() =>
	Object.values(Themes).map(theme => ({
		label: theme.charAt(0).toUpperCase() + theme.slice(1),
		value: theme,
	}))
);

function handleSubmit() {
	if (!formData.value.playerName) {
		formData.value.playerName = defaultPlayerName;
	}

	emit('start-game', formData.value);
}
</script>

<template>
	<UForm class="flex flex-col gap-8" @submit.prevent="handleSubmit">
		<UFormField label="Player Name">
			<UInput v-model="formData.playerName" class="w-full" />
		</UFormField>
		<UFormField label="Amount of cards">
			<URadioGroup
				v-model="formData.numberOfCards"
				color="primary"
				variant="table"
				:items="cardOptions"
			/>
		</UFormField>
		<UFormField label="Game theme">
			<URadioGroup
				v-model="formData.theme"
				color="primary"
				variant="table"
				:items="themeOptions"
			/>
		</UFormField>
		<UButton class="size-fit" type="submit">Start Game</UButton>
	</UForm>
</template>

