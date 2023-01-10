<script lang="ts">
	export let text: string;
</script>

{#if text}
	<div class="py-2 bg-gray-200 border-b border-b-black text-center">
		<p class="font-bold">{text}</p>
	</div>
{/if}
