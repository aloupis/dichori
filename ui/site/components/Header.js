
import Link from 'next/link'

export default function Header({ items }) {
  return (
	<nav className="bg-green-900 shadow-lg">
		<div className="container mx-auto">
			<div className="flex">
				<Link href="/" className="text-white text-3xl font-bold p-3">APP LOGO</Link>
				<div className="ml-55 mt-4">
					<ul className="text-white self-center text-xl">
						{(items||[]).map(item =>					
						<li  key={item.id} className="px-5 inline-block">
								<Link href={`/pages/${item.url}`} className="p-3 hover:text-red-900">{item.name_en}</Link>
							</li>)}
		
						<li className="px-5 inline-block">
							<Link href="/posts" className="p-3 hover:text-red-900">posts</Link>
						</li>
						<li className="px-5 inline-block">
							<Link href="/gallery" className="p-3 hover:text-red-900">gallery</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

  )
}