import { useState, useEffect } from "react";
import { getMovies } from "../../services/fetchAPI";
import Card from "../Card/Card";
import styles from "./styles.module.css";

const ContainerCards = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies().then((resp) => {
			const { data } = resp;
			console.log(data);
			setMovies(data.movies);
		});
	}, []);

	if (movies.length === 0) {
		return <div>Loading...</div>;
	}

	console.log(movies);

	return (
		<div className={styles.container}>
			{movies.map((movie) => (
				<Card movie={movie} />
			))}
		</div>
	);
};

export default ContainerCards;
