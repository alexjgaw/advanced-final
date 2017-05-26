import React, { PropTypes } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Affix } from 'react-overlays';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/index';
import './index.css';

const LiPass = (props) => {
  // eslint-disable-next-line
  const { active, activeKey, activeHref, ...rest } = props;
  return (
    <li role="presentation" {...rest}>
      {props.children}
    </li>
  );
};

LiPass.propTypes = {
  children: PropTypes.object
};

const TopNavbar = (props) => {
  return (
    <Affix affixClassName="affixed" offsetTop={props.heroHeight}>
      <Navbar collapseOnSelect id="fund-that-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Logo link />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LiPass><Link to="/sign-in">Sign In</Link></LiPass>
          </Nav>
          <Nav pullRight>
            <LiPass><Link to="/contact">Contact</Link></LiPass>
          </Nav>
          <Nav pullRight>
            <LiPass><Link to="/about">About</Link></LiPass>
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
