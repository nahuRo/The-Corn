import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import NavBar from "../Navbar/Navbar";
import Search from "../Search/Search";

import popCorn from "../../assets/popCorn.png";

import { TiThLargeOutline } from "react-icons/ti";

const Header = () => {
	const [active, setActive] = useState(false);

	const handleNavResponse = () => {
		console.log("click");
		setActive(!active);
	};

	return (
		<div className={styles.container}>
			<div className={styles.nav_menu}>
				<div className={styles.cont_brand}>
					<Link className={styles.link} to={`/`}></Link>
					<h3>The Corn</h3>
					<img src={popCorn} alt="logo" />
				</div>
				<div className={styles.cont_menuIcon}>
					<TiThLargeOutline
						onClick={handleNavResponse}
						className={styles.svg_bars}
					/>
				</div>
			</div>

			<img
				src={popCorn}
				alt="logo"
				className={active ? styles.img_backg : styles.none}
			/>

			<div className={styles.cont_top}>
				<div>
					<Link className={styles.link} to={`/`}></Link>
					<img src={popCorn} alt="logo" />
					<h1 className={styles.tittleBrand}>TheCorn</h1>
				</div>
			</div>

			<div className={`${styles.cont_navigation} ${active ? styles.active : ""}`}>
				<div className={styles.cont_navBar}>
					<NavBar />
				</div>
				<div className={styles.cont_search}>
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Header;
