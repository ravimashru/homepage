import React from 'react';
import memoji from '../images/memoji.png';

export default function ProfileHeader() {
  return (
    <div className="prf-hdr-ctr">
      <div className="prf-hdr-img">
        {/* <div style={{ borderRadius: '100%', backgroundColor: 'gray', height: '135px', width: '115px' }}></div> */}
        <img src={memoji} height="200px" alt="me" />
      </div>
      <div className="prf-hdr-intro">
        <div>
          Hello! I am <strong>Ravi Mashru</strong>.
        </div>
        <div>
          I am a <strong>full-stack developer</strong> and{' '}
          <strong>GitHub administrator</strong>
        </div>
        <div>
          at <strong>SAP Labs</strong> in <strong>Bangalore, India</strong>.
        </div>
      </div>
      <div></div>
      <div className="prf-hdr-social">
        <div className="social-icon si si-linkedin">
          <a
            href="https://www.linkedin.com/in/ravi-mashru-4a7ba956/"
            target="_blank"
            rel="noopener noreferrer"
          >
            i
          </a>
        </div>
        <div className="social-icon si si-twitter">
          <a
            href="https://twitter.com/mashruravi"
            target="_blank"
            rel="noopener noreferrer"
          >
            l
          </a>
        </div>
        <div className="social-icon sip si-mail">
          <a href="mailto:mashru.ravi@gmail.com">m</a>
        </div>
        <div className="social-icon sip si-github">
          <a
            href="https://github.com/mashruravi"
            target="_blank"
            rel="noopener noreferrer"
          >
            z
          </a>
        </div>
      </div>
    </div>
  );
}
