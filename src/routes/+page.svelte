<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	const tech = [
		{
			name: 'Next.js',
			icon: 'logos:nextjs-icon'
		},
		{
			name: 'React',
			icon: 'logos:react'
		},
		{
			name: 'PostgreSQL',
			icon: 'logos:postgresql'
		},
		{
			name: 'TypeScript',
			icon: 'logos:typescript-icon'
		},
		{
			name: 'Ktor',
			icon: 'logos:ktor-icon'
		},
		{
			name: 'Kotlin',
			icon: 'logos:kotlin-icon'
		},
		{
			name: 'Sanity',
			icon: 'logos:sanity'
		},
		{
			name: 'Git',
			icon: 'logos:git-icon'
		},
		{
			name: 'Microsoft Azure',
			icon: 'logos:microsoft-azure'
		}
	];
</script>

<main class="max-w-2xl lg:max-w-7xl mx-auto pt-5 pb-20 px-5 sm:px-10">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-5">
				<h1 class="text-6xl font-display">echo Webkom</h1>
				<div class="flex flex-col gap-3 text-xl">
					<p>
						Bli med på å drifte og utvikle echo sine webløsninger, og få en
						smakebit på arbeidslivet.
					</p>
					<p>
						Vi i Webkom søker nye engasjerte studenter som har til å hjelpe med
						å utvikle og drifte echo sine løsninger på nettet.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<p class="text-2xl font-bold">Teknologier vi jobber med:</p>
				<ul class="flex flex-wrap gap-5 items-center">
					{#each tech as tech}
						<li class="flex gap-2 tooltip-container">
							<span class="sr-only">{tech.name}</span>
							{#if tech.icon === 'logos:sanity'}
								<Icon class="h-10 w-32" icon={tech.icon} />
							{:else}
								<Icon class="h-10 w-10" icon={tech.icon} />
							{/if}
							<span class="tooltip-text">
								{tech.name}
							</span>
						</li>
					{/each}
					<li>
						<p class="font-mono text-xl font-bold">Og mer...</p>
					</li>
				</ul>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<h2 class="text-3xl font-bold">Send søknad</h2>
			<form class="flex flex-col gap-3" method="POST" use:enhance>
				<div class="form-control">
					<label for="email" class="text-lg font-semibold font-mono"
						>E-post</label
					>
					<input
						id="email"
						type="email"
						name="email"
						class="border border-black rounded p-2"
					/>
					{#if form?.errors?.email}
						<p class="text-red-500 text-sm">
							{form.errors.email}
						</p>
					{:else}
						<p class="text-gray-600 text-sm">
							Sånn at vi kan kalle deg inn på intervju.
						</p>
					{/if}
				</div>

				<div class="form-control">
					<label for="name" class="text-lg font-semibold font-mono">Navn</label>
					<input
						id="name"
						name="name"
						type="text"
						class="border border-black rounded p-2"
					/>
					{#if form?.errors?.name}
						<p class="text-red-500 text-sm">
							{form.errors.name}
						</p>
					{/if}
				</div>

				<div class="form-control">
					<label for="degree" class="text-lg font-semibold font-mono"
						>Studieretning</label
					>
					<select
						id="degree"
						name="degree"
						class="border border-black rounded p-2 bg-white"
					>
						<option value="DTEK">Datateknologi</option>
						<option value="DSIK">Datasikkerhet</option>
						<option value="DVIT">Datavitenskap</option>
						<option value="BINF">Bioinformatikk</option>
						<option value="IMO">Informatikk-matematikk-økonomi</option>
						<option value="INF">Master i informatikk</option>
						<option value="PROG">Felles master i programvareutvikling</option>
						<option value="ARMNINF">Årstudium i informatikk</option>
						<option value="POST">Postbachelor</option>
						{#if form?.errors?.degree}
							<p class="text-red-500 text-sm">
								{form.errors.degree}
							</p>
						{/if}
					</select>
				</div>

				<div class="form-control">
					<label for="year" class="text-lg font-semibold font-mono"
						>Årstrinn</label
					>
					<select
						id="year"
						name="year"
						class="border border-black rounded p-2 bg-white"
					>
						<option value="1">1. året</option>
						<option value="2">2. året</option>
						<option value="3">3. året</option>
						<option value="4">4. året</option>
						<option value="5">5. året</option>
					</select>
					{#if form?.errors?.year}
						<p class="text-red-500 text-sm">
							{form.errors.year}
						</p>
					{/if}
				</div>

				<div class="form-control">
					<label for="message" class="text-lg font-semibold font-mono"
						>Søknad</label
					>
					<textarea
						id="message"
						name="message"
						class="border border-black rounded p-2 min-h-[200px]"
					/>
					{#if form?.errors?.message}
						<p class="text-red-500 text-sm">
							{form.errors.message}
						</p>
					{:else}
						<p class="text-gray-600 text-sm">
							Fortell litt om hvorfor du ønsker å bli. Motivasjoner, tidligere
							erfaringer, hva du kan bidra med, osv. 25 til 200 ord.
						</p>
					{/if}
				</div>

				<button
					type="submit"
					class="bg-gray-200 font-bold font-mono hover:bg-gray-300 transition-all rounded border border-black py-3 mt-5"
				>
					Send søknad
				</button>
			</form>
		</div>
	</div>
</main>

<style>
	.tooltip-container {
		position: relative;
	}

	.tooltip-container .tooltip-text {
		visibility: hidden;
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px;
		position: absolute;
		z-index: 10;
		top: 120%;
		left: 50%;
		margin-left: -60px;
	}

	.tooltip-container:hover .tooltip-text {
		visibility: visible;
	}
</style>
