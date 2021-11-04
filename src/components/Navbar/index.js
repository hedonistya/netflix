import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyle";
import logo from '../../logo.svg';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo alt="Netflix" src={logo}/>
          <NavMenu>
            <NavItem>
              <NavLinks to='#signup'>Sign Up</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#price'>Price</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#startNow'>Start Now</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
