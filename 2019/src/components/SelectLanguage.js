import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={
      props.actualLang.toLowerCase() === lang.langKey.toLowerCase() ? { fontWeight: 900, color: 'white' } : { fontWeight: 300, color: 'white' }
    }>
      <li selected={lang.selected}>
        {lang.langKey.toUpperCase()}
      </li>
    </Link>
  );

  return (
    <section>
      <header style={{
        color: 'white'
      }}>
        {/* <FormattedMessage id="selectLanguage" /> */}
      </header>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;