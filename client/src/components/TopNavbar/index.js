import React, { PropTypes } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Affix } from 'react-overlays';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index';
import './index.css';


const TopNavbar = (props) => {
  return (
    <Affix affixClassName="affixed" offsetTop={props.heroHeight}>
      <Navbar collapseOnSelect id="eff-that-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation"><Link to="/sign-in">Sign In</Link></li>
          </Nav>
          <Nav pullRight>
            <li role="presentation"><Link to="/contact">Contact</Link></li>
          </Nav>
          <Nav pullRight>
            <li role="presentation"><Link to="/about">About</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Affix>
  );
};

TopNavbar.propTypes = {
  heroHeight: PropTypes.number
};

export default TopNavbar;
