import React, { useState, useEffect, useContext } from 'react';
import { MovieTitleBG, MovieBG, Title } from './movie-app-bg.styles';

import { MovieContext } from '../../store/context/movies.context';

const MovieAppBG = () => {
	const { movie } = useContext(MovieContext);
	const [animate, setAnimate] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log('Animate: ', animate);
		try {
			movie
				? setAnimate(true)
				: setAnimate(false);
		} catch (error) {
			console.log('Error');
		}
		if (animate === true) setIsLoading(false);
	}, [movie]);

	// useEffect(() => {
	// 	isLoading === false
	// 		? setAnimate(false)
	// 		: console.log('Still animating? ', animate);
	// 	console.log('Animating now? ', animate);
	// 	console.log('Loading? ', isLoading);
	// }, [isLoading]);

	return (
		<>
			{movie ? (
				<MovieBG animate={animate}>
					<img src={movie[0].Poster} alt={movie[0].Title} />
				</MovieBG>
			) : (
				<Title>Loading Movie...</Title>
			)}
		</>
	);
};

export default MovieAppBG;
