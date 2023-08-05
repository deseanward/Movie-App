import React, { useState, useContext } from 'react';
import { MovieContext } from '../../store/context/movies.context';
import { MovieFormContainer, Form, Button, Input } from './movie-form.styles';

const MovieForm = () => {
	const { setSearchTerm } = useContext(MovieContext);
	const defaultFormData = {
		searchTerm: '',
	};

	const [formData, setFormData] = useState(defaultFormData);

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleKeyDown = e => {
		console.log(e);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setFormData(defaultFormData);

		setSearchTerm(formData.searchTerm);
	};

	return (
		<MovieFormContainer>
			<Form onSubmit={handleSubmit}>
				<Input
					type='text'
					name='searchTerm'
					onChange={handleChange}
					onKeydown={handleKeyDown}
					value={formData.searchTerm}
				/>
				<Button type='submit' value='Submit' />
			</Form>
		</MovieFormContainer>
	);
};

export default MovieForm;
