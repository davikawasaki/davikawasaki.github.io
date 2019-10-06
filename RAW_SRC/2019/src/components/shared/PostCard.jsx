import React from 'react';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { PostCardThumb } from './PostCardThumb'

const CardRoot = styled.div`
    ${tw`inline-block lg:flex shadow-lg`};
    @media (max-width: 600px) { 
		width: 100%;
        margin: 1rem 0 1rem 0;
	}
	width: calc(1/2*100% - (1 - 1/2) * 2rem);
    margin-bottom: 2rem;
`

const CardWrapper = styled.div`
    ${tw`p-6 flex flex-col justify-between leading-tight z-10 shadow-lg`};
    background-color: whitesmoke;
    border-bottom-right-radius: .5rem;
    border-top-right-radius: .5rem;
    @media (max-width: 900px) { 
		border-bottom-left-radius: .5rem;
        border-top-left-radius: .5rem;
	}
`

const CardGridBlock = styled.div`
	${tw`m-0`};
`

const CardGridTitle = styled.a`
    ${tw`font-bold text-lg mb-0`};
    color: #243B55;
    & > h3 {
        ${tw`m-0`};
    }
    & > p {
        ${tw`mb-0 px-4`};
    }
`

const CardGridDate = styled.p`
	${tw`text-sm m-0`};
`

const CardGridText = styled.p`
    ${tw`text-base text-justify px-4`};
    color: grey;
`

const toText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node
    return tag.innerText
}

const shortenText = (text, startingPoint, maxLength) => {
  return text.length > maxLength ?
    text.slice(startingPoint, maxLength) :
    text
}

const PostCard = ({ thumb, title, link, date, description, readMore }) => {
    return (
        <>
            <CardRoot>
                <PostCardThumb bg={thumb}></PostCardThumb>
                <CardWrapper>
                    <CardGridBlock>
                        <CardGridTitle href={link} target="_blank">
                            <h3>{title}</h3>
                        </CardGridTitle>
                        <CardGridDate>{date}</CardGridDate>
                        <CardGridText>{shortenText(toText(description), 0, 200) + '...'}</CardGridText>
                        <CardGridTitle href={link} target="_blank">
                            <p>{readMore}</p>
                        </CardGridTitle>
                    </CardGridBlock>
                </CardWrapper>
            </CardRoot>
        </>
    )
}

export default PostCard