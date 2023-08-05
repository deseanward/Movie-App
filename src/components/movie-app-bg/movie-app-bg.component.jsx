import React, { useContext } from 'react';
import { MovieTitleBG, MovieBG } from './movie-app-bg.styles';

import { MovieContext } from '../../store/context/movies.context';

const MovieAppBG = () => {
	const { movie } = useContext(MovieContext);

	return (
		<>
			{movie ? (
				<MovieBG>
					<img src={movie[0].Poster} alt={movie[0].Title} />
				</MovieBG>
			) : (
				<h2>Loading Movie...</h2>
			)}
		</>
	);
};

export default MovieAppBG;
