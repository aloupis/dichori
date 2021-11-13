<script>
	export let posts;
	const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s
</script>

<div class="p-5 rounded border border-green-900 bg-gray-50">
	<h3 class="text-green-900">Latest posts</h3>
	{#each posts as post}
		<div class="my-5 shadow-lg ">
			<a href={`/posts/${post.id}`}>
				<img
					class="h-32 w-full object-cover"
					src={`${baseCloudinaryUrl}/${post.image_public_id}`}
					alt={post.title_en}
				/>
				<div class="p-5">
					<div class="text-green-900 font-light">{post.title_en}</div>
					<div class="">{post.summary_en}</div>
				</div>
			</a>
		</div>
	{/each}
</div>
