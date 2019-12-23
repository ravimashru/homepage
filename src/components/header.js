import { Link } from 'gatsby';
import React, { useState } from 'react';

const Header = () => {
  // <header style={{backgroundColor: 'rgba(0,0,0,0.9)', color: 'white', height: '48px'}}>
  //   <div style={{display: 'flex', alignItems: 'center', maxWidth: 960, margin: '0 auto', height: 'inherit'}}>
  //     <Link activeClassName="header-link" className="header-link" to="/">Ravi Mashru</Link>
  //     <div style={{margin: 'auto'}}></div>
  //     <Link activeClassName="header-link" className="header-link" to="/page-2">Blog</Link>
  //     <Link activeClassName="header-link" className="header-link" to="/reading-list">Reading List</Link>
  //     <a className="header-link" href="https://github.com/mashruravi/notes" target="_blank">Notes</a>
  //   </div>
  // </header>

  const [collapsed, setCollapsed] = useState(true);

  return <header>
    <div className="hdr-normal">
      <Link activeClassName="active-header-link" className="header-link" to="/">Home</Link>
      <Link activeClassName="active-header-link" className="header-link" to="/page-2/">Blog</Link>
      <Link activeClassName="active-header-link" className="header-link" to="/reading-list/">Reading List</Link>
      <a className="header-link" href="https://github.com/mashruravi/notes" target="_blank" rel="noopener noreferrer">Notes</a>
    </div>
    <div className="hdr-col">
      <div className="hdr-col-menu" onClick={() => {setCollapsed(!collapsed)}}>
        <div className={`hdr-col-menu-bar ${collapsed ? 'hdr-col-menu-bar-1': 'hdr-col-menu-bar-1-open'}`}></div>
        <div className={`hdr-col-menu-bar ${collapsed ? 'hdr-col-menu-bar-2': 'hdr-col-menu-bar-2-open'}`}></div>
      </div>
      <div className={`hdr-col-itm-ctr ${collapsed ? '' : 'hdr-col-itm-ctr-exp'}`}>
        <div className={`hdr-col-itm-ctr-inner ${collapsed ? '': 'hdr-col-itm-ctr-inner-exp'}`}>
          <Link className="header-link-col" to="/">Home</Link>
          <Link className="header-link-col" to="/page-2/">Blog</Link>
          <Link className="header-link-col" to="/reading-list/">Reading List</Link>
          <a className="header-link-col" href="https://github.com/mashruravi/notes" target="_blank" rel="noopener noreferrer">Notes</a>
        </div>
      </div>
    </div>
  </header>
};

export default Header;
