// TODO: Work on affix styling because it's all kinds of fucked up. But it doesn't break the page!

import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Affix } from 'react-overlays';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index';
import './index.css';


const TopNavbar = (props) => {
  return (
    <Affix>
      <Navbar inverse collapseOnSelect id="eff-that-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
          </Nav>
          <Nav pullRight>
            <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Affix>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
