/**
 * Randomly shuffles an array using the Fisher-Yates algorithm
 * @param array - The array to shuffle
 * @returns A new shuffled array (original array is not modified)
 */
export function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = shuffled[i]!;
		shuffled[i] = shuffled[j]!;
		shuffled[j] = temp;
	}

	return shuffled;
}
