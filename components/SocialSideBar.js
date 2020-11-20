import React from 'react';
import { jsx, css } from '@emotion/react';
import { SiInstagram, SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si';

const socialSidebar = css`
  color: #64ffda;
  position: fixed;
  top: 25rem;
  left: 1.5rem;
  width: 3rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    text-decoration-color: none;
  }
  i {
    margin: auto;
    font-size: 2rem;
    color: #e6f1ff;
    transition: color 0.6s;
    &:hover {
      color: #64ffda;
    }
  }
`;

export default function SocialSideBar() {
  return (
    <div css={socialSidebar}>
      <a href="https://github.com/fehol">
        <i>
          <SiGithub />
        </i>
      </a>
      <a href="https://www.linkedin.com/in/felix-h-09633983/">
        <i>
          <SiLinkedin />
        </i>
      </a>
      <a href="https://twitter.com/hollmann87">
        <i>
          <SiTwitter />
        </i>
      </a>
      <a href="https://www.instagram.com/felixhollm/">
        <i>
          <SiInstagram />
        </i>
      </a>
      {/* <div></div> */}
    </div>
  );
}
