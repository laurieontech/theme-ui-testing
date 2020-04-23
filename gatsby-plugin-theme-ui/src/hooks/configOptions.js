import { useStaticQuery, graphql } from "gatsby"

const useThemeUiConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      themeUiConfig(id: { eq: "gatsby-plugin-theme-ui-config" }) {
        themeUiPreset
        prismPreset
      }
    }
  `)

  return data.themeUiConfig
}

export default useThemeUiConfig