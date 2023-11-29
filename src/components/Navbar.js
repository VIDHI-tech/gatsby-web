import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #08130A;
  color: #fff;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavLink = styled(Link)`
  color: #FCFCFC;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ActionButton = styled.button`
  padding: 0.5rem 2rem;
  background: linear-gradient(to right,#D3F837, #4BDD6B);
  color: black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 8px rgba(59, 90, 57);
  border-radius: 4px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StaticImage src="../images/logo.png" />
      <NavLinks>
        <NavLink to="/">Career</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/fees">Fees</NavLink>
        <ActionButton>TRADE NOW</ActionButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
