import { Page } from "@geist-ui/react";
import Navigation from "./navigation";

const { Header, Content, Footer } = Page;

const Layout = ({ children }) => {
  return (
    <Page>
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
