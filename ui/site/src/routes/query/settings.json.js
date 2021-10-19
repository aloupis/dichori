import { gql } from '@apollo/client/core/core.cjs.js';
// import { client } from '$lib/utilities/apolloClient.js';
import { client } from '../../lib/Client';

export const post = async () => {
	console.log('in server test.json');
	try {
		const query = gql`
			query SETTINGS_QUERY {
				settings {
					header_menu_config
					footer_menu_config
					home_title_gr
					home_title_en
					home_content_gr
					home_content_en
					home_image_public_id
				}
			}
		`;

		const result = await client.query({
			query
		});

		return {
			status: 200,
			body: {
				header: JSON.parse(result.data.settings.header_menu_config),
				footer: JSON.parse(result.data.settings.footer_menu_config)
			}
		};
	} catch (err) {
		return {
			status: 500,
			error: 'Error retrieving data'
		};
	}
};
