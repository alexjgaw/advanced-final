import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const linkElement = <span className="Logo">
  <Link to="/">
    <span className="eff">eff</span>
    <span className="that">that</span>
  </Link>
</span>;

const noLinkElement = <span className="Logo">
  <span className="eff">eff</span>
  <span className="that">that</span>
</span>;

const Logo = (props) => {
  if (props.link) {
    return linkElement;
  }

  return noLinkElement;
};

export default Logo;

Logo.propTypes = {
  link: PropTypes.bool
};
