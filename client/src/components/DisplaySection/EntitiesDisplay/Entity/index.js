import React, { PropTypes } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './index.css';

const Entity = (props) => {
  const publicFigurePopover = (
    <Popover id="publicFigure-popover" title={props.entity.name}>
      {props.entity.description}
    </Popover>
  );

  const organizationPopover = (
    <Popover id="organization-popover" title={props.entity.name} />
  );

  return (
    <li className="Entity">
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="top"
        overlay={props.org ? organizationPopover : publicFigurePopover}>
        <img src={props.entity.imgUrl} />
      </OverlayTrigger>
    </li>
  );
};

export default Entity;

Entity.propTypes = {
  entity: PropTypes.object.isRequired,
  org: PropTypes.bool
};
