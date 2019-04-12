import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'

import Header from './header'

export default ({ data }) => (
  <MDXProvider components={{}}>
    <Header siteTitle={data.site.siteMetadata.title} />
    <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
  </MDXProvider>
)

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`
