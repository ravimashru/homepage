/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <main
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // minWidth: 300,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        {children}
      </main>
      <footer style={{ backgroundColor: '#F5F5F7', padding: '16px' }}>
        <div
          style={{
            maxWidth: 960,
            minWidth: 300,
            margin: `0 auto`,
          }}
        >
          © {new Date().getFullYear()} Ravi Suresh Mashru. All rights reserved.
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
