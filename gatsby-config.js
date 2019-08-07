module.exports = {
  siteMetadata: {
    title: `UTDesign Makerspace`,
    description: `The offical website for the UTDesign Makerspace`,
    author: `Cameron Steele`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UTDesign Makerspace`,
        short_name: `UTDMakerspace`,
        start_url: `/`,
        background_color: `#C1393D`,
        theme_color: `#C1393D`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,700`,
          `Kaushan+Script`,
          `Droid+Serif\:400,700,400i,700i`,
          `Roboto+Slab\:400,100,300,700`
        ]
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: `appUJvcn2pZrTaWkS`,
            tableName: `FAQ`,
            //tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            //queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            //mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            //tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
          {
            baseId: `appUJvcn2pZrTaWkS`,
            tableName: `Officers`,
            tableView: `bot`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
  ],
}
