import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  // <header style={{backgroundColor: 'rgba(0,0,0,0.9)', color: 'white', height: '48px'}}>
  //   <div style={{display: 'flex', alignItems: 'center', maxWidth: 960, margin: '0 auto', height: 'inherit'}}>
  //     <Link activeClassName="header-link" className="header-link" to="/">Ravi Mashru</Link>
  //     <div style={{margin: 'auto'}}></div>
  //     <Link activeClassName="header-link" className="header-link" to="/page-2">Blog</Link>
  //     <Link activeClassName="header-link" className="header-link" to="/reading-list">Reading List</Link>
  //     <a className="header-link" href="https://github.com/mashruravi/notes" target="_blank">Notes</a>
  //   </div>
  // </header>
  <header>
    <Link activeClassName="active-header-link" className="header-link" to="/">Home</Link>
    <Link activeClassName="active-header-link" className="header-link" to="/page-2">Blog</Link>
    <Link activeClassName="active-header-link" className="header-link" to="/reading-list">Reading List</Link>
    <a className="header-link" href="https://github.com/mashruravi/notes" target="_blank">Notes</a>
  </header>
);

export default Header;
