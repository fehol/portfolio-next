import Header from './Header';
import SidebarRight from './SidebarRight';
import SocialSideBar from './SocialSideBar';
import { jsx, css } from '@emotion/react';

const layoutStyle = css`
  background: #020c1b;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <div css={layoutStyle}>
      <Header />
      <SocialSideBar />
      <SidebarRight />
      <main>{children}</main>
    </div>
  );
}
