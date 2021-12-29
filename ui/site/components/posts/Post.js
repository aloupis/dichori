import { fromUnixTime, format } from 'date-fns';
import Link from 'next/link'

const baseCloudinaryUrl = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || 'https://dichori-media.herokuapp.com'; 
export default function Post({post}) {
    console.log({post})
return <div className="py-5 px-10 grid grid-cols-8 gap-16">
<div
    className="col-span-6 big-desktop:col-span-6 desktop:col-span-6 tablet:col-span-8 phone:col-span-8"
>
    <div className="text-green-900 italic font-semibold text-xs text-left">
        {format(fromUnixTime(post.created_at / 1000), 'dd/MM/yyyy')}
    </div>
    <h1 className="pb-5">{post.title_en}</h1>
    <img
        className="h-80 w-full object-cover"
        src={`${baseCloudinaryUrl}/${post.image_public_id}`}
        alt={post.title_en}
    />
    <div className="py-2">
        <div className="text-green-900 italic text-xs text-right">
            by {post.author.username}
        </div>
    </div>
    <div>{ post.content_en}</div>
</div>
<div
    className="col-span-2 big-desktop:col-span-2 desktop:col-span-2 tablet:col-span-8 phone:col-span-8"
>
    {/* <LatestPosts posts={post.latestPosts} /> */}
    <div className="p-5 rounded border border-green-900 bg-gray-50">
	<h3 className="text-green-900">Latest posts</h3>
	{post.latestPosts.map((p)=>
     <Link key={post.id}  href={`/posts/${p.id}`}> 
		<div key={p.id} className="my-5 shadow-lg ">
			
				<img
					className="h-32 w-full object-cover"
					src={`${baseCloudinaryUrl}/${p.image_public_id}`}
					alt={p.title_en}
				/>
				<div className="p-5">
					<div className="text-green-900 font-light">{p.title_en}</div>
					<div className="">{p.summary_en}</div>
				</div>
			 
		</div>
        </Link> 
    )}
</div>
</div>
</div>

}
