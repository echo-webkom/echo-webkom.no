<script lang="ts">
	import type { Config } from '@sveltejs/adapter-vercel';
	import ListItem from '$lib/components/ListItem.svelte';
	import { links, newLinks } from '$lib/links';
	import WebkomLogo from '$lib/assets/webkom-logo.png';

	export const config = {
		isr: {
			expiration: false
		}
	} satisfies Config;
</script>

<main class="max-w-lg mx-auto min-h-screen py-14 sm:py-20 space-y-6 px-5">
	<div class="flex flex-row items-center gap-2">
		<img src={WebkomLogo} alt="echo logo" class="w-14 h-auto" />
		<h1 class="text-3xl font-bold">echo Webkom</h1>
	</div>

	<p>
		echo Webkom er utviklergruppen i Webkom. Vi jobber med å lage og vedlikeholde nettsidene til
		<b> echo &ndash; Linjeforeningen for informatikk</b> ved Universitetet i Bergen.
	</p>

	<a
		href="https://verv.echo-webkom.no"
		class="block p-4 text-white shadow-lg bg-blue-500 rounded-lg transition-transform duration-300 hover:scale-105"
	>
		<h3 class="text-lg font-semibold">Vi søker nye medlemmer!</h3>
		<p>Vil du være med å lage nettsidene til echo? Søk på vervet som utvikler i echo Webkom!</p>
	</a>

	<div>
		<ul class="flex flex-col">
			{#each links as link}
				<ListItem to={link.to}>
					<svelte:fragment slot="title">
						{link.title}
					</svelte:fragment>

					<svelte:fragment slot="desc">
						{link.desc}
					</svelte:fragment>
				</ListItem>
			{/each}
		</ul>
	</div>

	<div>
		<h2 id="links-dev" class="text-xl font-semibold">Lenker for utviklere</h2>

		<ul class="flex flex-col">
			{#each newLinks as link}
				<ListItem to={link.to}>
					<svelte:fragment slot="title">
						{link.title}
					</svelte:fragment>

					<svelte:fragment slot="desc">
						{link.desc}
					</svelte:fragment>
				</ListItem>
			{/each}
		</ul>
	</div>
</main>
