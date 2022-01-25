import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Footer from "./footer";

const Container = styled.div`
  height: 100%;
`;

const Layout = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Navbar {...props} />
      {children}
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
