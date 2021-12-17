<script>
	import PostCard from './PostCard.svelte';
	import postStore from '$lib/stores/posts';
</script>

<div class="py-5 px-10 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
	<div class="col-span-3">
		<p>Here are our posts:</p>
	</div>
	<div class="text-right">
		<label class="block text-left">
			<select class="form-select block w-full mt-1">
				<option>Order by date (descending)</option>
				<option>Order by date (ascending)</option>
				<option>Order by title (descending)</option>
				<option>Order by title (ascending)</option>
			</select>
		</label>
	</div>
</div>
<div
	class="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
>
	{#each $postStore as post}
		<PostCard {post} />
	{/each}
</div>
