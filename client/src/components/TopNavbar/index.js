import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index';
import './index.css';


const TopNavbar = (props) => {
  return (
    <AutoAffix>
      <Navbar collapseOnSelect id="eff-that-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>Sign In</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>Contact</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </AutoAffix>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
