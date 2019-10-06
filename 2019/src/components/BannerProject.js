import React, { Component } from 'react';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import SocialMediaParallax from './shared/SocialMediaParallax'
import DataService from '../services/Data'
import DateTimeService from '../services/DateTime'
import ImageParallax from './shared/ImageParallax';

const DivRoot = styled.div`
    ${tw`p-8 lg:p-12 justify-center w-full z-50`};
    height: auto;
`

const DivAngledHeight = styled.div`
    height: 10%;
`

const DivImageContentWrapper = styled.div`
    ${tw`justify-center h-auto flex item-center align-middle content-center flex-wrap w-auto`}
`

const DivContentWrapper = styled.div`
    ${tw`justify-center h-full p-6 flex item-center align-middle content-center flex-wrap`}
    width: 60%;
    @media (max-width: 600px) {
        width: 100%;
        padding: 4rem 0 2rem 0;
    }
`

const LinksWrapper = styled.div`
    width: 70%;
`

const LinksBlock = styled.div`
    ${tw`flex justify-center items-center w-full justify-end`};
    a { padding: .5em; }    
`

const Title = styled.div`
    ${tw`text-right italic font-black uppercase w-full`}
    margin: 0;
    color: whitesmoke;
    letter-spacing: 0.2rem;
    & > h1 {
        ${tw`text-5xl mt-0`} width: 90%; margin-left: 10%;
    }
    @media (max-width: 600px) {
        & > h1 {
            ${tw`text-4xl`}
        }
    }
`

const SubtitleParagraph = styled.p`
    ${tw`m-0 text-sm text-right`}
    width: 70%; margin-left: 30%;
`

const Subtitle = styled.div`
    ${tw`text-justify italic font-hairline w-full`}
    margin: 0.2rem 0;
    color: whitesmoke;
    text-align-last: right;
    -moz-text-align-last: right;
`

const LinksDateWrapper = styled.div`
    ${tw`flex w-full flex-wrap item-center align-middle`}
    padding-top: 2em;
`

const DateRange = styled.div`
    ${tw`font-medium font-hairline item-center justify-end`}
    width: 30%;
    color: whitesmoke;
    text-align-last: right;
    -moz-text-align-last: right;
    & > p {
        ${tw`m-0 text-base`}
        width: auto;
        text-align: right;
        text-transform: uppercase;
    }

    & > p:first-of-type {
        ${tw`font-bold`}
    }
`

class BannerProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            socialMedia: props.socialMedia,
            dates: props.dates,
            highlightImg: null,
            lang: props.lang
        }

        if (!DataService.isEmpty(props.highlightImg)) {
            import(`../images/${props.highlightImg}`).then(image => {
                this.setState({
                    highlightImg: image
                })
            })
        }
    }

    render() {
        return (
            <>
                <DivRoot>
                    <DivAngledHeight>
                        <DivImageContentWrapper>
                            <ImageParallax
                                wrapperWidth={"40%"}
                                wrapperZIndex={2}
                                rounded={true}
                                shadow={true}
                                bgHeight={20}
                                img={this.state.highlightImg}
                                parallaxKey={"project-parallax-1"}
                                applyXEffect1={0}
                                applyXEffect2={0}
                                applyYEffect1={-40}
                                applyYEffect2={0}
                                seedX={0}
                                seedY={1}
                            />
                            <DivContentWrapper>
                                <Title>
                                    <h1>{this.state.title}</h1>
                                </Title>
                                <Subtitle>
                                    <SubtitleParagraph>{this.state.subtitle}</SubtitleParagraph>
                                </Subtitle>
                                <LinksDateWrapper>
                                    <LinksWrapper>
                                        <LinksBlock>
                                            {this.state.socialMedia.map((smObj, i) => (
                                                <SocialMediaParallax
                                                    key={`social-media-${i}`}
                                                    i={i}
                                                    smObj={smObj}
                                                    applyEffect={false}
                                                />
                                            ))}
                                        </LinksBlock>
                                    </LinksWrapper>
                                    <DateRange>
                                        <p>
                                            {/* {dates.start * 1000} */}
                                            {/* {new Date(parseInt(dates.start)*1000).toLocaleDateString("pt-BR")} - {new Date(parseInt(dates.end)*1000).toLocaleDateString("pt-BR")} */}
                                            {DateTimeService.convertUnix(this.state.dates.start, "MMM YYYY", this.state.dates.defaultMsg)}
                                        </p>
                                        <p>
                                            {DateTimeService.convertUnix(this.state.dates.end, "MMM YYYY", this.state.dates.defaultMsg)}
                                        </p>
                                    </DateRange>
                                </LinksDateWrapper>
                            </DivContentWrapper>
                        </DivImageContentWrapper>
                    </DivAngledHeight>
                </DivRoot>
            </>
        )
    }
}

export default BannerProject