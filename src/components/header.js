import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header>
    <div style={{display: 'flex'}}>
      <Link class="header-link" to="/">Ravi Mashru</Link>
      <div style={{margin: 'auto'}}></div>
      <Link activeClassName="header-link-active" class="header-link" to="/page-2">Blog</Link>
      <Link class="header-link" to="/reading-list">Reading List</Link>
      <Link class="header-link" to="https://github.com/mashruravi/notes" target="_blank">Notes</Link>
    </div>
  </header>
);

export default Header;
