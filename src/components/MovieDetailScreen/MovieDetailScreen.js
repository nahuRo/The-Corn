import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie, OMDBInfo } from "../../services/fetchAPI";
import styles from "./styles.module.css";

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

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{detail.title_long}</h1>
			<div className={styles.sectionImg}>
				<div className={styles.cont_img}>
					<img src={detail.large_cover_image} alt={detail.title} />
				</div>
				<div className={styles.resume_info}>
					<p>
						{detail.description_full === ""
							? moreDetail.Plot
							: detail.description_full}
					</p>
					<ul>
						<li>
							<span className={styles.subTitle}>Title </span>
							{detail.title}
						</li>
						<li>
							<span className={styles.subTitle}>Rating </span>
							{detail.rating}
						</li>
						<li>
							<span className={styles.subTitle}>Released </span>
							{moreDetail.Released || detail.date_uploaded}
						</li>
						<li>
							<span className={styles.subTitle}>Director </span>
							{moreDetail.Director || "N/A"}
						</li>
						<li>
							<span className={styles.subTitle}>Genders </span>
							{moreDetail.Genre ||
								(detail.genres && detail.genres.map((genre) => genre))}
						</li>
						<li>
							<span className={styles.subTitle}>Cast </span>
							{moreDetail.Actors || "N/A"}
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
