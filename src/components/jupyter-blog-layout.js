import React from 'react';
import Layout from './layout';
import SEO from './seo';
import { graphql } from 'gatsby';

require(`katex/dist/katex.min.css`);

export default function JupyterBlogLayout({
  data: {
    jupyterNotebook: {
      json: { metadata },
      html,
    }
  }
}) {

  return (
    <Layout>
      <SEO title={`${metadata.title} - Blog`} />
      <div className="blog-content">
        {/* <h1>{metadata.title}</h1> */}
        <div className="jupyter-blog-body" dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query JupyterBlogPostQuery($id: String) {
    jupyterNotebook(id: { eq: $id }) {
      id
      html
      json {
        metadata {
          title
          date
        }
      }
    }
  }
`;
