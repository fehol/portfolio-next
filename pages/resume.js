import { jsx, css } from '@emotion/react';

const iFrame = css`
  border: 0;
  width: 100%;
  height: 100%;
`;

export default function resume() {
  return (
    <div>
      <iframe css={iFrame} src="/CV/Hollmann_CV.pdf" frameborder="0">
        Your browser doesn't support iFrames
      </iframe>
    </div>
  );
}
