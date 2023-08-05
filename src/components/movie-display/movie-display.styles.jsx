//import styled from 'styled-components';
import tw, { styled } from 'twin.macro';

export const MovieDisplayContainer = tw.div`
    flex justify-center
    w-screen
`;

export const MovieDisplayBG = styled.div`
	${tw` 
    w-fit
    border border-gray-700 rounded-lg
    p-4 px-8
    bg-slate-950
    text-white
    shadow-lg shadow-gray-700
    relative z-10
    `}
`;

export const MovieTitleBG = tw.section`
    h-screen w-[90vw]
    absolute top-0
    flex flex-col
    text-[8rem] text-gray-700 font-black
`;

export const Title = tw.h1`
    text-4xl font-bold text-white
    relative z-10
`;

export const Image = tw.img`
    shadow shadow-gray-500 mb-2
`;
