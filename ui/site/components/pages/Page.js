const baseCloudinaryUrl = 'https://res.cloudinary.com/devaloupis/image/upload/v1624560792'; ///process.env.REACT_APP_CLOUDINARY_BASE_URL;s
import LatestPosts from '../posts/LatestPosts';

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
    <LatestPosts posts={page.latestPosts} />
</div>
</div>

}
