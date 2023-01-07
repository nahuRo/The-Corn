import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
	return (
		<div className={styles.container}>
			<span className={styles.marketLine}></span>

			<div className={styles.cont_text}>
				<p>TheCorn, your site to see movie information</p>
				<p>
					with ♥️ <span> by </span>
					<a target="blank" href="https://nahuro.github.io/Portfolio/">
						Aguss 💻
					</a>
				</p>
			</div>

			<span className={styles.marketLine}></span>
		</div>
	);
};

export default Footer;
