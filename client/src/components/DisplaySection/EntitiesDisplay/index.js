import React, { PropTypes } from 'react';
import Entity from './Entity/index';
import './index.css';

const EntitiesDisplay = (props) => {
  return (
    <div className="EntitiesDisplay">
      <h1>{props.title}</h1>
      <ul>
        {(!props.entities) ?
          <li>Entities not found</li> :
          props.entities.map(entity => {
            return (
              <Entity
                entity={entity}
                key={entity._id}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

EntitiesDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  entities: PropTypes.array
};

export default EntitiesDisplay;
