import { useEffect, useState } from "react";
import { movieSuggest } from "../../services/fetchAPI";

import styles from "./styles.module.css";

import MiniCard from "../MiniCard/MiniCard";

const SuggestionsMovie = ({ id }) => {
	const [suggestion, setSuggestion] = useState([]);

	useEffect(() => {
		if (id) {
			movieSuggest(id).then((resp) => {
				const { data } = resp;
				setSuggestion(data.movies);
			});
		}
	}, [id]);

	return (
		<>
			<h3>You may be interested in these other movies</h3>
			<span className={styles.marketLine}></span>
			<div className={styles.container}>
				{suggestion.map((info) => (
					<MiniCard key={info.id} movie={info} />
				))}
			</div>
		</>
	);
};

export default SuggestionsMovie;
