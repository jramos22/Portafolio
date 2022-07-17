export default async function CallApi(URl, TOKEN, query) {
	const response = await fetch(URl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({
			query: query,
		}),
	});
	const ResponseApi = await response.json();
	return ResponseApi;
}
