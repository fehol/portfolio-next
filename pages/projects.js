import Layout from '../components/Layout';
import { jsx, css } from '@emotion/react';

const workStyle = css`
  color: white;
`;

export default function Work() {
  return (
    <Layout>
      <div css={workStyle}>
        <h1>You can find the repos to my projects on git</h1>
      </div>
    </Layout>
  );
}
