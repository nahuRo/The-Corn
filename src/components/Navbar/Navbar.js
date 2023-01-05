import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<ul className={styles.links}>
			<li>
				<Link to={`/category/comedy`}>Comendy</Link>
			</li>
			<li>
				<Link to={`/category/Horror`}>Horror</Link>
			</li>
			<li>
				<Link to={`/category/Romance`}>Romance</Link>
			</li>
			<li>
				<Link to={`/category/Action`}>Action</Link>
			</li>
			<li>
				<Link to={`/category/Thriller`}>Thriller</Link>
			</li>
			<li>
				<Link to={`/category/Drama`}>Drama</Link>
			</li>
			<li>
				<Link to={`/category/Mystery`}>Mystery</Link>
			</li>
			<li>
				<Link to={`/category/Animation`}>Animation</Link>
			</li>
			<li>
				<Link to={`/category/Adventure`}>Adventure</Link>
			</li>
			<li>
				<Link to={`/category/Sci-Fi`}>Sci-Fi</Link>
			</li>
		</ul>
	);
};

export default Navbar;
