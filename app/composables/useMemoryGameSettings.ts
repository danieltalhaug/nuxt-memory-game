import { CardPattern, LocalStorageKeys } from '~/types';

export type SettingsFormData = {
	cardRevealTime: number;
	cardPattern: CardPattern;
};

const defaultSettingsFormData: SettingsFormData = {
	cardRevealTime: 1500,
	cardPattern: CardPattern.Tablecloth,
};

export function useMemoryGameSettings() {
	const formData = useLocalStorage<SettingsFormData>(
		LocalStorageKeys.MemoryGameSettings,
		defaultSettingsFormData
	);

	return {
		formData,
	};
}

