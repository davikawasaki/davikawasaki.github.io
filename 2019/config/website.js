const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Davi Kawasaki - Web Development and Engineering Solutions', // Navigation and Site Title
  siteTitleAlt: 'Davi Kawasaki', // Alternative Site title for SEO
  siteTitleShort: 'Davi Kawasaki', // short_name for manifest
  siteHeadline: 'Web Development and Engineering Solutions', // Headline for schema.org JSONLD
  siteUrl: 'https://davikawasaki.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'My portifolio cases for engineering solutions',
  author: 'Davi Kawasaki', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@davikawasaki', // Twitter Username
  ogSiteName: 'davi.kawasaki', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-149333222-1-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
