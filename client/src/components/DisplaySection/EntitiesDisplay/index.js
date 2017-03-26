import React, { PropTypes } from 'react';

const EntitiesDisplay = (props) => {
  return (
    <div className="EntitiesDisplay">
      <h1>{props.title}</h1>
      <ul>
        <li>Entity 1</li>
        <li>Entity 2</li>
        <li>Entity 3</li>
        <li>Entity 4</li>
        <li>Entity 5</li>
      </ul>
    </div>
  );
};

EntitiesDisplay.propTypes = {
  title: PropTypes.string.isRequired
};

export default EntitiesDisplay;
