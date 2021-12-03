import { gql } from '@apollo/client/core/core.cjs.js';

const PAGES_QUERY = gql`
	query PAGES_QUERY {
		pages(offset: 0, limit: 10, orderBy: { field: "page.id", direction: "desc" }) {
			id
			title_en
			title_gr
			content_en
			content_gr
			url
			created_at
			updated_at
			author {
				id
				username
			}
		}
		pages_count
	}
`;

export { PAGES_QUERY };
