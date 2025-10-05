import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="/images/logo.png" alt="my logo img" />
      </NavLink>

      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 8rem;
  }
`;
export default Header;
