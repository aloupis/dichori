<script context="module">
	import postStore from '$lib/stores/posts';

	export async function load(ctx) {
		const url = '/query/posts.json';

		const res = await ctx.fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				offset: 0,
				limit: 6 //initial posts
			})
		});

		const data = await res.json();
		if (res.ok) {
			postStore.set([...data.posts]); // fill store
			return {
				props: { posts: data.posts, total: data.posts_count }
			};
		}

		return {
			status: res.status,
			error: new Error(`Couldn't load ${url}`)
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import PostsContainer from './PostsContainer.svelte';
	export let total;

	let limit = 6;
	function morePostsAvailable() {
		return $postStore.length < total;
	}
	onMount(() => {
		if (browser && document.getElementById('footer')) {
			const handleIntersect = (entries, observer) => {
				entries.forEach((entry) => {
					if (!morePostsAvailable()) {
						observer.unobserve(entry.target);
					}
					showMorePosts();
				});
			};
			const options = { threshold: 0.25, rootMargin: '-100% 0% 100%' };
			const observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(document.getElementById('footer').lastElementChild);
		}
	});
	$: showMorePosts;
	async function showMorePosts() {
		const url = '/query/posts.json';

		try {
			const response = await fetch(url, {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					offset: limit,
					limit: 3
				})
			});
			const newData = await response.json();
			postStore.set([...$postStore, ...newData.posts]);
			limit = limit + 3;
		} catch (error) {
			console.log({ error });
		}
	}
</script>

<h1 class="px-10 py-5 text-2xl"><b>Posts</b></h1>
<PostsContainer />
