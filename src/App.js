import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import MoviesScreen from "./components/MoviesScreen/MoviesScreen";
import NotFoundScreen from "./components/NotFoundScreen/NotFoundScreen";
import MovieDetailScreen from "./components/MovieDetailScreen/MovieDetailScreen";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<MoviesScreen />} />
					<Route path="/category/:nameCategory" element={<MoviesScreen />} />
					<Route path="/search/:movieName" element={<MoviesScreen />} />
					<Route path="/page/:numberPage" element={<MoviesScreen />} />

					<Route path="/movie/:id" element={<MovieDetailScreen />} />

					<Route path="*" element={<NotFoundScreen />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
