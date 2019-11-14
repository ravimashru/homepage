import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import me from '../images/me.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <>
          <img src={me} alt="" height="250px" />
        </>
        <div style={{ margin: '36px' }}>
          <div>
            <p style={{ fontSize: '28px' }}>
              Hello! My name is <strong>Ravi Mashru</strong>.
            </p>
            <p style={{ fontSize: '20px' }}>
              I am a full-stack developer and GitHub administrator at SAP Labs
              in Bangalore, India.
            </p>
          </div>
        </div>
        <div className="social-icon-container">
          <div className="social-icon si">
            <a
              href="https://www.linkedin.com/in/ravi-mashru-4a7ba956/"
              target="_blank"
            >
              i
            </a>
          </div>
          <div className="social-icon si">
            <a href="https://twitter.com/mashruravi" target="_blank">
              l
            </a>
          </div>
          <div className="social-icon sip">
            <a href="mailto:mashru.ravi@gmail.com">m</a>
          </div>
          <div className="social-icon sip">
            <a href="https://github.com/mashruravi" target="_blank">
              z
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '20px', margin: '16px 0' }}>Tools and technologies I work with everyday</div>
        <div className="tech-item-container">
          <div className="tech-item"><span>HTML/CSS/JavaScript</span></div>
          <div className="tech-item"><span>Angular</span></div>
          <div className="tech-item"><span>React</span></div>
          <div className="tech-item"><span>ABAP</span></div>
          <div className="tech-item"><span>NodeJS</span></div>
          <div className="tech-item"><span>Jenkins</span></div>
          <div className="tech-item"><span>Python</span></div>
          <div className="tech-item"><span>BASH scripts</span></div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <div style={{ fontSize: '20px' }}>Things I do in my spare time</div>
        <div className="project-container">
          <div className="project-item"></div>
        </div>
      </div>

    </div>

    {/* <div className="homepage-section inverted">
      <div className="homepage-section-wrapper">
        <div style={{fontSize: '20px'}}>Technologies I work with everyday</div>
      </div>
    </div> */}

    {/* <div className="homepage-section grid">
      <div className="homepage-section-grid">
          <div className="tech-item"><span>HTML/CSS/JavaScript</span></div>
          <div className="tech-item"><span>Angular</span></div>
          <div className="tech-item"><span>React</span></div>
          <div className="tech-item"><span>ABAP</span></div>
          <div className="tech-item"><span>NodeJS</span></div>
          <div className="tech-item"><span>Jenkins</span></div>
          <div className="tech-item"><span>Python</span></div>
          <div className="tech-item"><span>BASH scripts</span></div>
      </div>
    </div> */}

    {/* <div className="homepage-section inverted">
      <div className="homepage-section-wrapper">
        <div style={{fontSize: '20px'}}>Projects I spend my spare time working on</div>
      </div>
    </div>

    <div className="homepage-section">
      <div className="homepage-section-wrapper">
        <ul>
          <li>DataTau</li>
          <li>Institute of AI</li>
          <li>GANdalf</li>
          <li>tiny-imagenet</li>
          <li>Cellular Automata</li>
          <li>Website for Skyworld (WIP)</li>
          <li>Website for The Holy Kitchen (WIP)</li>
          <li>Randomizer</li>
        </ul>
      </div>
    </div> */}
  </Layout>
);

export default IndexPage;
