import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import EntitiesDisplay from './EntitiesDisplay/index';
// import './index.css';

const DisplayWho = () => {
  return (
    <div className="DisplayWho">
      <Grid>
        <Row>
          <Col md={6}>
            <EntitiesDisplay
              title="Organizations"
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

export default DisplayWho;
