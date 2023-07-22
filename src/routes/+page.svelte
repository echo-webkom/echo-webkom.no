<script lang="ts">
	import ListItem from '$lib/components/ListItem.svelte';
	import { links, newLinks } from '$lib/links';
	import WebkomLogo from '$lib/assets/webkom-logo.png';
</script>

<main class="max-w-lg mx-auto min-h-screen py-20 space-y-6 px-4">
	<div class="flex flex-row items-center gap-2">
		<img src={WebkomLogo} alt="echo logo" class="w-14 h-auto" />
		<h1 class="text-3xl font-bold">echo Webkom</h1>
	</div>

	<p>
		echo Webkom er utviklergruppen i Webkom. Vi jobber med å lage og vedlikeholde nettsidene til
		<b> echo &ndash; Linjeforeningen for informatikk</b> ved Universitetet i Bergen.
	</p>

	<div>
		<h2 id="links" class="text-xl font-semibold">Nyttige lenker</h2>

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
