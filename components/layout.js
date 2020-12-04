import { Page } from "@geist-ui/react";
import styled from "styled-components";
import Navigation from "./navigation";

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
    <main>
      <Page size="small">
        <Page.Header>
          <Navigation />
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Page.Footer>
          <p6>by dede</p6>
        </Page.Footer>
      </Page>
    </main>
  );
};

export default Layout;
