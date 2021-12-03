export const post = (request) => {
	console.log({ request });
	const firstname = request.body.get('firstname');
	const lastname = request.body.get('lastname');
	const email = request.body.get('email');
	const message = request.body.get('message');
	return {
		body: {
			firstname,
			lastname,
			email,
			message
		}
	};
};
