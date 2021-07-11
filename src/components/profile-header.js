import React from 'react';
import me from '../images/me.png';

export default function ProfileHeader() {
  return (
    <div className="prf-hdr-grid-ctr">
      <div className="prf-hdr-ctr">
        <div className="prf-hdr-img">
          <img src={me} alt="me" style={{ objectFit: 'contain', width: '180px' }} />
        </div>
        <div className="prf-hdr-intro">
          <div>
            Hello! I am <strong>Ravi Mashru</strong>.
          </div>
          <div>
            I'm a <b>full-stack developer</b>,
          </div>
          <div>
            and a <b>machine learning enthusiast</b>.
          </div>
        </div>
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
              href="https://twitter.com/ravimashru"
              target="_blank"
              rel="noopener noreferrer"
            >
              l
            </a>
          </div>
          <div className="social-icon sip si-mail">
            <a href="mailto:me@ravimashru.dev">m</a>
          </div>
          <div className="social-icon sip si-github">
            <a
              href="https://github.com/ravimashru"
              target="_blank"
              rel="noopener noreferrer"
            >
              z
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
