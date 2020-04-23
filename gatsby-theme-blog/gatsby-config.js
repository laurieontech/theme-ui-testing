module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-twitter`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-theme-ui`,
        options: {
          prismPreset: options.prismPreset || `prism-okaidia`,
          themeUiPreset: options.themeUiPreset || `base`,

        }
      },
    ]
  }
}
