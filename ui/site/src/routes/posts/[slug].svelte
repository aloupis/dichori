<script context="module">
	export async function load(ctx) {
		let slug = ctx.page.params.slug;

		const url = '/query/post.json';
		const res = await ctx.fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: slug
			})
		});

		const data = await res.json();

		if (res.ok) {
			return {
				props: { post: data.post, slug }
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

	export let post;
</script>

<h1>{slug}</h1>
<h2>{post.title_en}</h2>
<p>{post.content_en}</p>
