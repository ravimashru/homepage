import React from 'react';
import Layout from '../components/layout';
import SEO from './seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './code-block'
import { formatDate } from '../utils';

import './css/tufte.scss'

export default function NoteLayout({ data: { markdownRemark } }) {

  const mdx = markdownRemark

  const components = {
    pre: props => <div {...props} />,
    code: props => <CodeBlock {...props} />
}

  return (
    <Layout>
      <SEO title={`${mdx.frontmatter.title} - Notes`} />
      <div className="notes-content">
        <h1>{mdx.frontmatter.title}</h1>
        <em>Last updated: {formatDate(mdx.frontmatter.updated)}</em>
        <div className="notes-body" dangerouslySetInnerHTML={{__html: mdx.html}}>
          {/* <MDXProvider components={components}>
            <main><MDXRenderer>{mdx.html}</MDXRenderer></main>
          </MDXProvider> */}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NoteQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        updated
        tags
      }
    }
  }
`;
