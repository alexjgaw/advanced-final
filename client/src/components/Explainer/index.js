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
            <p><Logo /> is a mini-donation platform built
            to help ordinary people stand up for American values in the
            face of ignorant and dangerous leadership.</p>
            <h2>How does it work?</h2>
            <p>
              Lucas ipsum dolor sit amet r2-d2 skywalker kashyyyk mace
              coruscant dantooine mon qui-gonn skywalker jinn. Hutt
              dagobah organa moff gamorrean. Jabba gonk skywalker hutt.
              Organa dooku c-3po kessel moff hoth luke cade yoda. Wedge
              fett hutt zabrak. Grievous organa moff antilles.
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Explainer;
