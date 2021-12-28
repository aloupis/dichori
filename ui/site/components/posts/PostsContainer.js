import PostCard from './PostCard'
export default function PostsContainer({posts}) {
return <>
<div className="py-5 px-10 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
	<div className="col-span-3">
		<p>Here are our posts:</p>
	</div>
	<div className="text-right">
		<label className="block text-left">
			<select className="form-select block w-full mt-1">
				<option>Order by date (descending)</option>
				<option>Order by date (ascending)</option>
				<option>Order by title (descending)</option>
				<option>Order by title (ascending)</option>
			</select>
		</label>
	</div>
</div>
<div
	className="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
>
{posts.map((post)=><PostCard key={post.id} post={post} />)}
</div>
</>
}