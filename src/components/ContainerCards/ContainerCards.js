import { useState, useEffect } from "react";
import { getMovies, bestIMSDRating } from "../../services/fetchAPI";
import { useParams } from "react-router-dom";

import Card from "../Card/Card";

const ContainerCards = ({ movieDetails, rating }) => {
	const { nameCategory, movieName, numberPage } = useParams();
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (rating) {
			console.log(rating);
			bestIMSDRating(9).then((resp) => {
				const { data } = resp;
				setMovies(data.movies);
			});
		} else {
			getMovies(movieName, numberPage, nameCategory).then((resp) => {
				const { data } = resp;
				setMovies(data.movies);
			});
		}
	}, [nameCategory, movieName, numberPage, rating]);

	if (!movies) {
		return <div>NOT MOVIE</div>;
	}

	return (
		<>
			{movies.map((movie) => (
				<Card movie={movie} key={movie.id} movieDetails={movieDetails} />
			))}
		</>
	);
};

export default ContainerCards;
