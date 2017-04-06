import React, { PropTypes } from 'react';
import './index.css';

const Entity = (props) => {
  return (
    <li className="Entity">
      <img src={props.entity.imgUrl} />
    </li>
  );
};

export default Entity;

Entity.propTypes = {
  entity: PropTypes.object.isRequired
};
