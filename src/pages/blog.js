import React from 'react';
import { Link } from 'gatsby';
import * as moment from 'moment';

import Layout from '../components/layout';
import SEO from '../components/seo';

const formatDate = d => {
  return moment(d).format("MMMM D, YYYY");
};

const Blog = ({ data: { allMdx } }) => (
  <Layout>
    <SEO title="Blog" />
    <h1 className="blog-header">
      Blog Posts
    </h1>

    <div className="blog-list">
      {allMdx.edges.map(({ node }) => {
        return (
          <div className="blog-list-item" key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <span>{formatDate(node.frontmatter.date)}</span>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default Blog;

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
