import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Link from 'gatsby-link'
// import Layout from "../layouts/en"
import IndexLayout from "../layouts/IndexLayout"
import Layout from "../layouts/en"
import messages from '../data/messages/en';

const IndexPage = (props) => (
  <StaticQuery
    query={IndexEnQuery}
    render={queryRes => {
      let content = queryRes.content;
      content.common = queryRes.common;
      const projects = queryRes.projects.nodes;
      return (
        <Layout location={props.location}>
          <IndexLayout 
            {...props}
            lang={"en"}
            location={props.location}
            messages={messages}
            content={content}
            projects={projects} />
        </Layout>
      )
    }}
  />
)

export default IndexPage

const IndexEnQuery = graphql`
  query IndexEnQuery {
    langs: site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    content: indexJson(language: {eq: "en"}) {
      header {
        title
        subtitle
        socialMedias {
          name
          svg
          url
        }
      }
      about {
        title
        description
      }
      curriculum {
        title
        education {
          title
          svg
          text
        }
        languages {
          title
          svg
          text
        }
        work {
          title
          svg
          text
        }
        awards {
          title
          svg
          text
        }
      }
      projects {
        title
        anchorTitles
      }
      blog {
        title
        anchorTitles
        moreTitles
        links {
          name
          svg
          url
        }
      }
    }
    common: sharedJson(language: {eq: "en"}) {
      footer {
        text
      }
      contact {
        title
        links {
          type
          svg
          url
        }
      }
    }
    projects: allProjectsContentEnJson {
      nodes {
        name
        description
        id
        date {
          start
        }
        categories {
          abbr
          title
        }
      }
    }
  }
`