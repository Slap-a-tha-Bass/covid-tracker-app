import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "../theme/globalStyles";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
`;
const Logo = styled.div`
  font-size: 3rem;
`;
const NavItem = styled.div`
  font-size: 1.5rem;
`;
const Navbar = ({ setTheme, theme }) => {
  return (
    <Container className="nav-link">
      <Logo>
        <Link href="/">US COVID Tracker</Link>
      </Logo>
      <NavItem>
        <Link href="/us_data">US Current</Link>
      </NavItem>
      <NavItem>
        <Link href="/us_historic">US Historic</Link>
      </NavItem>
      <NavItem>
        <a href="https://github.com/Slap-a-tha-Bass/covid-tracker-app" target="_blank">Github Repo</a>
      </NavItem>
    </Container>
  );
};

export default Navbar;
