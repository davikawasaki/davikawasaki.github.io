import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'

const DivRoot = styled.div`
    ${tw`p-2 md:p-4 lg:p-12 h-auto`};
    margin-top: -14%; position: relative; z-index: 1;
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, slateblue 0%, deepskyblue 100%);
        -webkit-clip-path: polygon(0% 0%,100% calc(0% + 6vw),100% calc(100% - 6vw),0 100%);
        clip-path: polygon(0% 0%,100% calc(0% + 6vw),100% calc(100% - 6vw),0 100%);
    }
`

const ContentWrapper = styled.div`
    ${tw`justify-center items-center lg:flex mt-8`}
    margin-bottom: 4rem;
`

const Avatar = styled.img`
    ${tw`rounded-full shadow-lg w-48 md:w-48 lg:w-full lg:h-auto`};
    @media (max-width: 600px), (max-width: 1280px) {
        margin-top: -15%;
    }

    @media (max-width: 360px) {
        margin-top: -25%;
    }

    @media (max-width: 600px) {
        margin-bottom: 4.5rem;
    }
`

const ImageParallax = styled(Parallax)`
    ${tw`lg:inline-block rounded-t lg:rounded-t-none lg:rounded-l text-center z-50`}
    padding-bottom: 10%;
    @media (min-width: 1024px) {
        margin-top: -15%;
    }
`

const TextParallax = styled(Parallax)`
    ${tw`lg:inline-block text-justify z-50 px-12`}
`

const TitleBlock = styled.h1`
    ${tw`text-2xl sm:text-2xl md:text-3xl lg:text-5xl mt-0`}
`

const TextBlock = styled.p`
    ${tw`text-xs sm:text-xs md:text-base lg:text-lg`}
`

const AboutHome = ({ title, text }) => {
    return (
        <>
            <DivRoot>
                <ContentWrapper>
                    <ImageParallax y={[0, 70]}>
                        <Avatar
                            src={avatar}
                        />
                    </ImageParallax>
                    <TextParallax y={[-5, 20]}>
                        <TitleBlock>{title}</TitleBlock>
                        {text.map((line, i) => (
                            <TextBlock key={`text-block-about-home-${i}`}>{line}</TextBlock>
                        ))}
                    </TextParallax>
                </ContentWrapper>
            </DivRoot>
        </>
    )
}

export default AboutHome