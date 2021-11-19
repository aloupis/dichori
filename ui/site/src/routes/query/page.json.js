import { gql } from '@apollo/client/core/core.cjs.js';
import { client } from '../../lib/Client';

export const post = async (request) => {
	const { url } = request.body;
	try {
		const query = gql`
			query PAGES_QUERY {
				pages(offset: 0, limit: 10, orderBy: { field: "page.id", direction: "desc" }) {
					id
					title_en
					title_gr
					content_en
					content_gr
					url
					image_public_id
					created_at
					updated_at
					author {
						id
						username
					}
				}
				pages_count
				posts(offset: 0, limit: 3, orderBy: { field: "created_at", direction: "desc" }) {
					id
					title_en
					title_gr
					summary_en
					summary_gr
					image_public_id
				}
			}
		`;

		const result = await client.query({
			query
		});

		if (result.data.pages.every((x) => x.url !== url)) {
			return {
				status: 404,
				error: 'Page not found'
			};
		}
		return {
			status: 200,
			body: {
				page: result.data.pages.find((x) => x.url === url),
				latestPosts: result.data.posts
			}
		};
	} catch (err) {
		return {
			status: 500,
			error: 'Error retrieving data'
		};
	}
};
