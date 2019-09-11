import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="about"
      category="misc"
      date="20 de Abril de 2019"
      timeToRead="4"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de
            soluções como o Medium."
    />
  </Layout>
)

export default IndexPage
