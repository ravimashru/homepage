import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import { formatDate } from '../utils';
import Layout from '../components/layout';
import SEO from '../components/seo';

import externalPosts from './external-blog-posts.json';

const Blog = ({ data: { allMdx } }) => {

  const posts = [
    ...allMdx.edges,
    ...externalPosts,
  ];
  posts.sort((a, b) => {
    const date1 = new Date(a.hasOwnProperty('node') ? a.node.frontmatter.date : a.date);
    const date2 = new Date(b.hasOwnProperty('node') ? b.node.frontmatter.date : b.date);

    return date2.getTime() - date1.getTime();
  });


  return <Layout>
    <SEO title="Blog" />
    <h1 className="blog-header">Blog Posts</h1>

    <div className="blog-list">
      {posts.map((post) => {
        return post.hasOwnProperty('node') ? (
          <Link to={post.node.fields.slug} className="blog-list-item" key={post.node.id}>
            <span>{post.node.frontmatter.title}</span>
            <span>{formatDate(post.node.frontmatter.date)}</span>
          </Link>
        ) : (
          <a key={post.link} className="blog-list-item" href={post.link} target="_blank">
            <span>{post.title}</span>
            <span>{formatDate(post.date)}</span>
          </a>
        );
      })}
    </div>
  </Layout>
};

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
