import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogoLink = styled(LinkRouter)`
  display: flex;
`;

export const NavLogo = styled.img`
  display: flex;
  height: 25px;
  width: 93px;
  align-items: center;
  justify-self: flex-start;
  //margin-left: 24px;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }
`;

export const NavSearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const NavSearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 10px;
  opacity: 1;
  width: 200px;

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active{
    border-bottom: 3px solid #e50914;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  background-color: #e50914;
  //width: 84px;
  white-space: nowrap;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 22px;
  cursor: pointer;
  text-decoration: none;
  
  
  &:hover{
    background: #ff2430;
  }
`;