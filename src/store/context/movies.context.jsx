import { createContext, useEffect, useReducer, useState } from 'react';
import { movieReducer } from '../reducers/movies.reducer';

import { getMovie } from '../../api/movies.api';

export const MovieContext = createContext({
	setSearchTerm: () => {},
	movie: null,
	dispatch: () => {},
	isLoading: true,
	setIsLoading: () => {}
});

export const MovieProvider = ({ children }) => {
	// State to hold the search term from the form input
	const [searchTerm, setSearchTerm] = useState('godfather');
	const [isLoading, setIsLoading] = useState(null)

	const [movie, dispatch] = useReducer(movieReducer, null);

	// The API key
	const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

	// Complete url with searchTerm
	const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;

	const values = { isLoading, setIsLoading, setSearchTerm, movie, dispatch };

	// Call to the API to retrieve a movie
	useEffect(() => {
		setIsLoading(true)
		const getTheMovie = async () => {
			try {
				const theMovie = await getMovie(url);

				dispatch({ type: 'GET_MOVIE', payload: theMovie });

			} catch (error) {
				console.log('Error getting movie: ', error);
			}
		};

		getTheMovie();
	}, [searchTerm]);

	return (
		<MovieContext.Provider value={values}>{children}</MovieContext.Provider>
	);
};
