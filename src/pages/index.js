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
    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <>
          <img src={me} alt="" height="250px" />
        </>
        <div style={{ padding: '32px 24px' }}>
          <div>
            <p>Hello! My name is <strong>Ravi Mashru</strong>.</p>
            <p>I am a full-stack developer and GitHub administrator at SAP Labs
            in Bangalore, India.</p>
          </div>
        </div>
        <div className="social-icon-container">
          <div className="social-icon si">
            <a href="https://www.linkedin.com/in/ravi-mashru-4a7ba956/" target="_blank">i</a>
          </div>
          <div className="social-icon si">
            <a href="https://twitter.com/mashruravi" target="_blank">l</a>
          </div>
          <div className="social-icon sip">
            <a href="mailto:mashru.ravi@gmail.com">m</a>
          </div>
          <div className="social-icon sip">
            <a href="https://github.com/mashruravi" target="_blank">z</a>
          </div>
        </div>
      </div>
    </div>

    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <div style={{ marginTop: '16px' }}>
          On a normal day, I spend my time working with:
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="tech-item">HTML/CSS/JavaScript</div>
          <div className="tech-item">Angular</div>
          <div className="tech-item">React</div>
          <div className="tech-item">ABAP</div>
          <div className="tech-item">NodeJS</div>
          <div className="tech-item">Jenkins</div>
          <div className="tech-item">Python</div>
          <div className="tech-item">BASH scripts</div>
        </div>
      </div>
    </div>

    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <p>
          I like spending my free time building things. These are some of the
          things I've worked on:
        </p>
        <ul>
          <li>DataTau</li>
          <li>Randomizer</li>
          <li>Cellular Automata</li>
          <li>Website for Skyworld</li>
        </ul>
      </div>
    </div>

    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <p>
          I have also started dipping my feet into the world of machine learning
          and deep learning. Here's a few things I've done:
        </p>
        <ul>
          <li>EIP</li>
          <li>GANdalf</li>
          <li>Institute of AI</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
