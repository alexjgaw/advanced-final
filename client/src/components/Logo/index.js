import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Logo = () => {
  return (
    <span className="Logo">
      <Link to="/">
        <span className="eff">eff</span>
        <span className="that">that</span>
      </Link>
    </span>
  );
};

export default Logo;
