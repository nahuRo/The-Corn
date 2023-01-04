import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie, OMDBInfo } from "../../services/fetchAPI";
import styles from "./styles.module.css";

// import { UilFolderInfo } from "@iconscout/react-unicons";

import SuggestionsMovie from "../SuggestionsMovie/SuggestionsMovie";

const MovieDetailScreen = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState([]);
	const [moreDetail, setMoreDetail] = useState([]);

	useEffect(() => {
		getMovie(id).then((resp) => {
			const { data } = resp;
			setDetail(data.movie);
		});

		OMDBInfo(id).then((resp) => {
			setMoreDetail(resp);
		});
	}, [id]);

	// console.log(detail);
	// console.log(moreDetail);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				{detail.title_english}
				<span> ({detail.year})</span>
			</h1>
			<div className={styles.sectionImg}>
				<div className={styles.cont_img}>
					<img src={detail.large_cover_image} alt={detail.title} />
				</div>
				<div className={styles.resume_info}>
					<p>{detail.description_full}</p>
					<ul>
						<li>
							<span>Titulo Originial </span>
							{detail.title}
						</li>
						<li>
							<span>Director </span>
							{moreDetail.Director}
						</li>
						<li>
							<span>Generos </span>
							{detail.genres && detail.genres.map((genres) => genres)}
						</li>
						<li>
							<span>Actores </span>
							{moreDetail.Actors}
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.sectionMedia}>
				<iframe
					className={styles.iframe}
					src={`https://www.youtube.com/embed/${detail.yt_trailer_code}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div className={styles.sectionSuggestions}>
				<SuggestionsMovie id={detail.id} />
			</div>
		</div>
	);
};

export default MovieDetailScreen;
