import type { ColorCard, MemoryGameFormData } from '~/types';
import { generateColorCardPairs } from '~/utils/cards';

export function useMemoryGame() {
	const { formData: settings } = useMemoryGameSettings();
	const cards = ref<ColorCard[]>([]);
	const flippedCards = ref<number[]>([]);
	const matchedPairs = ref<number[]>([]);
	const isGameStarted = ref(false);
	const playerName = ref('');
	const canFlip = ref(true);

	function startGame(formData: MemoryGameFormData) {
		playerName.value = formData.playerName;
		cards.value = generateColorCardPairs(formData.numberOfCards);
		flippedCards.value = [];
		matchedPairs.value = [];
		isGameStarted.value = true;
		canFlip.value = true;
	}

	function flipCard(cardId: number) {
		const card = cards.value.find(c => c.id === cardId);

		if (!card || !canFlip.value || card.isFlipped || matchedPairs.value.includes(cardId)) {
			return;
		}

		// If we already have 2 cards flipped, don't allow more
		if (flippedCards.value.length >= 2) {
			return;
		}

		card.isFlipped = true;
		flippedCards.value.push(cardId);

		// If we have 2 cards flipped, check for a match
		if (flippedCards.value.length === 2) {
			checkMatch();
		}
	}

	function checkMatch() {
		canFlip.value = false;

		if (flippedCards.value.length !== 2) {
			return;
		}

		const [firstId, secondId] = flippedCards.value as [number, number];

		const firstCard = cards.value.find(c => c.id === firstId);
		const secondCard = cards.value.find(c => c.id === secondId);

		if (!firstCard || !secondCard) {
			return;
		}

		// Check if cards match (same color)
		if (firstCard.color === secondCard.color) {
			// Match found!
			matchedPairs.value.push(firstId, secondId);
			flippedCards.value = [];
			canFlip.value = true;

			// Check if game is complete
			if (matchedPairs.value.length === cards.value.length) {
				// Game completed!
				setTimeout(() => {
					alert(`Congratulations ${playerName.value}! You completed the game!`);
				}, 500);
			}
		} else {
			// No match - flip cards back after a delay
			setTimeout(() => {
				firstCard.isFlipped = false;
				secondCard.isFlipped = false;
				flippedCards.value = [];
				canFlip.value = true;
			}, settings.value.cardRevealTime);
		}
	}

	function resetGame() {
		cards.value = [];
		flippedCards.value = [];
		matchedPairs.value = [];
		isGameStarted.value = false;
		playerName.value = '';
		canFlip.value = true;
	}

	return {
		cards,
		flippedCards,
		matchedPairs,
		isGameStarted,
		playerName,
		canFlip,
		startGame,
		flipCard,
		resetGame,
	};
}

