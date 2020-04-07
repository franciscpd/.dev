import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as S from "../components/Post/styles"

const BlogPost = ({ data, pageContext }) => {
  const {
    frontmatter: { title, date, description, image },
    timeToRead,
    html,
    fields: { slug },
  } = data.markdownRemark
  const previous = pageContext.previousPost
  const next = pageContext.nextPost

  return (
    <Layout>
      <SEO title={title} description={description} image={image} />
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
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={slug} title={title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      timeToRead
      html
    }
  }
`

export default BlogPost
