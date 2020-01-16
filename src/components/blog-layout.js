import React from 'react';

export default function BlogLayout({ data: { mdx } }) {
return <div>{mdx.frontmatter.title}</div>;
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id,
      body
      frontmatter {
        title
      }
    }
  }
`;
