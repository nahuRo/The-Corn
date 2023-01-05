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
			<h5>You may be interested in these other movies</h5>
			<div className={styles.container}>
				{suggestion.map((info) => (
					<MiniCard key={info.id} movie={info} />
				))}
			</div>
		</>
	);
};

export default SuggestionsMovie;
