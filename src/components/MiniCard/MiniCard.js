import React from "react";
import styles from "./styles.module.css";

import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const MiniCard = ({ movie }) => {
	return (
		<div className={styles.container}>
			<Link to={`/movie/${movie.imdb_code}`}></Link>
			<img src={movie.medium_cover_image} alt={movie.title} />
			<div className={styles.cont_title}>
				<span className={styles.title}>{movie.title}</span>
			</div>
			<div className={styles.boxes}>
				<span className={styles.box_year}>{movie.year}</span>
				<div className={styles.cont_boxStart}>
					<FaStar className={styles.icon} />
					<span className={styles.box_rate}>{movie.rating}</span>
				</div>
			</div>
		</div>
	);
};

export default MiniCard;
