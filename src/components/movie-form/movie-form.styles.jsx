import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

export const MovieFormContainer = tw.div`
	shadow-lg shadow-gray-900
	p-4
	rounded-md
	text-gray-700
	bg-gray-400
	relative z-10
`;

export const Form = tw.form`
	flex justify-around items-center
	gap-1
`;

export const Input = tw.input`
	border border-gray-300 rounded-md
	outline-none
	p-1
`;

export const Button = tw.input`
	border border-gray-300 rounded-md
	outline-none
	p-1
	bg-white
	cursor-pointer
	hover:bg-gray-700 
	hover:text-white
	hover:border-none
`;

