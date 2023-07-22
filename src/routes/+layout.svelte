<script lang="ts">
	import '../app.css';

	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<div class="fixed top-0 right-0 m-4">
	<button
		class="w-10 text-lg h-10 border border-border rounded-full bg-background hover:bg-background-hover"
		on:click={toggleTheme}
	>
		{#if $theme === 'dark'}
			🌞
		{:else}
			🌚
		{/if}
	</button>
</div>

<slot />
