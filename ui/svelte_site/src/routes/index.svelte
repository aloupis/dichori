<script>
	import { getContext } from 'svelte';
	import { listAssets } from '../lib/services/asset';
	import Carousel from './Carousel.svelte';
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	export const data = getContext('settings');
</script>

<h1 class="p-5 text-center">{data.homeTitleEn}</h1>
{#await listAssets('home')}
	<div class="flex flex-col overflow-hidden w-full h-80 " />
{:then images}
	<Carousel images={JSON.parse(images.data)}>
		<span slot="left-control"><ChevronLeftIcon size="20" /></span>
		<span slot="right-control"><ChevronRightIcon size="20" /></span>
	</Carousel>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
<div class="p-10">
	{@html data.homeContentEn}
</div>
