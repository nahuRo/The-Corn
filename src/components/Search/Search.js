import React from "react";
import styles from "./styles.module.css";

const Search = () => {
	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<input type="text" placeholder="... Search" className={styles.input} />
			</form>
		</div>
	);
};

export default Search;
