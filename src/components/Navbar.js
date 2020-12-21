import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { MenuData as data } from "../data/MenuData";
import { Button } from "./Button";

const NavLinks = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-content: center;
  position: fixed;
  z-index: 100;
`;

const Logo = styled(Link)`
  ${NavLinks}
  font-size:2rem;
  padding: 0 1rem;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    top: 80px;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #212529;
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    transition: all 0.4s ease;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLinks}
  height:100%;
  margin: 3rem;
  font-size: 1.4rem;

  @media screen and (max-width: 960px) {
    height: 100px;
    width: 100%;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid blue;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    padding-right: 1rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Nav>
      <Logo>LUMEN</Logo>
      <NavMenu isOpen={isOpen}>
        {data.map((item, index) => {
          return (
            <li>
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
            </li>
          );
        })}
      </NavMenu>
      <MobileIcon>
        <Hamburger onToggle={handleMenu} color="white" />
      </MobileIcon>
      <Button primary={true}> Contact Us</Button>
    </Nav>
  );
};

export default Navbar;
