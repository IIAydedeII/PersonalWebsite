import { Page } from "@geist-ui/react";
import styled from "styled-components";
import Navigation from "./navigation";

const { Header, Content, Footer } = Page;

// const Main = styled.main`
//   display: grid;
//   justify-content: center;
//   align-items: center;

//   & > div {
//     width: 640px;
//   }

//   footer {
//     color: blueviolet;
//     margin-top: 15px;
//     margin-bottom: 10px;
//   }
// `;

// const Children = styled.div`
//   display: grid;
//   justify-content: center;
//   align-items: center;
// `;

const Layout = ({ children }) => {
  return (
    <Page size="small">
      <Header>
        <Navigation />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <h6>by dede</h6>
      </Footer>
    </Page>
  );
};

export default Layout;
