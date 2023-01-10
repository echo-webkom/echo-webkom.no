<script>
	import { Header, Banner, Footer } from '$lib/components';
	import '../app.css';
</script>

<Banner text="" />
<div class="flex flex-col min-h-screen">
	<Header />
	<main>
		<slot />
	</main>
	<div class="flex-1" />
	<Footer />
</div>
