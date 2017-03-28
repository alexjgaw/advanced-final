import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/index';
import './index.css';

const Explainer = () => {
  return (
    <div className="Explainer">
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <h1>What is it?</h1>
            <p><Logo /> is a micro-donation platform built
            to help ordinary people stand up to the President of the United
            States and his cronies.</p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Explainer;
