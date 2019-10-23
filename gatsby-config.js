module.exports = {
  siteMetadata: {
    title: `Sumo Fantasy League`,
    description: `Place to create a team of Rikishi and see who comes out on top`,
    author: `@tkaa-two`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Users',
            collection: 'users',
            map: doc => ({
              email: doc.email,
              avatar: doc.avatarUrl,
              firstName: doc.first_name,
              lastName: doc.last_name,
              username: doc.username,
              bashos: doc.bashos.map(basho => basho.id),
              userId: doc.bashos.userId,
            })
          },
          {
            type: 'Bashos',
            collection: 'bashos',
            map: doc => ({
              id: doc.id,
              name: doc.name,
              type: doc.type,
              rikishi: doc.rikishi.map(fighter => fighter),
              year: doc.year,
              createdBy___NODE: doc.createdBy.id,
              fighters___NODE: doc.fighters.id,
            })
          },
          {
            type: 'BashoRikishi',
            collection: 'basho_rikishi',
            map: doc => ({
              rikishiOptions: doc.rikishiOptions,
              bashoYear: doc.bashoYear,
              bashoType: doc.bashoType,
            })
          },
          {
            type: 'Rikishi',
            collection: 'rikishi',
            map: doc => ({
              komosubi: doc.komosubi,
              maegashira1: doc.maegashira1,
              ozeki: doc.ozeki,
              sekiwake: doc.sekiwake,
              yokozuna: doc.yokozuna,
            })
          }
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
