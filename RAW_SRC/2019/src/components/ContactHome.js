import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import SocialMediaParallax from './shared/SocialMediaParallax'

const DivRoot = styled.div`
    ${tw`p-2 md:p-8 lg:p-12 justify-center items-center z-50 h-auto relative`};
    z-index: 1;
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

const TextParallax = styled(Parallax)`
	${tw`block text-center z-50 w-auto m-8`}
`

const SectionTitleBlock = styled.h1`
	${tw`text-4xl mt-0`}
	color: whitesmoke;
`

const SocialMediaWrapper = styled.div`
    ${tw`flex justify-center items-center p-0  m-8`}
    a { padding: .5em; margin: 1em; }
    color: whitesmoke;
`

class ContactHome extends Component {
	constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            connectors: props.connectors
        }
    }

	render() {
		return (
			<>
				<DivRoot>
					<TextParallax x={[-3, 1]}>
						<SectionTitleBlock>{this.state.title}</SectionTitleBlock>                    
					</TextParallax>
                    <SocialMediaWrapper>
                        {this.state.connectors.map((smObj, i) => (
                            <SocialMediaParallax
                                key={i}
                                i={1}
                                smObj={smObj}
                                applyEffect={true}
                            />
                        ))}
                    </SocialMediaWrapper>
				</DivRoot>
			</>
		)
	}
}

export default ContactHome