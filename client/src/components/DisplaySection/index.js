import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import EntitiesDisplay from './EntitiesDisplay/index';
// import './index.css';

const DisplaySection = (props) => {
  return (
    <div className="DisplayWho">
      <Grid>
        <Row>
          <Col md={6}>
            <EntitiesDisplay
              title="Organizations"
              entities={props.organizations}
            />
          </Col>
          <Col md={6}>
            <EntitiesDisplay
              title="Politicians"
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default DisplaySection;

DisplaySection.propTypes = {
  organizations: PropTypes.array.isRequired
};
