import styled from "styled-components";
import Link from "next/Link";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 15px;

  a {
    color: purple;
    font-weight: bold;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkında</a>
      </Link>
      <Link href="/form">
        <a>Form</a>
      </Link>
    </Nav>
  );
};

export default Navigation;
