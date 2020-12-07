import { Breadcrumbs } from "@geist-ui/react";
import { Home, Meh, FileMinus } from "@geist-ui/react-icons";
import styled from "styled-components";
import NextLink from "next/link";

const { Item } = Breadcrumbs;

const Nav = styled.nav`
  padding-top: 15px;
`;

const Navigation = () => {
  return (
    <Nav>
      <Breadcrumbs size="large" separator="-">
        <NextLink href="/">
          <Item nextLink>
            <Home />
          </Item>
        </NextLink>
        <NextLink href="/about">
          <Item nextLink>
            <Meh />
            Hakkımda
          </Item>
        </NextLink>
        <NextLink href="/form">
          <Item nextLink>
            <FileMinus />
            Form
          </Item>
        </NextLink>
      </Breadcrumbs>
    </Nav>
  );
};

export default Navigation;
