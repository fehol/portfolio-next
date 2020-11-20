import Link from 'next/link';
import { jsx, css } from '@emotion/react';

const navigation = css`
  background-color: #020c1b;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 150px;
  img {
    margin-top: -30px;
  }
`;

const ulStyle = css`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 40%;
  font-size: 20px;
  a {
    text-decoration: none;
    color: #64ffda;
    text-align: left;
  }
  button {
    text-decoration: none;
    background-color: transparent;
    border-color: #64ffda;
    border-radius: 5%;
    color: #64ffda;
    border: 1px sold;
    padding: 1rem 1.5rem;
    line-height: 1;
    cursor: pointer;
    transition: background-color 0.6s;
    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
    }
  }
`;

const listStyles = css`
  list-style: none;
  a {
    text-decoration: none;
    color: #e6f1ff;
    &:hover {
      color: #64ffda;
    }
  }
`;

const image = css`
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <div css={navigation}>
      <Link href="/">
        <img src="/Logo/TheF.svg" alt="letterF" css={image} />
      </Link>
      <ul css={ulStyle}>
        <li css={listStyles}>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </li>
        <li css={listStyles}>
          <Link href="/experience" passHref>
            <a>Experience</a>
          </Link>
        </li>
        <li css={listStyles}>
          <Link href="/projects" passHref>
            <a>Projects</a>
          </Link>
        </li>
        <li css={listStyles}>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
        </li>
        <li css={listStyles}>
          <Link href="/resume">
            <button>Resume</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
