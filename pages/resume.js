import { jsx, css } from '@emotion/react';

const iFrameStyle = css`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

export default function resume() {
  return (
    <div>
      <iframe src="/CV/Hollmann_CV.pdf" css={iFrameStyle}>
        Your browser doesn't support iFrames
      </iframe>
    </div>
  );
}
