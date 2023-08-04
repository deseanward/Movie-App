export const getMovie = async (req, res) => {
	try {
		res = await fetch(req);
		const data = await res.json();
		console.log(data)
		return data;
	} catch (error) {
		console.log('Error fetching movie: ', error);
	}
};
