import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import styles from "./styles.module.css";

import { getMovies } from "../../services/fetchAPI";

const PageButtons = () => {
	// const { nameCategory, movieName, numberPage } = useParams();
	const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	// useEffect(() => {
	// 	getMovies(movieName, numberPage, nameCategory).then((resp) => {
	// 		const { data } = resp;
	// 		console.log(data.movie_count / 12);
	// 		// setPages(data.movie_count / 12);
	// 	});
	// }, [nameCategory, movieName, numberPage]);

	const handlePaginationPrev = (list) => {
		if (!list.includes(1)) {
			const newPagination = list.map((exp) => exp - 10);

			setPages([...newPagination]);
		}
	};

	const handlePaginationPost = (list) => {
		const newPagination = list.map((exp) => exp + 10);

		setPages([...newPagination]);
	};

	let pageButtonActive = {
		color: "#000",
		fontWeight: "bold",
		border: "1px solid #f26e66",
	};

	return (
		<div className={styles.container}>
			<button className={styles.pageButton} onClick={() => handlePaginationPrev(pages)}>
				&laquo;
			</button>

			{pages.map((page) => (
				<NavLink
					key={page}
					className={styles.pageButton}
					to={`/page/${page}`}
					style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
				>
					{page}
				</NavLink>
			))}

			<button className={styles.pageButton} onClick={() => handlePaginationPost(pages)}>
				&raquo;
			</button>
		</div>
	);
};

export default PageButtons;
