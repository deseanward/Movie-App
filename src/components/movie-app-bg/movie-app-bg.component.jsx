import React, { useState, useEffect, useContext } from 'react';
import { MovieBG, Title } from './movie-app-bg.styles';

import { MovieContext } from '../../store/context/movies.context';

const MovieAppBG = () => {
	const { movie, isLoading } = useContext(MovieContext);
	
	return (
		<>
			{movie && isLoading === false ? (
				<MovieBG>
					<img src={movie[0].Poster} alt={movie[0].Title} />
				</MovieBG>
			) : (
				<Title>Loading Movie...</Title>
			)}
		</>
	);
};

export default MovieAppBG;
