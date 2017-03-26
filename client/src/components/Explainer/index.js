import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import './index.css';

const Explainer = () => {
  return (
    <div className="Explainer">
      <Grid>
        <Row>
          <Col>
            <h1>What is eff THAT?</h1>
            <p>eff THAT is a micro-donation platform built
            to help ordinary people stand up to the President of the United
            States and his cronies.</p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Explainer;
