import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SideElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="discover"
              onClick={toggle}
            >
              Discover
            </SidebarLink>
            <SidebarLink
              to="service"
              onClick={toggle}
            >
              Services
            </SidebarLink>
            <SidebarLink
              to="signup"
              onClick={toggle}
            >
              Sign Up
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
