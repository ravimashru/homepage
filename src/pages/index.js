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
        <div style={{ padding: '32px 24px', fontSize: '19px' }}>
          <div>
            Hi! My name is Ravi Mashru. I am a full-stack developer working at
            SAP Labs in Bangalore, India.
          </div>
          <div>
            I am also one of the administrators of SAP's enterprise installation
            of GitHub.
          </div>
        </div>
      </div>
    </div>

    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <div style={{ marginTop: '16px' }}>
          On a normal day, I work with the following tools and technologies:
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className="tech-item">Angular</div>
          <div className="tech-item">ABAP</div>
          <div className="tech-item">NodeJS</div>
          <div className="tech-item">React</div>
          <div className="tech-item">Jenkins</div>
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
