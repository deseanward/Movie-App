import React, { useState, useEffect, useContext } from 'react';

import { MovieContext } from '../../store/context/movies.context';
import { MovieDisplayContainer } from './movie-display.styles';

const MovieDisplay = () => {
	const { movie } = useContext(MovieContext);
	const [myMovie, setMyMovie] = useState(null);

	useEffect(() => {
		try {
			// If the movie request is not null and doesn't return an error, set the movie to display
			movie && !movie[0].Error
				? setMyMovie(movie[0])
				: console.log('No movie returned');
		} catch (error) {
			console.log('An error occurred. ', error);
		}
	}, [movie]);

	// If the movie has loaded
	const loaded = () => {
		return (
			<MovieDisplayContainer>
				<h1>{myMovie.Title}</h1>
				<h2>{myMovie.Genre}</h2>
				<hr />
				<img src={myMovie.Poster} alt={myMovie.Title} />
				<h2>{myMovie.Year}</h2>
			</MovieDisplayContainer>
		);
	};

	// If the movie is still loading
	const loading = () => {
		return <h1>No Movie to Display</h1>;
	};

	return myMovie ? loaded() : loading();
};

export default MovieDisplay;
