import Layout from '../components/Layout';
import { jsx, css } from '@emotion/react';

const contactStyle = css`
  color: #ccd6f6;
  text-align: center;
`;

const containerStyle = css`
  margin-left: 700px;
  max-width: 500px;

  h1,
  p {
    text-align: left;
    text-align: justify;
  }
  a {
    text-decoration: none;
    color: #64ffda;
    text-align: left;
  }
  button {
    margin-top: 2rem;
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

export default function Contact() {
  return (
    <Layout>
      <div css={contactStyle}>
        <div css={containerStyle}>
          <h1>Get in Touch</h1>
          <p>
            Right now I'm looking for new Job opportunities in form of a Junior
            Position in Web Development or Project Managment! Whether you have a
            question or want more Information about me just contact me and I'll
            get back to you!
          </p>
          <button>
            <a href="mailto:felix.hollmann@gmx.net">Get in Touch</a>
          </button>
        </div>
      </div>
    </Layout>
  );
}
