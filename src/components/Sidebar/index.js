import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRouter,
  SideBtnWrap
} from "./SidebarStyle";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='#signup' onClick={toggle}>Sign Up</SidebarLink>
          <SidebarLink to='#about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='#discover' onClick={toggle}>Discover</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to='/signin'>Sign in</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;