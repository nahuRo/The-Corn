import { useState, useEffect } from "react";
import { getMovies, bestIMSDRating } from "../../services/fetchAPI";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

import Card from "../Card/Card";

const ContainerCards = ({ movieDetails, rating }) => {
	const { nameCategory, movieName, numberPage } = useParams();
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (rating) {
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
		return (
			<div className={styles.not_found}>
				<h1>Ups! movie not found</h1>
			</div>
		);
	}

	if (movies.length === 0) {
		return (
			<div className={styles.cont_load}>
				<span className={styles.loader}></span>
				<h3>Loading ...</h3>
			</div>
		);
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
