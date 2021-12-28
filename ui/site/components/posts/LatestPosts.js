import Link from 'next/link'

const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s

export default function LatestPosts({posts}) {
return <><div className="p-5 rounded border border-green-900 bg-gray-50">
	<h3 className="text-green-900">Latest posts</h3>
	{posts.map((post)=>
		<div key={post.id} className="my-5 shadow-lg ">
			<Link key={post.id}  href={`/posts/${post.id}`}>
				<img
					className="h-32 w-full object-cover"
					src={`${baseCloudinaryUrl}/${post.image_public_id}`}
					alt={post.title_en}
				/>
				<div className="p-5">
					<div className="text-green-900 font-light">{post.title_en}</div>
					<div className="">{post.summary_en}</div>
				</div>
			</Link>
		</div>
    )}
</div>
</>
}

