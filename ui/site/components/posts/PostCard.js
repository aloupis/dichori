import { fromUnixTime, format } from 'date-fns';
const baseCloudinaryUrl = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || 'https://dichori-media.herokuapp.com'; 

export default function PostsContainer({post}) {
return <div className="rounded overflow-hidden shadow-lg bg-gray-50">
	<a href={`/posts/${post.id}`}>
		<img
			className="h-48 w-full object-cover"
			src={`${baseCloudinaryUrl}/${post.image_public_id}`}
			alt={post.title_en}
		/>
		<div className="cursor-pointer px-6 py-4 ">
			<div className="mt-4 uppercase text-green-900 italic font-semibold text-xs">
				{format(fromUnixTime(post.created_at / 1000), 'dd/MM/yyyy')}
			</div>
			<div className="font-bold text-xl mb-2">{post.title_en}</div>
			<p className="text-gray-700 text-base">
				{post.summary_en}
			</p>
		</div>
	</a>
</div>

}