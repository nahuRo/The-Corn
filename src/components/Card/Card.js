import React from "react";
import styles from "./styles.module.css";

const Card = ({ movie }) => {
	return (
		<div className={styles.card}>
			<div className={`${styles.absolute_pos0} ${styles.cont_img}`}>
				<img src={movie.large_cover_image} alt={movie.title} className={styles.img} />
				<span className={`${styles.box_absolute} ${styles.box_year}`}>
					{movie.year}
				</span>
				<span className={`${styles.box_absolute} ${styles.box_rate}`}>
					{movie.rating}
				</span>
			</div>
			<div className={`${styles.absolute_pos0} ${styles.details}`}>
				<span className={styles.title}>{movie.title}</span>
				{/* <p className={styles.synopsis}>{movie.synopsis.slice(0, 200)}</p> */}
				<p className={styles.synopsis}>{movie.synopsis}</p>
			</div>
		</div>
	);
};

export default Card;
