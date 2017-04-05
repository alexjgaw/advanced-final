import React, { PropTypes } from 'react';

const EntitiesDisplay = (props) => {
  return (
    <div className="EntitiesDisplay">
      <h1>{props.title}</h1>
      <ul>
        {props.entities ?
          <li>Entities found</li> :
          <li>Entities not found</li>}
      </ul>
    </div>
  );
};

EntitiesDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  entities: PropTypes.array
};

export default EntitiesDisplay;
