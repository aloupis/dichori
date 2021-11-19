<script context="module">
	export async function load({ fetch }) {
		const url = '/query/settings.json';

		const res = await fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();

		if (res.ok) {
			return {
				props: { data }
			};
		}

		return {
			status: res.status,
			error: new Error(`Couldn't load ${url}`)
		};
	}
</script>

<script>
	import { setContext } from 'svelte';
	import '../app.postcss';
	export let data;
	setContext('settings', data);
</script>

<!-- <Header items={data.header.items} answer={42}/> -->
<div class="flex flex-col h-screen">
	<nav class="bg-green-900 shadow-lg">
		<div class="container mx-auto">
			<div class="sm:flex">
				<a href="/" class="text-white text-3xl font-bold p-3">APP LOGO</a>
				<div class="ml-55 mt-4">
					<ul class="text-white sm:self-center text-xl">
						{#each data.header.items as item}
							<li class="sm:inline-block">
								<a href={`/pages/${item.url}`} class="p-3 hover:text-red-900">{item.name_en}</a>
							</li>
						{/each}
						<li class="sm:inline-block">
							<a href="/posts" class="p-3 hover:text-red-900">posts</a>
						</li>
						<li class="sm:inline-block">
							<a href="/gallery" class="p-3 hover:text-red-900">gallery</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<main class="py-5 mb-auto">
		<slot />
	</main>
	<footer id="footer" class=" h-30 mt-5 bg-black shadow-lg text-white">
		<div class="grid grid-cols-3 py-5 px-10 ">
			<div class=""><a href="/contact">Contact Us</a></div>
			<div class="" />
			<div class="text-right">Copyright &copy; 2021 Dichori. All Rights Reserved.</div>
		</div>
	</footer>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
