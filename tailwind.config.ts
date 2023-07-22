import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: 'var(--background)',
					hover: 'var(--background-hover)'
				},
				foreground: 'var(--foreground)',
				muted: 'var(--muted)',
				accent: 'var(--accent)',
				border: 'var(--border)'
			}
		}
	},
	plugins: []
} satisfies Config;
