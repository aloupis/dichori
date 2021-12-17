<script>
	import { flip } from 'svelte/animate';
	export let transitionSpeed = 500;
	export let images;
	const rotateLeft = (e) => {
		const transitioningImage = images[images.length - 1];
		document.getElementById(transitioningImage.public_id).style.opacity = 0;
		images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
		setTimeout(() => {
			document.getElementById(transitioningImage.public_id).style.opacity = 1;
		}, transitionSpeed);
	};

	const rotateRight = (e) => {
		const transitioningImage = images[0];
		document.getElementById(transitioningImage.public_id).style.opacity = 0;
		images = [...images.slice(1, images.length), images[0]];
		setTimeout(() => {
			document.getElementById(transitioningImage.public_id).style.opacity = 1;
		}, transitionSpeed);
	};
</script>

<div class="flex flex-col overflow-hidden">
	<div id="carousel-images" class="flex flex-nowrap justify-center">
		{#each images as image (image.public_id)}
			<img
				class="w-full h-80 object-cover"
				src={image.url}
				alt={image.public_id}
				id={image.public_id}
				animate:flip={{ duration: transitionSpeed }}
				loading="lazy"
			/>
		{/each}
	</div>
	<button
		class="left-10 absolute top-1/2 flex justify-center text-center border-opacity-0"
		on:click={rotateLeft}
	>
		<slot name="left-control">Left</slot>
	</button>
	<button
		class="right-10 absolute top-1/2 flex justify-center text-center border-opacity-0"
		on:click={rotateRight}
	>
		<slot name="right-control">Right</slot>
	</button>
</div>

<style>
	#carousel-images {
		-webkit-mask: linear-gradient(to right, transparent, black 20%, black 70%, transparent);
		mask: linear-gradient(to right, transparent, black 20%, black 70%, transparent);
	}
</style>
