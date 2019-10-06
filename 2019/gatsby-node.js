const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    let pageContent = { en: [], pt: [] }
    
    const result = await graphql(`
      query {
        allProjectsContentEnJson {
          nodes {
            id
          }
        }
        allProjectsContentPtJson {
          nodes {
            id
          }
        }
      }
    `)

    const projectPageEnContent = await graphql(`
      query {
        page: projectJson(language: {eq: "en"}) {
          header {
            title
            subtitle
          }
          about {
            title
          }
          gallery {
            title
            subtitle
          }
        }
        common: sharedJson(language: {eq: "en"}) {
          contact {
            title
            links {
              type
              svg
              url
            }
          }
          footer {
            text
          }
        }
        projectsEn: allProjectsContentEnJson {
          nodes {
            id
            name
            description
            about
            date {
              start
              end
            }
            categories {
              title
              abbr
            }
            links {
              title
              url
              icon
            }
            gallery {
              parentFolders
              id
              about
            }
          }
        }
      }
    `)

    const projectPagePtContent = await graphql(`
      query {
        page: projectJson(language: {eq: "pt"}) {
          header {
            title
            subtitle
          }
          about {
            title
          }
          gallery {
            title
            subtitle
          }
        }
        common: sharedJson(language: {eq: "pt"}) {
          contact {
            title
            links {
              type
              svg
              url
            }
          }
          footer {
            text
          }
        }
        projectsPt: allProjectsContentPtJson {
          nodes {
            id
            name
            description
            about
            date {
              start
              end
            }
            categories {
              title
              abbr
            }
            links {
              title
              url
              icon
            }
            gallery {
              parentFolders
              id
              about
            }
          }
        }
      }
    `)
    
    projectPageEnContent.data.projectsEn.nodes.forEach((node) => {
      pageContent.en.push(
        {
          id: node.id,
          header: {
            title: node.name,
            subtitle: node.description,
            links: node.links,
            date: node.date
          },
          about: {
            categories: node.categories,
            text: node.about
          },
          gallery: {
            title: projectPageEnContent.data.page.gallery.title,
            photos: node.gallery
          },
          contact: {
            title: projectPageEnContent.data.common.contact.title,
            links: projectPageEnContent.data.common.contact.links,
          },
          footer: {
            text: projectPageEnContent.data.common.footer.text
          }
        }
      )
    })

    projectPagePtContent.data.projectsPt.nodes.forEach((node) => {
      pageContent.pt.push(
        {
          id: node.id,
          header: {
            title: node.name,
            subtitle: node.description,
            links: node.links,
            date: node.date
          },
          about: {
            categories: node.categories,
            text: node.about
          },
          gallery: {
            title: projectPagePtContent.data.page.gallery.title,
            photos: node.gallery
          },
          contact: {
            title: projectPagePtContent.data.common.contact.title,
            links: projectPagePtContent.data.common.contact.links,
          },
          footer: {
            text: projectPagePtContent.data.common.footer.text
          }
        }
      )
    })

    result.data.allProjectsContentEnJson.nodes.forEach((node) => {
      createPage({
        path: `/projects/${node.id}`,
        component: path.resolve(`./src/templates/project.en.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          lang: "en",
          content: pageContent.en.find(n => n.id == node.id)
        }
      })

      createPage({
        path: `/en/projects/${node.id}`,
        component: path.resolve(`./src/templates/project.en.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          lang: "en",
          content: pageContent.en.find(n => n.id == node.id)
        }
      })
    })

    result.data.allProjectsContentPtJson.nodes.forEach((node) => {
      createPage({
        path: `/pt/projects/${node.id}`,
        component: path.resolve(`./src/templates/project.pt.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          lang: "pt",
          content: pageContent.pt.find(n => n.id == node.id)
        },
      })
    })
}