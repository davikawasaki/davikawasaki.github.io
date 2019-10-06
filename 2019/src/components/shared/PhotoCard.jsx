import React from 'react';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { PhotoCardThumb } from './PhotoCardThumb'

const CardRoot = styled.div`
    ${tw`inline-block flex shadow-lg`};
    @media (max-width: 600px) { 
		width: 100%;
        margin: 1rem 0 1rem 0;
	}
	width: calc(1/2*100% - (1 - 1/2) * 2rem);
    margin-bottom: 2rem;
    flex-direction: ${props => props.inverted ? 'column-reverse' : 'column'};
`

const CardWrapper = styled.div`
    ${tw`p-2 flex justify-between leading-tight z-10 shadow-lg`};
    flex-direction: ${props => props.inverted ? 'column-reverse' : 'column'};
    background-color: whitesmoke;
    border-bottom-left-radius: ${props => props.inverted ? '0' : '.5rem'};
    border-bottom-right-radius: ${props => props.inverted ? '0' : '.5rem'};
    border-top-left-radius: ${props => !props.inverted ? '0' : '.5rem'};
    border-top-right-radius: ${props => !props.inverted ? '0' : '.5rem'};
    @media (max-width: 900px) { 
		
	}
`

const PhotoCardThumbWrapper = styled(PhotoCardThumb)`
    height: 25rem;
`

const CardGridBlock = styled.div`
    ${tw`m-0`};
`

const CardGridText = styled.p`
    ${tw`text-base text-justify px-4`};
    color: grey;
`

const PhotoCard = ({ thumb, text, inverted }) => {
    return (
        <>
            <CardRoot inverted={inverted}>
                <a href={thumb} target="_blank" without rel="noopener noreferrer">
                    <PhotoCardThumbWrapper bg={thumb} inverted={inverted}></PhotoCardThumbWrapper>
                </a>
                <CardWrapper inverted={inverted}>
                    <CardGridBlock>
                        <CardGridText>{text}</CardGridText>
                    </CardGridBlock>
                </CardWrapper>
            </CardRoot>
        </>
    )
}

export default PhotoCard