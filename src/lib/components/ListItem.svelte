<script lang="ts">
	export let to: string;
</script>

<li class="py-2">
	<a
		href={to}
		class="p-3 hover:bg-background-hover block rouned-lg group border border-border shadow transition-all duration-300 rounded-lg"
	>
		<h2 class="text-lg font-medium">
			<slot name="title" />
		</h2>

		<p class="text-muted">
			<slot name="desc" />
		</p>

		<p
			class="flex flex-row items-center gap-1 group-hover:gap-2 text-accent transition-all duration-200"
		>
			<span>Besøk</span>
			<span>&rarr;</span>
		</p>
	</a>
</li>
