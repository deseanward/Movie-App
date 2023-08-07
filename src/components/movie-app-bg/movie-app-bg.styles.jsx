import tw, { styled } from 'twin.macro';

export const MovieBG = styled.section`
	${tw`
        h-screen w-[50vw]
        fixed
        flex flex-col
        text-gray-700 font-black
        opacity-[0.2]
       
        animate-jump-in animate-duration-1000
        `}
`;

export const Title = tw.h1`
    text-4xl font-bold text-white
    relative z-10
`;
