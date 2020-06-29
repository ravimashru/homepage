import React from 'react';
import Layout from '../components/layout';
import SEO from './seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './code-block'

export default function BlogLayout({ data: { mdx } }) {

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />
}

  return (
    <Layout>
      <SEO title={`${mdx.frontmatter.title} - Blog`} />
      <div className="blog-content">
        <h1>{mdx.frontmatter.title}</h1>
        <div className="blog-body">
          <MDXProvider components={components}>
            <main><MDXRenderer>{mdx.body}</MDXRenderer></main>
          </MDXProvider>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
