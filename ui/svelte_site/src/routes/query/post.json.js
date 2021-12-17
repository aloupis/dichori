import { gql } from '@apollo/client/core/core.cjs.js';
import { client } from '../../lib/Client';

export const post = async (request) => {
	const { id } = request.body;
	try {
		const query = gql`
			query POSTS_QUERY($id: Int!) {
				post_by_pk(id: $id) {
					id
					title_en
					content_en
					title_gr
					summary_en
					summary_gr
					content_gr
					created_at
					updated_at
					image_public_id
					author {
						id
						username
					}
				}
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
			query,
			variables: {
				id: +id
			}
		});

		return {
			status: 200,
			body: {
				post: result.data.post_by_pk,
				latestPosts: result.data.posts
			}
		};
	} catch (err) {
		console.log({ err });
		return {
			status: 500,
			error: 'Error retrieving data'
		};
	}
};
