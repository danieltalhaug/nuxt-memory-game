export enum Themes {
	Colors = 'colors',
}

export enum NumberOfCards {
	Eight = 8,
	Twelve = 12,
	Sixteen = 16,
	TwentyFour = 24,
}

export type MemoryGameFormData = {
	playerName: string;
	numberOfCards: NumberOfCards;
	theme: Themes;
};
