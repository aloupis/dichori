<script>
	import fromUnixTime from 'date-fns/fromUnixTime';
	import { format } from 'date-fns';
	export let post;
	const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s
</script>

<div class="rounded overflow-hidden shadow-lg bg-gray-50">
	<a href={`/posts/${post.id}`}>
		<img
			class="h-48 w-full object-cover"
			src={`${baseCloudinaryUrl}/${post.image_public_id}`}
			alt={post.title_en}
		/>
		<div class="cursor-pointer px-6 py-4 ">
			<div class="mt-4 uppercase text-green-900 italic font-semibold text-xs">
				{format(fromUnixTime(post.created_at / 1000), 'dd/MM/yyyy')}
			</div>
			<div class="font-bold text-xl mb-2">{post.title_en}</div>
			<p class="text-gray-700 text-base">
				{post.summary_en}
			</p>
		</div>
	</a>
</div>
