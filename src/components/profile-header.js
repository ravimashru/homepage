import React from 'react';
import memoji from '../images/memoji.png'

export default function ProfileHeader() {
  return (
    <div className="prf-hdr-ctr">
      <div className="prf-hdr-img">
        {/* <div style={{ borderRadius: '100%', backgroundColor: 'gray', height: '135px', width: '115px' }}></div> */}
        <img src={memoji} height="200px" />
      </div>
      <div className="prf-hdr-intro">
        <div>Hello! I am <strong>Ravi Mashru</strong>.</div>
        <div>I am a <strong>full-stack developer</strong> and <strong>GitHub administrator</strong></div>
        <div>at <strong>SAP Labs</strong> in <strong>Bangalore, India</strong>.</div>
      </div>
      <div></div>
      <div className="prf-hdr-social">

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
  );
}
