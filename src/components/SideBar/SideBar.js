import React from "react";
import styles from "./styles.module.css";
import ContainerCards from "../ContainerCards/ContainerCards";

const SideBar = () => {
	return (
		<>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Peliculas de calidad</h4>
				<div className={styles.area_content}>
					<p className={styles.text_area}>
						<span className={styles.color}>TheCorn </span>Online movies in
						excellent quality Bluray 4K, 2160p, Full HD 1080p, Latin audio, free,
						without registration and all the information.
					</p>
				</div>
			</div>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Peliculas Destacadas</h4>
				<div className={`${styles.area_content} ${styles.cont_Movies}`}>
					<ContainerCards movieDetails={false} rating={true} />
				</div>
			</div>
		</>
	);
};

export default SideBar;
