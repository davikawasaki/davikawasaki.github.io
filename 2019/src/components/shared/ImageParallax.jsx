import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-scroll-parallax'
import DataService from '../../services/Data'
import ImgFallback from '../../images/image_fallback.png'

const DivImageWrapper = styled(Parallax)`
    width: ${props => DataService.isEmpty(props.wrapperWidth) ? "100%" : props.wrapperWidth};
    z-index: ${props => DataService.isEmpty(props.wrapperZIndex) ? 1 : props.wrapperZIndex};
    border-radius: ${props => props.rounded ? ".5rem" : "0"};
    ${tw`inline-block`}
    & > div {
        ${tw`w-auto`}
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`

const HighlightImageDiv = styled.div`
    ${tw`block relative`}
    border-radius: ${props => props.rounded ? ".5rem" : "0"};
    box-shadow: ${props => props.shadow ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "none"};

    background-image: url('${props => !DataService.isEmpty(props.img) && !DataService.isEmpty(props.img.default) ? props.img.default : ImgFallback}');
    background-size: cover;
    background-position: center;
    height: ${props => DataService.isEmpty(props.bgHeight) ? "10rem" : `${props.bgHeight}`}rem;
`

const ImageParallax = (props) => {
    const key = DataService.isEmpty(props.parallaxKey) ? `parallax-image-key-${props => DataService.isEmpty(props.i) ? "0" : props.i}` : props.parallaxKey
    const applyXEffect1 = DataService.isEmpty(props.applyXEffect1) ? 0 : props.applyXEffect1
    const applyYEffect1 = DataService.isEmpty(props.applyYEffect1) ? 0 : props.applyYEffect1
    const applyXEffect2 = DataService.isEmpty(props.applyXEffect2) ? 0 : props.applyXEffect2
    const applyYEffect2 = DataService.isEmpty(props.applyYEffect2) ? 0 : props.applyYEffect2
    const seedX = DataService.isEmpty(props.seedX) ? 0 : props.seedX
    const seedY = DataService.isEmpty(props.seedY) ? 0 : props.seedY

    return (
        <DivImageWrapper
            wrapperWidth={props.wrapperWidth}
            wrapperZIndex={props.wrapperZIndex}
            rounded={props.rounded}
            key={key}
            x={[
                -1 * applyXEffect1 * `${seedX}`,
                applyXEffect2 * `${seedX}`
            ]}
            y={[
                -1 * applyYEffect1 * `${seedY}`,
                applyYEffect2 * `${seedY}`
            ]}
        >
            <HighlightImageDiv
                rounded={props.rounded}
                shadow={props.shadow}
                img={props.img}
                bgHeight={props.bgHeight}
            />
        </DivImageWrapper>
    )
}

export default ImageParallax
