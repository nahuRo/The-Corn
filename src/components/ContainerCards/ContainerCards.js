import { useState, useEffect } from "react";
import { getMovies } from "../../services/fetchAPI";
import { useParams } from "react-router-dom";

import Card from "../Card/Card";

const ContainerCards = ({ movieDetails }) => {
	const { nameCategory, movieName, numberPage } = useParams();
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies(movieName, numberPage, nameCategory).then((resp) => {
			const { data } = resp;
			setMovies(data.movies);
		});
	}, [nameCategory, movieName, numberPage]);

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
