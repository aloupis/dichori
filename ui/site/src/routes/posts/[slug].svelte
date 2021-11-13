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
				props: { post: data.post, latestPosts: data.latestPosts }
			};
		}

		return {
			status: res.status,
			error: new Error(`Couldn't load ${url}`)
		};
	}
</script>

<script>
	import fromUnixTime from 'date-fns/fromUnixTime';
	import { format } from 'date-fns';
	import LatestPosts from '../common/LatestPosts.svelte';
	export let post;
	export let latestPosts;
	const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s
</script>

<div class="py-5 px-10 grid grid-cols-8 gap-16">
	<div class="col-span-6">
		<div class="text-green-900 italic font-semibold text-xs text-left">
			{format(fromUnixTime(post.created_at / 1000), 'dd/MM/yyyy')}
		</div>
		<h1 class="pb-5">{post.title_en}</h1>
		<img
			class="h-80 w-full object-cover"
			src={`${baseCloudinaryUrl}/${post.image_public_id}`}
			alt={post.title_en}
		/>
		<div class="py-2">
			<div class="text-green-900 italic text-xs text-right">
				by {post.author.username}
			</div>
		</div>
		{@html post.content_en}
	</div>
	<div class="col-span-2">
		<LatestPosts posts={latestPosts} />
	</div>
</div>
