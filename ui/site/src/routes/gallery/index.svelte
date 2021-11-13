<script>
	import Gallery from 'svelte-image-gallery';
</script>

<Gallery gap="10" maxColumnWidth="200">
	<img src="https://via.placeholder.com/180x200/1" alt="" on:click={() => console.log('Yellow')} />
	<img src="https://via.placeholder.com/200x280/1" alt="" />
	<img src="https://via.placeholder.com/250x200/1" alt="" />
	<img src="https://via.placeholder.com/140x310/1" alt="" />
	<img src="https://via.placeholder.com/280x300/1" alt="" />
	<img src="https://via.placeholder.com/220x100/1" alt="" />
	<img src="https://via.placeholder.com/180x150/1" alt="" />
	<img src="https://via.placeholder.com/210x180/1" alt="" />
	<img src="https://via.placeholder.com/210x200/1" alt="" />
	<img src="https://via.placeholder.com/200x250/1" alt="" />
	<img src="https://via.placeholder.com/220x200/1" alt="" />
	<img src="https://via.placeholder.com/180x240/1" alt="" />
	<img src="https://via.placeholder.com/210x210/1" alt="" />
	<img src="https://via.placeholder.com/200x220/1" alt="" />
	<img src="https://via.placeholder.com/210x200/1" alt="" />
	<img src="https://via.placeholder.com/180x200/1" alt="" />
	<img src="https://via.placeholder.com/200x280/1" alt="" />
	<img src="https://via.placeholder.com/250x200/1" alt="" />
	<img src="https://via.placeholder.com/140x210/1" alt="" />
	<img src="https://via.placeholder.com/280x200/1" alt="" />
	<img src="https://via.placeholder.com/220x100/1" alt="" />
	<img src="https://via.placeholder.com/180x150/1" alt="" />
	<img src="https://via.placeholder.com/210x180/1" alt="" />
	<img src="https://via.placeholder.com/210x200/1" alt="" />
	<img src="https://via.placeholder.com/200x250/1" alt="" />
	<img src="https://via.placeholder.com/220x200/1" alt="" />
	<img src="https://via.placeholder.com/180x240/1" alt="" />
	<img src="https://via.placeholder.com/210x210/1" alt="" />
	<img src="https://via.placeholder.com/200x220/1" alt="" />
	<img src="https://via.placeholder.com/210x200/1" alt="" />
</Gallery>

<style>
	:global(img) {
		opacity: 0.9;
		transition: all 0.2s;
	}
	:global(img):hover {
		opacity: 1;
		transform: scale(1.04);
	}
</style>
