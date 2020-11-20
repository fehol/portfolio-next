import React from 'react';
import { jsx, css } from '@emotion/react';

const sidebar = css`
  color: #64ffda;
  position: fixed;
  top: 35rem;
  right: 1.5rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    text-decoration-color: none;
    color: #e6f1ff;
    transition: color 0.6s;
    transform: rotate(90deg);
    margin-bottom: 14rem;
    font-size: 25px;
    &:hover {
      color: #64ffda;
    }
  }
  div {
    /* transform: rotate(90deg); */
    border-right: 1.5px solid #e6f1ff;
    height: 400px;
  }
`;

export default function SidebarRight() {
  return (
    <div css={sidebar}>
      <a href="mailto:felix.hollmann@gmx.net">felix.hollmann@gmx.net</a>
      {/* <div></div> */}
    </div>
  );
}
