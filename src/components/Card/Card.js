import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Card = ({ movie, movieDetails }) => {
	if (!movieDetails) {
		return (
			<div className={styles.card_noDetails}>
				<Link to={`/movie/${movie.imdb_code}`}></Link>
				<img src={movie.large_cover_image} alt={movie.title} className={styles.img} />
			</div>
		);
	}

	return (
		<div className={styles.card}>
			<Link to={`/movie/${movie.imdb_code}`}></Link>
			<img src={movie.large_cover_image} alt={movie.title} className={styles.img} />
			<span className={`${styles.box_absolute} ${styles.box_year}`}>{movie.year}</span>
			<span className={`${styles.box_absolute} ${styles.box_rate}`}>{movie.rating}</span>
			<div className={styles.details}>
				<span className={styles.title}>{movie.title}</span>
				<p className={styles.synopsis}>{movie.synopsis.slice(0, 540)} ...</p>
			</div>
		</div>
	);
};

export default Card;
