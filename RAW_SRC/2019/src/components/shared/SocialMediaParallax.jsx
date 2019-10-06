import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'

const SocialMediaParallax = styled(Parallax)`
    ${tw`inline-block w-10`}
`

const SvgStyled = styled.svg`
    color: #fff;
    fill: currentColor;
    width: 2em;
    height: 2em;
`

const SmParallax = ({ i, smObj, applyEffect }) => {
    return (
        <>
            <SocialMediaParallax
                key={`svg-${i}`}
                x={[applyEffect ? -50 * `${i - 1}` : 0, applyEffect ? 50 * `${i - 3}` : 0]}
            >
                <a key={smObj.name} href={smObj.url} target="_blank" rel="noopener noreferrer">
                    <SvgStyled xmlns={smObj.svg.xmlns} viewBox={smObj.svg.viewBox}>
                        {smObj.svg.content()}
                    </SvgStyled>
                </a>
            </SocialMediaParallax>
        </>
    )
}

export default SmParallax