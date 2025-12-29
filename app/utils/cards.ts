import type { ColorCard } from "~/types";
import { shuffleArray } from "./array";

/**
 * Generates an array of color card pairs
 * @param numberOfPairs - The number of pairs of cards to generate
 * @returns An array of color card pairs
 */
export function generateColorCardPairs(numberOfPairs: number): ColorCard[] {
	const options = [
		'#FF0000', // Red
		'#00FF00', // Green
		'#0000FF', // Blue
		'#FFFF00', // Yellow
		'#FF00FF', // Magenta
		'#00FFFF', // Cyan
		'#FFA500', // Orange
		'#800080', // Purple
		'#FFC0CB', // Pink
		'#A52A2A', // Brown
		'#000000', // Black
		'#FFFFFF', // White
		'#808080', // Gray
		'#FFD700', // Gold
		'#C0C0C0', // Silver
		'#FF6347', // Tomato
		'#40E0D0', // Turquoise
		'#EE82EE', // Violet
		'#F5DEB3', // Wheat
		'#90EE90', // Light Green
		'#87CEEB', // Sky Blue
		'#DDA0DD', // Plum
		'#F0E68C', // Khaki
		'#FF1493', // Deep Pink
	];

	const cards: ColorCard[] = [];

	for (let pairIndex = 0; pairIndex < numberOfPairs; pairIndex++) {
		const color = options[pairIndex];
		const baseId = pairIndex * 2;

		// Create two cards with the same color but unique IDs
		if (color) {
			cards.push(
				{
					id: baseId,
					color,
					isFlipped: false,
				},
				{
					id: baseId + 1,
					color,
					isFlipped: false,
				}
			);
		}
	}

	return shuffleArray(cards);
}
