import React, { Component } from 'react'
import BannerProject from '../components/BannerProject'
import AboutProject from '../components/AboutProject'
import GalleryProject from '../components/GalleryProject'
import ContactHome from '../components/ContactHome'
import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyles from '../styles/global'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import DataService from '../services/Data'

const Footer = styled.footer`
	${tw`text-center z-1 w-auto px-8 pt-12 pb-4 italic`}
	color: whitesmoke;
`

class ProjectLayout extends Component {
	constructor(props) {
		super(props)

		if (props.content.header.date.hasOwnProperty("start") && props.content.header.date.hasOwnProperty("end"))
			props.content.header.date.defaultMsg = props.messages.dateUntilNow
		
		let highlightImg = null
		if (!DataService.isEmpty(props.content.gallery)) {
			if (!DataService.isEmpty(props.content.gallery.photos) && props.content.gallery.photos.length > 0) {
				const rn = DataService.getRandomNumberBetween(0, props.content.gallery.photos.length)
				if (!DataService.isEmpty(props.content.gallery.photos[rn].parentFolders) && !DataService.isEmpty(props.content.gallery.photos[rn].id))
				highlightImg = props.content.gallery.photos[rn].parentFolders + props.content.gallery.photos[rn].id
			}
		}
		props.content.header.highlightImg = highlightImg

		this.state = {
			id: props.id,
			content: props.content,
			lang: props.lang || "en",
			messages: props.messages
		}
	}

	render() {
		return (
			<>
				<GlobalStyles/>
				{/* <Router> */}
				<ParallaxProvider>
					<BannerProject
						title={this.state.content.header.title}
						subtitle={this.state.content.header.subtitle}
						socialMedia={this.state.content.header.links}
						dates={this.state.content.header.date}
						highlightImg={this.state.content.header.highlightImg}
						lang={this.state.lang}
					/>
					<AboutProject
						text={this.state.content.about.text}
						categories={this.state.content.about.categories}
					/>
					<GalleryProject
						title={this.state.content.gallery.title}
						photos={this.state.content.gallery.photos}
						messages={this.state.messages}
					/>
					<ContactHome
						title={this.state.content.contact.title}
						connectors={this.state.content.contact.links}
					/>
					<Footer>
						<p>{this.state.content.footer.text}</p>
					</Footer>
				</ParallaxProvider>
				{/* </Router> */}
			</>
		)
	}
}

export default ProjectLayout