import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Link from 'gatsby-link'
// import Layout from "../layouts/pt"
import IndexLayout from "../layouts/IndexLayout"
import Layout from "../layouts/pt"
import messages from '../data/messages/pt';

const IndexPage = (props) => (
  <StaticQuery
    query={IndexPtQuery}
    render={queryRes => {
      let content = queryRes.content;
      content.common = queryRes.common;
      const projects = queryRes.projects.nodes;
      return (
        <Layout location={props.location}>
          <IndexLayout 
            {...props}
            lang={"pt"}
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

const IndexPtQuery = graphql`
  query IndexPtQuery {
    langs: site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    content: indexJson(language: {eq: "pt"}) {
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
    common: sharedJson(language: {eq: "pt"}) {
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
    projects: allProjectsContentPtJson {
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