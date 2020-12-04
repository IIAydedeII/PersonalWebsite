import styled from "styled-components";
import Navigation from "./navigation";
import Head from "next/head";

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;

  & > div {
    width: 640px;
  }

  footer {
    color: blueviolet;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const Children = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <div>
        <Head>
          <title></title>
        </Head>
        <Navigation />
        <Children>{children}</Children>
        <footer>
          <p6>by dede</p6>
        </footer>
      </div>
    </Main>
  );
};

export default Layout;
