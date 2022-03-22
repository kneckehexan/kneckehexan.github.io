import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggle }) => {

  return (
    <>
      <Nav >
        <NavbarContainer >
          <NavLogo to='/'><h1>PT</h1></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='programming'>Programming</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;