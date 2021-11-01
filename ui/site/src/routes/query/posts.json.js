import { gql } from '@apollo/client/core/core.cjs.js';
import { client } from '../../lib/Client';

export const post = async (request) => {
	const { offset, limit, orderBy } = request.body;

	try {
		const query = gql`
			query POSTS_QUERY($offset: Int!, $limit: Int!, $orderBy: OrderBy) {
				posts(offset: $offset, limit: $limit, orderBy: $orderBy) {
					id
					title_en
					title_gr
					summary_en
					summary_gr
					image_public_id
					created_at
					updated_at
					author {
						id
						username
					}
				}
				posts_count
			}
		`;
		const result = await client.query({
			query,
			variables: { offset: +offset, limit: +limit, orderBy }
		});

		return {
			status: 200,
			body: {
				posts: result.data.posts,
				posts_count: result.data.posts_count
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
