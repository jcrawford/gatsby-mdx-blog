import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
            author
          }
          excerpt
        }
      }
    }
  }
`

const Index = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export default Index
