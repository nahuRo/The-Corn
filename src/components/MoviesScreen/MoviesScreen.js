import React from "react";
import styles from "./styles.module.css";

import ContainerCards from "../ContainerCards/ContainerCards";
import PageButtons from "../PageButtons/PageButtons";
import SideBar from "../SideBar/SideBar";

const MoviesScreen = () => {
	return (
		<>
			<div className={styles.contData}>
				<div className={styles.cont_cards}>
					<ContainerCards movieDetails={true} rating={false} />
				</div>
				<div className={styles.cont_sidebar}>
					<SideBar />
				</div>
			</div>
			<div className={styles.cont_pagButtons}>
				<PageButtons />
			</div>
		</>
	);
};

export default MoviesScreen;
