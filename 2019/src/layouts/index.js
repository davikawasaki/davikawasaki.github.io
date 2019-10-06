import React from 'react'
// import PropTypes from 'prop-types'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import { BrowserRouter as Router } from 'react-router-dom'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import GlobalStyles from '../styles/global'
import 'intl';

const Layout = ({ children, location, i18nMessages, title }) => {
  return (
    <>
      <GlobalStyles/>
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                languages {
                  defaultLangKey
                  langs
                }      
              }
            }
          }
        `}
        render={data => {
          const url = location.pathname;
          const { langs, defaultLangKey } = data.site.siteMetadata.languages;
          const langKey = getCurrentLangKey(langs, defaultLangKey, url);
          const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
          let langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

          // Manipulation to render multiple language pages
          let pathnameWithoutLang = location.pathname
          langsMenu.forEach(l => pathnameWithoutLang = pathnameWithoutLang.replace(`/${l.langKey}/`, "/"))
          langsMenu.map(l => l.link = pathnameWithoutLang === "/" && l.langKey === "en" ? pathnameWithoutLang : `/${l.langKey}${pathnameWithoutLang}`)
          return (
            <IntlProvider
              locale={langKey}
              messages={i18nMessages}
            >
              <>
                <Helmet
                  title={title || "Davi Kawasaki - Web Development and Engineering Solutions"}
                  meta={[
                    { name: 'description', content: 'Davi Kawasaki website portifolio with projects and contact for hire.' },
                    { name: 'keywords', content: 'davi kawasaki, web development, portifolio' },
                  ]}
                />
                <Header title={title || "Davi.Kawasaki - Web Development and Engineering Solutions"} langs={langsMenu} actualLang={langKey}/>
                <div
                  style={{
                    margin: '0',
                    // maxWidth: 960,
                    padding: '0',
                  }}
                >
                  {
                    typeof window !== 'undefined' ? (<Router>
                      {children}
                    </Router>) : (<></>)
                  }
                </div>
              </>
            </IntlProvider>
          )
        }}
      />
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout