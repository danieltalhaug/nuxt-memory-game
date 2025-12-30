<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui';
import { CardPattern } from '~/types';

const { formData } = useMemoryGameSettings();

const cardPatternOptions = ref<RadioGroupItem[]>([
	{
		label: 'Tablecloth',
		value: CardPattern.Tablecloth,
	},
	{
		label: 'Hearts',
		value: CardPattern.Hearts,
	},
	{
		label: 'Lines Diagonal',
		value: CardPattern.LinesDiagonal,
	},
	{
		label: 'Zig Zag',
		value: CardPattern.ZigZag,
	},
]);
</script>

<template>
	<UForm class="flex flex-col gap-8" @submit.prevent>
		<Typography
			text="Game Settings"
			size="2xl"
			tag="h2"
			bold
		/>
		<UFormField
			label="Card Reveal Time"
			description="Sets the time cards remain face-up before flipping back in milliseconds."
		>
			<UInputNumber
				v-model="formData.cardRevealTime"
				:step="100"
				:min="100"
				:max="10_000"
				class="w-full"
			/>
		</UFormField>
		<UFormField
			label="Card Pattern"
		>
			<URadioGroup
				v-model="formData.cardPattern"
				color="primary"
				variant="table"
				:items="cardPatternOptions"
			>
				<template #description="{ item }">
					<div class="flex justify-center">
						<CardBackPatternPreview
							:pattern="item.value as CardPattern"
							class="mt-2"
						/>
					</div>
				</template>
			</URadioGroup>
		</UFormField>
	</UForm>
</template>
