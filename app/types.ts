export enum Themes {
	Colors = 'colors',
}

export enum NumberOfPairs {
	Eight = 8,
	Twelve = 12,
	Sixteen = 16,
	TwentyFour = 24,
}

export type MemoryGameFormData = {
	playerName: string;
	numberOfCards: NumberOfPairs;
	theme: Themes;
};

export type Card = {
	id: number;
	isFlipped: boolean;
};

