import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styles"

const BlogPost = ({ data }) => {
  const {
    frontmatter: { title, date, description },
    timeToRead,
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} />
      <S.PostHeader>
        <S.PostDate>
          {date} • {timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
      }
      timeToRead
      html
    }
  }
`

export default BlogPost
