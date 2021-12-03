import { gql } from '@apollo/client/core/core.cjs.js';
import { client } from '../../lib/Client';

export const post = async () => {
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
				footer: JSON.parse(result.data.settings.footer_menu_config),
				homeTitleGr: result.data.settings.home_title_gr,
				homeTitleEn: result.data.settings.home_title_en,
				homeContentGr: result.data.settings.home_content_gr,
				homeContentEn: result.data.settings.home_content_en,
				homeImage: result.data.settings.home_image_public_id
			}
		};
	} catch (err) {
		console.log({err})
		return {
			status: 500,
			error: 'Error retrieving data'
		};
	}
};
