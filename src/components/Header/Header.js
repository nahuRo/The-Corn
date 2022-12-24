import React from "react";
import styles from "./styles.module.css";

import NavBar from "../Navbar/Navbar";
import Search from "../Search/Search";

import popCorn from "../../assets/popCorn.png";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cont_top}>
				<div className={styles.box}>
					<p>Películas en excelente calidad Full HD.</p>
					<p>Audio latino e inglés online.</p>
					<p>1 link, 1 click.</p>
				</div>
				<div className={styles.cont_img}>
					<img src={popCorn} alt="logo" />
				</div>
				<div className={`${styles.box} ${styles.text_end}`}>
					{/* PARA PONER 2 PROPIEDADES MODULE CONCATENO LOS 2 STRING, EN ESTE CASO USE TEMPLATE STRINGS ``*/}
					<a className={styles.link} href="#s">
						Ir a TheCorn.is
					</a>
				</div>
			</div>
			<div className={styles.cont_nav}>
				<NavBar />
				<Search />
			</div>
		</div>
	);
};

export default Header;
