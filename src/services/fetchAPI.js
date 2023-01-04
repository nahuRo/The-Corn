import axios from "axios";

export const getMovies = async (movieName = "", page = 1, genre = "Comedy") => {
	const { data } = await axios.get(
		`https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=12&page=${page}&genre=${genre}&order_by=desc&query_term=${movieName}`
	);
	return data;
};

export const getMovie = async (id) => {
	const { data } = await axios.get(
		`https://yts.mx/api/v2/movie_details.json?with_images=true&with_cast=true&imdb_id=${id}`
	);
	return data;
};

export const OMDBInfo = async (IMBD_code) => {
	const { data } = await axios.get(`http://www.omdbapi.com/?apikey=adb234ba&i=${IMBD_code}`);
	return data;
};

export const movieSuggest = async (id) => {
	const { data } = await axios.get(
		`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`
	);
	return data;
};
