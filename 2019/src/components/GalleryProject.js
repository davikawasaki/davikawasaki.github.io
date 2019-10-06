import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PhotoCard from './shared/PhotoCard'
import DataService from '../services/Data'

const DivRoot = styled.div`
	${tw`p-4 md:p-4 lg:p-12 justify-center items-center z-50`};
	height: auto;
`

const TextParallax = styled(Parallax)`
	${tw`block text-center z-50 px-12 w-auto`}
	position: relative; margin-top: 5%;
`

const SectionTitleBlock = styled.h1`
	${tw`text-5xl`}
	color: whitesmoke;
`

const ParagraphNotification = styled.p`
    ${tw`text-center`}
    color: whitesmoke;
`

const PhotosWrapper = styled.div`
    ${tw`flex w-auto flex-wrap pt-8 lg:px-8 m-4`}
    & > div:nth-child(odd) {
        margin-right: 2em;
    }
    @media (max-width: 600px) { 
		& > div:nth-child(odd) {
            margin-right: 0;
        }
	}
`

class GalleryProject extends Component {
	constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            photos: [],
            messages: props.messages
        }

        if (!DataService.isEmpty(props.photos)) {
            let ptProms = []
            props.photos.forEach(p => {
                ptProms.push(import(`../images/${p.parentFolders}${p.id}`))
            })

            Promise.all(ptProms)
            .then((lps) => {
                for (let i = 0; i < lps.length; i++) {
                    props.photos[i].url = lps[i].default
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({
                    photos: props.photos
                })
            })
        }
    }

	render() {
		return (
			<>
				<DivRoot>
					<TextParallax y={[0, 30]}>
						<SectionTitleBlock>{this.state.title}</SectionTitleBlock>                    
					</TextParallax>
                    {
                        this.state.photos.length === 0 ? (<ParagraphNotification>{this.state.messages.projectPhotosEmpty}</ParagraphNotification>) : (<></>)
                    }
                    <PhotosWrapper>
                        {this.state.photos.map((photo, i) => 
                            (
                                <PhotoCard
                                    key={`photo-project-${i}`}
                                    thumb={photo.url}
                                    text={photo.about}
                                    inverted={i % 2 === 0}
                                />
                            )
                        )}
                    </PhotosWrapper>
				</DivRoot>
			</>
		)
	}
}

export default GalleryProject