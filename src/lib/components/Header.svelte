<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from '../assets/echo-logo-black.svg?component';
</script>

<header class="flex p-5 md:p-10 transition-all duration-150 items-center">
	<div class="flex">
		<a href="/">
			<Logo width={75} height={75} />
		</a>
	</div>
	<div class="flex-1" />
	<nav class="flex-0 flex gap-2">
		<a
			class="h-10 w-10 p-1 rounded-lg hover:bg-gray-300 transition-colors duration-200"
			href="https://github.com/echo-webkom"
		>
			<span class="sr-only">GitHub</span>
			<Icon class="h-full w-full" icon="mdi:github" />
		</a>
		<a
			class="h-10 w-10 p-1 rounded-lg hover:bg-gray-300 transition-colors duration-200"
			href="https://www.instagram.com/echo_webkom"
		>
			<span class="sr-only">Instagram</span>
			<Icon class="h-full w-full" icon="mdi:instagram" />
		</a>
	</nav>
</header>
