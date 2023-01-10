/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['IBM Plex Mono Bold', 'Arial'],
				body: ['Inter', 'Roboto'],
				mono: ['IBM Plex Mono', 'Arial']
			}
		}
	},
	plugins: []
};
