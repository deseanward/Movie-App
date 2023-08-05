import React, { useState, useEffect, useContext } from 'react';

import { MovieContext } from '../../store/context/movies.context';
import {
	Image,
	MovieDisplayBG,
	MovieTitleBG,
	MovieDisplayContainer,
	Title,
} from './movie-display.styles';

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
			<MovieDisplayContainer className='self-start'>
				<MovieDisplayBG>
					<Title>{myMovie.Title}</Title>
					<h2>{myMovie.Genre}</h2>
					<hr className='mb-4' />
					<Image src={myMovie.Poster} alt={myMovie.Title} />
					<h2 className='text-2xl font-bold'>{myMovie.Year}</h2>
				</MovieDisplayBG>
				
				<MovieTitleBG>
					<span>{myMovie.Title}</span>
					<span className='self-center text-[14rem]'>{myMovie.Title}</span>
					<span className='self-end'>{myMovie.Title}</span>
				</MovieTitleBG>

			</MovieDisplayContainer>
		);
	};

	// If the movie is still loading
	const loading = () => {
		return <Title>No Movie to Display</Title>;
	};

	return myMovie ? loaded() : loading();
};

export default MovieDisplay;
