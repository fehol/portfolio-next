import Layout from '../components/Layout';
import { jsx, css } from '@emotion/react';

const aboutStyle = css`
  background: #020c1b;
  height: 100vh;
  color: #ccd6f6;
  text-align: center;
`;
const containerStyle = css`
  margin-left: 700px;
  max-width: 500px;
  h1 {
    text-align: left;
    text-align: justify;
  }
  h3 {
    text-align: left;
    text-align: justify;
  }
  p {
    text-align: left;
    text-align: justify;
  }
  a {
    color: #64ffda;
    text-decoration: none;
    &:before {
      text-decoration: underline;
    }
  }
`;

const image = css`
  float: right;
  margin: 15px;
`;

const ulStyle = css`
  display: flex;
  justify-content: space-around;
  list-style: none;
  li {
    margin: 20px;
    &:before {
      content: '►';
      color: #64ffda;
      font-size: 12px;
    }
  }
`;

export default function About() {
  return (
    <Layout>
      <div css={aboutStyle}>
        <div css={containerStyle}>
          <h1>About me</h1>
          <br />
          <h3>Hi! Im felix, a web developer based in Vienna</h3>
          <br />
          <img
            css={image}
            src="/photo/Foto1.jpg"
            height="200px"
            width="150px"
            alt="PhotoFelix"
          />
          <p>
            After graduating from Vienna law school, I started working in real
            estate sales where I also had my first experience with project
            managment. <br />
            <br /> When Covid-19 hit Europe I decided to lear Software
            Development and I joined a Fullstack Web Developer Bootcamp
            <a href="https://upleveled.io/web-development-bootcamp">
              @upleveled
            </a>
            .
            <br /> <br />
            My goal is to learn more about Web Development and produce Content
            for the Web that satisfy my customers and makes me proud.
          </p>
          <br />
          <h4>Here are a few technologies I've been working with so far:</h4>
          <ul css={ulStyle}>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
