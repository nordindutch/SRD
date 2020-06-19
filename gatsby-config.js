/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Fantastic Frontier SRD`,
    description: `The system reference document for Fantastic Frontier`,
    author: `Nordin Kole`
  },
  plugins: [`gatsby-plugin-sass`, {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },  {
    resolve: `gatsby-source-wordpress`,
    options: {
      /*
       * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
       * Example : 'demo.wp-api.org' or 'www.example-site.com'
       */
      baseUrl: `fantasticfrontier.beatenpath.nl/dir/`,
      // The protocol. This can be http or https.
      protocol: `https`,
      // Indicates whether the site is hosted on wordpress.com.
      // If false, then the assumption is made that the site is self hosted.
      // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
      // If your site is hosted on wordpress.org, then set this to false.
      hostingWPCOM: false,
      // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
      // This feature is untested for sites hosted on WordPress.com
      useACF: true,
    },
  }, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Fantastic Frontier SRD`,
      short_name: `ffSRD`,
      start_url: `/`,
      background_color: `#6b37bf`,
      theme_color: `#6b37bf`,
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: `standalone`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
    }
  }, `gatsby-plugin-offline`,`gatsby-plugin-react-helmet`,],
}
