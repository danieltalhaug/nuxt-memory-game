<script setup lang="ts">
import { CardPattern } from '~/types';

const props = defineProps<{
	pattern: CardPattern;
}>();

const patternClass = computed(() => {
	const patternMap: Record<CardPattern, string> = {
		[CardPattern.Tablecloth]: 'card-pattern-tablecloth',
		[CardPattern.Hearts]: 'card-pattern-hearts',
		[CardPattern.LinesDiagonal]: 'card-pattern-lines-diagonal',
		[CardPattern.ZigZag]: 'card-pattern-zig-zag',
	};
	return patternMap[props.pattern];
});
</script>

<template>
	<div class="rounded-md h-12 w-full" :class="patternClass" />
</template>
