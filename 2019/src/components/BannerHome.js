import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import SocialMediaParallax from './shared/SocialMediaParallax'

const DivRoot = styled.div`
    ${tw`p-2 md:p-4 lg:p-12 justify-center w-auto z-50`};
    height: 100vh;
`

const DivAngledHeight = styled.div`
    height: 80%;
`

const DivParallaxWrapper = styled.div`
    ${tw`justify-center h-full p-6 flex item-center align-middle content-center flex-wrap`}
`

const LinkBlog = styled.div`
    ${tw`flex justify-center items-center w-full`};
    a { padding: .5em; }
    padding-top: 2em;
`

const Title = styled.div`
    ${tw`text-center italic font-black uppercase w-full`}
    @media (max-width: 600px) { letter-spacing: 0.1em; }
    margin: 0.2em 0;
    color: #fff;
    font-size: 3em;
    letter-spacing: 0.2em;
`

const TitleParagraph = styled.p`
    ${tw`m-0`}
`

const Subtitle = styled.div`
    ${tw`text-center italic font-hairline w-full`}
    margin: 0.2em 0;
    color: #fff;
    font-size: 1em;
`

const LettersParallax = styled(Parallax)`
    ${tw`inline-block w-10`}
`

const SubLettersParallax = styled(Parallax)`
    ${tw`inline-block w-3`}
`

const BannerHome = ({ title, subtitle, link, socialMedia }) => {
    const titleLines = title.split(' ')
    const titleLetters = title.split('')
    const subtitleNormal = subtitle
    subtitle = subtitle.split('')

    return (
        <>
            <DivRoot>
                <DivAngledHeight>
                    <DivParallaxWrapper>
                        <MediaQuery minDeviceWidth={601}>
                            <Title>
                                {titleLetters.map((letter, i) => (
                                    <LettersParallax
                                        key={`title-${i}`}
                                        x={[-40, 40]}
                                        className="inline-block w-16"
                                    >
                                        {letter}
                                    </LettersParallax>
                                ))}
                            </Title>
                            <Subtitle>
                                {subtitle.map((letter, i) => (
                                    <SubLettersParallax
                                        key={`subtitle-${i}`}
                                        x={[200, 0]}
                                    >
                                        {letter}
                                    </SubLettersParallax>
                                ))}
                            </Subtitle>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={600}>
                            {titleLines.map((line, i) => (
                                <Title key={`titles-${i}`}>
                                    <TitleParagraph>{line}</TitleParagraph>
                                </Title>
                            ))}
                            <Subtitle>
                                {subtitleNormal}
                            </Subtitle>
                        </MediaQuery>
                        
                        <LinkBlog>
                            {socialMedia.map((smObj, i) => (
                                <SocialMediaParallax
                                    key={`social-media-${i}`}
                                    i={i}
                                    smObj={smObj}
                                    applyEffect={true}
                                />
                            ))}
                        </LinkBlog>            
                    </DivParallaxWrapper>
                </DivAngledHeight>
            </DivRoot>
        </>
    )
}

export default BannerHome