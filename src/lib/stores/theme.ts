import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedTheme = (browser && localStorage.getItem('theme')) || 'light';

export const theme = writable(storedTheme);

export const toggleTheme = () => {
	theme.update((value) => {
		const newValue = value === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', newValue);

		newValue === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
		return newValue;
	});
};
