export const getMovie = async (req, res) => {
	try {
		res = await fetch(req);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log('Error fetching movie: ', error);
	}
};
