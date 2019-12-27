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
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
        <Header />
      </div>
      <main style={{ paddingTop: '98px', minWidth: '350px' }}>
        {children}
      </main>
      <footer style={{ backgroundColor: '#6C6C6C', padding: '48px 16px', color: '#FFF', fontSize: '12px' }}>
        <div
          style={{
            maxWidth: 950,
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
