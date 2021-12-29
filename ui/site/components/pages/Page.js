const baseCloudinaryUrl = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || 'https://res.cloudinary.com/dichori/image/upload/v1625418099/'
import Link from 'next/link'

export default function Page({page}) {
return <div className="py-5 px-10 grid grid-cols-8 gap-16">
<div
    className="col-span-6 big-desktop:col-span-6 desktop:col-span-6 tablet:col-span-8 phone:col-span-8"
>
    <h1 className="pb-5">{page.title_en}</h1>
    <img
        className="h-80 pb-5 w-full object-cover"
        src={`${baseCloudinaryUrl}/${page.image_public_id}`}
        alt={page.title_en}
    />
    {page.content_en}
</div>
<div
    className="col-span-2 big-desktop:col-span-2 desktop:col-span-2 tablet:col-span-8 phone:col-span-8"
>
        {/* <LatestPosts posts={post.latestPosts} /> */}
        <div className="p-5 rounded border border-green-900 bg-gray-50">
	<h3 className="text-green-900">Latest posts</h3>
	{page.latestPosts.map((p)=>
     <Link key={p.id}  href={`/posts/${p.id}`}> 
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
