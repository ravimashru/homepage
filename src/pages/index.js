import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import me from '../images/me.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

    {/* GitHub admin, devX Talks */}
    <div style={{ backgroundColor: 'white', color: 'black', padding: '64px' }}>
      <div
        style={{
          display: 'flex',
          margin: `0 auto`,
          maxWidth: 960,
          minWidth: 300,
        }}
      >
        <>
          <img src={me} alt="" height="300px" />
        </>
        <div style={{padding: '32px 24px'}}>
          <p>
            Hi! My name is Ravi Mashru. I am a full-stack developer working at
            SAP Labs in Bangalore, India.
          </p>
          <p>
            On a normal day, I work with the following tools and technologies:
          </p>
          <ul>
            <li>Angular</li>
            <li>ABAP</li>
            <li>NodeJS</li>
            <li>React</li>
            <li>Jenkins</li>
          </ul>
        </div>
      </div>
    </div>
    {/* 
    <p>I like spending my free time building things. These are some of the things I've worked on:</p>
    <ul>
      <li>DataTau</li>
      <li>Randomizer</li>
      <li>Cellular Automata</li>
      <li>Website for Skyworld</li>
    </ul>

    <p>I have also started dipping my feet into the world of machine learning and deep learning. Here's a few things I've done:</p>
    <ul>
      <li>EIP</li>
      <li>GANdalf</li>
      <li>Institute of AI</li>
    </ul> */}
  </Layout>
);

export default IndexPage;
