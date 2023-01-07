import { useState } from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Search = () => {
	const navigate = useNavigate();

	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);

			setSearchTerm("");
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="... Search"
				className={styles.input}
				name="search"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button type="submit">
				<FiSearch className={styles.search_icon} />
			</button>
		</form>
	);
};

export default Search;
