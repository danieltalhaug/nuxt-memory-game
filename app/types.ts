export enum LocalStorageKeys {
	MemoryGameForm = 'mg-form-data',
	MemoryGameSettings = 'mg-settings-data',
}

export enum Themes {
	Colors = 'colors',
}

export enum NumberOfPairs {
	Four = 4,
	Six = 6,
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

export type ColorCard = Card & {
	color: string;
};

export enum CardPattern {
	Tablecloth = 'tablecloth',
	Hearts = 'hearts',
	LinesDiagonal = 'lines-diagonal',
	ZigZag = 'zig-zag',
}
