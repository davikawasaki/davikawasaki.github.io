import React from 'react'
// import Link from 'gatsby-link'
// import Layout from "../layouts/en"
import ProjectLayout from "../layouts/ProjectLayout"
import Layout from "../layouts/pt"
import messages from '../data/messages/pt'
import SvgIcons from '../services/SvgIcons'

const ProjectPage = (props) => {
  let content = props.pathContext.content;

  // Conversion of svg string to object
  content.header.links.forEach(l => {
    if (typeof l.icon === "string") {
      l.svg = SvgIcons[l.icon]
      delete l.icon
    }
  })
  content.contact.links.forEach(l => {
    if (typeof l.svg === "string") l.svg = SvgIcons[l.svg]
  })

  return (
    <Layout location={props.location} title={`Projeto ${content.header.title} - Davi Kawasaki`}>
      <ProjectLayout 
        {...props}
        lang={props.lang || "pt"}
        location={props.location}
        messages={messages}
        content={content} />
    </Layout>
  )
}

export default ProjectPage