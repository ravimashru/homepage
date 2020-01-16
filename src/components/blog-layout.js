import React from 'react';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

export default function BlogLayout({ data: { mdx } }) {
  return (
    <Layout>
      <div className="blog-content">
        <h1>{mdx.frontmatter.title}</h1>
        <div className="blog-body">
          <MDXRenderer>{mdx.body}</MDXRenderer>
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
