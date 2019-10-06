import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import DataService from '../services/Data'
import { Block } from '../elements/Blocks'
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

const DivGallery = styled.div`
	${tw`flex w-auto flex-wrap sm:m-4 lg:m-8`}
	@media (max-width: 768px) { padding-bottom: 5rem; }
	padding-bottom: 1rem;
`

const DivCategoriesGallery = styled.div`
	${tw`flex w-auto flex-wrap justify-center items-center`}
	margin: 2rem 1rem;
	@media (max-width: 600px) { margin: 0.5rem; }
`

const TextParallax = styled(Parallax)`
	${tw`inline-block text-center z-50 w-full`}
	position: relative;
	// margin-top: -5%;
`

const SectionTitleBlock = styled.h1`
	${tw`text-5xl`}
	color: #141E30;
`

const ProjectTitleBlock = styled.h1`
	${tw`text-2xl`}
`

const ProjectBlock = styled(Block)`
	${tw`mb-4 text-white`}
	@media (max-width: 600px) { 
		width: 100%;
		margin: 1rem 1.5rem 0 1.5rem;
	}
	width: calc(1/2*100% - (1 - 1/2) * 2rem);
    margin: 0 0.5rem 1rem 0.5rem;
	& h1 {
		margin: 0;
	}
`

const ProjectLink = styled.a`
	${tw`font-bold`}
`

class ProjectsHome extends Component {
	constructor(props) {
		super(props)
		
		if (DataService.isEmpty(props.lang)) props.lang = "en"
		
		this.state = {
			projects: props.projects,
			title: props.title,
			readMore: props.readMore,
			location: props.location,
			urlWithLang: props.location.href.includes(props.lang) ? props.location.href : `${props.location.href}${props.lang}/`,
			categories: this.getAllCategories(props.projects)
		}
		this.filterCategory = this.filterCategory.bind(this)
	}
	
	getAllCategories (projects) {
		let allCategories = []
		projects.map(project => {
			project.visible = true;
			project.categories.forEach(category => {
				if (!allCategories.filter(e => e.abbr === category.abbr).length > 0) {
					category.active = false
					allCategories.push(category)
				}
			})
			return project
		})
		return allCategories
	}

	filterCategory(cat) {
		let updatedCats = this.state.categories
		let projects = this.state.projects
		updatedCats.forEach(catState => {
			if (cat.abbr === catState.abbr) catState.active = !catState.active
		})
		
		if (updatedCats.filter(e => !e.active).length === updatedCats.length)
			projects.forEach(p => p.visible = true)
		else {
			const visibleCats = updatedCats.filter(c => c.active)
			projects = projects.map(project => {
				project.visible = false
				project.categories.forEach(category => {
					if (!project.visible && !visibleCats.filter(e => e.abbr === category.abbr).length > 0) project.visible = false
					else project.visible = true
				})
				return project
			})
		}

		this.setState({
			categories: updatedCats,
			projects: projects
		})
	}

	render() {
		return (
			<>
				<DivRoot>
					<TextParallax y={[0, 30]}>
						<SectionTitleBlock>{this.state.title}</SectionTitleBlock>                    
					</TextParallax>
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
										onClick={(e) => this.filterCategory(cat)}
										bg={cat.active ? "rgba(218, 223, 225, 1)" : "rgba(218, 223, 225, .5)"}>
										<p>{cat.title}</p>
									</FilterTag>
								)
							})
						}
					</DivCategoriesGallery>
					<DivGallery>
						{this.state.projects
							.sort(function(a, b){
								if(a.name < b.name) { return -1; }
								if(a.name > b.name) { return 1; }
								return 0;
							})
							.map((proj, i) => {
								if (proj.visible) {
									return (
										<ProjectBlock key={`project-home-${proj.id}`} bg={i % 2 === 0 ? "linear-gradient(120deg, #141E30 0%, #243B55 100%);" : "linear-gradient(30deg, #141E30 0%, #243B55 100%);"}>
											<ProjectTitleBlock>{proj.name}</ProjectTitleBlock>
											<p>{proj.description}</p>
											<ProjectLink href={`${this.state.urlWithLang}projects/${proj.id}`}>{this.state.readMore}</ProjectLink>
										</ProjectBlock>
									)
								}
								else return (<></>)
							})
						}
					</DivGallery>
				</DivRoot>
			</>
		)
	}
}

export default ProjectsHome