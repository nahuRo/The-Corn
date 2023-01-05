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
						<span className={styles.color}>TheCorn </span>Películas online en
						excelente calidad Bluray 4K 2160p, Full HD 1080p, audio latino, gratis,
						sin registro y toda la información.
					</p>
				</div>
			</div>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Peliculas Destacadas</h4>
				<div className={`${styles.area_content} ${styles.cont_Movies}`}>
					<ContainerCards movieDetails={false} rating={true} />
				</div>
			</div>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Herramientas</h4>
				<div className={styles.area_content}>
					<ul>
						<li>
							<a href="#a">Como descargar películas</a>{" "}
						</li>
						<li>
							<a href="#a">Reproductores para tus películas</a>
						</li>
						<li>
							<a href="#a">Gestores de descarga gratis</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default SideBar;
