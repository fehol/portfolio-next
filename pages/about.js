import Layout from '../components/Layout';
import { jsx, css } from '@emotion/react';

const aboutStyle = css`
  background: #020c1b;
  height: 100vh;
`;

const sectionStyle = css`
  p {
    color: #ccd6f6;
    text-align: left;
  }
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
    padding: 1.25rem 1.75rem;
    line-height: 1;
    cursor: pointer;
    margin-top: 1.5rem;
    float: left;
    transition: background-color 0.6s;
    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
    }
  }
`;

const headings = css`
  text-align: center;
`;

const headingDisplay = css`
  display: inline-block;
`;

const heading1 = css`
  color: #e6f1ff;
  text-align: left;
  font-size: 60px;
`;

const heading2 = css`
  color: #ccd6f6;
  text-align: left;
  font-size: 60px;
`;

const heading4 = css`
  color: #64ffda;
  text-align: left;
`;

export default function About() {
  return (
    <Layout>
      <div css={aboutStyle}>
        <section css={sectionStyle}>
          <div css={headings}>
            <div css={headingDisplay}>
              <h4 css={heading4}>Hi, my name is</h4>

              <h1 css={heading1}>Felix Hollmann.</h1>

              <h2 css={heading2}>I build things for the Internet.</h2>

              <p>I'm a Web Developer based in Vienna, AT</p>
              <button>
                <a href="mailto:felix.hollmann@gmx.net">Get in Touch</a>
              </button>
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

{
  /* <SectionStyle>
        <AboutBlock>
          <h1>About Me</h1>
          <h4>Hi! Im felix, a web developer based in Vienna</h4>
          <div>
            <p>
              I enjoy creating things for the web. After I graduated{' '}
              <a href="https://juridicum.at/">Vienna law school</a> , I started
              working in real estate sales. While quarantine hit Europe my
              interest in software development got stronger and I joined a
              Fullstack Web Developer Bootcamp
              <a href="https://upleveled.io/web-development-bootcamp">
                {' '}
                @upleveled
              </a>
              . My goal is to learn more about Web Development and produce
              Content for the Web that satisfy my customers and makes me proud.
            </p>
          </div>
        </AboutBlock>
        <br />
        <br />
        {/* <h4>Here are a few technologies I've been working with so far:</h4>
        <ListStyle>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Next.js</li>
            <li>Styled Components</li>
          </ul>
        </ListStyle> */
}
// </SectionStyle> */}
