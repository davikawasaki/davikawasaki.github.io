import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import BgSkills from '../images/bg_skills.jpg'

const DivRoot = styled.div`
    ${tw`p-4 lg:p-6 z-50`};
    height: auto; margin-top: -8%;
    position: relative;
    z-index: -1;
    background: black;

    &:after {
        content: "";
        background-image: url(${BgSkills});
        background-size: cover;
        opacity: 0.3;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1; 
    }
`

const DivContent = styled.div`
    ${tw`py-24`};
`

const DivFlexContent = styled.div`
    ${tw`justify-center items-center flex flex-wrap`};
`

const DivBlocks = styled.div`
    ${tw`sm:w-full lg:w-1/3`}
`

const SvgOuterDiv = styled.div`
    ${tw`flex justify-center py-4`}
`

const SvgStyled = styled.svg`
    color: #fff;
    fill: currentColor;
    width: 1.5em;
    height: 1.5em;
`

const TextParallax = styled(Parallax)`
    ${tw`inline-block text-justify z-50 pl-4 text-white w-full text-center justify-center pb-4`}
    top: -15%; position: relative;
`

const TitleBlock = styled.h1`
    ${tw`text-5xl text-center m-0`}
    color: whitesmoke;
`

const TextBlock = styled.p`
    ${tw`text-lg`}
`

const AboutHome = ({ title, block1, block2, block3 }) => {
    return (
        <>
            <DivRoot>
                <DivContent>
                    <TitleBlock>{title}</TitleBlock>
                    <DivFlexContent>
                        <MediaQuery minWidth={901}>
                            <DivBlocks>
                                {block1.map((section, i) => (
                                    <TextParallax key={`skill-block-1-${i}`} y={[-10, 30]}>
                                        <SvgOuterDiv>
                                            <SvgStyled xmlns={section.svg.xmlns} viewBox={section.svg.viewBox}>
                                                {section.svg.content()}
                                            </SvgStyled>
                                        </SvgOuterDiv>
                                        {/* <TitleBlock>{section.title}</TitleBlock> */}
                                        {section.text.map((line, j) => (
                                            <TextBlock key={`skill-block-1-text-${j}`}>{line}</TextBlock>
                                        ))}
                                    </TextParallax>
                                ))}
                            </DivBlocks>
                            <DivBlocks>
                                {block2.map((section, i) => (
                                    <TextParallax key={`skill-block-2-${i}`} y={[30, -10]}>
                                        <SvgOuterDiv>
                                            <SvgStyled xmlns={section.svg.xmlns} viewBox={section.svg.viewBox}>
                                                {section.svg.content()}
                                            </SvgStyled>
                                        </SvgOuterDiv>
                                        {/* <TitleBlock>{section.title}</TitleBlock> */}
                                        {section.text.map((line, j) => (
                                            <TextBlock key={`skill-block-2-text-${j}`}>{line}</TextBlock>
                                        ))}
                                    </TextParallax>
                                ))}
                            </DivBlocks>
                            <DivBlocks>
                                {block3.map((section, i) => (
                                    <TextParallax key={`skill-block-3-${i}`} y={[-10, 30]}>
                                        <SvgOuterDiv>
                                            <SvgStyled xmlns={section.svg.xmlns} viewBox={section.svg.viewBox}>
                                                {section.svg.content()}
                                            </SvgStyled>
                                        </SvgOuterDiv>
                                        {/* <TitleBlock>{section.title}</TitleBlock> */}
                                        {section.text.map((line, j) => (
                                            <TextBlock key={`skill-block-3-text-${j}`}>{line}</TextBlock>
                                        ))}
                                    </TextParallax>
                                ))}
                            </DivBlocks>
                        </MediaQuery>
                        <MediaQuery maxWidth={900}>
                            <DivBlocks>
                                {block1.map((section, i) => (
                                    <TextParallax key={`skill-block-1-${i}`} x={[-2, 2]}>
                                        <SvgOuterDiv>
                                            <SvgStyled xmlns={section.svg.xmlns} viewBox={section.svg.viewBox}>
                                                {section.svg.content()}
                                            </SvgStyled>
                                        </SvgOuterDiv>
                                        {/* <TitleBlock>{section.title}</TitleBlock> */}
                                        {section.text.map((line, j) => (
                                            <TextBlock key={`skill-block-1-text-${j}`}>{line}</TextBlock>
                                        ))}
                                    </TextParallax>
                                ))}
                            </DivBlocks>
                            <DivBlocks>
                                {block2.map((section, i) => (
                                    <TextParallax key={`skill-block-2-${i}`} x={[2, -2]}>
                                        <SvgOuterDiv>
                                            <SvgStyled xmlns={section.svg.xmlns} viewBox={section.svg.viewBox}>
                                                {section.svg.content()}
                                            </SvgStyled>
                                        </SvgOuterDiv>
                                        {/* <TitleBlock>{section.title}</TitleBlock> */}
                                        {section.text.map((line, j) => (
                                            <TextBlock key={`skill-block-2-text-${j}`}>{line}</TextBlock>
                                        ))}
                                    </TextParallax>
                                ))}
                            </DivBlocks>
                            <DivBlocks>
                                {block3.map((section, i) => (
                                    <TextParallax key={`skill-block-3-${i}`} x={[-2, 2]}>
                                        <SvgOuterDiv>
                                            <SvgStyled xmlns={section.svg.xmlns} viewBox={section.svg.viewBox}>
                                                {section.svg.content()}
                                            </SvgStyled>
                                        </SvgOuterDiv>
                                        {/* <TitleBlock>{section.title}</TitleBlock> */}
                                        {section.text.map((line, j) => (
                                            <TextBlock key={`skill-block-3-text-${j}`}>{line}</TextBlock>
                                        ))}
                                    </TextParallax>
                                ))}
                            </DivBlocks>
                        </MediaQuery>
                    </DivFlexContent>
                </DivContent>
            </DivRoot>
        </>
    )
}

export default AboutHome