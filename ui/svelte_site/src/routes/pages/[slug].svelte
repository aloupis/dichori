<script context="module">
	export async function load(ctx) {
		let slug = ctx.page.params.slug;
		const url = '/query/page.json';
		const res = await ctx.fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				url: slug
			})
		});

		const data = await res.json();

		if (res.ok) {
			return {
				props: { page: data.page, latestPosts: data.latestPosts }
			};
		}

		return {
			status: res.status,
			error: new Error(`Couldn't load ${url}`)
		};
	}
</script>

<script>
	import LatestPosts from '../common/LatestPosts.svelte';
	export let page;
	export let latestPosts;
	const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s
</script>

<div class="py-5 px-10 grid grid-cols-8 gap-16">
	<div
		class="col-span-6 big-desktop:col-span-6 desktop:col-span-6 tablet:col-span-8 phone:col-span-8"
	>
		<h1 class="pb-5">{page.title_en}</h1>
		<img
			class="h-80 pb-5 w-full object-cover"
			src={`${baseCloudinaryUrl}/${page.image_public_id}`}
			alt={page.title_en}
		/>
		{@html page.content_en}
	</div>
	<div
		class="col-span-2 big-desktop:col-span-2 desktop:col-span-2 tablet:col-span-8 phone:col-span-8"
	>
		<LatestPosts posts={latestPosts} />
	</div>
</div>
