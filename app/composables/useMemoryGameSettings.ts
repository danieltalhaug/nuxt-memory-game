import { LocalStorageKeys } from '~/types';

export type SettingsFormData = {
	cardRevealTime: number;
};

const defaultSettingsFormData: SettingsFormData = {
	cardRevealTime: 1500,
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

