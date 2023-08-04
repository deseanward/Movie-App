import { createContext, useEffect, useReducer, useState } from 'react';
import { movieReducer } from '../reducers/movies.reducer';

import { getMovie } from '../../api/movies.api';

export const MovieContext = createContext({
	setSearchTerm: () => {},
	movie: {},
	dispatch: () => {},
});

export const MovieProvider = ({ children }) => {
    // State to hold the search term from the form input
	const [searchTerm, setSearchTerm] = useState('godfather');

	const [movie, dispatch] = useReducer(movieReducer, null);

	const url = `https://www.omdbapi.com/?apikey=98e3fb1f&t=${searchTerm}`;

	const values = { setSearchTerm, movie, dispatch };

	useEffect(() => {
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
		<MovieContext.Provider value={values}>
			{children}
		</MovieContext.Provider>
	);
};
