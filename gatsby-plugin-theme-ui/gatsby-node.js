exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    createTypes(`
      type ThemeUiConfig implements Node {
        themeUiPreset: String,
        prismPreset: String

      }
    `)
  }
  
  exports.sourceNodes = (
    { actions, createContentDigest },
    { prismPreset = 'prism-okaidia', themeUiPreset = 'base' }
  ) => {
    const { createNode } = actions
  
    const themeUiConfig = {
        themeUiPreset,
        prismPreset,
    }
  
    createNode({
      ...themeUiConfig,
      id: `gatsby-plugin-theme-ui-config`,
      parent: null,
      children: [],
      internal: {
        type: `ThemeUiConfig`,
        contentDigest: createContentDigest(themeUiConfig),
        content: JSON.stringify(themeUiConfig),
        description: `Options for gatsby-plugin-theme-ui`,
      },
    })
  } 