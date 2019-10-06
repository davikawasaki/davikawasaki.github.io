import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const HeaderBg = styled.div`
  ${tw`fixed shadow-lg`}
  background: linear-gradient(30deg, slateblue 0%, deepskyblue 100%);
  marginBottom: 1.45rem;
  border-bottom-right-radius: 1em;
  z-index: 100;
`

const HeaderBlock = styled.div`
  margin: 0 auto,
  maxWidth: 960,
  padding: 1.45rem 1.0875rem
`

const HeaderFlex = styled.div`
  ${tw`flex items-center`}
`

const HeaderWrapper = styled.div`
  ${tw`flex items-center`}
`

const HomeLink = styled(Link)`
  list-style-type: none;
  padding-right: .5rem;
  & > svg {
    width: 1.5rem;
    fill: whitesmoke;
  }
`

const HeaderFlexLangs = styled.div`
  ${tw`flex-auto text-left px-4`}
`

const Header = (props) => (
  <HeaderBg>
    <HeaderBlock>
      <HeaderFlex>
        {/* <HeaderFlexTitle>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {props.title}
            </Link>
          </h1>
        </HeaderFlexTitle> */}
        <HeaderFlexLangs>
          <HeaderWrapper>
            <section>
              <HomeLink to="/" key="home" style={{ fontWeight: 900, color: 'white' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/></svg>
              </HomeLink>
            </section>
            <SelectLanguage langs={props.langs} actualLang={props.actualLang} />
          </HeaderWrapper>
        </HeaderFlexLangs>
      </HeaderFlex>
    </HeaderBlock>
  </HeaderBg>
)

export default Header;