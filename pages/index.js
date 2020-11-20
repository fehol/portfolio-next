import Head from 'next/head';
import Layout from '../components/Layout';
import { jsx, css } from '@emotion/react';

const landingPage = css`
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

const headingStyle = css`
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

export default function Home() {
  return (
    <Layout>
      <div css={landingPage}>
        <Head>
          <title>Felix Hollmann</title>
        </Head>
        <section css={sectionStyle}>
          <div css={headingStyle}>
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
        {/* <SectionStyle2>
          <h1>Here you find more Information about me</h1>
        </SectionStyle2> */}
      </div>
    </Layout>
  );
}
