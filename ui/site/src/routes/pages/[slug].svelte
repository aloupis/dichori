<script context="module">
	export async function load(ctx) {
		console.log('in slug svelte preload');
		//  slug is url make query to bring page with this url
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
				props: { page: data.page, slug }
			};
		}

		return {
			status: res.status,
			error: new Error(`Couldn't load ${url}`)
		};
	}
</script>

<script>
	export let slug;

	export let page;
</script>

<h1>{slug}</h1>
<h2>{page.title_en}</h2>
<p>{page.content_en}</p>
