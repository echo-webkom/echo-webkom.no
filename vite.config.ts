import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			disable: process.env.NODE_ENV === 'development',
			manifestFilename: 'site.webmanifest',
			manifest: {
				name: 'echo Webkom',
				short_name: 'echo Webkom',
				start_url: 'https://echo-webkom.no',
				lang: 'nb',
				orientation: 'any',
				dir: 'ltr',
				scope: '/',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				],
				theme_color: '#f5f5f5',
				background_color: '#f5f5f5',
				display: 'standalone'
			}
		})
	]
});
