import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { FilterTag } from '../elements/FilterTag'

const DivRoot = styled.div`
	${tw`p-2 md:p-4 lg:p-12 justify-center items-center z-50 h-auto relative`};
	// background: linear-gradient(to right,deepskyblue 0%,slateblue 100%);
	margin-top: -8%; z-index: 1;
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(to left, slateblue 0%, deepskyblue 100%);
        -webkit-clip-path: polygon(0% calc(0% + 6vw),101% 0%,100% 100%,0 calc(100% - 6vw));
        clip-path: polygon(0% calc(0% + 6vw),101% 0%,100% 100%,0 calc(100% - 6vw));
    }
`

const DivCategoriesGallery = styled.div`
	${tw`flex w-50 flex-wrap justify-center items-center`}
	padding-top: 6rem;	
	@media (max-width: 600px) { margin: 0.5rem; }
`

const TextParallax = styled(Parallax)`
	${tw`inline-block text-justify z-50 w-full relative px-8 text-lg`}
	margin-bottom: 10rem;
	@media (max-width: 600px) { 
		margin-bottom: 15rem;
	}
`

class AboutProject extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			text: props.text,
			categories: props.categories
		}
	}

	render() {
		return (
			<>
				<DivRoot>
					<DivCategoriesGallery>
						{this.state.categories
							.sort(function(a, b){
								if(a.title < b.title) { return -1; }
								if(a.title > b.title) { return 1; }
								return 0;
							})
							.map((cat, i) => {
								return (
									<FilterTag
										key={`project-home-cat-${i}`}
										bg={"rgba(218, 223, 225, 1)"}>
										<p># {cat.title}</p>
									</FilterTag>
								)
							})
						}
					</DivCategoriesGallery>
					<TextParallax y={[0, 30]}>
						{this.state.text.map((line, i) => (
							<p key={`about-project-line-${i}`}>{line}</p>
						))}
					</TextParallax>
				</DivRoot>
			</>
		)
	}
}

export default AboutProject