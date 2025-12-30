<script setup lang="ts">
import { Themes, NumberOfPairs, type MemoryGameFormData } from '~/types';
import { LocalStorageKeys } from '~/types';

const emit = defineEmits<{
	(event: 'start-game', payload: MemoryGameFormData): void;
}>();

const defaultPlayerName = 'Player';

const defaultFormData: MemoryGameFormData = {
	playerName: defaultPlayerName,
	numberOfCards: NumberOfPairs.Eight,
	theme: Themes.Colors,
};

const formData = useLocalStorage<MemoryGameFormData>(LocalStorageKeys.MemoryGameForm, defaultFormData);

const cardOptions = computed(() => {
	return Object.values(NumberOfPairs)
		.filter((value): value is NumberOfPairs => typeof value === 'number')
		.map(numberOfPairs => ({
			label: String(numberOfPairs),
			value: numberOfPairs,
			description: `Grid of ${numberOfPairs * 2} cards`,
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
		<Typography
			text="Memory Game"
			size="2xl"
			tag="h2"
			bold
		/>
		<UFormField label="Name">
			<UInput v-model="formData.playerName" class="w-full" />
		</UFormField>
		<UFormField label="Pairs">
			<URadioGroup
				v-model="formData.numberOfCards"
				color="primary"
				variant="table"
				:items="cardOptions"
			/>
		</UFormField>
		<UFormField label="Theme">
			<URadioGroup
				v-model="formData.theme"
				color="primary"
				variant="table"
				:items="themeOptions"
			/>
		</UFormField>
		<UButton class="size-fit self-end" type="submit">Start Game</UButton>
	</UForm>
</template>

