<script setup lang="ts">
const { formData } = useMemoryGameSettings();
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
	</UForm>
</template>
