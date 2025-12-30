<script setup lang="ts">
const props = withDefaults(defineProps<{
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
	text: string;
	bold?: boolean;
}>(), {
	tag: 'p',
	size: 'md',
	bold: false,
});

const sizeClasses: Record<string, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
};

const typographyClasses = computed(() => {
	const classes = [sizeClasses[props.size] || 'text-base'];

	if (props.bold) {
		classes.push('font-bold');
	}

	return classes.join(' ');
});

const typographyTag = computed(() => props.tag);
</script>

<template>
	<component
		:is="typographyTag"
		:class="typographyClasses"
		v-bind="$attrs"
	>
		{{ text }}
	</component>
</template>

