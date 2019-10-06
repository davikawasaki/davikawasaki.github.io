import React from 'react'
// import Link from 'gatsby-link'
// import Layout from './index'
import BannerHome from '../components/BannerHome'
import AboutHome from '../components/AboutHome'
import SkillsHome from '../components/SkillsHome'
import ProjectsHome from '../components/ProjectsHome'
import PostsHome from '../components/PostsHome'
import ContactHome from '../components/ContactHome'
import { ParallaxProvider } from 'react-scroll-parallax'
// import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from '../styles/global'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import SvgIcons from '../services/SvgIcons'

const Footer = styled.footer`
	${tw`text-center z-1 w-auto px-8 pt-12 pb-4 italic`}
	color: whitesmoke;
`

const IndexLayout = ({ messages, location, content, projects, lang }) => {
	
	// Conversion of svg string to object
	if (typeof content.curriculum.education.svg === "string")
		content.curriculum.education.svg = SvgIcons[content.curriculum.education.svg]
	if (typeof content.curriculum.languages.svg === "string")
		content.curriculum.languages.svg = SvgIcons[content.curriculum.languages.svg]
	if (typeof content.curriculum.work.svg === "string")
		content.curriculum.work.svg = SvgIcons[content.curriculum.work.svg]
	if (typeof content.curriculum.awards.svg === "string")
		content.curriculum.awards.svg = SvgIcons[content.curriculum.awards.svg]
	content.header.socialMedias.forEach(sm => {
		if (typeof sm.svg === "string") sm.svg = SvgIcons[sm.svg]
	})
	content.common.contact.links.forEach(l => {
		if (typeof l.svg === "string") l.svg = SvgIcons[l.svg]
	})
	content.blog.links.forEach(l => {
		if (typeof l.svg === "string") l.svg = SvgIcons[l.svg]
	})

	return (
		<>
			<GlobalStyles/>
			{/* <Router> */}
				<ParallaxProvider>
					<BannerHome 
						title={content.header.title}
						subtitle={content.header.subtitle}
						socialMedia={content.header.socialMedias}
					/>
					<AboutHome
						title={content.about.title}
						text={content.about.description}
					/>
					<SkillsHome
						title={content.curriculum.title}
						block1={[content.curriculum.education, content.curriculum.languages]}
						block2={[content.curriculum.work]}
						block3={[content.curriculum.awards]}
					/>
					<ProjectsHome
						title={content.projects.title}
						projects={projects}
						readMore={content.projects.anchorTitles}
						location={location}
						lang={lang}
					/>
					<PostsHome
						title={content.blog.title}
						subtitle={content.blog.moreTitles}
						readMore={content.blog.anchorTitles}
						connectors={content.blog.links}
						lang={lang}
					/>
					<ContactHome
						title={content.common.contact.title}
						connectors={content.common.contact.links}
					/>
					<Footer>
						<p>{content.common.footer.text}</p>
					</Footer>
				</ParallaxProvider>
			{/* </Router> */}
		</>
	)
}

export default IndexLayout