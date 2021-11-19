<script>
	import { getContext } from 'svelte';
	export const data = getContext('settings');
	const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s
</script>

<img
	class="h-80 w-full object-cover"
	src={`${baseCloudinaryUrl}/${data.homeImage}`}
	alt={data.homeTitleEn}
/>
<div class="p-10">
	<h1>{data.homeTitleEn}</h1>
	{@html data.homeContentEn}
</div>
