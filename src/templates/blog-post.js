import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const {
    frontmatter: { title },
    html,
  } = data.markdownRemark

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
