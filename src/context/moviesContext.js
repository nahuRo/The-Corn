import { createContext, useState } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
	const [genre, setGenre] = useState([]);

	return (
		<MoviesContext.Provider value={(setGenre, genre)}>{children}</MoviesContext.Provider>
	);
};
