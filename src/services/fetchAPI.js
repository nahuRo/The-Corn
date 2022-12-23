import axios from "axios";

export const getMovies = async () => {
	const { data } = await axios.get(
		"https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=12"
	);
	return data;
};
